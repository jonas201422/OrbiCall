import { useState, type ChangeEvent } from "react";
import { site } from "../data/site";
import { Icon } from "./Icon";

const branches = {
  dentistry: {
    label: "Zahnarzt / Ordination",
    customerValues: [80, 150, 250],
  },
  beauty: {
    label: "Friseur / Beauty",
    customerValues: [40, 70, 100],
  },
  workshop: {
    label: "Werkstatt",
    customerValues: [150, 300, 600],
  },
  realEstate: {
    label: "Immobilien",
    customerValues: [500, 1000, 2500],
  },
  restaurant: {
    label: "Restaurant",
    customerValues: [30, 60, 120],
  },
  other: {
    label: "Sonstiges",
    customerValues: [50, 100, 250],
  },
} as const;

const branchOrder = ["dentistry", "beauty", "workshop", "realEstate", "restaurant", "other"] as const;
type BranchKey = (typeof branchOrder)[number];
type FieldKey = "callsPerDay" | "missedRate" | "customerValue" | "conversionRate" | "openDays";

type Limits = {
  label: string;
  max: number;
  min: number;
  step: number;
};

const fieldLimits: Record<FieldKey, Limits> = {
  callsPerDay: { label: "Anrufe pro Tag", min: 1, max: 500, step: 1 },
  missedRate: { label: "Anteil verpasster Anrufe", min: 0, max: 95, step: 1 },
  customerValue: { label: "Kundenwert", min: 1, max: 100000, step: 1 },
  conversionRate: { label: "Abschlusswahrscheinlichkeit", min: 0, max: 100, step: 1 },
  openDays: { label: "Öffnungstage pro Monat", min: 1, max: 31, step: 1 },
};

const initialValues: Record<FieldKey, number> = {
  callsPerDay: 20,
  missedRate: 20,
  customerValue: 150,
  conversionRate: 40,
  openDays: 22,
};

const initialCustomFields: Record<FieldKey, boolean> = {
  callsPerDay: false,
  missedRate: false,
  customerValue: false,
  conversionRate: false,
  openDays: false,
};

const numberFormatter = new Intl.NumberFormat("de-AT", { maximumFractionDigits: 1 });
const compactNumberFormatter = new Intl.NumberFormat("de-AT", { maximumFractionDigits: 0 });
const currencyFormatter = new Intl.NumberFormat("de-AT", {
  currency: "EUR",
  maximumFractionDigits: 0,
  style: "currency",
});

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function parseInput(raw: string) {
  const normalized = raw.trim().replace(",", ".");
  if (!normalized) return Number.NaN;
  return Number(normalized);
}

function toInputValue(value: number) {
  return Number.isInteger(value) ? String(value) : String(value).replace(".", ",");
}

function formatPreset(value: number, suffix: string) {
  return `${compactNumberFormatter.format(value)}${suffix}`;
}

export function LossCalculator() {
  const [branch, setBranch] = useState<BranchKey>("dentistry");
  const [values, setValues] = useState<Record<FieldKey, number>>(initialValues);
  const [customFields, setCustomFields] = useState<Record<FieldKey, boolean>>(initialCustomFields);
  const [customInputs, setCustomInputs] = useState<Record<FieldKey, string>>({
    callsPerDay: toInputValue(initialValues.callsPerDay),
    missedRate: toInputValue(initialValues.missedRate),
    customerValue: toInputValue(initialValues.customerValue),
    conversionRate: toInputValue(initialValues.conversionRate),
    openDays: toInputValue(initialValues.openDays),
  });
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});

  const updateValue = (field: FieldKey, value: number) => {
    setValues((current) => ({ ...current, [field]: value }));
    setCustomInputs((current) => ({ ...current, [field]: toInputValue(value) }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const selectPreset = (field: FieldKey, value: number) => {
    updateValue(field, value);
    setCustomFields((current) => ({ ...current, [field]: false }));
  };

  const showCustomInput = (field: FieldKey) => {
    setCustomFields((current) => ({ ...current, [field]: true }));
    setCustomInputs((current) => ({ ...current, [field]: toInputValue(values[field]) }));
  };

  const handleBranchChange = (nextBranch: BranchKey) => {
    const defaultCustomerValue = branches[nextBranch].customerValues[1];
    setBranch(nextBranch);
    updateValue("customerValue", defaultCustomerValue);
    setCustomFields((current) => ({ ...current, customerValue: false }));
  };

  const handleCustomChange = (field: FieldKey, event: ChangeEvent<HTMLInputElement>) => {
    const raw = event.currentTarget.value;
    const limits = fieldLimits[field];
    const parsed = parseInput(raw);

    setCustomInputs((current) => ({ ...current, [field]: raw }));

    if (!Number.isFinite(parsed)) {
      setErrors((current) => ({ ...current, [field]: "Bitte gib einen gültigen Wert ein." }));
      return;
    }

    const nextValue = clamp(parsed, limits.min, limits.max);
    setValues((current) => ({ ...current, [field]: nextValue }));
    setErrors((current) => ({
      ...current,
      [field]:
        parsed === nextValue
          ? undefined
          : `Bitte wähle einen Wert zwischen ${limits.min} und ${compactNumberFormatter.format(limits.max)}.`,
    }));
  };

  const handleCustomBlur = (field: FieldKey) => {
    const limits = fieldLimits[field];
    const parsed = parseInput(customInputs[field]);
    const nextValue = Number.isFinite(parsed) ? clamp(parsed, limits.min, limits.max) : values[field];

    setValues((current) => ({ ...current, [field]: nextValue }));
    setCustomInputs((current) => ({ ...current, [field]: toInputValue(nextValue) }));
  };

  const renderPresetField = (field: FieldKey, label: string, presets: readonly number[], suffix: string, help?: string) => (
    <div className="loss-field">
      <div className="loss-field-heading">
        <span>{label}</span>
        {help && <small>{help}</small>}
      </div>
      <div className="preset-options" role="group" aria-label={label}>
        {presets.map((preset) => (
          <button
            aria-pressed={!customFields[field] && values[field] === preset}
            className={`preset-button ${!customFields[field] && values[field] === preset ? "is-selected" : ""}`}
            key={`${field}-${preset}`}
            onClick={() => selectPreset(field, preset)}
            type="button"
          >
            {formatPreset(preset, suffix)}
          </button>
        ))}
        <button
          aria-pressed={customFields[field]}
          className={`preset-button ${customFields[field] ? "is-selected" : ""}`}
          onClick={() => showCustomInput(field)}
          type="button"
        >
          Individuell
        </button>
      </div>
      {customFields[field] && (
        <div className="custom-input-row">
          <input
            aria-describedby={errors[field] ? `loss-${field}-error` : undefined}
            aria-invalid={Boolean(errors[field])}
            aria-label={`${fieldLimits[field].label} individuell eingeben`}
            id={`loss-${field}`}
            inputMode="decimal"
            max={fieldLimits[field].max}
            min={fieldLimits[field].min}
            onBlur={() => handleCustomBlur(field)}
            onChange={(event) => handleCustomChange(field, event)}
            step={fieldLimits[field].step}
            type="number"
            value={customInputs[field]}
          />
          <span aria-hidden="true">{suffix}</span>
          {errors[field] && (
            <small className="field-error" id={`loss-${field}-error`}>
              {errors[field]}
            </small>
          )}
        </div>
      )}
    </div>
  );

  const missedCallsPerDay = values.callsPerDay * (values.missedRate / 100);
  const lostCustomersPerDay = missedCallsPerDay * (values.conversionRate / 100);
  const lossPerDay = lostCustomersPerDay * values.customerValue;
  const lossPerMonth = lossPerDay * values.openDays;
  const lossPerYear = lossPerMonth * 12;
  const lostCustomersPerMonth = lostCustomersPerDay * values.openDays;
  const customerValuePresets = branches[branch].customerValues;
  return (
    <section className="section loss-calculator-section" id="verlustrechner" aria-labelledby="loss-calculator-title">
      <div className="container">
        <div className="section-heading loss-heading" data-reveal>
          <p className="section-kicker">Verlustrechner</p>
          <h2 id="loss-calculator-title">Was kosten verpasste Anrufe wirklich?</h2>
          <p className="section-lead">
            Wähle deine Branche und passe die wichtigsten Werte an. Die Schätzung aktualisiert sich sofort, ohne Preise
            oder Monatskosten abzufragen.
          </p>
        </div>

        <div className="loss-calculator-card" data-reveal>
          <div className="loss-calculator-grid">
            <div className="loss-input-panel">
              <div className="loss-field">
                <div className="loss-field-heading">
                  <span>Branche auswählen</span>
                </div>
                <div className="branch-options" role="group" aria-label="Branche auswählen">
                  {branchOrder.map((branchKey) => (
                    <button
                      aria-pressed={branch === branchKey}
                      className={`preset-button branch-button ${branch === branchKey ? "is-selected" : ""}`}
                      key={branchKey}
                      onClick={() => handleBranchChange(branchKey)}
                      type="button"
                    >
                      {branches[branchKey].label}
                    </button>
                  ))}
                </div>
              </div>

              {renderPresetField("callsPerDay", "Durchschnittliche Anrufe pro Tag", [10, 20, 40, 60], "")}
              {renderPresetField("missedRate", "Anteil verpasster Anrufe", [10, 20, 30, 40], "%")}
              {renderPresetField(
                "customerValue",
                "Durchschnittlicher Wert eines Kunden / Termins",
                customerValuePresets,
                "€",
                branches[branch].label,
              )}
              {renderPresetField(
                "conversionRate",
                "Wie viele verpasste Anrufer wären potenzielle Kunden geworden?",
                [20, 40, 60],
                "%",
              )}
              {renderPresetField("openDays", "Öffnungstage pro Monat", [20, 22, 26, 30], "")}
            </div>

            <aside className="loss-results-panel" aria-live="polite">
              <div className="loss-result-header">
                <span className="icon-badge danger-badge" aria-hidden="true">
                  <Icon name="chart" />
                </span>
                <div>
                  <p className="loss-result-kicker">Live-Schätzung</p>
                  <h3>Potenzial, das im Telefon klingelt</h3>
                </div>
              </div>

              <div className="loss-result-grid">
                <article className="loss-result-card">
                  <span>Verpasste Anrufe pro Tag</span>
                  <strong>{numberFormatter.format(missedCallsPerDay)}</strong>
                </article>
                <article className="loss-result-card">
                  <span>Potenziell verlorene Kunden pro Monat</span>
                  <strong>{numberFormatter.format(lostCustomersPerMonth)}</strong>
                </article>
                <article className="loss-result-card result-danger">
                  <span>Geschätzter Umsatzverlust pro Monat</span>
                  <strong>{currencyFormatter.format(lossPerMonth)}</strong>
                </article>
                <article className="loss-result-card result-danger result-year">
                  <span>Geschätzter Umsatzverlust pro Jahr</span>
                  <strong>{currencyFormatter.format(lossPerYear)}</strong>
                </article>
              </div>

              <p className="loss-disclaimer">
                Dies ist eine unverbindliche Beispielrechnung auf Basis deiner Angaben. Der tatsächliche Verlust kann je
                nach Branche, Auslastung und Abschlussquote abweichen.
              </p>

              <div className="loss-cta-actions">
                <a className="btn btn-primary" href={site.demoUrl} target="_blank" rel="noreferrer">
                  Kostenlose Demo anfragen
                  <Icon name="arrow" />
                </a>
                <a className="btn btn-secondary" href="/demo">
                  7-Tage-Pilotplatz sichern
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

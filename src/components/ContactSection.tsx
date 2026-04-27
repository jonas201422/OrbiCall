import { FormEvent, useState } from "react";
import { site } from "../data/site";
import { Icon } from "./Icon";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  privacy: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
  privacy: false,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState("");

  const updateField = (field: keyof FormState, value: string | boolean) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus("");
  };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) nextErrors.name = "Bitte gib deinen Namen ein.";
    if (!form.company.trim()) nextErrors.company = "Bitte gib dein Unternehmen ein.";
    if (!emailPattern.test(form.email.trim())) nextErrors.email = "Bitte gib eine gültige E-Mail-Adresse ein.";
    if (!form.phone.trim()) nextErrors.phone = "Bitte gib eine Telefonnummer ein.";
    if (!form.message.trim()) nextErrors.message = "Bitte beschreibe kurz dein Anliegen.";
    if (!form.privacy) nextErrors.privacy = "Bitte bestätige die Datenschutzhinweise.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      setStatus("Bitte prüfe die markierten Felder.");
      return;
    }

    if (site.contactEmail) {
      const subject = encodeURIComponent(`Demo-Anfrage von ${form.company}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nUnternehmen: ${form.company}\nE-Mail: ${form.email}\nTelefon: ${form.phone}\n\nNachricht:\n${form.message}`,
      );
      window.location.href = `mailto:${site.contactEmail}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus(
      "Formularversand ist noch nicht mit einem Backend verbunden. Bitte nutze den Demo-Button oder ergänze eine Kontakt-E-Mail im Projekt.",
    );
  };

  return (
    <section className="section contact-section" id="kontakt" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-copy" data-reveal>
          <p className="section-kicker">Kontakt</p>
          <h2 id="contact-title">Lass uns deinen AI Call Agent planen.</h2>
          <p className="section-lead">
            Sag uns kurz, wie dein Unternehmen erreichbar sein soll. Wir melden uns mit einer passenden Demo
            und den nächsten Schritten.
          </p>
          <div className="contact-options">
            <a className="contact-option" href={site.calendlyUrl} target="_blank" rel="noreferrer">
              <Icon name="calendar" />
              <span>
                <strong>Termin per Calendly buchen</strong>
                <small>Kostenlose Demo in einem passenden Slot anfragen</small>
              </span>
            </a>
            <div className="contact-option" aria-label="Calendly Demo-Buchung">
              <Icon name="shield" />
              <span>
                <strong>Schnelle Demo-Buchung</strong>
                <small>Der Demo-Termin läuft über Calendly und öffnet den Buchungsflow direkt</small>
              </span>
            </div>
          </div>
        </div>

        <form className="contact-form glass-card" noValidate onSubmit={handleSubmit} data-reveal>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && <small id="name-error">{errors.name}</small>}
          </div>

          <div className="form-row">
            <label htmlFor="company">Unternehmen</label>
            <input
              id="company"
              name="company"
              autoComplete="organization"
              value={form.company}
              onChange={(event) => updateField("company", event.target.value)}
              aria-invalid={Boolean(errors.company)}
              aria-describedby={errors.company ? "company-error" : undefined}
            />
            {errors.company && <small id="company-error">{errors.company}</small>}
          </div>

          <div className="form-row two-col">
            <div>
              <label htmlFor="email">E-Mail</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && <small id="email-error">{errors.email}</small>}
            </div>
            <div>
              <label htmlFor="phone">Telefonnummer</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && <small id="phone-error">{errors.phone}</small>}
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="message">Nachricht</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && <small id="message-error">{errors.message}</small>}
          </div>

          <div className="checkbox-row">
            <input
              id="privacy"
              name="privacy"
              type="checkbox"
              checked={form.privacy}
              onChange={(event) => updateField("privacy", event.target.checked)}
              aria-invalid={Boolean(errors.privacy)}
              aria-describedby={errors.privacy ? "privacy-error" : undefined}
            />
            <label htmlFor="privacy">
              Ich habe die <a href="/datenschutz">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung
              meiner Angaben zur Kontaktaufnahme zu.
            </label>
          </div>
          {errors.privacy && <small id="privacy-error" className="field-error">{errors.privacy}</small>}

          <button className="btn btn-primary form-button" type="submit">
            Anfrage prüfen
            <Icon name="arrow" />
          </button>

          <p className="form-status" role="status" aria-live="polite">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}

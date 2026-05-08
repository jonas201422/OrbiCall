import { FormEvent, useState } from "react";
import { site } from "../data/site";
import { DemoButton } from "./DemoButton";
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

    if (!form.name.trim()) nextErrors.name = "Bitte geben Sie Ihren Namen ein.";
    if (!form.company.trim()) nextErrors.company = "Bitte geben Sie Ihr Unternehmen ein.";
    if (!emailPattern.test(form.email.trim())) nextErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    if (!form.phone.trim()) nextErrors.phone = "Bitte geben Sie eine Telefonnummer ein.";
    if (!form.message.trim()) nextErrors.message = "Bitte beschreiben Sie kurz Ihr Anliegen.";
    if (!form.privacy) nextErrors.privacy = "Bitte bestätigen Sie die Datenschutzhinweise.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      setStatus("Bitte prüfen Sie die markierten Felder.");
      return;
    }

    const subject = encodeURIComponent(`OrbiCall Demo-Anfrage von ${form.company}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nUnternehmen: ${form.company}\nE-Mail: ${form.email}\nTelefon: ${form.phone}\n\nNachricht:\n${form.message}`,
    );
    window.location.href = `mailto:${site.contactEmails.join(",")}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section contact-section" id="kontakt" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-copy" data-reveal>
          <p className="section-kicker">Kontakt</p>
          <h2 id="contact-title">Demo buchen oder direkt Kontakt aufnehmen.</h2>
          <p className="section-lead">
            Erzählen Sie kurz, wie Ihr Unternehmen erreichbar sein soll. OrbiCall meldet sich mit einer passenden
            Demo und den nächsten Schritten für Ihren KI Telefonassistenten.
          </p>
          <div className="contact-options">
            <a className="contact-option" href={site.demoUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="calendar" />
              <span>
                <strong>Demo buchen</strong>
                <small>Zeigt Gesprächsführung, Terminlogik, Weiterleitung und Zusammenfassungen</small>
              </span>
            </a>
            {site.contactPeople.map((person) => (
              <a className="contact-option" href={person.phoneHref} key={person.email}>
                <Icon name="phone" />
                <span>
                  <strong>{person.name}, {person.role}</strong>
                  <small>{person.phone} · {person.email}</small>
                </span>
              </a>
            ))}
            <a className="contact-option" href={`mailto:${site.contactEmails.join(",")}`}>
              <Icon name="mail" />
              <span>
                <strong>E-Mail an OrbiCall</strong>
                <small>{site.contactEmails.join(" · ")}</small>
              </span>
            </a>
          </div>
          <div className="contact-demo-cta">
            <DemoButton />
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
              placeholder="z. B. Branche, Anzahl der Standorte, typische Anrufe und gewünschte Demo-Zeit"
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
            Kontakt aufnehmen
            <Icon name="arrow" />
          </button>

          <p className="form-status" role="status" aria-live="polite">
            {status || "Das Formular öffnet eine vorbereitete E-Mail an OrbiCall. Es speichert keine Daten im Browser."}
          </p>
        </form>
      </div>
    </section>
  );
}

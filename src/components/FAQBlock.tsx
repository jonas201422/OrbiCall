import type { FAQItem } from "../data/content";

type FAQBlockProps = {
  id?: string;
  kicker?: string;
  title: string;
  lead?: string;
  items: FAQItem[];
};

export function FAQBlock({ id = "faq", kicker = "FAQ", title, lead, items }: FAQBlockProps) {
  return (
    <section className="section faq-section" id={id} aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className="section-heading" data-reveal>
          <p className="section-kicker">{kicker}</p>
          <h2 id={`${id}-title`}>{title}</h2>
          {lead && <p className="section-lead">{lead}</p>}
        </div>
        <div className="faq-list" data-reveal>
          {items.map((item) => (
            <article className="glass-card faq-item" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

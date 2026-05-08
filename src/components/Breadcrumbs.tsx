type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item.href}>
          {index > 0 && <span aria-hidden="true">/</span>}
          {index === items.length - 1 || !item.href ? (
            <span aria-current={index === items.length - 1 ? "page" : undefined}>{item.label}</span>
          ) : (
            <a href={item.href}>{item.label}</a>
          )}
        </span>
      ))}
    </nav>
  );
}

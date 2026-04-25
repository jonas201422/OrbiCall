type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <span className="brand-mark" aria-label="Orbicall">
      <span className="brand-symbol" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img">
          <path d="M13 35C11 24.5 18.6 14 31.4 12.5C36.3 12 41 13.1 44.7 15.3" />
          <path d="M51 29C53.4 40.4 45.2 51.4 32.3 52.2C27.1 52.5 22.3 51.1 18.7 48.4" />
          <circle cx="48.5" cy="19.5" r="3.5" />
          <circle cx="15.5" cy="45.5" r="3.5" />
          <rect x="22" y="27" width="4" height="13" rx="2" />
          <rect x="30" y="21" width="4" height="25" rx="2" />
          <rect x="38" y="27" width="4" height="13" rx="2" />
        </svg>
      </span>
      {!compact && (
        <span className="brand-word">
          Orbi<span>call</span>
        </span>
      )}
    </span>
  );
}

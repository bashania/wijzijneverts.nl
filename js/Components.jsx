/* Everts Website — shared primitives. Exports to window for cross-file use. */

const { useState, useEffect, useRef } = React;

// ---- Icon helper (Lucide) ----
function Icon({ name, size = 20, stroke = 2, style }) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': stroke, width: size, height: size } });
    }
  });
  return <span ref={ref} style={{ display: 'inline-flex', ...style }} />;
}

// ---- Button ----
function Button({ children, variant = 'primary', size = 'md', icon, iconRight, onClick, as = 'button', href, type, full }) {
  const [h, setH] = useState(false);
  const base = {
    fontFamily: 'var(--font-display)', fontWeight: 600, cursor: 'pointer',
    border: '1.5px solid transparent', borderRadius: 'var(--radius-md)',
    display: full ? 'flex' : 'inline-flex', width: full ? '100%' : 'auto', justifyContent: 'center',
    alignItems: 'center', gap: 8, textDecoration: 'none',
    transition: 'background .15s, box-shadow .15s, border-color .15s', whiteSpace: 'nowrap',
    fontSize: size === 'lg' ? 16 : size === 'sm' ? 13 : 15,
    padding: size === 'lg' ? '14px 26px' : size === 'sm' ? '8px 15px' : '12px 22px',
  };
  const variants = {
    primary: { background: h ? 'var(--everts-green-600)' : 'var(--everts-green)', color: '#fff' },
    secondary: { background: h ? 'var(--everts-green-100)' : '#fff', color: 'var(--everts-logo-green)', borderColor: 'var(--everts-green)' },
    ghost: { background: h ? 'var(--everts-green-100)' : 'transparent', color: 'var(--fg2)' },
    white: { background: h ? '#eef4ec' : '#fff', color: 'var(--everts-logo-green)' },
  };
  const Tag = as;
  return (
    <Tag href={href} type={type} style={{ ...base, ...variants[variant] }} onClick={onClick}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
      {icon && <Icon name={icon} size={size === 'sm' ? 16 : 18} />}
      {children}
      {iconRight && <Icon name={iconRight} size={size === 'sm' ? 16 : 18} />}
    </Tag>
  );
}

// ---- Photo: real Everts photography when src is given, else a labelled placeholder ----
function Photo({ src, alt, h = 240, label = 'Everts fotografie', radius = 'var(--radius-lg)', tone = 'poly', pos = 'center', style }) {
  if (src) {
    return (
      <div style={{ height: h, borderRadius: radius, overflow: 'hidden', background: 'var(--bg2)', ...style }}>
        <img src={src} alt={alt || ''} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: pos, display: 'block' }} />
      </div>
    );
  }
  const tones = {
    poly: { backgroundImage: "url('/assets/everts-achtergrond-klein.png')", backgroundSize: 'cover', backgroundPosition: 'center' },
    neutral: { background: 'linear-gradient(135deg,#e8ede9,#d9e2db)' },
  };
  return (
    <div style={{ height: h, borderRadius: radius, position: 'relative', overflow: 'hidden', ...tones[tone], ...style }}>
      <div style={{ position: 'absolute', inset: 0, background: tone === 'poly' ? 'rgba(16,61,37,.32)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8 }}>
        <Icon name="camera" size={26} style={{ color: tone === 'poly' ? 'rgba(255,255,255,.9)' : 'var(--fg4)' }} />
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 12.5, letterSpacing: '.04em', color: tone === 'poly' ? 'rgba(255,255,255,.92)' : 'var(--fg4)' }}>{label}</span>
      </div>
    </div>
  );
}

function Eyebrow({ children, light }) {
  return <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase', color: light ? 'rgba(255,255,255,.85)' : 'var(--everts-green)', margin: '0 0 14px' }}>{children}</p>;
}

function Stat({ value, label }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 44, lineHeight: 1, color: 'var(--everts-logo-green)', letterSpacing: '-.02em' }}>{value}</div>
      <div style={{ fontSize: 14.5, color: 'var(--fg3)', marginTop: 8 }}>{label}</div>
    </div>
  );
}

/* URL-structuur van de site. Geeft per pagina het pad terug, relatief aan de site-root
   (op deelpagina's zorgt een <base>-tag dat relatieve paden goed uitkomen). */
function EVT_URL(page, slug = null) {
  switch (page) {
    case 'over': return 'over-everts/';
    case 'diensten': return 'wat-we-doen/';
    case 'discipline': return 'wat-we-doen/' + slug + '/';
    case 'werken': return 'werken-bij/';
    case 'vacature': return 'werken-bij/' + slug + '/';
    case 'solliciteren': return slug ? 'solliciteren/' + slug + '/' : 'solliciteren/';
    case 'contact': return 'contact/';
    case 'privacy': return 'privacy/';
    default: return './';
  }
}

Object.assign(window, { Icon, Button, Photo, Eyebrow, Stat, EVT_URL });

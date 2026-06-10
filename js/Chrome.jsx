/* Everts Website — Header (sticky nav, responsive) + Footer */

function Header({ current, onNav }) {
  const [open, setOpen] = useState(false);
  const items = [
    { id: 'home', label: 'Home' },
    { id: 'over', label: 'Over Everts' },
    { id: 'diensten', label: 'Wat we doen' },
    { id: 'werken', label: 'Werken bij' },
    { id: 'contact', label: 'Contact' },
  ];
  const go = (id) => { setOpen(false); onNav(id); };
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,.9)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--line-200)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px,4vw,32px)', height: 74, display: 'flex', alignItems: 'center', gap: 28 }}>
        <a href={EVT_URL('home')} onClick={(e) => { e.preventDefault(); go('home'); }} style={{ display: 'flex', alignItems: 'center' }}>
          <img src="assets/everts-logo-header.svg" alt="Everts. Onderhoud & renovatie" style={{ height: 46, display: 'block' }} />
        </a>
        <nav className="evt-nav-desktop" style={{ display: 'flex', gap: 4, marginLeft: 'auto' }}>
          {items.map((it) => {
            const active = current === it.id;
            return (
              <a key={it.id} href={EVT_URL(it.id)} onClick={(e) => { e.preventDefault(); go(it.id); }}
                style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, padding: '9px 14px', borderRadius: 8, textDecoration: 'none', whiteSpace: 'nowrap', transition: 'background .15s, color .15s',
                  color: active ? 'var(--everts-logo-green)' : 'var(--fg2)', background: active ? 'var(--everts-green-100)' : 'transparent' }}>
                {it.label}
              </a>
            );
          })}
        </nav>
        <div className="evt-cta-desktop">
          <Button size="sm" iconRight="arrow-right" onClick={() => go('werken')}>Solliciteer nu</Button>
        </div>
        <button className="evt-nav-burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}
          style={{ display: 'none', marginLeft: 'auto', border: '1px solid var(--line-200)', background: '#fff', borderRadius: 10, width: 44, height: 44, alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--fg1)' }}>
          <Icon name={open ? 'x' : 'menu'} size={22} />
        </button>
      </div>
      {open && (
        <div className="evt-nav-panel" style={{ borderTop: '1px solid var(--line-200)', background: '#fff', padding: '12px clamp(20px,4vw,32px) 20px' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {items.map((it) => (
              <a key={it.id} href={EVT_URL(it.id)} onClick={(e) => { e.preventDefault(); go(it.id); }}
                style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16, padding: '13px 12px', borderRadius: 8, textDecoration: 'none',
                  color: current === it.id ? 'var(--everts-logo-green)' : 'var(--fg1)', background: current === it.id ? 'var(--everts-green-100)' : 'transparent' }}>
                {it.label}
              </a>
            ))}
            <div style={{ marginTop: 10 }}><Button full iconRight="arrow-right" onClick={() => go('werken')}>Solliciteer nu</Button></div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer({ onNav }) {
  const cols = [
    { h: 'Wat we doen', items: [['Schilderwerk & gevel', 'discipline', 'schilderwerk'], ['Bouwkundig onderhoud', 'discipline', 'bouwkundig'], ['Dakdekken', 'discipline', 'dakdekken'], ['Everts Servicedesk', 'discipline', 'servicedesk']] },
    { h: 'Voor wie', items: [["VvE's", 'diensten'], ['Vastgoedeigenaren', 'diensten'], ['Woningcorporaties', 'diensten'], ['Zorg & onderwijs', 'diensten']] },
    { h: 'Everts.', items: [['Over Everts', 'over'], ['Werken bij', 'werken'], ['Contact', 'contact']] },
  ];
  return (
    <footer style={{ background: 'var(--everts-dark-green)', color: 'rgba(255,255,255,.82)' }}>
      <div className="evt-footer-grid" style={{ maxWidth: 1200, margin: '0 auto', padding: '64px clamp(20px,4vw,32px) 32px', display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 40 }}>
        <div>
          <img src="assets/everts-wordmerk-wit.png" alt="Everts." style={{ height: 38, marginBottom: 18 }} />
          <p style={{ fontSize: 14.5, lineHeight: 1.7, maxWidth: 280, margin: '0 0 22px', color: 'rgba(255,255,255,.7)' }}>
            Al meer dan honderd jaar zorgen wij ervoor dat gebouwen er goed bij staan, en dat ze dat blijven.
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            {[
              ['linkedin', 'LinkedIn', 'https://www.linkedin.com/company/evertsonderhoud/'],
              ['instagram', 'Instagram', 'https://www.instagram.com/everts.onderhoud/'],
              ['facebook', 'Facebook', 'https://www.facebook.com/Everts.Onderhoud'],
            ].map(([ic, label, href]) => (
              <a key={ic} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}
                style={{ width: 42, height: 42, borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.82)', background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.14)', transition: 'background .15s, color .15s, border-color .15s' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--everts-green)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--everts-green)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,.08)'; e.currentTarget.style.color = 'rgba(255,255,255,.82)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.14)'; }}>
                <Icon name={ic} size={19} />
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 16 }}>{c.h}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
              {c.items.map(([label, dest, slug]) => <li key={label}><a href={EVT_URL(dest, slug || null)} onClick={(e) => { e.preventDefault(); onNav(dest, slug || null); }} style={{ color: 'rgba(255,255,255,.72)', textDecoration: 'none', fontSize: 14.5 }}>{label}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,.13)' }}>
        <div className="evt-footer-bottom" style={{ maxWidth: 1200, margin: '0 auto', padding: '20px clamp(20px,4vw,32px)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 13, color: 'rgba(255,255,255,.6)' }}>
          <span>Everts. Onderhoud &amp; Renovatie — De Star 3, 2266 NA Leidschendam</span>
          <span style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href={EVT_URL('privacy')} onClick={(e) => { e.preventDefault(); onNav('privacy'); }} style={{ color: 'rgba(255,255,255,.6)', textDecoration: 'none' }}>Privacyverklaring</a>
            <span>T 070 301 25 80 · info@everts.chat</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Header, Footer });

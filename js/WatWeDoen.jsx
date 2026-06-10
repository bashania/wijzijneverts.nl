/* Everts Website — "Wat we doen" landingspagina (overzicht van de vier disciplines) */

const DIENSTEN = [
  { slug: 'schilderwerk', icon: 'paint-roller', kicker: 'Everts. Onderhoud & renovatie',
    t: 'Schilderwerk & gevelonderhoud',
    d: 'Planmatig buiten- en binnenschilderwerk, gevelreiniging, kozijnonderhoud en houtrotherstel. We werken met een vaste cyclus, zodat uw gevel er jaar na jaar goed bij staat.',
    photo: '/assets/everts-foto-gevel.jpg', pos: 'center 55%',
    items: ['Buitenschilderwerk', 'Gevelreiniging', 'Kozijnonderhoud', 'HR++-beglazing'] },
  { slug: 'bouwkundig', icon: 'hard-hat', kicker: 'Everts. Onderhoud & renovatie',
    t: 'Bouwkundig onderhoud & herstel',
    d: 'Van metsel- en voegwerk tot betonreparatie en complete renovatie. Onze uitvoerders coördineren het hele traject, met één vast aanspreekpunt voor u.',
    photo: '/assets/everts-foto-voegwerk.jpg', pos: 'center 50%',
    items: ['Metsel- & voegwerk', 'Betonreparatie', 'Renovatie', 'Verduurzaming'] },
  { slug: 'dakdekken', icon: 'home', kicker: 'Everts. Onderhoud & renovatie',
    t: 'Dakdekken',
    d: 'Plat- en hellend dakwerk, onderhoud, inspectie en vervanging. We doen het volledig in eigen huis, met eigen dakdekkers.',
    photo: '/assets/everts-foto-dak-plat.jpg', pos: 'center 58%',
    items: ['Platte daken', 'Hellende daken', 'Dakinspectie', 'Spoedherstel'] },
  { slug: 'servicedesk', icon: 'headset', kicker: 'Everts Servicedesk',
    t: 'Everts Servicedesk',
    d: 'Klein dagelijks onderhoud, mutatiewerk bij huurderswisseling en spoedreparaties. Eén melding is genoeg, de rest regelen wij, zonder uitgebreid offertetraject.',
    photo: '/assets/everts-foto-servicedesk.jpg', pos: 'center 50%',
    items: ['Dagelijks onderhoud', 'Mutatiewerk', 'Spoedreparaties', 'Glasschade'] },
];

const DIENSTEN_STATS = [
  { v: '4', l: 'disciplines onder één dak' },
  { v: '1', l: 'vast aanspreekpunt per project' },
  { v: '100+', l: 'jaar vakkennis' },
  { v: '~50', l: 'eigen vakmensen' },
];

const DIENSTEN_AANPAK = [
  { n: '01', t: 'Inspectie & advies', d: 'We komen langs, bekijken de staat van uw vastgoed en geven eerlijk advies, ook als de boodschap minder prettig is.' },
  { n: '02', t: 'Heldere offerte', d: 'U krijgt een duidelijk voorstel met een realistische planning en prijs, zonder verrassingen achteraf.' },
  { n: '03', t: 'Vakkundige uitvoering', d: 'Vaste teams voeren het werk uit, met één aanspreekpunt en korte lijnen tijdens het hele traject.' },
  { n: '04', t: 'Oplevering & vooruitkijken', d: 'We leveren netjes op en denken meteen mee over wat er over een paar jaar nodig is.' },
];

const DIENSTEN_VOORWIE = [
  { icon: 'building-2', t: "VvE's", d: 'Verenigingen van eigenaren die hun onderhoud zorgeloos en planmatig willen regelen.' },
  { icon: 'briefcase', t: 'Vastgoedeigenaren & beleggers', d: 'Eigenaren die de waarde van hun portefeuille willen behouden en verbeteren.' },
  { icon: 'key-round', t: 'Woningcorporaties', d: 'Planmatig groot onderhoud en mutatiewerk voor grotere woningvoorraden.' },
  { icon: 'graduation-cap', t: 'Zorg & onderwijs', d: 'Maatschappelijk vastgoed waar continuïteit en netjes werken voorop staan.' },
];

function Diensten({ onNav }) {
  useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

  const scrollToDienst = (slug) => {
    const el = document.getElementById('dienst-' + slug);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <div>
      {/* HERO */}
      <section style={{ position: 'relative' }}>
        <img src="/assets/everts-foto-hero.jpg" alt="Vakmensen van Everts aan het werk" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(16,61,37,.92) 0%, rgba(16,61,37,.74) 46%, rgba(16,61,37,.42) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '92px clamp(20px,4vw,32px) 84px', color: '#fff' }}>
          <div style={{ maxWidth: 680 }}>
            <Eyebrow light>Wat we doen</Eyebrow>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(34px,5.4vw,54px)', letterSpacing: '-.02em', lineHeight: 1.03, margin: '0 0 20px', textWrap: 'balance' }}>Vier disciplines, één aanspreekpunt</h1>
            <p style={{ fontSize: 'clamp(17px,2.2vw,20px)', lineHeight: 1.55, color: 'rgba(255,255,255,.92)', margin: '0 0 30px', maxWidth: 560 }}>
              Schilderwerk, bouwkundig herstel, dakdekken en dagelijks onderhoud. U hoeft niet te schakelen tussen partijen, dat doen wij. Van advies tot oplevering.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Button size="lg" variant="white" iconRight="arrow-right" onClick={() => onNav('contact')}>Maak een afspraak</Button>
              <Button size="lg" variant="white" icon="phone-call" as="a" href="tel:0703012580">070 301 25 80</Button>
            </div>
          </div>
        </div>
        {/* discipline-snelkoppelingen */}
        <div style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,.16)' }}>
          <div className="evt-grid-4" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
            {DIENSTEN.map((b, i) => (
              <button key={b.slug} onClick={() => scrollToDienst(b.slug)}
                style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '20px clamp(16px,2.4vw,26px)', background: 'transparent', border: 'none', borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,.16)', color: '#fff', cursor: 'pointer', textAlign: 'left', transition: 'background .15s' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,.08)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}>
                <span style={{ width: 40, height: 40, borderRadius: 11, background: 'rgba(255,255,255,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name={b.icon} size={20} /></span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14.5, lineHeight: 1.2 }}>{b.t.replace(' & gevelonderhoud', '').replace(' onderhoud & herstel', '').replace('Everts ', '')}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* POSITIONERING + STATS */}
      <section style={{ background: '#fff', borderBottom: '1px solid var(--line-200)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '76px clamp(20px,4vw,32px)' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <Eyebrow>Alles onder één dak</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(26px,3.6vw,36px)', letterSpacing: '-.015em', lineHeight: 1.14, margin: '0 0 18px', color: 'var(--fg1)' }}>U schakelt met één partij, wij regelen de rest</h2>
            <p style={{ fontSize: 17.5, lineHeight: 1.7, color: 'var(--fg2)', margin: 0 }}>
              Of het nu gaat om de gevel, het dak, een verbouwing of de kleine dagelijkse klussen: bij Everts hoort het allemaal bij elkaar. Eigen vakmensen, vaste teams en één contactpersoon die uw gebouw kent. Zo houden we het overzicht, en u de rust.
            </p>
          </div>
          <div className="evt-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, marginTop: 52, paddingTop: 44, borderTop: '1px solid var(--line-200)' }}>
            {DIENSTEN_STATS.map((s) => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(34px,4vw,44px)', lineHeight: 1, color: 'var(--everts-logo-green)', letterSpacing: '-.02em' }}>{s.v}</div>
                <div style={{ fontSize: 14.5, color: 'var(--fg3)', marginTop: 10, maxWidth: 180, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCIPLINE FEATURE-RIJEN */}
      <section style={{ background: 'var(--bg2)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '84px clamp(20px,4vw,32px)' }}>
          <div style={{ maxWidth: 620, marginBottom: 52 }}>
            <Eyebrow>Onze disciplines</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(26px,3.6vw,36px)', letterSpacing: '-.015em', margin: 0, color: 'var(--fg1)' }}>Vier vakgebieden, dezelfde standaard</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {DIENSTEN.map((b, i) => (
              <div key={b.slug} id={'dienst-' + b.slug} className="evt-dienst" onClick={() => onNav('discipline', b.slug)}
                style={{ scrollMarginTop: 80, background: '#fff', border: '1px solid var(--line-200)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden', display: 'grid', gridTemplateColumns: i % 2 === 0 ? '46% 1fr' : '1fr 46%', gap: 0, cursor: 'pointer', transition: 'box-shadow .15s, transform .15s' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'none'; }}>
                {i % 2 === 0
                  ? <React.Fragment><DienstFoto b={b} /><DienstTekst b={b} /></React.Fragment>
                  : <React.Fragment><DienstTekst b={b} /><DienstFoto b={b} /></React.Fragment>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AANPAK */}
      <section style={{ background: '#fff', borderTop: '1px solid var(--line-200)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '84px clamp(20px,4vw,32px)' }}>
          <div style={{ maxWidth: 640, marginBottom: 52 }}>
            <Eyebrow>Onze aanpak</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(26px,3.6vw,36px)', letterSpacing: '-.015em', margin: 0, color: 'var(--fg1)' }}>Van advies tot oplevering, in vier stappen</h2>
          </div>
          <div className="evt-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 28 }}>
            {DIENSTEN_AANPAK.map((a, i) => (
              <div key={a.n} style={{ position: 'relative', paddingTop: 26, borderTop: '3px solid var(--everts-green)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15, color: 'var(--everts-green)', letterSpacing: '.06em', marginBottom: 12 }}>{a.n}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--fg1)', marginBottom: 9 }}>{a.t}</div>
                <p style={{ fontSize: 14.5, lineHeight: 1.62, color: 'var(--fg3)', margin: 0 }}>{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOOR WIE */}
      <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--line-200)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '84px clamp(20px,4vw,32px)' }}>
          <div style={{ maxWidth: 640, marginBottom: 52 }}>
            <Eyebrow>Voor wie</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(26px,3.6vw,36px)', letterSpacing: '-.015em', margin: 0, color: 'var(--fg1)' }}>Zakelijke opdrachtgevers die ontzorgd willen worden</h2>
          </div>
          <div className="evt-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
            {DIENSTEN_VOORWIE.map((w) => (
              <div key={w.t} style={{ background: '#fff', border: '1px solid var(--line-200)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', padding: 26 }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--everts-green-100)', color: 'var(--everts-logo-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><Icon name={w.icon} size={23} /></div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16.5, color: 'var(--fg1)', marginBottom: 8 }}>{w.t}</div>
                <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--fg3)', margin: 0 }}>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', backgroundImage: "url('/assets/everts-achtergrond-klein.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(16,61,37,.8)' }} />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '80px clamp(20px,4vw,32px)', textAlign: 'center', color: '#fff' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,4.5vw,40px)', letterSpacing: '-.02em', margin: '0 0 16px' }}>Benieuwd wat we voor uw vastgoed kunnen betekenen?</h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,.88)', maxWidth: 560, margin: '0 auto 28px' }}>Vraag vrijblijvend een inspectie aan. U krijgt eerlijk advies, geen verkooppraatje.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button size="lg" variant="white" icon="phone-call" as="a" href="tel:0703012580">070 301 25 80</Button>
            <Button size="lg" variant="white" iconRight="arrow-right" onClick={() => onNav('contact')}>Plan een inspectie</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function DienstFoto({ b }) {
  return (
    <div style={{ minHeight: 300, backgroundImage: "url('" + b.photo + "')", backgroundSize: 'cover', backgroundPosition: b.pos, backgroundColor: 'var(--everts-dark-green)' }} />
  );
}

function DienstTekst({ b }) {
  return (
    <div style={{ padding: 'clamp(28px,3.4vw,44px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
        <span style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--everts-green-100)', color: 'var(--everts-logo-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name={b.icon} size={24} /></span>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, letterSpacing: '.09em', textTransform: 'uppercase', color: 'var(--everts-green)' }}>{b.kicker}</span>
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(22px,2.6vw,27px)', letterSpacing: '-.01em', margin: '0 0 14px', color: 'var(--fg1)' }}>{b.t}</h3>
      <p style={{ fontSize: 15.5, lineHeight: 1.68, color: 'var(--fg2)', margin: '0 0 20px' }}>{b.d}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9, marginBottom: 24 }}>
        {b.items.map((it) => (
          <span key={it} style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, color: 'var(--fg2)', background: 'var(--bg2)', border: '1px solid var(--line-200)', borderRadius: 'var(--radius-full)', padding: '7px 14px' }}>{it}</span>
        ))}
      </div>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: 'var(--everts-green)' }}>Lees meer over {b.kicker === 'Everts Servicedesk' ? 'de servicedesk' : b.t.toLowerCase()} <Icon name="arrow-right" size={17} /></span>
    </div>
  );
}

Object.assign(window, { Diensten });

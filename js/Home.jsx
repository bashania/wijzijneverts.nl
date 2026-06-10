/* Everts Website — Home page */

function HeroHome({ onNav }) {
  return (
    <section style={{ position: 'relative' }}>
      <img src="assets/everts-foto-hero.jpg" alt="Everts aan het werk aan een gebouw in Zuid-Holland" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(16,61,37,.9) 0%, rgba(16,61,37,.7) 42%, rgba(16,61,37,.28) 100%)' }} />
      <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '120px clamp(20px,4vw,32px) 124px' }}>
        <div style={{ maxWidth: 700, color: '#fff' }}>
          <Eyebrow light>Onderhoud &amp; renovatie sinds 1922</Eyebrow>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px,6vw,58px)', lineHeight: 1.04, letterSpacing: '-.02em', margin: '0 0 22px', textWrap: 'balance' }}>
            Uw vastgoed in goede handen, nu en in de toekomst
          </h1>
          <p style={{ fontSize: 'clamp(17px,2.2vw,20px)', lineHeight: 1.55, color: 'rgba(255,255,255,.92)', margin: '0 0 32px', maxWidth: 560 }}>
            Wij ontzorgen grotere VvE's, vastgoedeigenaren, woningcorporaties en maatschappelijke organisaties volledig. Van advies tot oplevering, met één vast aanspreekpunt.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Button size="lg" variant="white" iconRight="arrow-right" onClick={() => onNav('contact')}>Maak een afspraak</Button>
            <Button size="lg" variant="ghost" onClick={() => onNav('diensten')}><span style={{ color: '#fff' }}>Bekijk wat we doen</span></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { v: '100+', l: 'jaar vakkennis' },
    { v: '~50', l: 'vakmensen in dienst' },
    { v: '1', l: 'vast aanspreekpunt per project' },
    { v: '4', l: 'disciplines onder één dak' },
  ];
  return (
    <section style={{ borderBottom: '1px solid var(--line-200)', background: '#fff' }}>
      <div className="evt-grid-4" style={{ maxWidth: 1200, margin: '0 auto', padding: '40px clamp(20px,4vw,32px)', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
        {items.map((i) => <Stat key={i.l} value={i.v} label={i.l} />)}
      </div>
    </section>
  );
}

function Services({ onNav }) {
  const services = [
    { slug: 'schilderwerk', icon: 'paint-roller', t: 'Schilderwerk & gevel', d: 'Planmatig buiten- en binnenschilderwerk, gevelonderhoud en kozijnherstel.' },
    { slug: 'bouwkundig', icon: 'hard-hat', t: 'Bouwkundig onderhoud', d: 'Van houtrot en metselwerk tot complete renovatie, vakkundig uitgevoerd.' },
    { slug: 'dakdekken', icon: 'home', t: 'Dakdekken', d: 'Plat- en hellend dakwerk, onderhoud en vervanging door eigen dakdekkers.' },
    { slug: 'servicedesk', icon: 'headset', t: 'Everts Servicedesk', d: 'Klein dagelijks onderhoud, mutatiewerk en spoedreparaties, snel geregeld.' },
  ];
  return (
    <section style={{ background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '88px clamp(20px,4vw,32px)' }}>
        <div style={{ maxWidth: 620, marginBottom: 48 }}>
          <Eyebrow>Wat we doen</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px,4vw,38px)', lineHeight: 1.12, letterSpacing: '-.015em', margin: 0, color: 'var(--fg1)' }}>
            Volledig ontzorgd, vier disciplines onder één dak
          </h2>
        </div>
        <div className="evt-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
          {services.map((s) => (
            <div key={s.t} onClick={() => onNav('discipline', s.slug)} style={{ background: '#fff', border: '1px solid var(--line-200)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', padding: 26, display: 'flex', flexDirection: 'column', gap: 14, cursor: 'pointer', transition: 'box-shadow .15s, transform .15s' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'none'; }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--everts-green-100)', color: 'var(--everts-logo-green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={s.icon} size={24} /></div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--fg1)' }}>{s.t}</div>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--fg3)', margin: 0, flex: 1 }}>{s.d}</p>
              <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13.5, color: 'var(--everts-green)' }}>Meer hierover <Icon name="arrow-right" size={15} /></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  const vals = [
    { t: 'Vakmanschap', d: 'We leren elke dag. Via maandelijkse toolbox-meetings en bijscholing blijven onze vakmensen scherp. Goed is nooit goed genoeg.' },
    { t: 'Verbinden', d: 'We staan naast onze klanten, niet tegenover hen. Eén vast aanspreekpunt, korte lijnen en proactieve communicatie, ook als het nieuws minder prettig is.' },
    { t: 'Vooruitzien', d: 'We denken een stap verder dan de vraag. We signaleren wat eraan komt en nemen verduurzaming standaard mee in ons advies.' },
  ];
  return (
    <section style={{ background: '#fff' }}>
      <div className="evt-values" style={{ maxWidth: 1200, margin: '0 auto', padding: '88px clamp(20px,4vw,32px)', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <Eyebrow>Onze waarden</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px,4vw,38px)', lineHeight: 1.12, letterSpacing: '-.015em', margin: '0 0 24px', color: 'var(--fg1)' }}>
            Geen gezichtsloze aannemer, maar een partner met een naam
          </h2>
          <Photo src="assets/everts-foto-vakman.jpg" alt="Everts-vakman bij een vers geschilderde voordeur" h={320} pos="center 38%" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {vals.map((v, i) => (
            <div key={v.t} style={{ padding: '24px 0', borderTop: i === 0 ? 'none' : '1px solid var(--line-200)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--everts-logo-green)', marginBottom: 8 }}>{v.t}</div>
              <p style={{ fontSize: 15.5, lineHeight: 1.65, color: 'var(--fg2)', margin: 0 }}>{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA({ onNav }) {
  return (
    <section style={{ position: 'relative', backgroundImage: "url('assets/everts-achtergrond-klein.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(16,61,37,.8)' }} />
      <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '80px clamp(20px,4vw,32px)', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,4.5vw,40px)', letterSpacing: '-.02em', margin: '0 0 16px' }}>Benieuwd wat we voor uw vastgoed kunnen betekenen?</h2>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,.88)', maxWidth: 560, margin: '0 auto 28px' }}>Bel ons of vraag vrijblijvend een inspectie aan. U krijgt eerlijk advies, geen verkooppraatje.</p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button size="lg" variant="white" icon="phone-call" as="a" href="tel:0703012580">070 301 25 80</Button>
          <Button size="lg" variant="white" iconRight="arrow-right" onClick={() => onNav('contact')}>Plan een inspectie</Button>
        </div>
      </div>
    </section>
  );
}

function WerkenBijPromo({ onNav }) {
  const jobs = [
    { slug: 'calculator-onderhoud', t: 'Calculator Onderhoud', meta: 'Leidschendam · 40 uur', d: 'Jij prijst onderhouds- en renovatieprojecten realistisch door, opnemen, beoordelen, meedenken, en bouwt mee aan onze calculatieafdeling.' },
    { slug: 'bouwkundig-calculator', t: 'Bouwkundig calculator', meta: 'Leidschendam · fulltime', d: 'Van houtrotherstel tot complete renovatie: jij rekent het door en zorgt dat onze offertes financieel én technisch kloppen.' },
  ];
  return (
    <section style={{ background: 'var(--everts-green-50)', borderTop: '1px solid var(--everts-green-100)', borderBottom: '1px solid var(--everts-green-100)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px clamp(20px,4vw,32px)' }}>
        <div className="evt-2col" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 48, alignItems: 'center' }}>
          <div>
            <Eyebrow>Werken bij Everts</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px,4vw,38px)', lineHeight: 1.12, letterSpacing: '-.015em', margin: '0 0 16px', color: 'var(--fg1)' }}>We zoeken twee calculators</h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.65, color: 'var(--fg2)', margin: '0 0 24px', maxWidth: 420 }}>
              Wil je niet aanschuiven in iets bestaands, maar mee opbouwen? Bij ons rapporteer je direct aan de directie, met korte lijnen en de ruimte om de calculatieafdeling naar jouw hand te zetten.
            </p>
            <Button variant="secondary" iconRight="arrow-right" onClick={() => onNav('werken')}>Solliciteer nu</Button>
          </div>
          <div className="evt-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
            {jobs.map((j) => (
              <div key={j.slug} onClick={() => onNav('vacature', j.slug)} style={{ background: '#fff', border: '1px solid var(--line-200)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', padding: 24, display: 'flex', flexDirection: 'column', gap: 12, cursor: 'pointer', transition: 'box-shadow .15s, transform .15s' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'none'; }}>
                <div style={{ width: 44, height: 44, borderRadius: 11, background: 'var(--everts-green-100)', color: 'var(--everts-logo-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name="calculator" size={22} /></div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--fg1)', marginBottom: 4 }}>{j.t}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 12.5, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--everts-green)' }}>{j.meta}</div>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--fg3)', margin: 0, flex: 1 }}>{j.d}</p>
                <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: 'var(--everts-green)' }}>Bekijk vacature <Icon name="arrow-right" size={15} /></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Home({ onNav }) {
  return (
    <div>
      <HeroHome onNav={onNav} />
      <TrustBar />
      <Services onNav={onNav} />
      <Values />
      <WerkenBijPromo onNav={onNav} />
      <CTA onNav={onNav} />
    </div>
  );
}

Object.assign(window, { Home });

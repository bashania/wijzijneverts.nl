/* Everts Website — Over Everts, Wat we doen, Contact + shared PageHero */

function PageHero({ eyebrow, title, sub }) {
  return (
    <section style={{ position: 'relative', backgroundImage: "url('assets/everts-achtergrond-klein.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(16,61,37,.86), rgba(16,61,37,.5))' }} />
      <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '76px clamp(20px,4vw,32px)', color: '#fff' }}>
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px,5vw,46px)', letterSpacing: '-.02em', margin: '0 0 14px', maxWidth: 720, lineHeight: 1.06 }}>{title}</h1>
        {sub && <p style={{ fontSize: 19, color: 'rgba(255,255,255,.88)', maxWidth: 600, margin: 0, lineHeight: 1.5 }}>{sub}</p>}
      </div>
    </section>
  );
}

// ---------- OVER EVERTS ----------
function Over() {
  const timeline = [
    { y: '1922', t: 'Antoon Evers richt zijn schildersbedrijf op in Den Haag.' },
    { y: '1983', t: 'Zoon Rob neemt het stokje over en bouwt de onderneming verder uit.' },
    { y: '2013', t: 'Overname van bouwbedrijf Morgenstond, breder dienstenpakket.' },
    { y: '2019', t: 'Dakplan Dakdekkers sluit aan, dakdekken in eigen huis.' },
    { y: '2022', t: 'Tom Kamminga en Bas Hania vormen Everts om tot één organisatie.' },
  ];
  return (
    <div>
      <PageHero eyebrow="Over Everts" title="Meer dan honderd jaar vakkennis, één persoonlijke aanpak" sub="Een familiebedrijf in de beste zin van het woord: korte lijnen, echte mensen en oprechte aandacht." />
      <section style={{ background: '#fff' }}>
        <div className="evt-2col" style={{ maxWidth: 1200, margin: '0 auto', padding: '80px clamp(20px,4vw,32px)', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'start' }}>
          <div>
            <Eyebrow>Onze geschiedenis</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 34, letterSpacing: '-.015em', margin: '0 0 28px', color: 'var(--fg1)' }}>Een naam om op te bouwen</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {timeline.map((e, i) => (
                <div key={e.y} style={{ display: 'flex', gap: 24, paddingBottom: i === timeline.length - 1 ? 0 : 28 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: 'var(--everts-green)', width: 64, flex: 'none' }}>{e.y}</div>
                  <div style={{ position: 'relative', paddingLeft: 24, borderLeft: i === timeline.length - 1 ? 'none' : '2px solid var(--line-200)' }}>
                    <div style={{ position: 'absolute', left: -7, top: 4, width: 12, height: 12, borderRadius: 999, background: 'var(--everts-green)' }} />
                    <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: 'var(--fg2)' }}>{e.t}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Photo src="assets/everts-foto-team.jpg" alt="Vakmensen van Everts op locatie" h={480} pos="center 30%" />
        </div>
      </section>
      <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--line-200)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px clamp(20px,4vw,32px)' }}>
          <div style={{ maxWidth: 620, marginBottom: 12 }}>
            <Eyebrow>Onze aanpak</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(26px,3.5vw,32px)', letterSpacing: '-.015em', margin: 0, color: 'var(--fg1)' }}>Goed onderhoud begint met eerlijk advies</h2>
          </div>
          <p style={{ maxWidth: 720, fontSize: 17, lineHeight: 1.7, color: 'var(--fg2)' }}>
            Dat geven we u altijd, ook als de boodschap wat minder prettig is. Bij Everts kennen we onze klanten bij naam, en zij ons. We werken met vaste teams, melden wijzigingen op tijd en denken mee over wat er over twee jaar nodig is. Zo houden we uw gebouw in goede staat, zonder verrassingen.
          </p>
        </div>
      </section>
    </div>
  );
}

// ---------- WAT WE DOEN ----------
function Diensten() {
  const blocks = [
    { icon: 'paint-roller', t: 'Schilderwerk & gevelonderhoud', d: 'Planmatig buiten- en binnenschilderwerk, gevelreiniging, kozijnonderhoud en houtrotherstel. We werken met een vaste cyclus zodat uw gevel er jaar na jaar goed bij staat.', photo: 'assets/everts-foto-gevel.jpg', pos: 'center 55%' },
    { icon: 'hard-hat', t: 'Bouwkundig onderhoud & herstel', d: 'Van metselwerk en voegwerk tot betonreparatie en complete renovatie. Onze uitvoerders coördineren het hele traject met één aanspreekpunt.', photo: 'assets/everts-foto-pand.jpg', pos: 'center 40%' },
    { icon: 'home', t: 'Dakdekken', d: 'Plat- en hellend dakwerk, onderhoud, inspectie en vervanging. Sinds de aansluiting van Dakplan in eigen beheer.', photo: 'assets/everts-foto-dak.jpg', pos: 'center 35%' },
    { icon: 'headset', t: 'Everts Servicedesk', d: 'Klein dagelijks onderhoud, mutatiewerk bij huurderswisseling en spoedreparaties. Eén melding is genoeg, de rest regelen wij, zonder uitgebreid offertetraject.', photo: 'assets/everts-foto-schilder.jpg', pos: 'center 30%' },
  ];
  return (
    <div>
      <PageHero eyebrow="Wat we doen" title="Vier disciplines, één aanspreekpunt" sub="Schilderwerk, bouwkundig herstel, dakdekken en dagelijks onderhoud. U hoeft niet te schakelen tussen partijen, dat doen wij." />
      <section style={{ background: 'var(--bg2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px clamp(20px,4vw,32px)', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {blocks.map((b, i) => (
            <div key={b.t} className="evt-dienst" style={{ background: '#fff', border: '1px solid var(--line-200)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)', padding: 32, display: 'grid', gridTemplateColumns: '320px 1fr', gap: 36, alignItems: 'center' }}>
              {i % 2 === 0
                ? <React.Fragment><Photo src={b.photo} label="Werk op locatie" h={210} radius="var(--radius-lg)" pos={b.pos} /><DienstText b={b} /></React.Fragment>
                : <React.Fragment><DienstText b={b} /><Photo src={b.photo} label="Eindresultaat" h={210} radius="var(--radius-lg)" pos={b.pos} /></React.Fragment>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
function DienstText({ b }) {
  return (
    <div>
      <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--everts-green-100)', color: 'var(--everts-logo-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><Icon name={b.icon} size={24} /></div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, letterSpacing: '-.01em', margin: '0 0 12px', color: 'var(--fg1)' }}>{b.t}</h3>
      <p style={{ fontSize: 15.5, lineHeight: 1.65, color: 'var(--fg2)', margin: 0 }}>{b.d}</p>
    </div>
  );
}

// ---------- CONTACT ----------
function Contact() {
  return (
    <div>
      <PageHero eyebrow="Contact" title="Plan een vrijblijvende inspectie" sub="Bel ons of laat uw gegevens achter. U krijgt eerlijk advies, geen verkooppraatje." />
      <section style={{ background: '#fff' }}>
        <div className="evt-2col" style={{ maxWidth: 1100, margin: '0 auto', padding: '72px clamp(20px,4vw,32px)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, margin: '0 0 24px', color: 'var(--fg1)' }}>Direct contact</h2>
            {[['phone-call', '070 301 25 80', 'tel:0703012580'], ['mail', 'info@evertsgroep.nl', 'mailto:info@evertsgroep.nl'], ['map-pin', 'De Star 3, 2266 NA Leidschendam', null]].map(([ic, tx, href]) => (
              <a key={tx} href={href || '#'} onClick={(e) => { if (!href) e.preventDefault(); }} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18, textDecoration: 'none' }}>
                <div style={{ width: 44, height: 44, borderRadius: 11, background: 'var(--everts-green-100)', color: 'var(--everts-logo-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name={ic} size={20} /></div>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16.5, color: 'var(--fg1)' }}>{tx}</span>
              </a>
            ))}
            <div style={{ marginTop: 24 }}><Photo src="assets/everts-foto-team.jpg" alt="Vakmensen van Everts op locatie" h={400} pos="center 20%" /></div>
          </div>
          <div style={{ background: 'var(--bg2)', border: '1px solid var(--line-200)', borderRadius: 'var(--radius-xl)', padding: 32 }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
function Field({ label, ...rest }) {
  const [f, setF] = useState(false);
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13.5, color: 'var(--fg2)', display: 'block', marginBottom: 6 }}>{label}</label>
      <input {...rest} onFocus={() => setF(true)} onBlur={() => setF(false)}
        style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--fg1)', padding: '11px 13px', borderRadius: 'var(--radius-md)', background: '#fff', outline: 'none',
          border: '1.5px solid ' + (f ? 'var(--everts-green)' : 'var(--line-200)'), boxShadow: f ? 'var(--shadow-focus)' : 'none' }} />
    </div>
  );
}
function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  if (sent) return (
    <div style={{ textAlign: 'center', padding: '40px 0' }}>
      <div style={{ width: 56, height: 56, borderRadius: 999, background: 'var(--success-bg)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}><Icon name="check" size={28} /></div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, margin: '0 0 8px', color: 'var(--fg1)' }}>Bedankt, we nemen snel contact op</h3>
      <p style={{ fontSize: 15, color: 'var(--fg3)', margin: 0 }}>Meestal binnen één werkdag.</p>
    </div>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch('https://formspree.io/f/mnjyqlak', {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) { setSent(true); } else { setError(true); }
    } catch { setError(true); }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, margin: '0 0 20px', color: 'var(--fg1)' }}>Vraag een inspectie aan</h2>
      <Field label="Naam contactpersoon" name="naam" placeholder="Bijv. Jan de Vries" required />
      <Field label="Organisatie / VvE" name="organisatie" placeholder="Naam van uw organisatie" />
      <Field label="E-mailadres" name="email" type="email" placeholder="naam@organisatie.nl" required />
      <div style={{ marginBottom: 16 }}>
        <label style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13.5, color: 'var(--fg2)', display: 'block', marginBottom: 6 }}>Waar gaat het over?</label>
        <select name="onderwerp" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--fg1)', padding: '11px 13px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--line-200)', background: '#fff' }}>
          <option>Schilderwerk &amp; gevel</option><option>Bouwkundig onderhoud</option><option>Dakdekken</option><option>Everts Servicedesk</option><option>MJOP-advies</option>
        </select>
      </div>
      {error && <p style={{ color: 'var(--danger)', fontSize: 14, margin: '0 0 12px' }}>Er ging iets mis. Probeer het opnieuw of mail direct naar info@evertsgroep.nl.</p>}
      <Button as="button" type="submit" iconRight={loading ? 'loader' : 'arrow-right'} full>{loading ? 'Versturen…' : 'Aanvraag versturen'}</Button>
    </form>
  );
}

Object.assign(window, { PageHero, Over, Diensten, Contact });

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
    { y: '1922', t: 'Antoon Everts sr. richt schildersbedrijf A. Evers op in Den Haag. Binnen korte tijd werken er meer dan tien schilders.' },
    { y: '1945', t: 'Na de oorlog helpt het bedrijf bij de wederopbouw van de Haagse wijken en later de Zuid-Hollandse en Zeeuwse eilanden.' },
    { y: '1950', t: 'De familienaam blijkt officieel Everts te zijn. Sindsdien dragen de familie én het bedrijf die naam.' },
    { y: '1956', t: 'Antoon Everts jr. neemt de leiding over en bouwt het netwerk van opdrachtgevers verder uit.' },
    { y: '1983', t: 'Zoon Rob komt in de zaak, samen met Elvin Robbinson, en zet de derde generatie in gang.' },
    { y: '1998', t: 'Everts wint zowel de Schildersvakprijs als de publieksprijs voor het werk aan de Algemene Rekenkamer.' },
    { y: '2000', t: 'Rob Everts wordt directeur en transformeert het schildersbedrijf naar een totaal-onderhoudsbedrijf.' },
    { y: '2013', t: 'Everts breidt uit met bouwkundig onderhoud, voortaan een vaste pijler onder ons werk.' },
    { y: '2019', t: 'Dakdekken komt volledig in eigen huis, met eigen dakdekkers en materieel.' },
    { y: '2022', t: 'Everts viert het 100-jarig bestaan, met Bas Hania en Tom Kamminga aan het roer.' },
  ];
  const generaties = [
    { label: '1e generatie', naam: 'Antoon Everts sr.', jaren: '1886 – 1965', fotos: [{ src: 'assets/familie-antoon-sr.png', pos: 'center 14%' }], t: 'Opgeleid als decoratie-, reclame- en huisschilder in Arnhem. Allround vakman én scherp organisator, die het bedrijf door crisis en oorlog heen loodste.', quote: 'Het gaat in zaken om de mensen. Ben je goed voor hen, dan zijn zij goed voor jou. Zo simpel is het.' },
    { label: '2e generatie', naam: 'Antoon Everts jr.', jaren: 'directeur vanaf 1956', fotos: [{ src: 'assets/familie-antoon-jr.png', pos: 'center 20%' }], t: 'Bouwde een breed netwerk van opdrachtgevers op, van particulieren tot Defensie, Rijkswaterstaat en de Rijksgebouwendienst.', quote: 'Onze medewerkers zijn de belangrijkste onderdelen van ons bedrijf.' },
    { label: '3e generatie', naam: 'Rob Everts & Elvin Robbinson', jaren: 'directie vanaf 1983', fotos: [{ src: 'assets/familie-rob-everts.png', pos: 'center 22%' }, { src: 'assets/familie-elvin-robbinson.png', pos: 'center 30%' }], t: 'Rob als directeur, Elvin Robbinson als bedrijfsleider. Samen maakten ze van een puur schildersbedrijf een totaal vastgoedonderhoudsbedrijf, met behoud van het karakter van een familiebedrijf.', quote: 'Vakwerk verkoopt zichzelf. Doe je het goed, dan vragen ze je vanzelf terug.' },
    { label: 'De huidige generatie', naam: 'Bas Hania & Tom Kamminga', jaren: 'directie vandaag', fotos: [{ src: 'assets/familie-bas-hania.png', pos: 'center 30%' }, { src: 'assets/familie-tom-kamminga.png', pos: 'center 22%' }], t: 'Professionaliseren en laten groeien, met de mensen op de werkvloer voorop. "Wij heten geen Everts, maar voelen ons wel de vierde generatie."', quote: 'De mensen in ons bedrijf zijn het belangrijkste, zij maken het product.' },
  ];
  const prestige = [
    { t: 'Nirwana-flat, Den Haag', d: 'Driemaal door ons gerenoveerd. De eerste flat van Nederland, een rijksmonument uit 1929.' },
    { t: 'Algemene Rekenkamer', d: 'Bekroond met de Schildersvakprijs én de publieksprijs in 1998.' },
    { t: 'Theater Diligentia', d: 'Vakkundig schilderwerk aan een Haags prestigeobject.' },
    { t: 'Gymnasium Haganum', d: 'Planmatig onderhoud aan een markant schoolgebouw in Den Haag.' },
  ];
  return (
    <div>
      <section style={{ position: 'relative' }}>
        <img src="assets/everts-historie-pand.jpg" alt="Historische foto: het pand van A. Everts &amp; Zoon Schildersbedrijf in Den Haag, met bord, ladder en schilder" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 42%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(16,61,37,.92) 0%, rgba(16,61,37,.74) 46%, rgba(16,61,37,.42) 100%)' }}></div>
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '92px clamp(20px,4vw,32px) 92px', color: '#fff' }}>
          <div style={{ maxWidth: 700 }}>
            <Eyebrow light>Over Everts</Eyebrow>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(34px,5.4vw,54px)', letterSpacing: '-.02em', lineHeight: 1.03, margin: '0 0 20px', textWrap: 'balance' }}>Meer dan honderd jaar vakkennis, één persoonlijke aanpak</h1>
            <p style={{ fontSize: 'clamp(17px,2.2vw,20px)', lineHeight: 1.55, color: 'rgba(255,255,255,.92)', margin: 0, maxWidth: 580 }}>Een familiebedrijf in de beste zin van het woord: korte lijnen, echte mensen en oprechte aandacht.</p>
          </div>
        </div>
      </section>

      <section style={{ background: '#fff' }}>
        <div className="evt-2col" style={{ maxWidth: 1200, margin: '0 auto', padding: '80px clamp(20px,4vw,32px)', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'start' }}>
          <div>
            <Eyebrow>Onze geschiedenis</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 34, letterSpacing: '-.015em', margin: '0 0 16px', color: 'var(--fg1)' }}>Van schildersbedrijf in 1922 tot totaal vastgoedonderhoud</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--fg2)', margin: '0 0 32px', maxWidth: 560 }}>
              Drie generaties Everts hebben het bedrijf door economische crises en de Tweede Wereldoorlog heen geloodst. De rode draad is steeds dezelfde gebleven: vakmanschap, oog voor mensen en denken op de lange termijn.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {timeline.map((e, i) => (
                <div key={e.y} style={{ display: 'flex', gap: 24, paddingBottom: i === timeline.length - 1 ? 0 : 26 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 21, color: 'var(--everts-green)', width: 60, flex: 'none' }}>{e.y}</div>
                  <div style={{ position: 'relative', paddingLeft: 24, borderLeft: i === timeline.length - 1 ? 'none' : '2px solid var(--line-200)' }}>
                    <div style={{ position: 'absolute', left: -7, top: 4, width: 12, height: 12, borderRadius: 999, background: 'var(--everts-green)' }} />
                    <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--fg2)' }}>{e.t}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'sticky', top: 94, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <figure style={{ margin: 0 }}>
              <Photo src="assets/everts-historie-bleijenberg.jpg" alt="Een schilder van Everts neemt koffie naast zijn zoon, jaren vijftig" h={380} pos="center 35%" />
              <figcaption style={{ fontSize: 13, color: 'var(--fg4)', margin: '10px 2px 0', lineHeight: 1.5 }}>Koffie op de bouw, jaren vijftig. Het vak ging van vader op zoon.</figcaption>
            </figure>
            <div style={{ background: 'var(--everts-dark-green)', borderRadius: 'var(--radius-xl)', padding: 30, color: '#fff' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 40, lineHeight: 1, letterSpacing: '-.02em' }}>100 jaar</div>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,.85)', margin: '12px 0 0' }}>
                Eén van de laatste familiebedrijven van deze omvang die het volledige vastgoedonderhoud onder één dak levert. Groot genoeg om efficiënt te werken, klein genoeg voor korte lijnen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--line-200)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px clamp(20px,4vw,32px)' }}>
          <div style={{ maxWidth: 640, marginBottom: 48 }}>
            <Eyebrow>De familie</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(26px,3.5vw,34px)', letterSpacing: '-.015em', margin: 0, color: 'var(--fg1)' }}>Vier generaties, dezelfde overtuiging</h2>
          </div>
          <div className="evt-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
            {generaties.map((g) => (
              <div key={g.naam} style={{ background: '#fff', border: '1px solid var(--line-200)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div style={{ display: 'flex', gap: g.fotos.length > 1 ? 2 : 0, height: 200, background: 'var(--everts-dark-green)' }}>
                  {g.fotos.map((f, fi) => (
                    <img key={fi} src={f.src} alt={g.naam} style={{ width: (100 / g.fotos.length) + '%', height: '100%', objectFit: 'cover', objectPosition: f.pos, display: 'block' }} />
                  ))}
                </div>
                <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--everts-green)', marginBottom: 10 }}>{g.label}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--fg1)', lineHeight: 1.2 }}>{g.naam}</div>
                  <div style={{ fontSize: 13, color: 'var(--fg4)', marginTop: 3, marginBottom: 14 }}>{g.jaren}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--fg3)', margin: '0 0 16px', flex: 1 }}>{g.t}</p>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontStyle: 'italic', fontSize: 14, lineHeight: 1.5, color: 'var(--everts-logo-green)', margin: 0, paddingTop: 14, borderTop: '1px solid var(--line-100)' }}>&ldquo;{g.quote}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px clamp(20px,4vw,32px)' }}>
          <div className="evt-2col" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'center' }}>
            <div>
              <Eyebrow>In het werk</Eyebrow>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(26px,3.5vw,32px)', letterSpacing: '-.015em', margin: '0 0 16px', color: 'var(--fg1)' }}>Prestigeprojecten die voor zich spreken</h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--fg2)', margin: 0, maxWidth: 460 }}>
                Door de jaren heen mochten we aan bijzondere panden werken. Dat opdrachtgevers ons keer op keer terugvragen, zien we als het beste bewijs van vakwerk en lange termijn relaties.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {prestige.map((p) => (
                <div key={p.t} style={{ background: 'var(--bg2)', border: '1px solid var(--line-200)', borderRadius: 'var(--radius-lg)', padding: 22 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--fg1)', marginBottom: 7 }}>{p.t}</div>
                  <p style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--fg3)', margin: 0 }}>{p.d}</p>
                </div>
              ))}
            </div>
          </div>
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

// ---------- CONTACT ----------
function Contact() {
  return (
    <div>
      <PageHero eyebrow="Contact" title="Plan een vrijblijvende inspectie" sub="Bel ons of laat uw gegevens achter. U krijgt eerlijk advies, geen verkooppraatje." />
      <section style={{ background: '#fff' }}>
        <div className="evt-2col" style={{ maxWidth: 1100, margin: '0 auto', padding: '72px clamp(20px,4vw,32px)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, margin: '0 0 24px', color: 'var(--fg1)' }}>Direct contact</h2>
            {[['phone-call', '070 301 25 80', 'tel:0703012580'], ['mail', 'info@everts.chat', 'mailto:info@everts.chat'], ['map-pin', 'De Star 3, 2266 NA Leidschendam', null]].map(([ic, tx, href]) => (
              <a key={tx} href={href || '#'} onClick={(e) => { if (!href) e.preventDefault(); }} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18, textDecoration: 'none' }}>
                <div style={{ width: 44, height: 44, borderRadius: 11, background: 'var(--everts-green-100)', color: 'var(--everts-logo-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name={ic} size={20} /></div>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16.5, color: 'var(--fg1)' }}>{tx}</span>
              </a>
            ))}
            <div style={{ marginTop: 22, paddingTop: 22, borderTop: '1px solid var(--line-100)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14.5, color: 'var(--fg2)', marginBottom: 14 }}>Volg ons</div>
              <div style={{ display: 'flex', gap: 10 }}>
                {[
                  ['linkedin', 'LinkedIn', 'https://www.linkedin.com/company/evertsonderhoud/'],
                  ['instagram', 'Instagram', 'https://www.instagram.com/everts.onderhoud/'],
                  ['facebook', 'Facebook', 'https://www.facebook.com/Everts.Onderhoud'],
                ].map(([ic, label, href]) => (
                  <a key={ic} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}
                    style={{ width: 44, height: 44, borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--everts-logo-green)', background: 'var(--everts-green-100)', transition: 'background .15s, color .15s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--everts-green)'; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--everts-green-100)'; e.currentTarget.style.color = 'var(--everts-logo-green)'; }}>
                    <Icon name={ic} size={20} />
                  </a>
                ))}
              </div>
            </div>
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
  const [err, setErr] = useState(false);
  if (sent) return (
    <div style={{ textAlign: 'center', padding: '40px 0' }}>
      <div style={{ width: 56, height: 56, borderRadius: 999, background: 'var(--success-bg)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}><Icon name="check" size={28} /></div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, margin: '0 0 8px', color: 'var(--fg1)' }}>Bedankt, we hebben uw aanvraag ontvangen</h3>
      <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--fg3)', margin: 0 }}>We nemen meestal binnen één werkdag contact met u op.</p>
    </div>
  );
  return (
    <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field"
      onSubmit={(e) => {
        e.preventDefault();
        setErr(false);
        const body = new URLSearchParams(new FormData(e.currentTarget)).toString();
        fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body })
          .then((r) => { if (!r.ok) throw new Error(); setSent(true); })
          .catch(() => setErr(true));
      }}>
      <input type="hidden" name="form-name" value="contact" />
      <p hidden><label>Niet invullen: <input name="bot-field" /></label></p>
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
      {err && <p style={{ fontSize: 13.5, color: 'var(--danger)', margin: '0 0 14px', lineHeight: 1.5 }}>Er ging iets mis bij het versturen. Probeer het opnieuw of mail ons direct op <a href="mailto:info@everts.chat" style={{ color: 'var(--danger)', fontWeight: 600 }}>info@everts.chat</a>.</p>}
      <Button as="button" type="submit" iconRight="arrow-right" full>Aanvraag versturen</Button>
    </form>
  );
}

// ---------- PRIVACYVERKLARING ----------
function Privacy({ onNav }) {
  const blokken = [
    { h: 'Wie wij zijn', p: ['Everts. Onderhoud & Renovatie is gevestigd aan De Star 3, 2266 NA Leidschendam. Voor vragen over deze privacyverklaring of over uw gegevens bereikt u ons via 070 301 25 80 of info@everts.chat.'] },
    { h: 'Welke gegevens we verwerken', p: ['We verwerken alleen de gegevens die u zelf aan ons doorgeeft. Via het contactformulier zijn dat uw naam, de naam van uw organisatie of VvE, uw e-mailadres en het onderwerp van uw aanvraag. Via het sollicitatieformulier zijn dat uw naam, e-mailadres, telefoonnummer, de functie waarop u reageert, uw motivatie en, als u die meestuurt, uw cv.'] },
    { h: 'Waarvoor we ze gebruiken', p: ['We gebruiken uw gegevens uitsluitend om op uw aanvraag of sollicitatie te reageren en om met u in contact te komen. We gebruiken ze niet voor andere doeleinden en sturen u geen ongevraagde commerciële berichten.'] },
    { h: 'Hoe lang we ze bewaren', p: ['Aanvragen bewaren we zo lang als nodig is om uw vraag goed af te handelen. Sollicitaties bewaren we tot uiterlijk vier weken na afronding van de procedure, tenzij u ons toestemming geeft om uw gegevens langer te bewaren.'] },
    { h: 'Delen met anderen', p: ['We verkopen uw gegevens niet en delen ze niet met derden, behalve wanneer dat wettelijk verplicht is of noodzakelijk om uw aanvraag uit te voeren.'] },
    { h: 'Uw rechten', p: ['U heeft het recht om uw gegevens in te zien, te laten corrigeren of te laten verwijderen. Stuur daarvoor een bericht naar info@everts.chat. We reageren zo snel mogelijk, en uiterlijk binnen de wettelijke termijn.'] },
  ];
  return (
    <div>
      <PageHero eyebrow="Privacy" title="Privacyverklaring" sub="We gaan zorgvuldig en terughoudend om met uw gegevens. Hieronder leest u precies wat we verzamelen en waarom." />
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '64px clamp(20px,4vw,32px) 88px' }}>
          {blokken.map((b) => (
            <div key={b.h} style={{ marginBottom: 36 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, letterSpacing: '-.01em', margin: '0 0 12px', color: 'var(--fg1)' }}>{b.h}</h2>
              {b.p.map((t) => <p key={t} style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--fg2)', margin: '0 0 12px' }}>{t}</p>)}
            </div>
          ))}
          <p style={{ fontSize: 13.5, color: 'var(--fg4)', margin: '8px 0 28px' }}>Deze verklaring kan worden aangepast wanneer onze werkwijze of de wetgeving daarom vraagt.</p>
          <Button variant="secondary" icon="arrow-left" onClick={() => onNav('home')}>Terug naar home</Button>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { PageHero, Over, Contact, Privacy });

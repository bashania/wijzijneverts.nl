/* Everts Website — Werken bij: overzicht, vacaturedetail, sollicitatieformulier.
   Register: "jij/je" (recruitment). */

const VACATURES = [
  {
    slug: 'onderhoudsadviseur',
    t: 'Onderhoudsadviseur (calculator onderhoud)',
    loc: 'Leidschendam', type: 'Fulltime', hours: '38 uur', team: 'Werkvoorbereiding & calculatie',
    intro: 'Jij vertaalt een inspectie of bestek naar een heldere, kloppende offerte. Als onderhoudsadviseur ben je de schakel tussen de klant, de uitvoering en de cijfers, met het schilder- en gevelwerk als je vakgebied.',
    taken: [
      'Je calculeert planmatig onderhoud op het gebied van schilderwerk en gevel.',
      'Je doet opnames op locatie en denkt mee over de beste aanpak.',
      'Je stelt heldere offertes en werkbegrotingen op die kloppen.',
      'Je schakelt met uitvoerders en opdrachtgevers, van VvE tot woningcorporatie.',
    ],
    meebrengt: [
      'MBO/HBO werk- en denkniveau, bij voorkeur richting bouw of vastgoedonderhoud.',
      'Ervaring met calculeren of werkvoorbereiding in onderhoud of schilderwerk.',
      'Oog voor detail en gevoel voor wat een gebouw nodig heeft.',
      'Je communiceert helder, ook als de boodschap wat minder prettig is.',
    ],
  },
  {
    slug: 'bouwkundig-calculator',
    t: 'Bouwkundig calculator',
    loc: 'Leidschendam', type: 'Fulltime', hours: '38 uur', team: 'Werkvoorbereiding & calculatie',
    intro: 'Van houtrotherstel tot complete renovatie: jij rekent het door. Als bouwkundig calculator zorg je dat onze offertes realistisch zijn en dat de uitvoering met een kloppend plan de straat op gaat.',
    taken: [
      'Je maakt calculaties voor bouwkundig onderhoud en renovatieprojecten.',
      'Je leest tekeningen en bestekken en signaleert wat erbij komt kijken.',
      'Je vraagt offertes op bij leveranciers en onderaannemers.',
      'Je werkt nauw samen met uitvoerders en projectleiders.',
    ],
    meebrengt: [
      'MBO/HBO opleiding richting bouwkunde of een vergelijkbare achtergrond.',
      'Ervaring met bouwkundig calculeren of werkvoorbereiding.',
      'Je rekent nauwkeurig en houdt het overzicht over meerdere projecten.',
      'Een proactieve houding: je denkt een stap vooruit.',
    ],
  },
  {
    slug: 'onderhoudsschilder',
    t: 'Onderhoudsschilder',
    loc: 'Zuid-Holland', type: 'Fulltime', hours: '38 uur', team: 'Uitvoering schilderwerk',
    intro: 'Jij zorgt dat gebouwen er weer jaren tegenaan kunnen. Als onderhoudsschilder werk je aan binnen- en buitenschilderwerk bij VvE\u2019s, corporaties en maatschappelijk vastgoed in de regio.',
    taken: [
      'Je voert planmatig buiten- en binnenschilderwerk uit.',
      'Je pakt kleine houtrot- en kozijnreparaties mee waar nodig.',
      'Je werkt netjes en met respect voor bewoners en omgeving.',
      'Je levert werk af waar je trots op bent, goed is nooit goed genoeg.',
    ],
    meebrengt: [
      'Een afgeronde opleiding schilderen of aantoonbare ervaring in het vak.',
      'Je werkt zelfstandig én prettig samen in een vast team.',
      'Rijbewijs B is een pré.',
      'Je houdt van afwisseling en netjes afgewerkt werk.',
    ],
  },
  {
    slug: 'onderhoudstimmerman',
    t: 'Onderhoudstimmerman',
    loc: 'Zuid-Holland', type: 'Fulltime', hours: '38 uur', team: 'Uitvoering bouwkundig',
    intro: 'Houtrot, kozijnen, dakranden: jij weet er raad mee. Als onderhoudstimmerman voer je het bouwkundig herstel uit dat een gebouw weer waterdicht en in goede staat brengt.',
    taken: [
      'Je voert houtrotherstel en kozijnonderhoud uit op locatie.',
      'Je vervangt en repareert houten gevel- en dakdelen.',
      'Je werkt samen met de schilders en uitvoerders op het project.',
      'Je denkt mee over de beste, duurzame oplossing.',
    ],
    meebrengt: [
      'Een opleiding timmeren of ruime ervaring als (onderhouds)timmerman.',
      'Je bent allround en draait je hand niet om voor verschillende klussen.',
      'Rijbewijs B is een pré.',
      'Je werkt secuur en netjes, ook in bewoonde omgevingen.',
    ],
  },
];
const BIEDT = [
  'Een vast contract bij een werkgever die er al honderd jaar staat.',
  'Een marktconform salaris dat past bij jouw ervaring.',
  'Ruimte om bij te leren via toolbox-meetings en gerichte bijscholing.',
  'Een hecht team met korte lijnen, van directie tot vakmens.',
  'Drie keer per jaar een Everts-feest, waar je partner en kinderen welkom zijn.',
  'Goede secundaire voorwaarden volgens cao.',
];

function findVacature(slug) { return VACATURES.find((v) => v.slug === slug); }

// ---------- WERKEN BIJ (overzicht) ----------
function Werken({ onNav }) {
  const perks = [
    { icon: 'users', t: 'Een team dat als familie voelt', d: 'Korte lijnen, een open-deurenbeleid en een WhatsApp-community van directie tot vakmens.' },
    { icon: 'shield-check', t: 'Zekerheid en stabiliteit', d: 'Een werkgever die er al honderd jaar staat, en er morgen nog is.' },
    { icon: 'graduation-cap', t: 'Ruimte om bij te leren', d: 'Maandelijkse toolbox-meetings en gerichte bijscholing op techniek en veiligheid.' },
    { icon: 'party-popper', t: 'Aandacht voor de hele mens', d: 'Drie keer per jaar een Everts-feest, waar partner en kinderen welkom zijn.' },
  ];
  return (
    <div>
      <PageHero eyebrow="Werken bij Everts" title="Bij Everts ben je geen nummer" sub="Je bent een vakmens in een hecht team, met de ruimte om te groeien en een directie die je kent bij naam." />
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px clamp(20px,4vw,32px)' }}>
          <div className="evt-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 28, marginBottom: 72 }}>
            {perks.map((p) => (
              <div key={p.t}>
                <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--everts-green-100)', color: 'var(--everts-logo-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><Icon name={p.icon} size={23} /></div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--fg1)', marginBottom: 8 }}>{p.t}</div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--fg3)', margin: 0 }}>{p.d}</p>
              </div>
            ))}
          </div>

          <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', marginBottom: 72 }}>
            <img src="assets/everts-foto-team.jpg" alt="Het team van Everts op locatie" style={{ width: '100%', height: 380, objectFit: 'cover', objectPosition: 'center 28%', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(16,61,37,.82) 0%, rgba(16,61,37,.12) 55%, transparent 100%)' }} />
            <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 'clamp(24px,4vw,40px)', color: '#fff' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(22px,3vw,30px)', letterSpacing: '-.015em', maxWidth: 560, lineHeight: 1.12 }}>Een hecht team van vakmensen, van directie tot de steiger</div>
            </div>
          </div>

          <div id="vacatures" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 24 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(26px,3.5vw,30px)', letterSpacing: '-.015em', margin: 0, color: 'var(--fg1)' }}>Open vacatures</h2>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: 'var(--everts-green)' }}>{VACATURES.length} openstaande functies</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {VACATURES.map((v) => <VacatureRow key={v.slug} v={v} onNav={onNav} />)}
          </div>

          <div style={{ marginTop: 40, background: 'var(--everts-green-50)', border: '1px solid var(--everts-green-100)', borderRadius: 'var(--radius-xl)', padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 18 }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, color: 'var(--fg1)', marginBottom: 4 }}>Geen passende vacature gevonden?</div>
              <p style={{ margin: 0, fontSize: 15, color: 'var(--fg2)' }}>Stuur ons een open sollicitatie. We maken graag kennis met goede vakmensen.</p>
            </div>
            <Button variant="secondary" iconRight="arrow-right" onClick={() => onNav('solliciteren', 'open')}>Open sollicitatie</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function VacatureRow({ v, onNav }) {
  const [h, setH] = useState(false);
  return (
    <div onClick={() => onNav('vacature', v.slug)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '20px 24px', border: '1px solid var(--line-200)', borderRadius: 'var(--radius-md)', cursor: 'pointer',
        background: h ? 'var(--everts-green-50)' : 'var(--bg2)', boxShadow: h ? 'var(--shadow-md)' : 'none', transition: 'background .15s, box-shadow .15s' }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17.5, color: 'var(--fg1)' }}>{v.t}</div>
        <div style={{ display: 'flex', gap: 16, marginTop: 6, fontSize: 14, color: 'var(--fg3)', flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Icon name="map-pin" size={14} /> {v.loc}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Icon name="clock" size={14} /> {v.type} · {v.hours}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Icon name="users" size={14} /> {v.team}</span>
        </div>
      </div>
      <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: 'var(--everts-green)', whiteSpace: 'nowrap' }} className="evt-hide-sm">Bekijk vacature <Icon name="arrow-right" size={16} /></span>
      <span className="evt-show-sm" style={{ color: 'var(--everts-green)' }}><Icon name="arrow-right" size={20} /></span>
    </div>
  );
}

// ---------- VACATURE DETAIL ----------
function VacatureDetail({ slug, onNav }) {
  const v = findVacature(slug);
  if (!v) return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '120px 32px', textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'var(--font-display)' }}>Vacature niet gevonden</h2>
      <Button variant="secondary" icon="arrow-left" onClick={() => onNav('werken')}>Terug naar alle vacatures</Button>
    </div>
  );
  return (
    <div>
      <PageHero eyebrow="Vacature" title={v.t} sub={v.intro} />
      <section style={{ background: '#fff' }}>
        <div className="evt-detail" style={{ maxWidth: 1100, margin: '0 auto', padding: '56px clamp(20px,4vw,32px) 88px', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 56, alignItems: 'start' }}>
          <div>
            <a href="#" onClick={(e) => { e.preventDefault(); onNav('werken'); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: 'var(--everts-green)', textDecoration: 'none', marginBottom: 28 }}><Icon name="arrow-left" size={16} /> Alle vacatures</a>
            <DetailBlock title="Wat ga je doen?" items={v.taken} icon="check" />
            <DetailBlock title="Wat breng je mee?" items={v.meebrengt} icon="check" />
            <DetailBlock title="Wat bieden we jou?" items={BIEDT} icon="check" />
            <div style={{ marginTop: 36, paddingTop: 32, borderTop: '1px solid var(--line-200)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, margin: '0 0 10px', color: 'var(--fg1)' }}>Klinkt dit als jouw volgende stap?</h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.65, color: 'var(--fg2)', margin: '0 0 20px', maxWidth: 540 }}>Solliciteer direct, het kost je twee minuten. Heb je eerst nog een vraag? Bel of app gerust met Sandra van ons team.</p>
              <Button iconRight="arrow-right" onClick={() => onNav('solliciteren', v.slug)}>Solliciteer op deze functie</Button>
            </div>
          </div>

          <aside style={{ position: 'sticky', top: 94 }}>
            <div style={{ background: 'var(--bg2)', border: '1px solid var(--line-200)', borderRadius: 'var(--radius-xl)', padding: 28 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--everts-green)', marginBottom: 16 }}>Over deze functie</div>
              {[['map-pin', 'Locatie', v.loc], ['clock', 'Dienstverband', v.type + ' · ' + v.hours], ['users', 'Team', v.team], ['briefcase', 'Vakgebied', 'Onderhoud & renovatie']].map(([ic, k, val]) => (
                <div key={k} style={{ display: 'flex', gap: 12, padding: '11px 0', borderBottom: '1px solid var(--line-100)' }}>
                  <span style={{ color: 'var(--everts-logo-green)', flex: 'none', marginTop: 1 }}><Icon name={ic} size={18} /></span>
                  <div>
                    <div style={{ fontSize: 12.5, color: 'var(--fg3)' }}>{k}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: 'var(--fg1)' }}>{val}</div>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 20 }}><Button full iconRight="arrow-right" onClick={() => onNav('solliciteren', v.slug)}>Solliciteer nu</Button></div>
            </div>
            <Recruiter />
          </aside>
        </div>
      </section>
    </div>
  );
}

function DetailBlock({ title, items, icon }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, margin: '0 0 16px', color: 'var(--fg1)', letterSpacing: '-.01em' }}>{title}</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {items.map((it) => (
          <li key={it} style={{ display: 'flex', gap: 12, fontSize: 15.5, lineHeight: 1.55, color: 'var(--fg2)' }}>
            <span style={{ flex: 'none', width: 24, height: 24, borderRadius: 999, background: 'var(--everts-green-100)', color: 'var(--everts-logo-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}><Icon name={icon} size={14} /></span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Recruiter() {
  return (
    <div style={{ marginTop: 20, background: '#fff', border: '1px solid var(--line-200)', borderRadius: 'var(--radius-xl)', padding: 24, boxShadow: 'var(--shadow-sm)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
        <div style={{ width: 56, height: 56, borderRadius: 999, background: 'var(--everts-green-100)', color: 'var(--everts-logo-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, flex: 'none' }}>S</div>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--fg1)' }}>Sandra de Wit</div>
          <div style={{ fontSize: 13.5, color: 'var(--fg3)' }}>Werving &amp; selectie</div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <a href="tel:0703012580" style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 14.5, color: 'var(--fg2)', textDecoration: 'none', fontWeight: 500 }}><Icon name="phone" size={16} style={{ color: 'var(--everts-logo-green)' }} /> 070 301 25 80</a>
        <a href="mailto:werkenbij@evertsgroep.nl" style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 14.5, color: 'var(--fg2)', textDecoration: 'none', fontWeight: 500 }}><Icon name="mail" size={16} style={{ color: 'var(--everts-logo-green)' }} /> werkenbij@evertsgroep.nl</a>
      </div>
    </div>
  );
}

// ---------- SOLLICITATIEFORMULIER ----------
function Solliciteren({ slug, onNav }) {
  const v = slug === 'open' ? null : findVacature(slug);
  const titel = v ? v.t : 'Open sollicitatie';
  const [sent, setSent] = useState(false);
  const [fileName, setFileName] = useState('');

  if (sent) return (
    <div>
      <PageHero eyebrow="Sollicitatie ontvangen" title="Bedankt voor je sollicitatie" sub="We hebben je gegevens goed ontvangen." />
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', padding: '72px clamp(20px,4vw,32px)', textAlign: 'center' }}>
          <div style={{ width: 64, height: 64, borderRadius: 999, background: 'var(--success-bg)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 22px' }}><Icon name="check" size={32} /></div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, margin: '0 0 12px', color: 'var(--fg1)' }}>We nemen snel contact met je op</h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--fg2)', margin: '0 0 28px' }}>Sandra kijkt je sollicitatie persoonlijk door en belt of mailt je meestal binnen twee werkdagen. Tot snel.</p>
          <Button variant="secondary" icon="arrow-left" onClick={() => onNav('werken')}>Terug naar vacatures</Button>
        </div>
      </section>
    </div>
  );

  return (
    <div>
      <PageHero eyebrow="Solliciteren" title={'Solliciteer: ' + titel} sub="Vul je gegevens in en voeg je cv toe. We lezen elke sollicitatie persoonlijk." />
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '56px clamp(20px,4vw,32px) 88px' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); onNav(v ? 'vacature' : 'werken', v ? v.slug : null); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: 'var(--everts-green)', textDecoration: 'none', marginBottom: 28 }}><Icon name="arrow-left" size={16} /> Terug</a>
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); window.scrollTo({ top: 0 }); }}
            style={{ background: 'var(--bg2)', border: '1px solid var(--line-200)', borderRadius: 'var(--radius-xl)', padding: 'clamp(24px,4vw,36px)' }}>
            <div className="evt-2col-form" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <Field label="Voornaam" placeholder="Jouw voornaam" required />
              <Field label="Achternaam" placeholder="Jouw achternaam" required />
              <Field label="E-mailadres" type="email" placeholder="jij@email.nl" required />
              <Field label="Telefoonnummer" type="tel" placeholder="06 12 34 56 78" required />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13.5, color: 'var(--fg2)', display: 'block', marginBottom: 6 }}>Functie</label>
              <select value={v ? v.slug : 'open'} onChange={() => {}}
                style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--fg1)', padding: '11px 13px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--line-200)', background: '#fff' }}>
                {VACATURES.map((x) => <option key={x.slug} value={x.slug}>{x.t}</option>)}
                <option value="open">Open sollicitatie</option>
              </select>
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13.5, color: 'var(--fg2)', display: 'block', marginBottom: 6 }}>Motivatie <span style={{ color: 'var(--fg4)', fontWeight: 500 }}>(optioneel)</span></label>
              <textarea rows={4} placeholder="Vertel kort waarom je bij Everts past." style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--fg1)', padding: '11px 13px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--line-200)', background: '#fff', outline: 'none', resize: 'vertical' }} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13.5, color: 'var(--fg2)', display: 'block', marginBottom: 6 }}>CV uploaden</label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 18px', borderRadius: 'var(--radius-md)', border: '1.5px dashed var(--line-200)', background: '#fff', cursor: 'pointer' }}>
                <span style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--everts-green-100)', color: 'var(--everts-logo-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name={fileName ? 'file-check' : 'upload'} size={19} /></span>
                <span style={{ fontSize: 14.5, color: fileName ? 'var(--fg1)' : 'var(--fg3)', fontWeight: fileName ? 600 : 400 }}>{fileName || 'Klik om je cv toe te voegen (PDF of Word)'}</span>
                <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setFileName(e.target.files[0] ? e.target.files[0].name : '')} style={{ display: 'none' }} />
              </label>
            </div>
            <Button as="button" type="submit" iconRight="arrow-right" full>Verstuur sollicitatie</Button>
            <p style={{ fontSize: 12.5, color: 'var(--fg4)', textAlign: 'center', margin: '14px 0 0', lineHeight: 1.5 }}>Je gegevens gebruiken we alleen voor deze sollicitatie. Zie onze privacyverklaring.</p>
          </form>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { Werken, VacatureDetail, Solliciteren });

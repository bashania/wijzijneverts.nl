/* Everts Website — Discipline landingspagina's (Schilderwerk, Bouwkundig, Dakdekken, Servicedesk) */

const DISCIPLINES = [
  {
    slug: 'schilderwerk',
    icon: 'paint-roller',
    nav: 'Schilderwerk & gevel',
    title: 'Schilderwerk & gevelonderhoud',
    onderdeelVan: 'Everts. Onderhoud & renovatie',
    photo: 'assets/everts-foto-gevel.jpg', photoPos: 'center 55%',
    lead: 'Planmatig buiten- en binnenschilderwerk dat uw gevel jaar na jaar in goede staat houdt. Het vak waarmee we in 1922 begonnen, en dat we nog elke dag verder verfijnen.',
    intro: 'Een gevel die er goed bij staat, is meer dan mooi. Het is de eerste bescherming van uw vastgoed tegen weer en wind. Wij werken met een vaste onderhoudscyclus, zodat klein onderhoud groot herstel voorblijft. Onze schilders kennen hun panden en zien wat er aankomt, ruim voordat het een probleem wordt.',
    services: [
      { icon: 'paint-roller', t: 'Buitenschilderwerk', d: 'Planmatig schilderwerk aan gevels, kozijnen en houtwerk volgens een vaste cyclus.' },
      { icon: 'home', t: 'Binnenschilderwerk', d: 'Trappenhuizen, gemeenschappelijke ruimtes en woningen, netjes en met respect voor bewoners.' },
      { icon: 'droplets', t: 'Gevelreiniging & impregneren', d: 'Reinigen, herstellen en beschermen van metsel- en pleisterwerk tegen vocht.' },
      { icon: 'square-pen', t: 'Kozijnonderhoud & houtrotherstel', d: 'Vroegtijdig herstel van houtrot voorkomt dure vervanging later.' },
      { icon: 'layout-panel-left', t: 'Beglazing & HR++', d: 'Vervanging van glas, met advies over isolerende beglazing die direct bespaart.' },
      { icon: 'palette', t: 'Kleur- en onderhoudsadvies', d: 'Een meerjarenplan met de juiste kleuren en het juiste moment van onderhoud.' },
    ],
  },
  {
    slug: 'bouwkundig',
    icon: 'hard-hat',
    nav: 'Bouwkundig onderhoud',
    title: 'Bouwkundig onderhoud & herstel',
    onderdeelVan: 'Everts. Onderhoud & renovatie',
    photo: 'assets/everts-foto-voegwerk.jpg', photoPos: 'center 50%',
    lead: 'Van houtrot en metselwerk tot een complete renovatie. Onze uitvoerders coördineren het hele traject, met één vast aanspreekpunt voor u.',
    intro: 'Bouwkundig onderhoud vraagt om overzicht. Vaak komt er meer bij kijken dan op het eerste gezicht zichtbaar is. Onze projectleiders en uitvoerders brengen het werk vooraf goed in kaart, stemmen af met bewoners en opdrachtgevers, en zorgen dat een project van begin tot oplevering soepel verloopt.',
    services: [
      { icon: 'brick-wall', t: 'Metsel- en voegwerk', d: 'Herstel en vervanging van metselwerk, voegwerk en gevelelementen.' },
      { icon: 'hard-hat', t: 'Betonreparatie', d: 'Herstel van betonschade en bescherming tegen verdere aantasting.' },
      { icon: 'hammer', t: 'Timmer- en houtwerk', d: 'Onderhoud en vervanging van houten gevel-, dak- en kozijndelen.' },
      { icon: 'frame', t: 'Kozijnvervanging', d: 'Vervanging van kozijnen in hout, kunststof of aluminium, inclusief beglazing.' },
      { icon: 'blocks', t: 'Renovatie & verbouwing', d: 'Grotere ingrepen die de waarde en levensduur van uw vastgoed verlengen.' },
      { icon: 'leaf', t: 'Verduurzaming', d: 'Isolatie en energiebesparende maatregelen, standaard meegenomen in ons advies.' },
    ],
  },
  {
    slug: 'dakdekken',
    icon: 'house',
    nav: 'Dakdekken',
    title: 'Dakdekken',
    onderdeelVan: 'Everts. Onderhoud & renovatie',
    photo: 'assets/everts-foto-dak-plat.jpg', photoPos: 'center 45%',
    lead: 'Plat- en hellend dakwerk, onderhoud, inspectie en vervanging. Dakdekken doen we volledig in eigen huis, met eigen dakdekkers.',
    intro: 'Een dak doet zijn werk pas echt goed als u er nooit aan hoeft te denken. Daarom inspecteren we proactief, herstellen we klein voordat het groot wordt en houden we de afwatering op orde. Doordat dakdekken bij ons in eigen beheer is, schakelt u niet met een aparte partij: het dak hoort er gewoon bij.',
    services: [
      { icon: 'house', t: 'Platte daken', d: 'Bitumen en EPDM, onderhoud en complete vervanging.' },
      { icon: 'triangle', t: 'Hellende daken', d: 'Pannen, leien en dakbeschot, herstel en vernieuwing.' },
      { icon: 'search-check', t: 'Dakinspectie', d: 'Periodieke controle die gebreken signaleert voor ze schade veroorzaken.' },
      { icon: 'waves', t: 'Dakgoten & afvoer', d: 'Reinigen en herstellen van goten en hemelwaterafvoer.' },
      { icon: 'siren', t: 'Spoedherstel lekkage', d: 'Snel ter plaatse bij daklekkage, zodat de schade beperkt blijft.' },
      { icon: 'leaf', t: 'Dakisolatie', d: 'Isoleren bij vervanging, voor lagere energiekosten en meer comfort.' },
    ],
  },
  {
    slug: 'servicedesk',
    icon: 'headset',
    nav: 'Everts Servicedesk',
    title: 'Everts Servicedesk',
    onderdeelVan: 'Everts Servicedesk',
    photo: 'assets/everts-foto-servicedesk.jpg', photoPos: 'center 50%',
    lead: 'Klein dagelijks onderhoud, mutatiewerk en spoedreparaties. Eén melding is genoeg, de rest regelen wij, zonder uitgebreid offertetraject.',
    intro: 'Niet elk klusje hoeft een project te zijn. Voor het kleine, dagelijkse werk is er de Everts Servicedesk: één meldpunt waar u terecht kunt voor reparaties, mutatieonderhoud en spoedgevallen. We pakken het snel op en houden u op de hoogte, zodat u er zelf geen omkijken naar heeft.',
    services: [
      { icon: 'wrench', t: 'Dagelijks onderhoud', d: 'Kleine reparaties en klussen die geen uitgebreid traject vragen.' },
      { icon: 'door-open', t: 'Mutatieonderhoud', d: 'Woningen snel weer verhuurklaar bij een huurderswisseling.' },
      { icon: 'siren', t: 'Spoedreparaties', d: 'Bij calamiteiten staan we snel op de stoep om erger te voorkomen.' },
      { icon: 'square', t: 'Glasschade', d: 'Vervanging van gebroken ruiten, vaak nog dezelfde dag geregeld.' },
      { icon: 'phone-call', t: 'Eén meldpunt', d: 'Eén telefoonnummer en aanspreekpunt voor al uw kleine onderhoud.' },
      { icon: 'clipboard-check', t: 'Heldere afhandeling', d: 'U weet wat er gebeurt, wanneer het klaar is en wat het kost.' },
    ],
  },
];

const VOOR_WIE = [
  { icon: 'building-2', t: "VvE's", d: 'Grotere verenigingen van eigenaren die hun onderhoud zorgeloos willen regelen.' },
  { icon: 'briefcase', t: 'Vastgoedeigenaren & beleggers', d: 'Eigenaren die de waarde van hun portefeuille willen behouden en verbeteren.' },
  { icon: 'key-round', t: 'Woningcorporaties', d: 'Planmatig onderhoud en mutatiewerk voor grotere woningvoorraden.' },
  { icon: 'graduation-cap', t: 'Zorg & onderwijs', d: 'Maatschappelijk vastgoed waar continuïteit en netjes werken voorop staan.' },
];

const AANPAK = [
  { n: '01', t: 'Inspectie & advies', d: 'We komen langs, bekijken de staat van uw vastgoed en geven eerlijk advies, ook als de boodschap minder prettig is.' },
  { n: '02', t: 'Heldere offerte', d: 'U krijgt een duidelijk voorstel met een realistische planning en prijs, zonder verrassingen achteraf.' },
  { n: '03', t: 'Vakkundige uitvoering', d: 'Vaste teams voeren het werk uit, met één aanspreekpunt en korte lijnen tijdens het hele traject.' },
  { n: '04', t: 'Oplevering & vooruitkijken', d: 'We leveren netjes op en denken meteen mee over wat er over een paar jaar nodig is.' },
];

function findDiscipline(slug) { return DISCIPLINES.find((d) => d.slug === slug); }

function DisciplinePage({ slug, onNav }) {
  const d = findDiscipline(slug);
  useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  if (!d) return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '120px 32px', textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'var(--font-display)' }}>Pagina niet gevonden</h2>
      <Button variant="secondary" icon="arrow-left" onClick={() => onNav('diensten')}>Terug naar Wat we doen</Button>
    </div>
  );
  const others = DISCIPLINES.filter((x) => x.slug !== d.slug);

  return (
    <div>
      {/* HERO */}
      <section style={{ position: 'relative' }}>
        <img src={d.photo} alt={d.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: d.photoPos }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(16,61,37,.92) 0%, rgba(16,61,37,.74) 45%, rgba(16,61,37,.4) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '64px clamp(20px,4vw,32px) 72px', color: '#fff' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); onNav('diensten'); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: 'rgba(255,255,255,.85)', textDecoration: 'none', marginBottom: 28 }}><Icon name="arrow-left" size={16} /> Wat we doen</a>
          <div style={{ maxWidth: 680 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <span style={{ width: 52, height: 52, borderRadius: 13, background: 'rgba(255,255,255,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name={d.icon} size={26} /></span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.85)' }}>{d.onderdeelVan}</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px,5.2vw,50px)', letterSpacing: '-.02em', lineHeight: 1.04, margin: '0 0 18px' }}>{d.title}</h1>
            <p style={{ fontSize: 'clamp(17px,2.2vw,20px)', lineHeight: 1.55, color: 'rgba(255,255,255,.92)', margin: '0 0 30px', maxWidth: 560 }}>{d.lead}</p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Button size="lg" variant="white" iconRight="arrow-right" onClick={() => onNav('contact')}>Maak een afspraak</Button>
              <Button size="lg" variant="white" icon="phone-call" as="a" href="tel:0703012580">070 301 25 80</Button>
            </div>
          </div>
        </div>
      </section>

      {/* OVERZICHT */}
      <section style={{ background: '#fff' }}>
        <div className="evt-2col" style={{ maxWidth: 1100, margin: '0 auto', padding: '76px clamp(20px,4vw,32px)', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 56, alignItems: 'start' }}>
          <div>
            <Eyebrow>In het kort</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3.2vw,30px)', letterSpacing: '-.015em', margin: '0 0 18px', color: 'var(--fg1)' }}>Onderhoud dat problemen voorblijft</h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.75, color: 'var(--fg2)', margin: 0 }}>{d.intro}</p>
          </div>
          <aside style={{ background: 'var(--bg2)', border: '1px solid var(--line-200)', borderRadius: 'var(--radius-xl)', padding: 26 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12.5, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--everts-green)', marginBottom: 14 }}>Goed om te weten</div>
            {[['layers', 'Vakgebied', d.nav], ['user-round', 'Aanspreekpunt', 'Eén vaste contactpersoon'], ['repeat', 'Werkwijze', 'Planmatig, vaste onderhoudscyclus'], ['map-pin', 'Werkgebied', 'Zuid-Holland e.o.']].map(([ic, k, v]) => (
              <div key={k} style={{ display: 'flex', gap: 12, padding: '11px 0', borderBottom: '1px solid var(--line-100)' }}>
                <span style={{ color: 'var(--everts-logo-green)', flex: 'none', marginTop: 1 }}><Icon name={ic} size={18} /></span>
                <div>
                  <div style={{ fontSize: 12.5, color: 'var(--fg3)' }}>{k}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14.5, color: 'var(--fg1)' }}>{v}</div>
                </div>
              </div>
            ))}
            <div style={{ marginTop: 18 }}><Button full iconRight="arrow-right" onClick={() => onNav('contact')}>Plan een inspectie</Button></div>
          </aside>
        </div>
      </section>

      {/* WAT WE DOEN (sub-services) */}
      <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--line-200)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px clamp(20px,4vw,32px)' }}>
          <div style={{ maxWidth: 620, marginBottom: 44 }}>
            <Eyebrow>Wat we voor u doen</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(26px,3.5vw,34px)', letterSpacing: '-.015em', margin: 0, color: 'var(--fg1)' }}>Alles onder één dak</h2>
          </div>
          <div className="evt-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {d.services.map((s) => (
              <div key={s.t} style={{ background: '#fff', border: '1px solid var(--line-200)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', padding: 26 }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--everts-green-100)', color: 'var(--everts-logo-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><Icon name={s.icon} size={23} /></div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--fg1)', marginBottom: 8 }}>{s.t}</div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--fg3)', margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AANPAK */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px clamp(20px,4vw,32px)' }}>
          <div style={{ maxWidth: 620, marginBottom: 44 }}>
            <Eyebrow>Onze aanpak</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(26px,3.5vw,34px)', letterSpacing: '-.015em', margin: 0, color: 'var(--fg1)' }}>Van advies tot oplevering, in vier stappen</h2>
          </div>
          <div className="evt-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
            {AANPAK.map((a) => (
              <div key={a.n}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, color: 'var(--everts-green)', letterSpacing: '-.02em', marginBottom: 10 }}>{a.n}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--fg1)', marginBottom: 8 }}>{a.t}</div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--fg3)', margin: 0 }}>{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOOR WIE */}
      <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--line-200)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px clamp(20px,4vw,32px)' }}>
          <div style={{ maxWidth: 620, marginBottom: 44 }}>
            <Eyebrow>Voor wie</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(26px,3.5vw,34px)', letterSpacing: '-.015em', margin: 0, color: 'var(--fg1)' }}>Zakelijke opdrachtgevers die ontzorgd willen worden</h2>
          </div>
          <div className="evt-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
            {VOOR_WIE.map((w) => (
              <div key={w.t} style={{ background: '#fff', border: '1px solid var(--line-200)', borderRadius: 'var(--radius-lg)', padding: 24 }}>
                <div style={{ color: 'var(--everts-logo-green)', marginBottom: 14 }}><Icon name={w.icon} size={26} /></div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16.5, color: 'var(--fg1)', marginBottom: 7 }}>{w.t}</div>
                <p style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--fg3)', margin: 0 }}>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANDERE DISCIPLINES */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px clamp(20px,4vw,32px)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(22px,3vw,26px)', letterSpacing: '-.015em', margin: '0 0 28px', color: 'var(--fg1)' }}>Onze andere disciplines</h2>
          <div className="evt-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {others.map((o) => (
              <div key={o.slug} onClick={() => { onNav('discipline', o.slug); }}
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14, padding: '18px 20px', border: '1px solid var(--line-200)', borderRadius: 'var(--radius-md)', background: 'var(--bg2)', transition: 'background .15s, box-shadow .15s' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--everts-green-50)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--bg2)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <span style={{ width: 42, height: 42, borderRadius: 11, background: 'var(--everts-green-100)', color: 'var(--everts-logo-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name={o.icon} size={21} /></span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15.5, color: 'var(--fg1)', flex: 1 }}>{o.nav}</span>
                <Icon name="arrow-right" size={18} style={{ color: 'var(--everts-green)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', backgroundImage: "url('assets/everts-achtergrond-klein.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(16,61,37,.8)' }} />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '72px clamp(20px,4vw,32px)', textAlign: 'center', color: '#fff' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,4vw,38px)', letterSpacing: '-.02em', margin: '0 0 14px' }}>Benieuwd wat we voor uw vastgoed kunnen betekenen?</h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,.88)', maxWidth: 540, margin: '0 auto 26px' }}>Vraag vrijblijvend een inspectie aan. U krijgt eerlijk advies, geen verkooppraatje.</p>
          <Button size="lg" variant="white" iconRight="arrow-right" onClick={() => onNav('contact')}>Plan een inspectie</Button>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { DISCIPLINES, DisciplinePage });

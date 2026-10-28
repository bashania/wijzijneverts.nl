/* Everts Website — Opgave-pagina's (Renovatie, Verduurzaming, ZEP voor VvE's, Mutatieonderhoud).
   Een opgave is de vraag waarmee een opdrachtgever binnenkomt; de vakgebieden (Disciplines.jsx) voeren het werk uit.
   Elk onderwerp heeft één eigen pagina: andere pagina's noemen het kort en linken hierheen. */

const OPGAVEN = [
  {
    slug: 'renovatie',
    icon: 'hammer',
    nav: 'Renovatie',
    label: 'Renovatie',
    title: 'Uw gebouw weer jaren vooruit',
    lead: 'Een renovatie begint met goed kijken. Wat is aan vervanging toe, en wat kan nog jaren mee? Wij brengen het in kaart en regelen het werk van advies tot oplevering, met een duidelijke planning en één vast aanspreekpunt.',
    kaart: 'Gevels, daken, entrees, keukens en badkamers. Wij coördineren het hele traject.',
    photo: '/assets/everts-foto-gevel.jpg', photoPos: 'center 50%', photoAlt: 'Vakmensen van Everts aan het werk bij een galerijflat',
    knop: 'Bespreek uw renovatie', onderwerp: 'Renovatie',
    vakgebieden: ['schilderwerk', 'bouwkundig', 'dakdekken'],
    secties: [
      { type: 'intro', eyebrow: 'In het kort', h: 'Goed werk begint met overzicht',
        p: ['Een dak dat aan vervanging toe is, kozijnen die beter kunnen, een entree die gedateerd oogt. Wij bekijken het gebouw als geheel en signaleren ook wat er over twee of drie jaar aankomt.',
          'Heeft u een meerjarenonderhoudsplan (MJOP)? Dan is dat ons vertrekpunt. Waar onderhoud en verduurzaming samen kunnen, nemen we dat mee in ons voorstel.'],
        feiten: [['user-round', 'Aanspreekpunt', 'Eén vaste contactpersoon'], ['hard-hat', 'Uitvoering', 'Circa 50 eigen vakmensen'], ['map-pin', 'Werkgebied', 'Zuid-Holland e.o.']] },
      { type: 'kaarten', eyebrow: 'Wat we voor u doen', h: 'Van gevel tot badkamer',
        lead: 'We werken met eigen vakmensen en vaste teams. Is er een specialist nodig, dan plannen en begeleiden wij die. U schakelt met één partij.',
        items: [
          { foto: '/assets/everts-foto-voegwerk.jpg', alt: 'Voegwerk aan een gevel', icon: 'house', t: 'Gevels en daken', d: 'Gevels, voegwerk, kozijnen en daken. Dakwerk doen we met eigen dakdekkers.' },
          { foto: '/assets/beeld-entree.webp', alt: 'Entree van een appartementengebouw', icon: 'building-2', t: 'Entrees en algemene ruimten', d: 'Entree, trappenhuis en gangen: het eerste wat bewoners en bezoekers zien.' },
          { foto: '/assets/beeld-badkamer.webp', alt: 'Gerenoveerde badkamer', icon: 'bath', t: 'Keukens, badkamers en toiletten', d: 'Per woning of per complex. Bewoners weten vooraf hoelang ze zonder keuken of badkamer zitten.' },
          { foto: '/assets/beeld-isolatie.webp', alt: 'Isolatie wordt in een gevel aangebracht', icon: 'leaf', t: 'Onderhoud en verduurzaming samen', d: 'Isoleren als dak of gevel toch open gaat. Eén steiger, één keer overlast.' },
        ],
        meer: { titel: 'Alle werkzaamheden en binnenrenovaties', punten: [
          ['Gevels en daken', 'Renovatie van gevels, dakbedekking, kozijnen en beglazing. Betonschade aan balkons herstellen we in hetzelfde traject.'],
          ['Entrees en algemene ruimten', 'We knappen trappenhuizen, gangen en entrees op, zodat ze er weer verzorgd bij staan en goed bruikbaar zijn.'],
          ['Keukens, badkamers en toiletten', 'Vernieuwen per woning of in een heel complex. Per woning spreken we vooraf de uitvoeringsdagen af en wat de bewoner in die dagen kan gebruiken.'],
          ['Binnenrenovaties', 'Bouwkundig herstel en afwerking van woningen en maatschappelijk vastgoed. In zorg- en onderwijsgebouwen plannen we het werk rond het gebruik, zo nodig buiten openingstijden of in de vakanties.'],
          ['Onderhoud en verduurzaming samen', 'Bijvoorbeeld isolatie meenemen als we het dak of de gevel toch aanpakken. Dat scheelt een tweede steiger en een tweede keer overlast.'],
        ] } },
      { type: 'stappen', eyebrow: 'Onze werkwijze', h: 'Zo pakken we het aan',
        items: [
          ['Opnemen en adviseren', 'We bekijken de staat van het gebouw en adviseren eerlijk, ook als iets nog jaren mee kan.'],
          ['Voorbereiden', 'U krijgt een plan met werkzaamheden, prijs en planning. Bewoners horen vooraf wat er gebeurt.'],
          ['Uitvoeren', 'Vaste teams voeren het werk uit. Komen we iets onverwachts tegen, dan melden we dat direct, met een prijs vooraf.'],
          ['Opleveren en nazorg', 'We lopen het werk samen met u na, lossen opleverpunten op en blijven bereikbaar.'],
        ],
        meer: { titel: 'Vergunningen, besluitvorming en opleverpunten', punten: [
          ['Voorbereiden', 'We leggen de werkzaamheden, materialen en planning vast. We stemmen af welke vergunningen, onderzoeken en afspraken met bewoners nodig zijn. Voor een VvE leveren we de stukken die het bestuur of de ledenvergadering nodig heeft om te besluiten.'],
          ['Uitvoeren', 'U houdt één aanspreekpunt dat de planning bewaakt en u op de hoogte houdt. Meerwerk leggen we eerst aan u voor, met onderbouwing en prijs.'],
          ['Opleveren', 'We lopen het werk samen na, leggen eventuele opleverpunten vast en spreken af hoe we die oplossen. Ook daarna blijven we bereikbaar.'],
        ] } },
      { type: 'fotoTekst', eyebrow: 'Bewoners', h: 'We werken in iemands thuis',
        p: ['Bewoners horen vooraf wat er gebeurt, wanneer we komen en bij wie ze terechtkunnen. Met de opdrachtgever stemmen we af welke toestemming en toegang nodig zijn. Na elke werkdag laten we de woning schoon en bruikbaar achter.'],
        klein: 'Voor VvE’s, woningcorporaties, vastgoedeigenaren en maatschappelijk vastgoed in zorg en onderwijs.',
        foto: '/assets/everts-foto-team.jpg', fotoPos: 'center 25%', alt: 'Drie vakmensen van Everts bij een voordeur' },
    ],
    ctaTitel: 'Een renovatie op de planning?',
    ctaTekst: 'U krijgt eerlijk advies over wat nodig is en wat slim is om te combineren.',
  },
  {
    slug: 'verduurzaming',
    icon: 'leaf',
    nav: 'Verduurzaming',
    label: 'Verduurzaming van vastgoed',
    title: 'Slim onderhoud. Een zuiniger gebouw.',
    lead: 'Als het dak, de gevel of de kozijnen toch aan de beurt zijn, kijken we meteen wat er beter kan. Met maatregelen die passen bij uw gebouw, uw budget en de mensen die er wonen of werken.',
    kaart: 'Isoleren en ventileren op het moment dat dak, gevel of kozijnen toch aan de beurt zijn.',
    photo: '/assets/everts-foto-dak.jpg', photoPos: 'center 40%', photoAlt: 'Hoogwerker bij een kantoorgebouw',
    knop: 'Bespreek uw gebouw', onderwerp: 'Verduurzaming',
    vakgebieden: ['bouwkundig', 'dakdekken', 'schilderwerk'],
    secties: [
      { type: 'intro', eyebrow: 'Onze aanpak', h: 'Eerst het gebouw, dan de oplossing',
        p: ['We bekijken de staat van het gebouw, de isolatie, de ventilatie en de installaties. Daarna bepalen we samen wat logisch is om nu mee te nemen en wat beter kan wachten tot het volgende onderhoudsmoment.',
          'Voor energieadvies en installaties schakelen we gespecialiseerde partners in.'],
        meer: { titel: 'Welke regels gelden voor uw gebouw?', punten: [
          'We houden rekening met de eisen die voor uw gebouw gelden. Voor veel kantoren geldt bijvoorbeeld minimaal energielabel C, met wettelijke uitzonderingen. Bij huurwoningen spelen het energielabel en ontwikkelingen in de regelgeving ook mee. In het plan maken we duidelijk welke regels op uw situatie van toepassing zijn.',
        ] },
        foto: '/assets/beeld-isolatie.webp', alt: 'Isolatie wordt in een gevel aangebracht' },
      { type: 'kaarten', eyebrow: 'Praktische maatregelen', h: 'Wat we samen kunnen aanpakken',
        items: [
          { icon: 'house', t: 'De buitenkant van het gebouw', d: 'Isolatie, isolerend glas en kozijnen. Wie beter isoleert, moet ook goed ventileren. Dat nemen we samen mee.' },
          { icon: 'settings', t: 'Installaties en energie', d: 'Ventilatie, warmtepompen en zonnepanelen. Daarvoor werken we met gespecialiseerde installateurs.' },
          { icon: 'recycle', t: 'De volgende stap', d: 'Materialen die lang meegaan en weinig onderhoud vragen. Zo blijft het gebouw ook daarna goed te onderhouden.' },
        ],
        meer: { titel: 'Bekijk de maatregelen en afwegingen', punten: [
          ['De buitenkant van het gebouw', 'Dak-, gevel-, vloer- en spouwmuurisolatie, isolerende beglazing en goed sluitende kozijnen. Ook kieren en naden nemen we mee. Isolatie en ventilatie bekijken we in samenhang.'],
          ['Installaties en energie', 'Waar passend kijken we met gespecialiseerde partijen naar ventilatie, warmtepompen, zonnepanelen, zuinige verlichting en mogelijkheden voor een warmtenet. Wat haalbaar is, hangt onder meer af van het gebouw, de beschikbare ruimte en de aansluitmogelijkheden.'],
          ['De volgende stap', 'We bekijken waar maatregelen zoals een groen dak of waterberging passen. Bij materiaalkeuzes letten we op levensduur, onderhoud en mogelijkheden voor hergebruik. We leggen uit waarom een oplossing bij dit gebouw past.'],
        ] } },
      { type: 'fotoTekst', eyebrow: 'Subsidie en financiering', h: 'Verduurzamen met een VvE?',
        vet: 'Groot onderhoud op de planning? Onderzoek of een Zeer Energiezuinig Pakket (ZEP) bij uw complex past.',
        p: ['Een ZEP combineert vergaande isolatie en ventilatie van het hele gebouw. Er gelden specifieke technische eisen en voorwaarden voor subsidie en financiering.'],
        checks: ['Subsidie van RVO via de SVVE, met een extra bonus voor een ZEP.', 'Een lening voor de VvE via het Nationaal Warmtefonds, met een hoger maximum voor een ZEP.'],
        waarschuwing: 'Lagere energiekosten betekenen niet automatisch lagere totale woonlasten.',
        knop: ['Lees meer over ZEP voor VvE’s', 'verduurzaming/zep-vve'],
        foto: '/assets/beeld-zep-gebouw.webp', alt: 'Appartementencomplex in de steigers' },
      { type: 'stappen', eyebrow: 'Van plan naar resultaat', h: 'Van inzicht naar uitvoering',
        items: [
          ['Inzicht', 'We nemen de staat van het gebouw en de kansen in beeld.'],
          ['Plan', 'We maken samen een plan met maatregelen, volgorde en planning.'],
          ['Uitvoering', 'We organiseren het werk met betrokken partijen en bewoners.'],
          ['Oplevering en vooruitkijken', 'We leggen vast wat is uitgevoerd en kijken naar een volgende stap.'],
        ],
        meer: { titel: 'Subsidie, financiering en het uitvoeringsplan', punten: [
          'Welke regeling past, hangt af van de eigenaar, het gebouw en de maatregelen. We bespreken welke mogelijkheden nader onderzocht moeten worden en welke deskundigen daarvoor nodig zijn. Subsidie en financiering zijn pas zeker als de aanvraag is goedgekeurd en aan de voorwaarden wordt voldaan.',
          ['Inzicht', 'We nemen het gebouw op en bepalen welke vragen verder onderzoek of specialistisch advies vragen.'],
          ['Plan', 'U krijgt een voorstel met maatregelen, kosten en planning. Verwachte besparingen onderbouwen we met berekeningen en duidelijke uitgangspunten.'],
          ['Uitvoering', 'We stemmen het werk af met betrokken partijen en bewoners. U houdt één aanspreekpunt voor het uitvoeringstraject.'],
          ['Oplevering en vooruitkijken', 'We leggen vast wat is uitgevoerd. Benodigde metingen of een nieuw energielabel spreken we vooraf af. Het werkelijke verbruik ziet u pas na een stookseizoen.'],
        ] } },
      { type: 'fotoTekst', eyebrow: 'Samen met de bewoners', h: 'Bewoners horen erbij', omgekeerd: true,
        p: ['Verduurzamen raakt iemands woning. We stemmen met de opdrachtgever af welke instemming nodig is en wie die regelt. Tijdens de uitvoering weten bewoners bij wie ze terechtkunnen.'],
        meer: { titel: 'Wat het kan opleveren', punten: [
          'Een goed gekozen pakket kan het energieverbruik verlagen en het comfort verbeteren. Het helpt ook om uw vastgoed goed te onderhouden. Hoe groot het voordeel is, verschilt per gebouw en hangt onder meer af van het gebruik en de energieprijzen. Dat maken we vooraf inzichtelijk, zonder meer te beloven dan we kunnen onderbouwen.',
        ] },
        foto: '/assets/everts-foto-vakman.jpg', fotoPos: 'center 30%', alt: 'Vakman van Everts op locatie' },
    ],
    ctaTitel: 'Waar zit de winst in uw gebouw?',
    ctaTekst: 'We bekijken graag met u wat er bij het volgende onderhoud mee kan.',
  },
  {
    // Verdieping onder Verduurzaming: niet in het menu of op Wat we doen, alleen bereikbaar via Verduurzaming.
    slug: 'verduurzaming/zep-vve',
    icon: 'layers',
    nav: 'ZEP voor VvE’s',
    label: 'ZEP voor VvE’s',
    terug: ['verduurzaming', 'Verduurzaming'],
    title: 'Groot onderhoud? Kijk een stap verder.',
    lead: 'Staat er groot onderhoud in uw meerjarenonderhoudsplan (MJOP)? Dan is dat het moment om te onderzoeken of een Zeer Energiezuinig Pakket (ZEP) past. Wij denken mee over de uitvoering en wat daarvoor nodig is.',
    photo: '/assets/beeld-woongebouw.webp', photoPos: 'center 40%', photoAlt: 'Appartementencomplex met balkons',
    knop: 'Bespreek uw VvE-complex', onderwerp: 'ZEP voor VvE’s',
    vakgebieden: ['bouwkundig', 'dakdekken', 'schilderwerk'],
    secties: [
      { type: 'intro', eyebrow: 'Het hele gebouw in samenhang', h: 'Wat is een ZEP?',
        p: ['Een ZEP is een samenhangend pakket voor de hele bestaande thermische schil: dak, gevel, vloer, beglazing, kozijnpanelen en deuren. Het pakket omvat ook ventilatie. Voor de SVVE gelden technische eisen aan de isolatie, het glas, de kozijnen, deuren en het ventilatiesysteem. Een luchtdichtheidstest controleert na uitvoering of de vereiste kierdichtheid is gehaald.',
          'Een ZEP is op zichzelf geen garantie dat het gebouw aardgasvrij of nul-op-de-meter wordt. Daarvoor zijn aanvullende maatregelen en eisen van belang.',
          'De luchtdichtheidstest maakt de uitvoering net zo belangrijk als het ontwerp. Kierdichting zit in de details: aansluitingen bij kozijnen, naden en doorvoeren. Daar letten onze vakmensen tijdens het werk op, niet pas bij de test.'],
        foto: '/assets/beeld-zep-gebouw.webp', alt: 'Appartementencomplex in de steigers' },
      { type: 'tekst', eyebrow: 'Van mogelijkheid naar plan', h: 'Eerst weten wat haalbaar is',
        p: ['We bekijken wat het gebouw nodig heeft en welke deskundigen moeten aansluiten. Een energieadviseur werkt de technische uitgangspunten uit. Wij brengen in kaart wat de maatregelen kosten, wat ze per woning betekenen en hoe we het werk plannen. Daarmee kan de VvE een onderbouwd besluit nemen.',
          'Past een onderdeel niet binnen de standaardvoorwaarden, bijvoorbeeld door de bouw van het complex? Dan moet apart worden beoordeeld of een gelijkwaardige oplossing of ontheffing kan. RVO beoordeelt de subsidie, het Warmtefonds de lening: twee aparte trajecten.'] },
      { type: 'financiering', eyebrow: 'Subsidie en financiering', h: 'Twee regelingen, twee aanvragen',
        tbc: 'Te controleren voor publicatie: andere bronnen noemen lagere maxima voor de Warmtefonds-lening.',
        kaarten: [
          { icon: 'coins', eyebrow: 'Subsidie via RVO', h: 'SVVE', bedrag: '€4.000', sub: 'bonus per woning',
            p: ['Via de SVVE, de subsidieregeling voor verduurzaming door VvE’s, kan een VvE onder voorwaarden subsidie aanvragen bij RVO. Bij een ZEP dat aan alle toepasselijke voorwaarden voldoet, is boven op de maatregelensubsidie een bonus van €4.000 per woning mogelijk. Voor subsidiabele bouwbegeleiding bedraagt de vergoeding 50% van de kosten, tot maximaal €20.000.',
              'Let op: de VvE moet de subsidie aanvragen voordat het werk begint. Daarna heeft de VvE normaal drie jaar vanaf de goedkeuring om het werk uit te voeren.'],
            link: ['RVO: voorwaarden ZEP', 'https://www.rvo.nl/subsidies-financiering/svve/verduurzamingsmaatregelen/voorwaarden-zep'] },
          { icon: 'landmark', eyebrow: 'Nationaal Warmtefonds', h: 'VvE Energiebespaarlening', bedrag: '€73.000', sub: 'tot dit bedrag per appartement voor een ZEP', groen: true,
            p: ['Voor daarvoor geschikte VvE’s met minimaal acht wooneenheden vermeldt het Warmtefonds een ZEP-lening tot €73.000 per appartement. Voor ZEP+ of nul-op-de-meter (NOM) kan het maximum €95.000 per appartement zijn. Een looptijd van 30 jaar is onder voorwaarden mogelijk.',
              'De VvE sluit de lening af en die werkt door in de ledenbijdragen. Dat betekent ook financiële verplichtingen voor de leden. Bekijk daarom de maandlasten én de verwachte energiebesparing.',
              'Renteaftrek kan voor eigenaar-bewoners onder fiscale voorwaarden mogelijk zijn. Laat voor uw eigen situatie beoordelen welk deel daarvoor in aanmerking komt.'],
            link: ['Warmtefonds: voorwaarden VvE Energiebespaarlening', 'https://www.warmtefonds.nl/vve/voorwaarden-vve-energiebespaarlening'] },
        ],
        klein: 'Bedragen gecontroleerd op 9 oktober 2026. Voorwaarden en bedragen kunnen wijzigen. De actuele regeling en het individuele besluit of leningaanbod zijn bepalend.' },
      { type: 'stappen', eyebrow: 'Zorgvuldig besluiten, helder uitvoeren', h: 'Zo komt het plan verder',
        items: [
          ['Opname en haalbaarheid', 'We bekijken het gebouw en bepalen welk specialistisch onderzoek nodig is.'],
          ['Plan en begroting', 'Samen met de energieadviseur werken we de maatregelen, kosten, verwachte besparing en financiering uit.'],
          ['Besluitvorming', 'De VvE besluit volgens de splitsingsakte en het reglement. Wij leveren de informatie die de leden nodig hebben: wat er gebeurt, wat het kost en wat het per woning betekent.'],
          ['Aanvragen en voorbereiding', 'We spreken met de adviseurs af wie de subsidie, de lening en de vergunningen aanvraagt. De subsidieaanvraag moet zijn ingediend voordat het werk begint.'],
          ['Uitvoering', 'Wij organiseren het afgesproken werk. Bewoners weten wie hun aanspreekpunt is.'],
          ['Oplevering en documentatie', 'We leveren het werk op, met de documentatie die de VvE nodig heeft voor RVO en het Warmtefonds. Zij beoordelen ieder hun eigen voorwaarden.'],
        ] },
    ],
    ctaTitel: 'Past een ZEP bij uw complex?',
    ctaTekst: 'Stuur ons uw meerjarenonderhoudsplan. Dan bekijken we samen of een ZEP bij het volgende onderhoudsmoment past.',
  },
  {
    slug: 'mutatieonderhoud',
    icon: 'door-open',
    nav: 'Mutatieonderhoud',
    label: 'Everts Servicedesk · Mutatieonderhoud',
    title: 'Snel weer verhuurklaar',
    lead: 'Elke dag leegstand kost huur. Wij nemen de woning op, spreken kosten en planning met u af en regelen het herstel. U heeft één aanspreekpunt bij de Everts Servicedesk.',
    kaart: 'De woning snel en op het afgesproken niveau klaar voor de volgende huurder.',
    photo: '/assets/everts-foto-servicedesk.jpg', photoPos: 'center 50%', photoAlt: 'Werkkar van de Everts Servicedesk bij een woongebouw',
    knop: 'Bespreek uw mutatieonderhoud', onderwerp: 'Mutatieonderhoud',
    vakgebieden: ['servicedesk'],
    secties: [
      { type: 'intro', eyebrow: 'In het kort', h: 'Vooraf vastgelegd wat verhuurklaar betekent',
        p: ['Leegstand wilt u zo kort mogelijk houden, maar de volgende huurder moet een woning krijgen die klopt. Daarom leggen we vooraf met u vast wat verhuurklaar betekent: het afwerkingsniveau, wie wat controleert en de doorlooptijd.'],
        tbc: 'Te bevestigen: opname binnen X werkdagen na de sleuteloverdracht, verhuurklaar binnen Y werkdagen.',
        foto: '/assets/beeld-lege-woning.webp', alt: 'Lege woning, klaar voor de volgende huurder' },
      { type: 'stappen', eyebrow: 'Onze werkwijze', h: 'Zo blijft het werk overzichtelijk',
        items: [
          ['Opnemen', 'We nemen de woning op en brengen het benodigde werk in kaart.'],
          ['Afspreken', 'We maken afspraken over de werkzaamheden, kosten en planning.'],
          ['Herstellen', 'We coördineren het herstel en houden u op de hoogte van de voortgang.'],
          ['Opleveren', 'We controleren en leveren op volgens de afgesproken staat.'],
        ] },
      { type: 'lijst', eyebrow: 'Wat we voor u doen', h: 'Alles voor een verhuurklare woning',
        items: [
          ['clipboard-list', 'Opname en werkoverzicht', 'We nemen de woning op en beschrijven het werk. U krijgt de omschrijving met prijs voordat we beginnen.'],
          ['wrench', 'Herstel en afwerking', 'We verzorgen het afgesproken herstel, van klein onderhoud tot een complete opfrissing.'],
          ['search-check', 'Controles waar nodig', 'Denk aan rookmelders, de cv-installatie of de elektra. We spreken vooraf af welke controles nodig zijn en wie ze uitvoert.'],
          ['trending-up', 'Verbeteringen meteen meenemen', 'Een lege woning is het moment voor werk dat bewoond lastig is, zoals isolatie of nieuwe kozijnen. Wij stellen het voor, u beslist.'],
          ['sparkles', 'Schoon opleveren', 'Schoon en gecontroleerd, klaar voor de bezichtiging of de sleuteloverdracht.'],
        ],
        naast: { eyebrow: 'Goed om te weten', h: 'Grip op elke woning',
          p: ['Per woning ziet u wat we hebben opgenomen, wat we hebben gedaan en wat het heeft gekost. Waar nodig leggen we de staat en het herstel vast met foto’s.',
            'De verhuurder beoordeelt of eventuele schade op de vertrekkende huurder kan worden verhaald.'],
          tbc: 'Te bevestigen: in welke vorm, bijvoorbeeld een rapport per woning of een koppeling met uw onderhoudssysteem.',
          meer: { titel: 'Hoe gaan we om met schade?', punten: [
            'Eventuele schade van een vertrekkende huurder leggen we feitelijk vast. De verhuurder beoordeelt op basis van het huurcontract, de opnamerapporten en de wettelijke regels of kosten kunnen worden doorberekend.',
          ] },
          foto: '/assets/beeld-deurherstel.webp', alt: 'Vakman controleert een deur in een lege woning' } },
      { type: 'fotoTekst', eyebrow: 'Voor wie', h: 'Voor één woning of een hele portefeuille',
        p: ['We werken voor woningcorporaties, beleggers en vastgoedeigenaren in Zuid-Holland. Bij terugkerend mutatieonderhoud maken we afspraken over de werkwijze, het kwaliteitsniveau en de terugkoppeling. Zo hoeft u niet bij elke woning opnieuw te beginnen.',
          'Werkt u met een raamovereenkomst of aanbesteding? Dan sluiten we aan op uw procedures en rapportage-eisen.'],
        foto: '/assets/beeld-woongebouw.webp', alt: 'Appartementencomplex met balkons' },
    ],
    ctaTitel: 'Uw mutatieonderhoud beter geregeld?',
    ctaTekst: 'We bespreken graag hoe u nu werkt en waar we het proces eenvoudiger kunnen maken.',
  },
];

function findOpgave(slug) { return OPGAVEN.find((o) => o.slug === slug); }

const OPG_H2 = { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(26px,3.5vw,34px)', letterSpacing: '-.015em', margin: '0 0 18px', color: 'var(--fg1)' };
const OPG_P = { fontSize: 16.5, lineHeight: 1.75, color: 'var(--fg2)', margin: '0 0 16px' };

// Tekst die nog intern bevestigd moet worden: bewust opvallend, zodat hij niet ongemerkt live gaat.
function Tbc({ children }) {
  return <p style={{ margin: '0 0 16px' }}><mark style={{ background: '#fff0bc', color: '#5c4512', padding: '3px 7px', borderRadius: 4, fontSize: 14.5, lineHeight: 1.9, boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}>{children}</mark></p>;
}

// Uitklapblok voor achtergrondinformatie; punten zijn alinea's of [kop, tekst].
function Meer({ titel, punten }) {
  const [open, setOpen] = useState(false);
  return (
    <details onToggle={(e) => setOpen(e.currentTarget.open)} style={{ borderTop: '1px solid var(--line-200)', marginTop: 28 }}>
      <summary style={{ listStyle: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '15px 0', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: 'var(--everts-logo-green)' }}>
        {titel}<Icon name="chevron-down" size={18} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .15s', flex: 'none' }} />
      </summary>
      <div style={{ padding: '2px 0 10px', maxWidth: 820 }}>
        {punten.map((pt, i) => Array.isArray(pt)
          ? <p key={i} style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--fg2)', margin: '0 0 12px' }}><strong style={{ color: 'var(--fg1)' }}>{pt[0]}.</strong> {pt[1]}</p>
          : <p key={i} style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--fg2)', margin: '0 0 12px' }}>{pt}</p>)}
      </div>
    </details>
  );
}

function OpgKop({ eyebrow, h }) {
  return <React.Fragment><Eyebrow>{eyebrow}</Eyebrow><h2 style={OPG_H2}>{h}</h2></React.Fragment>;
}

function OpgSectie({ s, tint, onNav }) {
  let inhoud;
  switch (s.type) {
    case 'intro':
      inhoud = (
        <div className="evt-2col" style={{ display: 'grid', gridTemplateColumns: s.feiten ? '1fr 320px' : '1.15fr 1fr', gap: 56, alignItems: s.feiten ? 'start' : 'center' }}>
          <div>
            <OpgKop eyebrow={s.eyebrow} h={s.h} />
            {s.p.map((t) => <p key={t} style={OPG_P}>{t}</p>)}
            {s.tbc && <Tbc>{s.tbc}</Tbc>}
            {s.meer && <Meer {...s.meer} />}
          </div>
          {s.feiten ? (
            <aside style={{ background: tint ? '#fff' : 'var(--bg2)', border: '1px solid var(--line-200)', borderRadius: 'var(--radius-xl)', padding: 26 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12.5, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--everts-green)', marginBottom: 14 }}>Goed om te weten</div>
              {s.feiten.map(([ic, k, v]) => (
                <div key={k} style={{ display: 'flex', gap: 12, padding: '11px 0', borderBottom: '1px solid var(--line-100)' }}>
                  <span style={{ color: 'var(--everts-logo-green)', flex: 'none', marginTop: 1 }}><Icon name={ic} size={18} /></span>
                  <div>
                    <div style={{ fontSize: 12.5, color: 'var(--fg3)' }}>{k}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14.5, color: 'var(--fg1)' }}>{v}</div>
                  </div>
                </div>
              ))}
            </aside>
          ) : <Photo src={s.foto} alt={s.alt} h={340} pos={s.fotoPos || 'center'} />}
        </div>
      );
      break;
    case 'kaarten':
      inhoud = (
        <React.Fragment>
          <div style={{ maxWidth: 640, marginBottom: 40 }}>
            <OpgKop eyebrow={s.eyebrow} h={s.h} />
            {s.lead && <p style={{ ...OPG_P, margin: 0 }}>{s.lead}</p>}
          </div>
          <div className={s.items.length === 4 ? 'evt-grid-4' : 'evt-grid-3'} style={{ display: 'grid', gridTemplateColumns: 'repeat(' + s.items.length + ',1fr)', gap: 20 }}>
            {s.items.map((k) => (
              <div key={k.t} style={{ background: '#fff', border: '1px solid var(--line-200)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
                {k.foto && <Photo src={k.foto} alt={k.alt} h={170} radius="0" />}
                <div style={{ padding: 24 }}>
                  <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--everts-green-100)', color: 'var(--everts-logo-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><Icon name={k.icon} size={23} /></div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--fg1)', marginBottom: 8 }}>{k.t}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--fg3)', margin: 0 }}>{k.d}</p>
                </div>
              </div>
            ))}
          </div>
          {s.meer && <Meer {...s.meer} />}
        </React.Fragment>
      );
      break;
    case 'stappen':
      inhoud = (
        <React.Fragment>
          <div style={{ maxWidth: 640, marginBottom: 44 }}><OpgKop eyebrow={s.eyebrow} h={s.h} /></div>
          <div className={s.items.length === 4 ? 'evt-grid-4' : 'evt-grid-3'} style={{ display: 'grid', gridTemplateColumns: 'repeat(' + (s.items.length === 4 ? 4 : 3) + ',1fr)', gap: 28, rowGap: 40 }}>
            {s.items.map(([t, d], i) => (
              <div key={t} style={{ paddingTop: 26, borderTop: '3px solid var(--everts-green)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15, color: 'var(--everts-green)', letterSpacing: '.06em', marginBottom: 12 }}>{String(i + 1).padStart(2, '0')}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--fg1)', marginBottom: 9 }}>{t}</div>
                <p style={{ fontSize: 14.5, lineHeight: 1.62, color: 'var(--fg3)', margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
          {s.meer && <Meer {...s.meer} />}
        </React.Fragment>
      );
      break;
    case 'fotoTekst': {
      const tekst = (
        <div>
          <OpgKop eyebrow={s.eyebrow} h={s.h} />
          {s.vet && <p style={{ ...OPG_P, fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--fg1)' }}>{s.vet}</p>}
          {s.p.map((t) => <p key={t} style={OPG_P}>{t}</p>)}
          {s.checks && (
            <ul style={{ listStyle: 'none', padding: 0, margin: '4px 0 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {s.checks.map((c) => <li key={c} style={{ display: 'flex', gap: 10, fontSize: 15.5, lineHeight: 1.55, color: 'var(--fg2)' }}><span style={{ color: 'var(--everts-green)', flex: 'none', marginTop: 1 }}><Icon name="circle-check" size={20} /></span>{c}</li>)}
            </ul>
          )}
          {s.waarschuwing && <p style={{ display: 'flex', gap: 10, alignItems: 'center', background: '#fff0bc', color: '#735719', borderRadius: 'var(--radius-md)', padding: '12px 14px', fontSize: 14, margin: '0 0 22px' }}><Icon name="triangle-alert" size={18} style={{ flex: 'none' }} />{s.waarschuwing}</p>}
          {s.knop && <Button variant="secondary" iconRight="arrow-right" as="a" href={EVT_URL('opgave', s.knop[1])} onClick={(e) => { e.preventDefault(); onNav('opgave', s.knop[1]); }}>{s.knop[0]}</Button>}
          {s.klein && <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--fg3)', margin: '8px 0 0' }}>{s.klein}</p>}
          {s.meer && <Meer {...s.meer} />}
        </div>
      );
      const foto = <Photo src={s.foto} alt={s.alt} h={400} pos={s.fotoPos || 'center'} />;
      inhoud = (
        <div className="evt-2col" style={{ display: 'grid', gridTemplateColumns: s.omgekeerd ? '1fr 1.15fr' : '1.15fr 1fr', gap: 56, alignItems: 'center' }}>
          {s.omgekeerd ? <React.Fragment>{foto}{tekst}</React.Fragment> : <React.Fragment>{tekst}{foto}</React.Fragment>}
        </div>
      );
      break;
    }
    case 'lijst':
      inhoud = (
        <div className="evt-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
          <div>
            <OpgKop eyebrow={s.eyebrow} h={s.h} />
            <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0', display: 'flex', flexDirection: 'column', gap: 22 }}>
              {s.items.map(([ic, t, d]) => (
                <li key={t} style={{ display: 'flex', gap: 16 }}>
                  <span style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--everts-green-100)', color: 'var(--everts-logo-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name={ic} size={22} /></span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16.5, color: 'var(--fg1)', margin: '2px 0 5px' }}>{t}</div>
                    <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--fg3)', margin: 0 }}>{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: 'var(--bg2)', border: '1px solid var(--line-200)', borderRadius: 'var(--radius-xl)', padding: 'clamp(24px,3vw,32px)' }}>
            <OpgKop eyebrow={s.naast.eyebrow} h={s.naast.h} />
            {s.naast.p.map((t) => <p key={t} style={{ ...OPG_P, fontSize: 15.5 }}>{t}</p>)}
            {s.naast.tbc && <Tbc>{s.naast.tbc}</Tbc>}
            {s.naast.meer && <Meer {...s.naast.meer} />}
            <Photo src={s.naast.foto} alt={s.naast.alt} h={240} style={{ marginTop: 20 }} />
          </div>
        </div>
      );
      break;
    case 'tekst':
      inhoud = (
        <div style={{ maxWidth: 820 }}>
          <OpgKop eyebrow={s.eyebrow} h={s.h} />
          {s.p.map((t) => <p key={t} style={OPG_P}>{t}</p>)}
        </div>
      );
      break;
    case 'financiering':
      inhoud = (
        <React.Fragment>
          <div style={{ maxWidth: 640, marginBottom: 36 }}>
            <OpgKop eyebrow={s.eyebrow} h={s.h} />
            {s.tbc && <Tbc>{s.tbc}</Tbc>}
          </div>
          <div className="evt-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {s.kaarten.map((k) => (
              <article key={k.h} style={{ background: k.groen ? 'var(--everts-green-50)' : '#fff', border: '1px solid var(--line-200)', borderRadius: 'var(--radius-xl)', padding: 'clamp(24px,3vw,34px)' }}>
                <div style={{ color: 'var(--everts-logo-green)', marginBottom: 16 }}><Icon name={k.icon} size={30} /></div>
                <Eyebrow>{k.eyebrow}</Eyebrow>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, margin: '0 0 14px', color: 'var(--fg1)' }}>{k.h}</h3>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, lineHeight: 1, color: 'var(--everts-logo-green)', letterSpacing: '-.02em' }}>{k.bedrag}</div>
                <div style={{ fontSize: 14, color: 'var(--fg3)', margin: '6px 0 18px' }}>{k.sub}</div>
                {k.p.map((t) => <p key={t} style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--fg2)', margin: '0 0 12px' }}>{t}</p>)}
                <a href={k.link[1]} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14.5 }}>{k.link[0]} <Icon name="external-link" size={15} /></a>
              </article>
            ))}
          </div>
          {s.klein && <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--fg3)', margin: '20px 0 0', maxWidth: 820 }}>{s.klein}</p>}
        </React.Fragment>
      );
      break;
    default:
      inhoud = null;
  }
  return (
    <section style={{ background: tint ? 'var(--bg2)' : '#fff', borderTop: tint ? '1px solid var(--line-200)' : 'none' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px clamp(20px,4vw,32px)' }}>{inhoud}</div>
    </section>
  );
}

function OpgavePage({ slug, onNav }) {
  const o = findOpgave(slug);
  useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  if (!o) return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '120px 32px', textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'var(--font-display)' }}>Pagina niet gevonden</h2>
      <Button variant="secondary" icon="arrow-left" onClick={() => onNav('diensten')}>Terug naar Wat we doen</Button>
    </div>
  );
  const [terugPage, terugSlug, terugLabel] = o.terug ? ['opgave', o.terug[0], o.terug[1]] : ['diensten', null, 'Wat we doen'];
  const vakgebieden = o.vakgebieden.map((s) => DISCIPLINES.find((d) => d.slug === s));

  return (
    <div>
      {/* HERO */}
      <section style={{ position: 'relative' }}>
        <img src={o.photo} alt={o.photoAlt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: o.photoPos }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(16,61,37,.92) 0%, rgba(16,61,37,.74) 45%, rgba(16,61,37,.4) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '64px clamp(20px,4vw,32px) 72px', color: '#fff' }}>
          <a href={EVT_URL(terugPage, terugSlug)} onClick={(e) => { e.preventDefault(); onNav(terugPage, terugSlug); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: 'rgba(255,255,255,.85)', textDecoration: 'none', marginBottom: 28 }}><Icon name="arrow-left" size={16} /> {terugLabel}</a>
          <div style={{ maxWidth: 680 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <span style={{ width: 52, height: 52, borderRadius: 13, background: 'rgba(255,255,255,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name={o.icon} size={26} /></span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.85)' }}>{o.label}</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px,5.2vw,50px)', letterSpacing: '-.02em', lineHeight: 1.04, margin: '0 0 18px', textWrap: 'balance' }}>{o.title}</h1>
            <p style={{ fontSize: 'clamp(17px,2.2vw,20px)', lineHeight: 1.55, color: 'rgba(255,255,255,.92)', margin: '0 0 30px', maxWidth: 580 }}>{o.lead}</p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Button size="lg" variant="white" iconRight="arrow-right" onClick={() => onNav('contact', o.onderwerp)}>{o.knop}</Button>
              <Button size="lg" variant="white" icon="phone-call" as="a" href="tel:0703012580">070 301 25 80</Button>
            </div>
          </div>
        </div>
      </section>

      {o.secties.map((s, i) => <OpgSectie key={s.h} s={s} tint={i % 2 === 1} onNav={onNav} />)}

      {/* WIE HET WERK DOET */}
      <section style={{ background: o.secties.length % 2 === 1 ? 'var(--bg2)' : '#fff', borderTop: '1px solid var(--line-200)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px clamp(20px,4vw,32px)' }}>
          <Eyebrow>Wie het werk doet</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(22px,3vw,26px)', letterSpacing: '-.015em', margin: '0 0 28px', color: 'var(--fg1)' }}>{vakgebieden.length === 1 ? 'Uitgevoerd door ons vakgebied' : 'Uitgevoerd door onze vakgebieden'}</h2>
          <div className="evt-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {vakgebieden.map((d) => (
              <a key={d.slug} href={EVT_URL('discipline', d.slug)} onClick={(e) => { e.preventDefault(); onNav('discipline', d.slug); }}
                style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '18px 20px', border: '1px solid var(--line-200)', borderRadius: 'var(--radius-md)', background: '#fff', textDecoration: 'none', transition: 'background .15s, box-shadow .15s' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--everts-green-50)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.boxShadow = 'none'; }}>
                <span style={{ width: 42, height: 42, borderRadius: 11, background: 'var(--everts-green-100)', color: 'var(--everts-logo-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name={d.icon} size={21} /></span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15.5, color: 'var(--fg1)', flex: 1 }}>{d.nav}</span>
                <Icon name="arrow-right" size={18} style={{ color: 'var(--everts-green)' }} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', backgroundImage: "url('/assets/everts-achtergrond-klein.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(16,61,37,.8)' }} />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '72px clamp(20px,4vw,32px)', textAlign: 'center', color: '#fff' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,4vw,38px)', letterSpacing: '-.02em', margin: '0 0 14px' }}>{o.ctaTitel}</h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,.88)', maxWidth: 560, margin: '0 auto 26px' }}>{o.ctaTekst}</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button size="lg" variant="white" icon="phone-call" as="a" href="tel:0703012580">070 301 25 80</Button>
            <Button size="lg" variant="white" iconRight="arrow-right" onClick={() => onNav('contact', o.onderwerp)}>{o.knop}</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { OPGAVEN, OpgavePage });

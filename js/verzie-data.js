/* ═══════════════════════════════════════════════════════════════
   verzie-data.js — Definícia 4 verzií systému
   ───────────────────────────────────────────────────────────────
   TODO: Uprav názvy, popisy, funkcie, farby a moduly tu.
         Zmena sa prejaví na karte v index.html AJ na detail stránke.
═══════════════════════════════════════════════════════════════ */

const VERZIE = [
  {
    slug:     'start',
    name:     'Štart',
    tagline:  'Pre firmy, ktoré práve začínajú s digitalizáciou',
    color:    '#64748b',
    badge:    'Štart',
    popular:  false,
    price:    'Na dopyt',
    priceNote: 'Cena závisí od počtu používateľov a konfigurácie modulov.',

    perex: 'Verzia Štart je ideálna pre menšie firmy a živnostníkov, ktorí chcú urobiť prvý krok k digitalizácii bez veľkých investícií. Získate stabilný základ — cloudové prostredie, základné moduly a emailovú podporu, aby ste mohli začať okamžite.',

    desc: [
      'Implementácia prebehne do 2 týždňov. Náš tím vás prevedie celým procesom — od nastavenia prostredia po zaškolenie zamestnancov.',
      'Verzia Štart je navrhnutá tak, aby bola jednoduchá a prehľadná. Žiadne zbytočné funkcie, ktoré by miatli — len to, čo naozaj potrebujete.',
      'Kedykoľvek môžete plynule prejsť na vyššiu verziu bez straty dát alebo nutnosti migrácie.',
    ],

    features: [
      { text: 'До 5 používateľov', included: true },
      { text: '3 moduly podľa výberu', included: true },
      { text: 'Cloudový hosting (SK dátové centrum)', included: true },
      { text: 'Emailová podpora (odozva do 24 hod.)', included: true },
      { text: 'Základné reporty a prehľady', included: true },
      { text: 'Mobilná aplikácia', included: true },
      { text: 'Vlastné integrácie (API)', included: false },
      { text: 'Pokročilá analytika a dashboardy', included: false },
      { text: 'Dedikovaný account manager', included: false },
      { text: 'SLA garancia dostupnosti', included: false },
      { text: 'Vlastná inštancia a branding', included: false },
    ],

    modules: ['CRM & Zákazníci', 'Fakturácia & Financie', 'Dokumenty & Archív', 'E-mail & Komunikácia'],

    forWhom: [
      'Živnostníci a SZČO',
      'Firmy s 1–5 zamestnancami',
      'Firmy začínajúce s digitalizáciou',
      'Pilotné projekty a testovacie fázy',
    ],

    cta: 'Vyžiadať ponuku',
  },
  {
    slug:     'business',
    name:     'Business',
    tagline:  'Pre rastúce firmy s potrebou komplexného riadenia',
    color:    '#0b5ed7',
    badge:    'Business',
    popular:  false,
    price:    'Na dopyt',
    priceNote: 'Cena závisí od počtu používateľov, modulov a požadovanej úrovne podpory.',

    perex: 'Verzia Business pokrýva potreby stredne veľkých firiem, ktoré potrebujú riadiť viacero oblastí naraz — od zákazníkov a financií po projekty a sklad. Až 8 modulov, prioritná podpora a základné API integrácie sú základom pre efektívne a škálovateľné riadenie.',

    desc: [
      'Implementácia prebehne do 4 týždňov vrátane migrácie existujúcich dát, nastavenia procesov a zaškolenia celého tímu.',
      'Prioritná podpora znamená, že na vaše požiadavky reagujeme do 4 hodín počas pracovných dní. Technické problémy riešime okamžite.',
      'Verzia Business rastie s vami — kedykoľvek môžete aktivovať ďalšie moduly alebo prejsť na Enterprise bez prerušenia prevádzky.',
    ],

    features: [
      { text: 'До 25 používateľov', included: true },
      { text: 'До 8 modulov podľa výberu', included: true },
      { text: 'Cloudový hosting (SK dátové centrum)', included: true },
      { text: 'Prioritná podpora (odozva do 4 hod.)', included: true },
      { text: 'Pokročilé reporty a dashboardy', included: true },
      { text: 'Mobilná aplikácia', included: true },
      { text: 'Základné API integrácie', included: true },
      { text: 'Neobmedzený počet používateľov', included: false },
      { text: 'Dedikovaný account manager', included: false },
      { text: 'SLA garancia dostupnosti', included: false },
      { text: 'Vlastná inštancia a branding', included: false },
    ],

    modules: ['CRM & Zákazníci', 'Fakturácia & Financie', 'Sklad & Logistika', 'HR & Zamestnanci', 'Projekty & Úlohy', 'Dokumenty & Archív', 'Obchod & Ponuky', 'E-mail & Komunikácia'],

    forWhom: [
      'Firmy s 5–50 zamestnancami',
      'Rýchlo rastúce startupy',
      'Firmy po prvej digitalizácii',
      'Tímy pracujúce na viacerých projektoch súčasne',
    ],

    cta: 'Vyžiadať ponuku',
  },
  {
    slug:     'enterprise',
    name:     'Enterprise',
    tagline:  'Pre etablované firmy s vysokými nárokmi na výkon',
    color:    '#0b5ed7',
    badge:    'Najobľúbenejší',
    popular:  true,
    price:    'Na dopyt',
    priceNote: 'Individuálna ponuka — cena závisí od konfigurácie, počtu používateľov a SLA.',

    perex: 'Enterprise je naša vlajková verzia — plný prístup ku všetkým 13 modulom, neobmedzený počet používateľov, dedikovaný account manager a možnosť prevádzky v cloude alebo na vlastných serveroch (On-premise). Pripravená pre firmy, ktoré netolerujú kompromisy.',

    desc: [
      'Implementácia je riadená dedikovaným projektovým manažérom. Zahŕňa analýzu procesov, migráciu dát, integrácie s existujúcimi systémami a komplexné zaškolenie.',
      'Dedikovaný account manager je váš priamy kontakt — pozná vašu firmu, procesy a potreby. Proaktívne navrhuje vylepšenia a koordinuje podporu.',
      'Systém je dostupný ako cloudové riešenie v slovenskom dátovom centre alebo ako On-premise inštalácia na vašej infraštruktúre.',
    ],

    features: [
      { text: 'Neobmedzený počet používateľov', included: true },
      { text: 'Všetkých 13 modulov', included: true },
      { text: 'Cloud alebo On-premise', included: true },
      { text: 'Podpora 24/7 (odozva do 1 hod.)', included: true },
      { text: 'Vlastné reporty, KPI a dashboardy', included: true },
      { text: 'Mobilná aplikácia', included: true },
      { text: 'Plné API & integrácie', included: true },
      { text: 'Dedikovaný account manager', included: true },
      { text: 'SLA garancia 99,5 %', included: true },
      { text: 'Vlastný branding systému', included: true },
      { text: 'Vlastná inštancia (izolované prostredie)', included: false },
    ],

    modules: ['Všetkých 13 modulov vrátane Bezpečnosť & Prístupy, API & Integrácie, Reporting & Analytika'],

    forWhom: [
      'Stredné a veľké firmy (50+ zamestnancov)',
      'Firmy s komplexnými internými procesmi',
      'Organizácie s prísnymi bezpečnostnými požiadavkami',
      'Firmy vyžadujúce On-premise riešenie',
    ],

    cta: 'Dohodnúť prezentáciu',
  },
  {
    slug:     'korporat',
    name:     'Korporát',
    tagline:  'Pre veľké korporácie a holdingové štruktúry',
    color:    '#7c3aed',
    badge:    'Korporát',
    popular:  false,
    price:    'Individuálna ponuka',
    priceNote: 'Cena sa stanovuje individuálne na základe rozsahu, počtu pobočiek a požiadaviek.',

    perex: 'Verzia Korporát je navrhnutá pre veľké organizácie, holdingy a korporácie s viacerými pobočkami, zložitými schvaľovacími procesmi a prísnymi požiadavkami na bezpečnosť a dostupnosť. Každá implementácia je unikátna — navrhneme riešenie presne na mieru.',

    desc: [
      'Implementácia prebieha v etapách podľa dohodnutého harmonogramu. Zahŕňa detailnú analýzu, architektúru riešenia, integrácie s ERP/SAP systémami a komplexné zaškolenie na všetkých úrovniach.',
      'Vlastná inštancia znamená plne izolované prostredie — vaše dáta sú oddelené od ostatných klientov, s vlastnou zálohovacou politikou a správou prístupov.',
      'SLA garancia 99,9 % dostupnosti s finančnou kompenzáciou pri nedodržaní. Dedikovaný tím podpory je k dispozícii 24/7/365.',
    ],

    features: [
      { text: 'Neobmedzený počet používateľov', included: true },
      { text: 'Všetkých 13 modulov + vlastné rozšírenia', included: true },
      { text: 'On-premise alebo Private Cloud', included: true },
      { text: 'Dedikovaný tím podpory 24/7/365', included: true },
      { text: 'Vlastné reporty, KPI a BI integrácia', included: true },
      { text: 'Mobilná aplikácia s vlastným brandingom', included: true },
      { text: 'Plné API & vlastné integrácie (ERP, SAP)', included: true },
      { text: 'Dedikovaný account manager + PM', included: true },
      { text: 'SLA garancia 99,9 % s kompenzáciou', included: true },
      { text: 'Vlastný branding systému', included: true },
      { text: 'Vlastná izolovaná inštancia', included: true },
    ],

    modules: ['Všetkých 13 modulov + vlastné rozšírenia na mieru, multi-pobočková správa, SSO/SAML integrácia'],

    forWhom: [
      'Korporácie s 200+ zamestnancami',
      'Holdingové štruktúry a skupiny firiem',
      'Organizácie s prísnymi compliance požiadavkami',
      'Firmy vyžadujúce integráciu s ERP alebo SAP',
    ],

    cta: 'Kontaktovať obchodný tím',
  },
];

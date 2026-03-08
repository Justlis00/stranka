/* ═══════════════════════════════════════════════════════════════
   moduly.js — Definícia 13 modulov
   ───────────────────────────────────────────────────────────────
   TODO: Zmeň názov, popis, ikonu alebo farbu modulu tu.
         Zmena sa prejaví na karte v index.html AJ na detail stránke.
   TODO: Pre každý modul uprav:
         - name:    názov modulu
         - slug:    URL (bez diakritiky, lowercase, pomlčky)
         - color:   farba akcentu (hex)
         - icon:    SVG path(y) — z https://heroicons.com
         - short:   krátky popis na karte (1 veta)
         - desc:    dlhší popis na detail stránke (2-3 vety)
         - features: zoznam funkcií na detail stránke
═══════════════════════════════════════════════════════════════ */

const MODULY = [
  {
    name:  'CRM & Zákazníci',
    slug:  'crm',
    color: '#0b5ed7',
    icon:  '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    short: 'Riadenie zákazníckych vzťahov a obchodného procesu na jednom mieste.',
    desc:  'Komplexný CRM modul umožňuje sledovať celý zákaznícky životný cyklus — od prvého kontaktu po dlhodobé partnerstvo. Automatizuje rutinné úlohy, pripomína dôležité termíny a dáva vám prehľad o každom zákazníkovi.',
    features: ['Evidencia kontaktov a firiem', 'Pipeline príležitostí', 'Automatické pripomienky', 'História komunikácie', 'Reporty a predpovede']
  },
  {
    name:  'Fakturácia & Financie',
    slug:  'fakturacia',
    color: '#16a34a',
    icon:  '<rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>',
    short: 'Vystavovanie faktúr, sledovanie platieb a prehľad cashflow v reálnom čase.',
    desc:  'Modul fakturácie automatizuje celý fakturačný proces — od vystavenia po uhradenie. Priamo sa napája na bankový účet, páruje platby a upozorňuje na pohľadávky po splatnosti.',
    features: ['Vystavovanie faktúr a proforma', 'Automatické párovanie platieb', 'Pohľadávky a záväzky', 'Cashflow prehľad', 'Export do účtovníctva']
  },
  {
    name:  'Sklad & Logistika',
    slug:  'sklad',
    color: '#d97706',
    icon:  '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>',
    short: 'Evidencia zásob, pohybov tovaru a automatické doplňovanie skladu.',
    desc:  'Skladový modul poskytuje real-time prehľad o stave zásob na všetkých pobočkách. Automaticky upozorňuje pri dosiahnutí minimálneho stavu a generuje objednávky u dodávateľov.',
    features: ['Evidencia zásob v reálnom čase', 'Pohyby príjem / výdaj', 'Multi-sklad podpora', 'Automatické objednávky', 'Čiarové kódy & QR']
  },
  {
    name:  'HR & Zamestnanci',
    slug:  'hr',
    color: '#7c3aed',
    icon:  '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    short: 'Personalistika, dochádzka, dovolenky a mzdové podklady na jednom mieste.',
    desc:  'HR modul centralizuje všetky personálne procesy — od náboru po odchod zamestnanca. Automatizuje schvaľovanie dovoleniek, sleduje dochádzku a pripravuje podklady pre mzdy.',
    features: ['Evidencia zamestnancov', 'Dochádzka a pracovné výkazy', 'Správa dovoleniek a absencií', 'Mzdové podklady', 'Onboarding & offboarding']
  },
  {
    name:  'Projekty & Úlohy',
    slug:  'projekty',
    color: '#0891b2',
    icon:  '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    short: 'Plánovanie projektov, priradenie úloh a sledovanie termínov v Kanban alebo Gantt pohľade.',
    desc:  'Projektový modul umožňuje tímom plánovať, priraďovať a sledovať prácu v reálnom čase. Podporuje Kanban tabule, Ganttove diagramy aj jednoduché zoznamy úloh podľa preferencie tímu.',
    features: ['Kanban & Gantt pohľad', 'Priradenie a sledovanie úloh', 'Míľniky a termíny', 'Časové výkazy', 'Notifikácie a upomienky']
  },
  {
    name:  'Reporting & Analytika',
    slug:  'reporting',
    color: '#be123c',
    icon:  '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
    short: 'Dashboardy, KPI reporty a exporty dát pre manažérske rozhodovanie.',
    desc:  'Analytický modul agreguje dáta zo všetkých ostatných modulov a zobrazuje ich v prehľadných dashboardoch. Umožňuje tvorbu vlastných reportov a ich automatické rozosielanie manažérom.',
    features: ['Real-time dashboardy', 'Vlastné KPI metriky', 'Automatické reporty emailom', 'Export do PDF / Excel', 'Porovnanie období']
  },
  {
    name:  'E-mail & Komunikácia',
    slug:  'komunikacia',
    color: '#0b5ed7',
    icon:  '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
    short: 'Interná komunikácia, zdieľané schránky a šablóny správ pre celý tím.',
    desc:  'Komunikačný modul prepája tím cez zdieľané emailové schránky, interný chat a oznámenia. Eliminuje stratu dôležitých správ a zabezpečuje, že každý zákaznícky dopyt dostane odpoveď načas.',
    features: ['Zdieľané emailové schránky', 'Interný chat', 'Šablóny správ', 'Automatické odpovede', 'História komunikácie']
  },
  {
    name:  'Dokumenty & Archív',
    slug:  'dokumenty',
    color: '#64748b',
    icon:  '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
    short: 'Centrálne úložisko dokumentov s verziovaním, prístupovými právami a fulltextovým vyhľadávaním.',
    desc:  'Dokumentový modul nahradí chaotické zdieľanie súborov cez email. Všetky dokumenty sú na jednom mieste s verziovaním, komentármi a presnými prístupovými právami pre každého člena tímu.',
    features: ['Centrálne úložisko', 'Verziovanie dokumentov', 'Prístupové práva', 'Fulltextové vyhľadávanie', 'Elektronický podpis']
  },
  {
    name:  'Obchod & Ponuky',
    slug:  'obchod',
    color: '#16a34a',
    icon:  '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>',
    short: 'Tvorba cenových ponúk, objednávok a sledovanie obchodného procesu.',
    desc:  'Obchodný modul urýchľuje celý predajný cyklus — od tvorby ponuky po prijatú objednávku. Automaticky generuje PDF dokumenty, sleduje stav objednávok a napája sa na sklad a fakturáciu.',
    features: ['Tvorba cenových ponúk', 'Správa objednávok', 'Automatické PDF dokumenty', 'Napojenie na sklad', 'Sledovanie stavu']
  },
  {
    name:  'Podpora & Helpdesk',
    slug:  'helpdesk',
    color: '#d97706',
    icon:  '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    short: 'Ticketový systém, SLA sledovanie a znalostná báza pre zákaznícku podporu.',
    desc:  'Helpdesk modul centralizuje všetky zákaznícke požiadavky do jedného systému. Každý ticket má priradeného riešiteľa, SLA termín a históriu komunikácie — žiadna požiadavka sa nestratí.',
    features: ['Ticketový systém', 'SLA sledovanie a upozornenia', 'Znalostná báza', 'Automatické priraďovanie', 'Zákaznícky portál']
  },
  {
    name:  'Marketing & Kampane',
    slug:  'marketing',
    color: '#be123c',
    icon:  '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
    short: 'Email kampane, segmentácia zákazníkov a meranie výsledkov marketingových aktivít.',
    desc:  'Marketingový modul umožňuje tvoriť, spúšťať a merať emailové kampane priamo zo systému. Segmentuje zákazníkov podľa správania, automatizuje follow-up sekvencie a meria konverzie.',
    features: ['Email kampane', 'Segmentácia zákazníkov', 'Automatizované sekvencie', 'A/B testovanie', 'Meranie konverzií']
  },
  {
    name:  'API & Integrácie',
    slug:  'api',
    color: '#7c3aed',
    icon:  '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    short: 'Prepojenie s externými systémami, webhooky a otvorené API pre vlastné integrácie.',
    desc:  'API modul umožňuje prepojiť WebArat s akýmkoľvek externým systémom — účtovníctvo, e-shop, ERP alebo vlastná aplikácia. Ponúka REST API, webhooky a hotové konektory pre populárne platformy.',
    features: ['REST API', 'Webhooky', 'Hotové konektory', 'API dokumentácia', 'Sandbox prostredie']
  },
  {
    name:  'Bezpečnosť & Prístupy',
    slug:  'bezpecnost',
    color: '#0891b2',
    icon:  '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    short: 'Správa rolí, dvojfaktorové overenie a audit log všetkých aktivít v systéme.',
    desc:  'Bezpečnostný modul zaistí, že každý používateľ má prístup len k tomu, čo potrebuje. Dvojfaktorové overenie, podrobný audit log a SSO integrácia spĺňajú požiadavky aj najprísnejších IT politík.',
    features: ['Správa rolí a oprávnení', 'Dvojfaktorové overenie (2FA)', 'SSO / SAML integrácia', 'Audit log aktivít', 'IP whitelist']
  },
];

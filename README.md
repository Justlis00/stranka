# CorpPlus — Upraviteľná šablóna webu

Jednostránkový firemný web. Postavený na čistom **HTML · CSS · JavaScript** — bez build nástrojov, bez frameworkov.

---

## Štruktúra súborov

```
untitled/
├── index.html              ← Všetky sekcie (každá má komentáre kde čo meniť)
│
├── css/
│   ├── style.css           ← HLAVNÝ SÚBOR — len importuje ostatné
│   ├── variables.css       ← Farby, fonty, medzery      ← ZAČATOK TU
│   ├── base.css            ← Reset + typografia + layout utility
│   ├── buttons.css         ← Tlačidlá (.btn, .btn-primary, .btn-outline)
│   ├── header.css          ← Hlavička a navigácia
│   ├── hero.css            ← Domov (hero sekcia)
│   ├── about.css           ← O nás (štatistický pás)
│   ├── features.css        ← Oblasti systému
│   ├── services.css        ← Moduly (karty so službami)
│   ├── pricing.css         ← Partneri (cenové karty)
│   ├── testimonials.css    ← Zákazníci (referencie)
│   ├── contact.css         ← Kontakt (formulár)
│   ├── footer.css          ← Päta stránky
│   └── responsive.css      ← Responzívne pravidlá (tablet/mobil)
│
├── js/
│   └── main.js             ← Sticky header, mobile menu, smooth scroll
└── README.md
```

---

## Náhľad lokálne

**Možnosť A — Node (odporúčané)**
```powershell
npx http-server -p 8080
# potom otvor http://localhost:8080
```

**Možnosť B — npm skript**
```powershell
npm run start
```

**Možnosť C — Python**
```powershell
python -m http.server 8080
```

---

## Ako upravovať

### 1. Zmena farieb — najrýchlejší spôsob re-skinu
Otvor `css/variables.css` a uprav premenné na vrchu:

```css
:root {
  --clr-primary:  #0b5ed7;   /* hlavná modrá → zmeň na farbu tvojej značky */
  --clr-accent:   #ff7a18;   /* oranžová     → odznaky, zvýraznenia         */
  --clr-dark:     #0a3b66;   /* tmavá námornícka → nadpisy, logo, footer    */
}
```

### 2. Zmena fontu
1. V `index.html` nahraď Google Fonts `<link>` za zvolený font.
2. V `css/variables.css` uprav `--font-family`.

Alternatívy: `Nunito` | `Inter` | `Raleway` | `Source Sans 3`

### 3. Zmena textov
Každá sekcia v `index.html` má `<!-- TODO: … -->` komentáre — presne vieš kde čo meniť:

| Čo | Kde |
|---|---|
| Názov stránky | `<title>` v `<head>` |
| Názov značky | Hľadaj `CorpPlus` a nahraď |
| Hero nadpis / popis / CTA | sekcia `#hero` |
| Oblasti systému | sekcia `#features` |
| Moduly (karty) | sekcia `#services` |
| O nás (štatistiky) | sekcia `#about` |
| Zákazníci (citáty) | sekcia `#testimonials` |
| Partneri (plány) | sekcia `#pricing` |
| Kontakt (email) | `action="mailto:..."` na `<form>` |
| Footer (odkazy, sociálne siete) | `<footer>` |

### 4. Zmena obrázkov
Všetky obrázky sa načítavajú z Unsplash. Nahraď `src` atribúty:

| Sekcia | Odporúčaná veľkosť |
|---|---|
| Hero | 1200 × 800 px |
| Karty modulov | 800 × 500 px |
| Avatary zákazníkov | 96 × 96 px (štvorcové) |

Zdroje obrázkov zadarmo: [Unsplash](https://unsplash.com) · [Pexels](https://pexels.com) · [Pixabay](https://pixabay.com)

### 5. Zmena loga
Nájdi `.logo` v `index.html` a nahraď text `<img>` tagom:
```html
<a class="logo" href="#">
  <img src="assets/images/logo.svg" alt="Tvoja firma" height="36">
</a>
```

### 6. Funkčný kontaktný formulár
Aktuálny formulár používa `mailto:` (otvorí emailového klienta).
Pre skutočný backend zmeň `action` atribút:

- **Formspree** (zadarmo): `action="https://formspree.io/f/TVOJ_ID" method="POST"`
- **Netlify Forms**: pridaj atribút `netlify` na `<form>`

### 7. Pridanie / odstránenie sekcií
Každá sekcia je samostatná — môžeš:
- **Odstrániť** — vymaž celý `<section>…</section>` blok
- **Duplikovať** — skopíruj blok a daj mu nové `id`
- **Presunúť** — vystrihni a vlož na iné miesto

---

## Navigácia (horná lišta)

| Odkaz | Sekcia | CSS súbor |
|---|---|---|
| Domov | `#hero` | `hero.css` |
| Oblasti systému | `#features` | `features.css` |
| Moduly | `#services` | `services.css` |
| O nás | `#about` | `about.css` |
| Zákazníci | `#testimonials` | `testimonials.css` |
| Partneri | `#pricing` | `pricing.css` |
| **Kontakt** | `#contact` | `contact.css` |

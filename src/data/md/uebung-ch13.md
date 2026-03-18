# 22.3 CSS Grundlagen: Styling, Selektoren & Debugging – Praktische Übungen

## Übersicht

CSS gibt deiner HTML-Seite ihr Aussehen. Du lernst Selektoren, das Box-Modell, Spezifität und das Debugging mit DevTools.

---

## Teil 1: CSS einbinden & erste Stile

Erstelle `style.css` und verlinke sie in `index.html`:

```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

Füge erste Stile hinzu:

```css
/* Element-Selektor */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  background-color: #f5f5f5;
}

h1 {
  color: #333;
  font-size: 2rem;
}

/* Klassen-Selektor */
.card {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

---

## Teil 2: Selektoren üben

```css
/* Element */
p { color: #555; }

/* Klasse (wiederverwendbar) */
.highlight { background-color: yellow; }

/* ID (einmalig) */
#header { background-color: navy; color: white; }

/* Nachfahren-Selektor */
nav a { text-decoration: none; color: white; }

/* Kind-Selektor */
ul > li { list-style: disc; }

/* Pseudo-Klassen */
a:hover { text-decoration: underline; }
button:focus { outline: 2px solid blue; }
input:disabled { opacity: 0.5; }
li:first-child { font-weight: bold; }
```

**Merke:** Klassen (`.card`) sind besser als IDs (`#card`) – sie sind wiederverwendbar und haben niedrigere Spezifität.

---

## Teil 3: Box-Modell verstehen

```css
.box {
  /* Inhalt */
  width: 200px;
  height: 100px;

  /* Innenabstand */
  padding: 16px;

  /* Rahmen */
  border: 2px solid #333;

  /* Außenabstand */
  margin: 24px auto;

  /* Wichtig: Padding & Border in width einrechnen */
  box-sizing: border-box;
}
```

**Aufgabe:**
1. Erstelle ein `<div class="box">` in HTML
2. Öffne DevTools → **Elements** → klicke das Div an
3. Sieh dir im **Styles-Tab** die Box-Modell-Visualisierung an

---

## Teil 4: Spezifität & Cascade

```css
/* Spezifität: Element (0,0,1) < Klasse (0,1,0) < ID (1,0,0) */
p { color: black; }           /* 0,0,1 */
.text { color: blue; }        /* 0,1,0 */
#intro { color: red; }        /* 1,0,0 */

/* Welche Farbe gewinnt bei: <p class="text" id="intro"> */
/* → Rot (ID hat höchste Spezifität) */
```

---

## Teil 5: Farben & Schriften

```css
.palette {
  /* Farb-Formate */
  color: #e74c3c;              /* Hex */
  background: rgb(52, 73, 94); /* RGB */
  border-color: hsl(200, 50%, 50%); /* HSL */

  /* Schrift */
  font-size: 1rem;             /* relativ zur root (16px) */
  font-weight: bold;
  line-height: 1.6;
  letter-spacing: 0.05em;
}
```

---

## Teil 6: DevTools – Live-Debugging

1. Öffne DevTools → **Elements**
2. Klicke auf ein Element (z. B. `h1`)
3. Im **Styles-Tab** siehst du alle geltenden CSS-Regeln
4. Ändere einen Wert direkt im Browser (z. B. `color`)
5. Im **Computed-Tab** siehst du die endgültigen berechneten Werte

**Tipp:** Durchgestrichene Regeln sind durch eine spezifischere Regel überschrieben worden.

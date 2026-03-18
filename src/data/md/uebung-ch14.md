# 22.4 CSS Layout & Responsive – Praktische Übungen

## Übersicht

Mit Flexbox und CSS Grid erstellst du moderne, responsive Layouts. In dieser Übung lernst du beide Systeme kennen und wann du welches einsetzt.

---

## Teil 1: Flexbox – Grundlagen

```css
/* Flexbox: 1-dimensional (Zeile ODER Spalte) */
.nav {
  display: flex;
  flex-direction: row;       /* Standard: nebeneinander */
  justify-content: space-between; /* Horizontal verteilen */
  align-items: center;       /* Vertikal zentrieren */
  gap: 1rem;                 /* Abstand zwischen Items */
}
```

**Aufgabe:** Erstelle eine Navigation mit Flexbox:

```html
<nav class="nav">
  <span class="logo">MyBrand</span>
  <div class="nav-links">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
</nav>
```

---

## Teil 2: Flexbox – Items

```css
/* Flex-Items */
.card {
  flex: 1;              /* Gleichmäßig wachsen */
  /* Kurzform für: flex-grow: 1; flex-shrink: 1; flex-basis: 0%; */
}

.main-content {
  flex: 2;              /* Doppelt so breit wie Sidebar */
}

.sidebar {
  flex: 1;
}

/* Umbruch bei zu wenig Platz */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
```

---

## Teil 3: CSS Grid – Grundlagen

```css
/* Grid: 2-dimensional (Zeilen UND Spalten) */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 gleich breite Spalten */
  gap: 1.5rem;
}

/* Responsive Grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

**Aufgabe:** Erstelle ein 3-spaltiges Kartenlayout:

```html
<div class="card-grid">
  <div class="card">Karte 1</div>
  <div class="card">Karte 2</div>
  <div class="card">Karte 3</div>
  <div class="card">Karte 4</div>
  <div class="card">Karte 5</div>
  <div class="card">Karte 6</div>
</div>
```

---

## Teil 4: Responsive Design

```html
<!-- Pflicht im <head>! -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

```css
/* Mobile-First: Basis-Stile für kleine Bildschirme */
.card-grid {
  display: grid;
  grid-template-columns: 1fr; /* 1 Spalte auf Mobil */
  gap: 1rem;
}

/* Tablet (ab 768px) */
@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 Spalten */
  }
}

/* Desktop (ab 1024px) */
@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr); /* 3 Spalten */
  }
}
```

---

## Teil 5: Häufige Layout-Probleme lösen

```css
/* Horizontales Scrollen verhindern */
* {
  box-sizing: border-box;
}
body {
  overflow-x: hidden;
}

/* Bilder responsiv machen */
img {
  max-width: 100%;
  height: auto;
}

/* Zentrieren mit Flexbox */
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

---

## Teil 6: DevTools – Responsive Mode

1. DevTools öffnen → **Toggle Device Toolbar** (Strg+Shift+M)
2. Verschiedene Geräte-Größen testen (iPhone, iPad, Desktop)
3. Im **Elements-Tab**: Flex/Grid-Overlays aktivieren (orangefarbene Icons)
4. Breakpoints live testen: Fensterbreite verändern und beobachten, wann sich das Layout ändert

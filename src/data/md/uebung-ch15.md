# 22.5 Portfolio-Projekt – Aufgabenstellung

## Ziel

Du erstellst eine eigene kleine Website, die alles bündelt, was du in Woche 22 gelernt hast: HTML-Struktur, semantische Elemente, CSS-Styling, Flexbox/Grid und Responsive Design.

---

## Zwei Wege

### Weg A – Freie Wahl

Erstelle eine Website zu einem Thema deiner Wahl:
- Persönliches Portfolio
- Fan-Seite (Band, Film, Sport)
- Kleines Unternehmens-Mock
- Produktseite

### Weg B – Geführtes Portfolio (empfohlen für Einsteiger)

Folge den Schritten unten, um ein strukturiertes persönliches Portfolio zu erstellen.

---

## Weg B: Schritt-für-Schritt

### Schritt 1: Projektstruktur

```
portfolio/
├── index.html
├── style.css
└── README.md
```

### Schritt 2: HTML-Gerüst

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mein Portfolio</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header>
    <nav class="navbar">
      <span class="logo">Mein Name</span>
      <ul class="nav-links">
        <li><a href="#about">Über mich</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="about">
      <h1>Hallo, ich bin [Name] 👋</h1>
      <p>Ich bin IT-Quereinsteiger und lerne gerade Webentwicklung.</p>
    </section>

    <section id="skills">
      <h2>Meine Skills</h2>
      <div class="skills-grid">
        <div class="skill-card">HTML</div>
        <div class="skill-card">CSS</div>
        <div class="skill-card">JavaScript</div>
        <div class="skill-card">React</div>
      </div>
    </section>

    <section id="contact">
      <h2>Kontakt</h2>
      <form class="contact-form">
        <input type="text" placeholder="Dein Name" required>
        <input type="email" placeholder="Deine E-Mail" required>
        <textarea placeholder="Deine Nachricht" rows="4" required></textarea>
        <button type="submit">Senden</button>
      </form>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Mein Name</p>
  </footer>

</body>
</html>
```

### Schritt 3: CSS-Styling (style.css)

```css
/* Basis */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Segoe UI', sans-serif;
  color: #333;
  line-height: 1.6;
}

/* Navigation */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #1a1a2e;
  color: white;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.nav-links a:hover {
  text-decoration: underline;
}

/* Sektionen */
section {
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

/* Skills-Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.skill-card {
  background: #f0f4ff;
  border: 1px solid #c5d0e6;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  font-weight: bold;
  transition: transform 0.2s;
}

.skill-card:hover {
  transform: translateY(-4px);
}

/* Kontaktformular */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin-top: 1.5rem;
}

.contact-form input,
.contact-form textarea {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

.contact-form button {
  padding: 0.75rem;
  background: #1a1a2e;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
}

.contact-form button:hover {
  background: #16213e;
}

/* Responsive */
@media (max-width: 600px) {
  .nav-links { display: none; } /* Mobil: Navigation ausblenden */
  section { padding: 2rem 1rem; }
}

/* Footer */
footer {
  text-align: center;
  padding: 1rem;
  background: #1a1a2e;
  color: #aaa;
  font-size: 0.9rem;
}
```

---

## Bewertungskriterien (100 Punkte)

| Bereich | Punkte | Anforderungen |
|---------|--------|---------------|
| **HTML** | 40 | Valides HTML5, semantische Elemente, Formular mit Validierung |
| **CSS** | 40 | Externes Stylesheet, Flexbox/Grid, :hover-Effekte, Box-Modell |
| **Qualität** | 20 | Funktionsfähig im Browser, lesbarer Code, README vorhanden |
| **Bonus** | +10 | Responsive Design, Animationen, Kreativität |

---

## Abgabe

- Stelle die fertigen Dateien in einen Ordner `portfolio/`
- Erstelle eine kurze `README.md` mit: Was hast du gebaut? Was hast du gelernt?
- Öffne die Seite im Browser und mache einen Screenshot

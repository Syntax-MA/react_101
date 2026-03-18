# 22.2 HTML: Struktur, Semantik & Formulare – Praktische Übungen

## Übersicht

HTML ist die Sprache des Webs. In dieser Übung lernst du, wie du strukturierte, semantisch korrekte HTML-Dokumente erstellst und interaktive Formulare baust.

---

## Teil 1: HTML5-Grundgerüst

Erstelle eine Datei `index.html` mit folgendem Grundgerüst:

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meine erste Seite</title>
</head>
<body>
  <h1>Hallo Welt!</h1>
</body>
</html>
```

**Aufgabe:** Öffne die Datei im Browser und überprüfe:
- Wird der Titel im Browser-Tab angezeigt?
- Erscheint die Überschrift?

---

## Teil 2: Semantische Elemente

Ergänze das Grundgerüst um eine vollständige semantische Struktur:

```html
<body>
  <header>
    <nav>
      <a href="#about">Über mich</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Kontakt</a>
    </nav>
  </header>

  <main>
    <section id="about">
      <h2>Über mich</h2>
      <p>Ich lerne gerade Webentwicklung.</p>
    </section>

    <section id="skills">
      <h2>Meine Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Mein Name</p>
  </footer>
</body>
```

**Merke:** `header`, `nav`, `main`, `section`, `footer` sind **semantische** Elemente – sie beschreiben die Bedeutung des Inhalts, nicht nur das Aussehen.

---

## Teil 3: Links & Pfade

Erstelle einen Unterordner `pages/` und darin `about.html`. Verlinke von `index.html` darauf:

```html
<!-- Relativer Link -->
<a href="pages/about.html">Über mich</a>

<!-- Externer Link (neuer Tab) -->
<a href="https://developer.mozilla.org" target="_blank" rel="noopener">MDN Docs</a>
```

---

## Teil 4: Formular bauen

Erstelle ein Kontaktformular mit Validierung:

```html
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required minlength="2">

  <label for="email">E-Mail:</label>
  <input type="email" id="email" name="email" required>

  <label for="message">Nachricht:</label>
  <textarea id="message" name="message" rows="4" required></textarea>

  <label for="topic">Thema:</label>
  <select id="topic" name="topic">
    <option value="general">Allgemein</option>
    <option value="support">Support</option>
    <option value="feedback">Feedback</option>
  </select>

  <button type="submit">Absenden</button>
</form>
```

**Aufgabe:** Öffne die DevTools (Network-Tab) und schau dir an, was passiert, wenn du das Formular absendest (GET vs. POST).

---

## Teil 5: DevTools – Request Cascade

1. Lade `index.html` mit einer verlinkten CSS-Datei
2. Öffne Network-Tab
3. Beobachte: Erst HTML → dann CSS → dann Bilder/Fonts

Das nennt sich **Request Cascade** – der Browser lädt Ressourcen schrittweise nach.

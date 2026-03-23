/**
 * kanbanData.js – Sprint-Boards für die drei Freitagskapitel
 *
 * Struktur pro Chapter:
 *   title       – Anzeigename des Boards
 *   project     – Projekt-Name (wie ein Ticket-Titel im echten Team)
 *   description – Kurzer Projektauftrag (1-2 Sätze)
 *   items[]     – Kanban-Karten
 *     id         – Eindeutig, z.B. "k9-1"
 *     col        – Startspalte: 'todo' | 'inprogress' | 'done'
 *     label      – Kategorie-Tag (z.B. 'Setup', 'API', 'UI')
 *     title      – Kurztitel der Aufgabe
 *     criteria[] – Acceptance Criteria (was muss erfüllt sein?)
 */

/* ══════════════════════════════════════════════════════════
   23.5 – JavaScript Mini-App
══════════════════════════════════════════════════════════ */
export const kanbanChapter9 = {
  title: '23.5 · Sprint Board – JS Mini-App',
  project: 'User-Verzeichnis App (oder eigenes Thema)',
  description:
    'Baut eine interaktive Web-App mit Vanilla JavaScript, die Daten von einer ' +
    'öffentlichen API lädt, anzeigt und filterbar macht.',
  items: [
    {
      id: 'k9-1',
      col: 'todo',
      label: 'Setup',
      title: 'HTML-Grundgerüst anlegen',
      criteria: [
        'index.html mit DOCTYPE und lang="de"',
        'Viewport Meta-Tag vorhanden',
        'Link zu style.css und app.js (defer)',
        'Semantische Struktur: header, main, section',
      ],
    },
    {
      id: 'k9-2',
      col: 'todo',
      label: 'Setup',
      title: 'CSS-Basis-Styling aufsetzen',
      criteria: [
        'box-sizing: border-box für alle Elemente',
        'Basis-Layout (max-width, margin: auto)',
        'Button- und Input-Styles definiert',
        'Loading- / Error- / Success-Klassen für Status',
      ],
    },
    {
      id: 'k9-3',
      col: 'todo',
      label: 'JS',
      title: 'DOM-Elemente selektieren & State initialisieren',
      criteria: [
        'Alle benötigten Elemente per querySelector selektiert',
        'allUsers = [] als State-Variable angelegt',
        'API_URL als Konstante definiert',
        'Keine globalen var-Variablen',
      ],
    },
    {
      id: 'k9-4',
      col: 'todo',
      label: 'JS',
      title: 'Status-Hilfsfunktion implementieren',
      criteria: [
        'setStatus(message, type) Funktion vorhanden',
        'Alte Klassen werden vor dem Setzen entfernt',
        'Funktioniert für "loading", "error" und "success"',
      ],
    },
    {
      id: 'k9-5',
      col: 'todo',
      label: 'API',
      title: 'Fetch-Funktion mit async/await bauen',
      criteria: [
        'loadUsers() ist async',
        'await fetch(API_URL) wird korrekt verwendet',
        'response.ok wird geprüft – bei Fehler wird geworfen',
        'await res.json() parst die Antwort',
        'try/catch/finally ist vorhanden',
        'Button wird während des Ladens deaktiviert',
      ],
    },
    {
      id: 'k9-6',
      col: 'todo',
      label: 'UI',
      title: 'User-Karten rendern',
      criteria: [
        'createUserCard(user) gibt ein DOM-Element zurück',
        'Destrukturierung: const { name, email } = user',
        'Template Literal für fullName verwendet',
        'textContent statt innerHTML für User-Daten',
        'renderUsers(users) leert die Liste vor dem Rendern',
      ],
    },
    {
      id: 'k9-7',
      col: 'todo',
      label: 'Feature',
      title: 'Filter-Funktion implementieren',
      criteria: [
        'filterUsers(searchTerm) Funktion vorhanden',
        'Array.filter() zum Durchsuchen verwendet',
        'Suche ist case-insensitive (.toLowerCase())',
        'Leerer Suchbegriff zeigt alle User wieder',
        'Statusanzeige aktualisiert sich beim Filtern',
      ],
    },
    {
      id: 'k9-8',
      col: 'todo',
      label: 'JS',
      title: 'Event Listener verknüpfen',
      criteria: [
        'click-Listener auf Load-Button',
        'input-Listener auf Suchfeld (live-Filter)',
        'Kein onclick im HTML – addEventListener im JS',
      ],
    },
    {
      id: 'k9-9',
      col: 'todo',
      label: 'Abgabe',
      title: 'README.md schreiben',
      criteria: [
        'Projektbeschreibung (2-3 Sätze)',
        'Verwendete Techniken aufgelistet',
        'Gewählter Weg (A oder B) angegeben',
        'Mindestens 1 Satz zu Lernerkenntnissen',
      ],
    },
  ],
};

/* ══════════════════════════════════════════════════════════
   24.5 – React Mini-App
══════════════════════════════════════════════════════════ */
export const kanbanChapter10 = {
  title: '24.5 · Sprint Board – React Mini-App',
  project: 'Task-Manager (oder eigenes Thema)',
  description:
    'Baut eine React-App mit Komponenten, State und optionalem API-Fetch – ' +
    'als Wochenabschluss für React Grundlagen.',
  items: [
    {
      id: 'k10-1',
      col: 'todo',
      label: 'Setup',
      title: 'Vite-Projekt anlegen & aufräumen',
      criteria: [
        'npm create vite@latest ausgeführt',
        'Unnötige Dateien (App.css Boilerplate, logo) entfernt',
        'npm install && npm run dev startet ohne Fehler',
        'Ordnerstruktur: src/components/ vorhanden',
      ],
    },
    {
      id: 'k10-2',
      col: 'todo',
      label: 'Komponenten',
      title: 'App-Komponente & Datenstruktur definieren',
      criteria: [
        'App.jsx ist die Root-Komponente',
        'State-Struktur geplant (z.B. tasks-Array)',
        'Keine Logik direkt in main.jsx',
        'Klare Trennung: Daten vs. Darstellung',
      ],
    },
    {
      id: 'k10-3',
      col: 'todo',
      label: 'State',
      title: 'useState korrekt einsetzen',
      criteria: [
        'const [state, setState] = useState(initialValue)',
        'State wird NIEMALS direkt mutiert',
        'Neues Array via [...arr, item] oder filter()',
        'Jeder State-Update löst Re-Render aus',
      ],
    },
    {
      id: 'k10-4',
      col: 'todo',
      label: 'UI',
      title: 'Eingabe-Komponente bauen',
      criteria: [
        'Controlled Input: value={state} + onChange={...}',
        'Submit per Button-Klick oder Enter-Taste',
        'Leere Eingabe wird abgefangen (trim())',
        'Input nach Submit geleert',
      ],
    },
    {
      id: 'k10-5',
      col: 'todo',
      label: 'UI',
      title: 'Listen-Darstellung mit .map()',
      criteria: [
        'Array.map() rendert die Item-Liste',
        'Jedes Element hat ein eindeutiges key-Prop',
        'Kein Index als key (außer die Liste ändert sich nie)',
        'Leere Liste zeigt Placeholder-Text',
      ],
    },
    {
      id: 'k10-6',
      col: 'todo',
      label: 'Feature',
      title: 'Item löschen / abschließen implementieren',
      criteria: [
        'Löschen via filter(): tasks.filter(t => t.id !== id)',
        'Oder: Status-Toggle via map() + spread',
        'Handler-Funktion wird als Prop nach unten gereicht',
        'IDs sind eindeutig (Date.now() oder crypto.randomUUID())',
      ],
    },
    {
      id: 'k10-7',
      col: 'todo',
      label: 'Props',
      title: 'Props sauber zwischen Komponenten übergeben',
      criteria: [
        'Daten fließen von oben nach unten (Props)',
        'Events fließen von unten nach oben (Callbacks)',
        'Keine Props mehr als nötig (kein Prop-Drilling über 3+ Ebenen)',
        'PropTypes oder JSDoc-Kommentar dokumentiert Props',
      ],
    },
    {
      id: 'k10-8',
      col: 'todo',
      label: 'Optional',
      title: 'API-Fetch mit useEffect (Bonus)',
      criteria: [
        'useEffect mit leerm Dependency-Array [] für einmaligen Fetch',
        'Loading-State während Fetch angezeigt',
        'Error-State wenn Fetch fehlschlägt',
        'Cleanup-Funktion oder Abortcontroller vorhanden',
      ],
    },
    {
      id: 'k10-9',
      col: 'todo',
      label: 'Abgabe',
      title: 'README.md & Abgabe vorbereiten',
      criteria: [
        'README beschreibt Projekt und Komponenten-Struktur',
        'npm run build läuft ohne Fehler durch',
        'Projektordner gezipt oder Git-Repo verlinkt',
        'KI-Nutzung (falls vorhanden) kurz dokumentiert',
      ],
    },
  ],
};

/* ══════════════════════════════════════════════════════════
   25.5 – React Mini-App II
══════════════════════════════════════════════════════════ */
export const kanbanChapter20 = {
  title: '25.5 · Sprint Board – React Mini-App ✨',
  project: 'Movie-Wishlist oder eigenes Thema',
  description:
    'Baut eine vollständige React-App mit Router, State-Management, API-Call und Styling – ' +
    'als Wochenabschluss für React Grundlagen II.',
  items: [
    {
      id: 'k20-1',
      col: 'todo',
      label: 'Setup',
      title: 'Vite-Projekt vorbereiten & Router einrichten',
      criteria: [
        'npm install react-router-dom ausgeführt',
        'BrowserRouter in main.jsx eingebunden',
        'Ordnerstruktur: src/pages/, src/components/, src/hooks/',
        'npm run dev startet ohne Fehler',
      ],
    },
    {
      id: 'k20-2',
      col: 'todo',
      label: 'Router',
      title: 'Routen definieren',
      criteria: [
        'Mindestens 3 Routen: /, /item/:id, /add',
        'Routes + Route in App.jsx konfiguriert',
        '404-Route mit path="*" vorhanden',
        'Keine <a href> für interne Navigation',
      ],
    },
    {
      id: 'k20-3',
      col: 'todo',
      label: 'State',
      title: 'State-Struktur planen und implementieren',
      criteria: [
        'useState für die Haupt-Datenliste',
        'State-Objekte haben eindeutige IDs (Date.now() oder crypto.randomUUID())',
        'Kein direktes Mutieren – immer neues Array via spread oder filter()',
        'State in der Root-Komponente, Callbacks als Props',
      ],
    },
    {
      id: 'k20-4',
      col: 'todo',
      label: 'Hooks',
      title: 'Performance-Hooks einsetzen',
      criteria: [
        'useCallback für Handler-Funktionen die als Props übergeben werden',
        'useMemo für Sortier- oder Filterfunktionen',
        'useRef für DOM-Zugriff (z.B. Fokus auf Input nach Submit)',
        'Dependency Arrays sind korrekt und vollständig',
      ],
    },
    {
      id: 'k20-5',
      col: 'todo',
      label: 'API',
      title: 'API-Fetch mit useEffect & AbortController',
      criteria: [
        'useEffect mit korrektem Dependency Array',
        'Innere async-Funktion (nicht useEffect selbst async)',
        'Loading-State während Fetch angezeigt',
        'Error-State wenn Fetch fehlschlägt',
        'AbortController für Cleanup beim Unmount',
      ],
    },
    {
      id: 'k20-6',
      col: 'todo',
      label: 'Custom Hook',
      title: 'useLocalStorage Custom Hook schreiben',
      criteria: [
        'Hook beginnt mit "use": useLocalStorage',
        'localStorage.getItem beim Init, setItem beim Aktualisieren',
        'Gibt [value, setValue] zurück',
        'Nach Seiten-Reload bleibt Daten erhalten',
      ],
    },
    {
      id: 'k20-7',
      col: 'todo',
      label: 'Styling',
      title: 'Komponenten stylen',
      criteria: [
        'Mindestens eine Komponente mit CSS Module gestylt',
        'Tailwind-Klassen für mindestens eine weitere Komponente',
        'Hover-Effekte und responsive Anpassungen vorhanden',
        'Keine Inline-Styles außer für dynamische Werte',
      ],
    },
    {
      id: 'k20-8',
      col: 'todo',
      label: 'UI',
      title: 'CRUD-Funktionalität vollständig',
      criteria: [
        'Erstellen: Formular mit kontrolliertem Input',
        'Lesen: Liste und Detail-Ansicht',
        'Löschen: mit filter() ohne Mutation',
        'Optional: Update / Toggle-Status',
      ],
    },
    {
      id: 'k20-9',
      col: 'todo',
      label: 'Abgabe',
      title: 'Build & Abgabe vorbereiten',
      criteria: [
        'npm run build läuft ohne Fehler oder Warnings durch',
        'Alle Sprint-Karten sind auf "Done" verschoben',
        'README.md mit Projekt, Komponenten und verwendeten Hooks',
        'Demo für Lehrperson vorbereitet (2-3 Minuten)',
      ],
    },
  ],
};

/* ══════════════════════════════════════════════════════════
   22.5 – Portfolio-Projekt
══════════════════════════════════════════════════════════ */
export const kanbanChapter15 = {
  title: '22.5 · Sprint Board – Portfolio-Projekt',
  project: 'Persönliche Portfolio-Website',
  description:
    'Baut eure eigene Portfolio-Website mit HTML, CSS, Flexbox/Grid und Responsive Design – ' +
    'als Wochenabschluss für HTML & CSS.',
  items: [
    {
      id: 'k15-1',
      col: 'todo',
      label: 'Setup',
      title: 'Dateistruktur & HTML-Grundgerüst',
      criteria: [
        'index.html, style.css im gleichen Ordner',
        'Viewport Meta-Tag vorhanden',
        'lang="de" am html-Element',
        'Semantisch korrekte Elemente: header, nav, main, footer',
      ],
    },
    {
      id: 'k15-2',
      col: 'todo',
      label: 'Navigation',
      title: 'Navigationsleiste bauen',
      criteria: [
        '<nav> mit <ul> und <li>-Links',
        'Logo / Name links, Links rechts (Flexbox)',
        'Anker-Links zu den Sektionen (#about, #projects, #contact)',
        'Hover-Effekt auf Links via :hover',
      ],
    },
    {
      id: 'k15-3',
      col: 'todo',
      label: 'Inhalt',
      title: 'Hero-Sektion gestalten',
      criteria: [
        'Name und kurze Beschreibung prominent dargestellt',
        'Visuell ansprechend (Hintergrundfarbe oder -bild)',
        'Vertikal und horizontal zentriert (Flexbox oder Grid)',
        'Call-to-Action Button vorhanden',
      ],
    },
    {
      id: 'k15-4',
      col: 'todo',
      label: 'Inhalt',
      title: 'Projekte-Sektion mit Grid-Layout',
      criteria: [
        'Mindestens 2-3 Projekt-Karten',
        'CSS Grid für die Karten-Darstellung',
        'Jede Karte: Titel, Beschreibung, Technik-Tags',
        'hover-Effekt auf Karten (transform oder box-shadow)',
      ],
    },
    {
      id: 'k15-5',
      col: 'todo',
      label: 'Inhalt',
      title: 'Über-mich-Sektion',
      criteria: [
        'Foto oder Avatar (mit alt-Attribut!)',
        'Kurze Vorstellung (3-5 Sätze)',
        'Skills / Interessen als Liste oder Tags',
        'Zweispaltiges Layout (Flexbox oder Grid)',
      ],
    },
    {
      id: 'k15-6',
      col: 'todo',
      label: 'Formular',
      title: 'Kontaktformular einbauen',
      criteria: [
        'method="post" und action-Attribut gesetzt',
        'Labels korrekt mit Inputs verknüpft (for + id)',
        'required-Attribute bei Pflichtfeldern',
        'Submit-Button vorhanden',
      ],
    },
    {
      id: 'k15-7',
      col: 'todo',
      label: 'CSS',
      title: 'CSS Custom Properties (Variablen) nutzen',
      criteria: [
        ':root-Block mit Farbpalette definiert',
        'Mindestens 3 Custom Properties (--color-primary, etc.)',
        'Variablen durchgängig statt Hex-Werte direkt',
      ],
    },
    {
      id: 'k15-8',
      col: 'todo',
      label: 'Responsive',
      title: 'Mobile-First & Responsive Design',
      criteria: [
        'Mobile Layout funktioniert ohne Media Query als Basis',
        'Mindestens ein Breakpoint bei 768px',
        'Navigation auf Mobile: Links untereinander oder Burger-Menü',
        'Grid-Karten auf Mobile einspaltig',
      ],
    },
    {
      id: 'k15-9',
      col: 'todo',
      label: 'Abgabe',
      title: 'Finale Überprüfung & Abgabe',
      criteria: [
        'HTML via W3C Validator geprüft (keine Fehler)',
        'Alle Bilder haben alt-Attribute',
        'Seite funktioniert auf Handy-Breite (320px)',
        'README mit kurzem Projektbeschreibung',
        'Dateien gezipt oder als GitHub-Link abgegeben',
      ],
    },
  ],
};

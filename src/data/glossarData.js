/**
 * glossarData.js
 * Definitionen für Glossar-Tooltips in der Lern-App.
 * Schlüssel = Begriff (exakt so wie er im Text markiert wird)
 */

export const glossar = {
  // ── JavaScript Basics ──────────────────────────────────────────
  'Variable': 'Ein benannter Speicherplatz im Arbeitsspeicher, der einen Wert enthält. In JS mit let, const oder var deklariert.',
  'const': 'Schlüsselwort für eine Variable, die nicht neu zugewiesen werden kann (aber Objekte/Arrays dürfen geändert werden).',
  'let': 'Schlüsselwort für eine blockgebundene Variable, die neu zugewiesen werden darf.',
  'var': 'Älteres Schlüsselwort für Variablen – funktionsgebunden und oft fehleranfällig. Besser: const/let verwenden.',
  'Funktion': 'Ein wiederverwendbarer Codeblock, der aufgerufen werden kann. In JS mit function oder als Arrow Function definiert.',
  'Arrow Function': 'Kurzschreibweise für Funktionen: (param) => ausdruck. Kein eigenes this.',
  'Array': 'Eine geordnete Liste von Werten: [1, 2, 3]. Zugriff über Index (arr[0]).',
  'Objekt': 'Eine Sammlung von Schlüssel-Wert-Paaren: { name: "Anna", alter: 25 }.',
  'Callback': 'Eine Funktion, die als Argument übergeben und später aufgerufen wird, z.B. in setTimeout oder als Event-Handler.',
  'Promise': 'Repräsentiert einen zukünftigen Wert aus einer asynchronen Operation. Zustände: pending → fulfilled oder rejected.',
  'async/await': 'Syntaxzucker für Promises: async macht eine Funktion asynchron, await wartet auf das Ergebnis eines Promise.',
  'fetch': 'Browser-API zum Laden von Daten über HTTP. Gibt ein Promise zurück: fetch(url).then(r => r.json()).',
  'JSON': 'JavaScript Object Notation – Textformat zum Datenaustausch. Sieht wie JS-Objekte aus, aber Schlüssel in Anführungszeichen.',
  'Scope': 'Der Gültigkeitsbereich einer Variable – bestimmt, wo sie sichtbar ist (global, Funktion, Block).',
  'Closure': 'Eine Funktion, die sich Variablen aus ihrem äußeren Scope merkt, auch nachdem dieser Scope beendet wurde.',
  'Hoisting': 'JS-Verhalten: Deklarationen (nicht Initialisierungen) werden an den Anfang ihres Scopes "gehoben".',
  'Spread': 'Operator ... zum Entpacken von Arrays/Objekten: [...arr] oder {...obj}.',
  'Destructuring': 'Kurzschreibweise zum Extrahieren von Werten: const { name } = person; oder const [a, b] = arr;',

  // ── DOM & Browser ──────────────────────────────────────────────
  'DOM': 'Document Object Model – baumartige Darstellung der HTML-Seite im Browser-Speicher. JS kann darauf zugreifen und es verändern.',
  'Event': 'Eine Aktion oder Begebenheit im Browser: Klick, Tastendruck, Laden, usw. Wird mit addEventListener abgehört.',
  'addEventListener': 'Methode um auf Browser-Events zu reagieren: element.addEventListener("click", handler).',
  'querySelector': 'Findet das erste Element, das einem CSS-Selektor entspricht: document.querySelector(".meine-klasse").',
  'innerHTML': 'Liest oder setzt den HTML-Inhalt eines Elements. Vorsicht: nie mit User-Input befüllen (XSS-Risiko).',
  'localStorage': 'Browser-Speicher, der Daten dauerhaft (bis zum Löschen) als Schlüssel-Wert-Paare speichert.',

  // ── HTML & CSS ─────────────────────────────────────────────────
  'Semantik': 'Bedeutungsvolle HTML-Tags wie <header>, <nav>, <main>, <article> statt überall <div>.',
  'Flexbox': 'CSS-Layout-Modell für eindimensionale Anordnung (Zeile oder Spalte): display: flex.',
  'Grid': 'CSS-Layout-Modell für zweidimensionale Raster: display: grid.',
  'Media Query': 'CSS-Regel die Styles abhängig von der Bildschirmgröße anwendet: @media (max-width: 768px) { ... }',
  'CSS-Variable': 'Wiederverwendbare CSS-Werte: --primary-color: blue; und Nutzung mit var(--primary-color).',
  'Box Model': 'Jedes Element hat: content + padding (Innenabstand) + border + margin (Außenabstand).',
  'Selektor': 'CSS-Ausdruck, der bestimmt welche Elemente ein Stil betrifft: .klasse, #id, element, .a > .b.',
  'HTTP': 'Hypertext Transfer Protocol – das Protokoll für die Kommunikation zwischen Browser und Server.',
  'URL': 'Uniform Resource Locator – die Adresse einer Ressource im Web: https://domain.com/pfad?param=wert.',

  // ── React ──────────────────────────────────────────────────────
  'React': 'JavaScript-Bibliothek zum Bauen von UI-Komponenten. Nutzt einen virtuellen DOM für effiziente Updates.',
  'Komponente': 'Wiederverwendbarer UI-Baustein in React – eine Funktion, die JSX zurückgibt.',
  'JSX': 'JavaScript-Syntaxerweiterung, die HTML-ähnlichen Code in JS ermöglicht. Wird zu React.createElement() kompiliert.',
  'Props': 'Eigenschaften, die von einer Elternkomponente an eine Kindkomponente übergeben werden. Read-only.',
  'State': 'Interner, veränderlicher Zustand einer Komponente. Änderungen lösen ein Re-Render aus.',
  'useState': 'React-Hook zum Verwalten von State: const [wert, setWert] = useState(anfangswert).',
  'useEffect': 'React-Hook für Nebeneffekte (API-Calls, Timer usw.) nach dem Rendern.',
  'useContext': 'React-Hook um auf Context-Werte zuzugreifen, ohne Props durchzureichen.',
  'Hook': 'Spezielle React-Funktion (beginnt mit "use"), die nur in Komponenten/anderen Hooks aufgerufen werden darf.',
  'Virtual DOM': 'Reakts interne Kopie des DOM. React vergleicht es mit dem echten DOM und aktualisiert nur die Unterschiede.',
  'Re-Render': 'React zeichnet eine Komponente neu, wenn sich State oder Props ändern.',
  'Key': 'Eindeutiger Bezeichner für Listenelemente in React: <li key={id}>. Hilft React beim effizienten Re-Rendern.',
  'Context': 'React-Mechanismus zum Teilen von Daten über mehrere Komponenten ohne Props-Drilling.',
  'Props Drilling': 'Das Weiterreichen von Props durch viele Komponenten-Ebenen – kann durch Context vermieden werden.',
  'Vite': 'Modernes Build-Tool und Dev-Server für Frontend-Projekte. Sehr schnell durch native ES-Module.',
};

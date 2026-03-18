/**
 * Übungs-Daten für alle Kapitel
 *
 * dragDrop  – Drag-&-Drop Zuordnungsübungen
 * fill      – Lückentext-Übungen
 */

// ── 24.2 Drag & Drop ──────────────────────────────────────
export const dragDropChapter2 = {
  title: 'Begriffe zuordnen',
  instruction: 'Ziehe jeden Begriff auf die passende Beschreibung. Platzierte Begriffe durch Klick wieder entfernen.',
  items: [
    { id: 'komposition',     label: 'Komposition' },
    { id: 'containment',     label: 'Containment' },
    { id: 'spezialisierung', label: 'Spezialisierung' },
    { id: 'props',           label: 'Props' },
    { id: 'fragment',        label: 'Fragment' },
  ],
  targets: [
    { id: 'komposition',     label: 'Komponenten bestehen aus anderen Komponenten' },
    { id: 'containment',     label: 'Kinder über children-Prop einbetten' },
    { id: 'spezialisierung', label: 'Allgemeine Komponente → spezifischere Version' },
    { id: 'props',           label: 'Unveränderliche Eingabedaten von außen' },
    { id: 'fragment',        label: 'JSX-Container ohne echtes DOM-Element' },
  ],
};

// ── 24.3 Lückentext ───────────────────────────────────────
export const fillChapter3 = {
  title: 'useState Lückentext',
  instruction: 'Klicke zuerst ein Wort aus der Wortliste, dann die passende Lücke (oder umgekehrt).',
  // Jede Zeile: Array von Token.
  // { type: 'text', value }   → normaler Text (HTML erlaubt für Syntaxfarben)
  // { type: 'blank', id, answer } → ausfüllbare Lücke
  lines: [
    [
      { type: 'kw',    value: 'import' },
      { type: 'text',  value: ' { ' },
      { type: 'blank', id: 0, answer: 'useState' },
      { type: 'text',  value: ' } ' },
      { type: 'kw',    value: 'from' },
      { type: 'text',  value: ' ' },
      { type: 'str',   value: "'react'" },
      { type: 'text',  value: ';' },
    ],
    [
      { type: 'kw',    value: 'function' },
      { type: 'text',  value: ' ' },
      { type: 'fn',    value: 'Counter' },
      { type: 'text',  value: '() {' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'kw',    value: 'const' },
      { type: 'text',  value: ' [' },
      { type: 'blank', id: 1, answer: 'count' },
      { type: 'text',  value: ', ' },
      { type: 'blank', id: 2, answer: 'setCount' },
      { type: 'text',  value: '] = ' },
      { type: 'blank', id: 3, answer: 'useState' },
      { type: 'text',  value: '(' },
      { type: 'num',   value: '0' },
      { type: 'text',  value: ');' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'kw',    value: 'return' },
      { type: 'text',  value: ' (' },
    ],
    [
      { type: 'indent', value: '    ' },
      { type: 'jsx',   value: '<button' },
      { type: 'text',  value: ' ' },
      { type: 'var',   value: 'onClick' },
      { type: 'text',  value: '={() => ' },
      { type: 'blank', id: 4, answer: 'setCount' },
      { type: 'text',  value: '(' },
      { type: 'blank', id: 5, answer: 'count' },
      { type: 'text',  value: ' + ' },
      { type: 'num',   value: '1' },
      { type: 'text',  value: ')}>' },
    ],
    [
      { type: 'indent', value: '      ' },
      { type: 'text',  value: 'Zähler: {' },
      { type: 'blank', id: 6, answer: 'count' },
      { type: 'text',  value: '}' },
    ],
    [
      { type: 'indent', value: '    ' },
      { type: 'jsx',   value: '</button>' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'text',  value: ');' },
    ],
    [
      { type: 'text',  value: '}' },
    ],
  ],
  wordBank: ['useState', 'count', 'setCount', 'useEffect', 'value', 'setState'],
};

// ── 24.4 Drag & Drop ──────────────────────────────────────
export const dragDropChapter4 = {
  title: 'Rendering-Operatoren zuordnen',
  instruction: 'Ordne jeden Operator oder Begriff dem passenden Verhalten zu.',
  items: [
    { id: 'and',         label: '&&' },
    { id: 'or',          label: '||' },
    { id: 'ternary',     label: '? :' },
    { id: 'earlyreturn', label: 'Early Return' },
    { id: 'key',         label: 'key' },
  ],
  targets: [
    { id: 'and',         label: 'Rendert nur wenn Bedingung truthy ist' },
    { id: 'or',          label: 'Zeigt Fallback-Wert wenn links falsy' },
    { id: 'ternary',     label: 'Wenn / Sonst – kompaktes if-else' },
    { id: 'earlyreturn', label: 'Fehler-Fälle zuerst abfangen, Erfolg am Ende' },
    { id: 'key',         label: 'Pflichtattribut für Listenelemente in map()' },
  ],
};

// ── 23.1 Lückentext: Arrow Function & Template Literal ────
export const fillChapter5 = {
  title: 'Arrow Functions & Template Literals',
  instruction: 'Klicke ein Wort aus der Wortliste, dann die passende Lücke (oder umgekehrt).',
  lines: [
    [
      { type: 'cmt', value: '// 1) Arrow Function mit implicit return' },
    ],
    [
      { type: 'kw', value: 'const' },
      { type: 'text', value: ' ' },
      { type: 'blank', id: 0, answer: 'greet' },
      { type: 'text', value: ' = (' },
      { type: 'blank', id: 1, answer: 'name' },
      { type: 'text', value: ') => ' },
      { type: 'str', value: '`Hallo, ${name}!`' },
      { type: 'text', value: ';' },
    ],
    [
      { type: 'text', value: '' },
    ],
    [
      { type: 'cmt', value: '// 2) Template Literal – mehrzeilig' },
    ],
    [
      { type: 'kw', value: 'const' },
      { type: 'text', value: ' ' },
      { type: 'blank', id: 2, answer: 'age' },
      { type: 'text', value: ' = ' },
      { type: 'num', value: '25' },
      { type: 'text', value: ';' },
    ],
    [
      { type: 'kw', value: 'const' },
      { type: 'text', value: ' ' },
      { type: 'blank', id: 3, answer: 'msg' },
      { type: 'text', value: ' = `Du bist ${' },
      { type: 'blank', id: 4, answer: 'age' },
      { type: 'text', value: '} Jahre alt`;' },
    ],
    [
      { type: 'text', value: '' },
    ],
    [
      { type: 'cmt', value: '// 3) Ternary Operator' },
    ],
    [
      { type: 'kw', value: 'const' },
      { type: 'text', value: ' status = age >= ' },
      { type: 'num', value: '18' },
      { type: 'text', value: ' ' },
      { type: 'blank', id: 5, answer: '?' },
      { type: 'text', value: ' ' },
      { type: 'str', value: "'Erwachsen'" },
      { type: 'text', value: ' ' },
      { type: 'blank', id: 6, answer: ':' },
      { type: 'text', value: ' ' },
      { type: 'str', value: "'Minderjährig'" },
      { type: 'text', value: ';' },
    ],
  ],
  wordBank: ['greet', 'name', 'age', 'msg', '?', ':', '=>', 'var'],
};

// ── 23.1 Drag & Drop: JS-Operatoren ──────────────────────
export const dragDropChapter5 = {
  title: 'JS-Operatoren zuordnen',
  instruction: 'Ordne jeden Begriff der passenden Beschreibung zu.',
  items: [
    { id: 'const',    label: 'const' },
    { id: 'let',      label: 'let' },
    { id: 'arrow',    label: '() => {}' },
    { id: 'ternary',  label: 'a ? b : c' },
    { id: 'nullish',  label: 'a ?? b' },
  ],
  targets: [
    { id: 'const',    label: 'Wert kann nicht neu zugewiesen werden' },
    { id: 'let',      label: 'Wert kann neu zugewiesen werden' },
    { id: 'arrow',    label: 'Moderne Funktion ohne eigenes this' },
    { id: 'ternary',  label: 'Kurzform für if/else' },
    { id: 'nullish',  label: 'Fallback nur bei null oder undefined' },
  ],
};

// ── 23.2 Lückentext: map() & filter() ────────────────────
export const fillChapter8 = {
  title: 'map() & filter()',
  instruction: 'Klicke ein Wort aus der Wortliste, dann die passende Lücke (oder umgekehrt).',
  lines: [
    [
      { type: 'kw', value: 'const' },
      { type: 'text', value: ' numbers = [' },
      { type: 'num', value: '1' },
      { type: 'text', value: ', ' },
      { type: 'num', value: '2' },
      { type: 'text', value: ', ' },
      { type: 'num', value: '3' },
      { type: 'text', value: ', ' },
      { type: 'num', value: '4' },
      { type: 'text', value: ', ' },
      { type: 'num', value: '5' },
      { type: 'text', value: '];' },
    ],
    [
      { type: 'text', value: '' },
    ],
    [
      { type: 'cmt', value: '// Verdopple alle Werte' },
    ],
    [
      { type: 'kw', value: 'const' },
      { type: 'text', value: ' doubled = numbers.' },
      { type: 'blank', id: 0, answer: 'map' },
      { type: 'text', value: '(n => n * ' },
      { type: 'num', value: '2' },
      { type: 'text', value: ');' },
    ],
    [
      { type: 'text', value: '' },
    ],
    [
      { type: 'cmt', value: '// Nur gerade Zahlen behalten' },
    ],
    [
      { type: 'kw', value: 'const' },
      { type: 'text', value: ' evens = numbers.' },
      { type: 'blank', id: 1, answer: 'filter' },
      { type: 'text', value: '(' },
      { type: 'blank', id: 2, answer: 'n' },
      { type: 'text', value: ' => ' },
      { type: 'blank', id: 3, answer: 'n' },
      { type: 'text', value: ' % ' },
      { type: 'num', value: '2' },
      { type: 'text', value: ' === ' },
      { type: 'num', value: '0' },
      { type: 'text', value: ');' },
    ],
    [
      { type: 'text', value: '' },
    ],
    [
      { type: 'cmt', value: '// Spread: neues Array mit extra Element' },
    ],
    [
      { type: 'kw', value: 'const' },
      { type: 'text', value: ' more = [' },
      { type: 'blank', id: 4, answer: '...' },
      { type: 'text', value: 'numbers, ' },
      { type: 'num', value: '6' },
      { type: 'text', value: '];' },
    ],
  ],
  wordBank: ['map', 'filter', 'find', 'n', '...', 'reduce', 'forEach'],
};

// ── 23.2 Drag & Drop: Array-Methoden ─────────────────────
export const dragDropChapter8 = {
  title: 'Array-Methoden zuordnen',
  instruction: 'Ordne jede Array-Methode ihrer Beschreibung zu.',
  items: [
    { id: 'map',      label: 'map()' },
    { id: 'filter',   label: 'filter()' },
    { id: 'find',     label: 'find()' },
    { id: 'spread',   label: '...(Spread)' },
    { id: 'destruct', label: 'Destructuring' },
  ],
  targets: [
    { id: 'map',      label: 'Transformiert jedes Element → neues Array gleicher Länge' },
    { id: 'filter',   label: 'Filtert Elemente → neues Array nur mit Treffern' },
    { id: 'find',     label: 'Gibt das erste passende Element zurück (oder undefined)' },
    { id: 'spread',   label: 'Entpackt Elemente – zum Kopieren oder Erweitern' },
    { id: 'destruct', label: 'Extrahiert Werte aus Array/Objekt in Variablen' },
  ],
};

// ── 23.3 Lückentext: querySelector & addEventListener ─────
export const fillChapter6 = {
  title: 'DOM & Events',
  instruction: 'Klicke ein Wort aus der Wortliste, dann die passende Lücke (oder umgekehrt).',
  lines: [
    [
      { type: 'cmt', value: '// Element auswählen & Inhalt ändern' },
    ],
    [
      { type: 'kw', value: 'const' },
      { type: 'text', value: ' btn = document.' },
      { type: 'blank', id: 0, answer: 'querySelector' },
      { type: 'text', value: '(' },
      { type: 'str', value: "'#myBtn'" },
      { type: 'text', value: ');' },
    ],
    [
      { type: 'text', value: '' },
    ],
    [
      { type: 'cmt', value: '// Event Listener registrieren' },
    ],
    [
      { type: 'text', value: 'btn.' },
      { type: 'blank', id: 1, answer: 'addEventListener' },
      { type: 'text', value: '(' },
      { type: 'str', value: "'click'" },
      { type: 'text', value: ', (' },
      { type: 'blank', id: 2, answer: 'e' },
      { type: 'text', value: ') => {' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'blank', id: 3, answer: 'e' },
      { type: 'text', value: '.' },
      { type: 'blank', id: 4, answer: 'preventDefault' },
      { type: 'text', value: '();' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'text', value: 'btn.' },
      { type: 'blank', id: 5, answer: 'textContent' },
      { type: 'text', value: ' = ' },
      { type: 'str', value: "'Geklickt!'" },
      { type: 'text', value: ';' },
    ],
    [
      { type: 'text', value: '});' },
    ],
  ],
  wordBank: ['querySelector', 'addEventListener', 'e', 'preventDefault', 'textContent', 'innerHTML', 'stopPropagation'],
};

// ── 23.3 Drag & Drop: DOM-Events ─────────────────────────
export const dragDropChapter6 = {
  title: 'DOM-Events zuordnen',
  instruction: 'Ordne jeden Event-Typ dem passenden Auslöser zu.',
  items: [
    { id: 'click',      label: 'click' },
    { id: 'input',      label: 'input' },
    { id: 'submit',     label: 'submit' },
    { id: 'keydown',    label: 'keydown' },
    { id: 'mouseover',  label: 'mouseover' },
  ],
  targets: [
    { id: 'click',      label: 'Maustaste auf Element gedrückt und losgelassen' },
    { id: 'input',      label: 'Wert eines Textfeldes ändert sich' },
    { id: 'submit',     label: 'Formular wird abgeschickt' },
    { id: 'keydown',    label: 'Taste auf der Tastatur wird gedrückt' },
    { id: 'mouseover',  label: 'Mauszeiger bewegt sich über ein Element' },
  ],
};

// ── 23.4 Lückentext: fetch & async/await ─────────────────
export const fillChapter7 = {
  title: 'fetch & async/await',
  instruction: 'Klicke ein Wort aus der Wortliste, dann die passende Lücke (oder umgekehrt).',
  lines: [
    [
      { type: 'blank', id: 0, answer: 'async' },
      { type: 'text', value: ' ' },
      { type: 'kw', value: 'function' },
      { type: 'text', value: ' ' },
      { type: 'fn', value: 'loadUser' },
      { type: 'text', value: '(id) {' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'kw', value: 'try' },
      { type: 'text', value: ' {' },
    ],
    [
      { type: 'indent', value: '    ' },
      { type: 'kw', value: 'const' },
      { type: 'text', value: ' res = ' },
      { type: 'blank', id: 1, answer: 'await' },
      { type: 'text', value: ' ' },
      { type: 'fn', value: 'fetch' },
      { type: 'text', value: '(`/api/users/${id}`);' },
    ],
    [
      { type: 'indent', value: '    ' },
      { type: 'kw', value: 'if' },
      { type: 'text', value: ' (!' },
      { type: 'blank', id: 2, answer: 'res.ok' },
      { type: 'text', value: ') ' },
      { type: 'kw', value: 'throw' },
      { type: 'text', value: ' ' },
      { type: 'kw', value: 'new' },
      { type: 'text', value: ' Error(' },
      { type: 'str', value: "'Fehler'" },
      { type: 'text', value: ');' },
    ],
    [
      { type: 'indent', value: '    ' },
      { type: 'kw', value: 'const' },
      { type: 'text', value: ' data = ' },
      { type: 'blank', id: 3, answer: 'await' },
      { type: 'text', value: ' res.' },
      { type: 'blank', id: 4, answer: 'json' },
      { type: 'text', value: '();' },
    ],
    [
      { type: 'indent', value: '    ' },
      { type: 'kw', value: 'return' },
      { type: 'text', value: ' data;' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'text', value: '} ' },
      { type: 'blank', id: 5, answer: 'catch' },
      { type: 'text', value: ' (err) {' },
    ],
    [
      { type: 'indent', value: '    ' },
      { type: 'fn', value: 'console' },
      { type: 'text', value: '.error(err);' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'text', value: '}' },
    ],
    [
      { type: 'text', value: '}' },
    ],
  ],
  wordBank: ['async', 'await', 'res.ok', 'json', 'catch', 'then', 'finally'],
};

// ── 23.4 Drag & Drop: Async-Konzepte ─────────────────────
export const dragDropChapter7 = {
  title: 'Async-Konzepte zuordnen',
  instruction: 'Ordne jeden Begriff der passenden Beschreibung zu.',
  items: [
    { id: 'promise',  label: 'Promise' },
    { id: 'async',    label: 'async' },
    { id: 'await',    label: 'await' },
    { id: 'resok',    label: 'res.ok' },
    { id: 'trycatch', label: 'try/catch' },
  ],
  targets: [
    { id: 'promise',  label: 'Platzhalter für einen zukünftigen Wert' },
    { id: 'async',    label: 'Markiert eine Funktion als asynchron' },
    { id: 'await',    label: 'Pausiert bis ein Promise aufgelöst ist' },
    { id: 'resok',    label: 'Prüft ob der HTTP-Statuscode im Erfolgsbereich liegt' },
    { id: 'trycatch', label: 'Fängt Laufzeit- und Netzwerkfehler ab' },
  ],
};

// ══════════════════════════════════════════════════════════
// 22.x – Web & HTML/CSS
// ══════════════════════════════════════════════════════════

// ── 22.1 Lückentext: HTTP-Anfrage & Status-Code ───────────
export const fillChapter11 = {
  title: 'HTTP-Anfrage & URL',
  instruction: 'Klicke ein Wort aus der Wortliste, dann die passende Lücke (oder umgekehrt).',
  lines: [
    [
      { type: 'cmt', value: '// URL-Bestandteile:' },
    ],
    [
      { type: 'cmt', value: '// https://api.example.com/users?sort=name' },
    ],
    [
      { type: 'cmt', value: '//  ^^^^^  ^^^^^^^^^^^^^^^^^^^  ^^^^^  ^^^^' },
    ],
    [
      { type: 'blank', id: 0, answer: 'Protokoll' },
      { type: 'text', value: '   ' },
      { type: 'blank', id: 1, answer: 'Domain' },
      { type: 'text', value: '         ' },
      { type: 'blank', id: 2, answer: 'Pfad' },
      { type: 'text', value: '  ' },
      { type: 'blank', id: 3, answer: 'Query' },
    ],
    [
      { type: 'text', value: '' },
    ],
    [
      { type: 'cmt', value: '// HTTP-Methoden für CRUD:' },
    ],
    [
      { type: 'cmt', value: '// Erstellen  → ' },
      { type: 'blank', id: 4, answer: 'POST' },
    ],
    [
      { type: 'cmt', value: '// Lesen      → ' },
      { type: 'blank', id: 5, answer: 'GET' },
    ],
    [
      { type: 'cmt', value: '// Ersetzen   → ' },
      { type: 'blank', id: 6, answer: 'PUT' },
    ],
    [
      { type: 'cmt', value: '// Löschen    → ' },
      { type: 'blank', id: 7, answer: 'DELETE' },
    ],
  ],
  wordBank: ['Protokoll', 'Domain', 'Pfad', 'Query', 'GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
};

// ── 22.1 Drag & Drop: HTTP Status-Codes ──────────────────
export const dragDropChapter11 = {
  title: 'HTTP Status-Codes zuordnen',
  instruction: 'Ordne jeden Status-Code seiner Bedeutung zu.',
  items: [
    { id: '200', label: '200 OK' },
    { id: '201', label: '201 Created' },
    { id: '301', label: '301 Moved Permanently' },
    { id: '404', label: '404 Not Found' },
    { id: '500', label: '500 Internal Server Error' },
  ],
  targets: [
    { id: '200', label: 'Anfrage erfolgreich, Inhalt wird zurückgegeben' },
    { id: '201', label: 'Ressource wurde erfolgreich erstellt' },
    { id: '301', label: 'Ressource dauerhaft unter neuer URL erreichbar' },
    { id: '404', label: 'Ressource nicht gefunden – Client-Fehler' },
    { id: '500', label: 'Unerwarteter Fehler auf dem Server' },
  ],
};

// ── 22.2 Lückentext: HTML-Grundgerüst & Semantik ─────────
export const fillChapter12 = {
  title: 'HTML-Grundgerüst & semantische Tags',
  instruction: 'Klicke ein Wort aus der Wortliste, dann die passende Lücke (oder umgekehrt).',
  lines: [
    [
      { type: 'jsx', value: '<!DOCTYPE' },
      { type: 'text', value: ' ' },
      { type: 'blank', id: 0, answer: 'html' },
      { type: 'jsx', value: '>' },
    ],
    [
      { type: 'jsx', value: '<html' },
      { type: 'text', value: ' lang=' },
      { type: 'str', value: '"de"' },
      { type: 'jsx', value: '>' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'jsx', value: '<' },
      { type: 'blank', id: 1, answer: 'head' },
      { type: 'jsx', value: '>' },
    ],
    [
      { type: 'indent', value: '    ' },
      { type: 'jsx', value: '<meta' },
      { type: 'text', value: ' charset=' },
      { type: 'str', value: '"UTF-8"' },
      { type: 'jsx', value: '>' },
    ],
    [
      { type: 'indent', value: '    ' },
      { type: 'jsx', value: '<title>' },
      { type: 'text', value: 'Meine Seite' },
      { type: 'jsx', value: '</title>' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'jsx', value: '</' },
      { type: 'blank', id: 2, answer: 'head' },
      { type: 'jsx', value: '>' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'jsx', value: '<' },
      { type: 'blank', id: 3, answer: 'body' },
      { type: 'jsx', value: '>' },
    ],
    [
      { type: 'indent', value: '    ' },
      { type: 'jsx', value: '<' },
      { type: 'blank', id: 4, answer: 'header' },
      { type: 'jsx', value: '>' },
      { type: 'text', value: '...' },
      { type: 'jsx', value: '</' },
      { type: 'blank', id: 5, answer: 'header' },
      { type: 'jsx', value: '>' },
    ],
    [
      { type: 'indent', value: '    ' },
      { type: 'jsx', value: '<' },
      { type: 'blank', id: 6, answer: 'main' },
      { type: 'jsx', value: '>' },
      { type: 'text', value: '...' },
      { type: 'jsx', value: '</' },
      { type: 'blank', id: 7, answer: 'main' },
      { type: 'jsx', value: '>' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'jsx', value: '</' },
      { type: 'blank', id: 8, answer: 'body' },
      { type: 'jsx', value: '>' },
    ],
  ],
  wordBank: ['html', 'head', 'body', 'header', 'main', 'footer', 'section', 'nav'],
};

// ── 22.2 Drag & Drop: Semantische HTML-Elemente ───────────
export const dragDropChapter12 = {
  title: 'Semantische HTML-Elemente zuordnen',
  instruction: 'Ordne jedes HTML-Element seinem Zweck zu.',
  items: [
    { id: 'header',  label: '<header>' },
    { id: 'nav',     label: '<nav>' },
    { id: 'main',    label: '<main>' },
    { id: 'article', label: '<article>' },
    { id: 'footer',  label: '<footer>' },
  ],
  targets: [
    { id: 'header',  label: 'Kopfbereich der Seite – Logo & Überschrift' },
    { id: 'nav',     label: 'Navigationsbereich mit Links' },
    { id: 'main',    label: 'Hauptinhalt – darf nur einmal vorkommen' },
    { id: 'article', label: 'Eigenständiger, wiederverwendbarer Inhalt' },
    { id: 'footer',  label: 'Fußbereich mit Copyright & Links' },
  ],
};

// ── 22.3 Lückentext: CSS Selektoren & Box-Modell ─────────
export const fillChapter13 = {
  title: 'CSS Selektoren & Box-Modell',
  instruction: 'Klicke ein Wort aus der Wortliste, dann die passende Lücke (oder umgekehrt).',
  lines: [
    [
      { type: 'cmt', value: '/* Selektoren */' },
    ],
    [
      { type: 'blank', id: 0, answer: 'h1' },
      { type: 'text', value: ' { color: blue; }' },
      { type: 'cmt', value: '  /* Tag-Selektor */' },
    ],
    [
      { type: 'blank', id: 1, answer: '.card' },
      { type: 'text', value: ' { border: 1px solid; }' },
      { type: 'cmt', value: '  /* Klasse */' },
    ],
    [
      { type: 'blank', id: 2, answer: '#logo' },
      { type: 'text', value: ' { width: 80px; }' },
      { type: 'cmt', value: '  /* ID */' },
    ],
    [
      { type: 'text', value: '' },
    ],
    [
      { type: 'cmt', value: '/* Box-Modell – von innen nach außen */' },
    ],
    [
      { type: 'text', value: '.box {' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'blank', id: 3, answer: 'padding' },
      { type: 'text', value: ': 16px;' },
      { type: 'cmt', value: '  /* Innenabstand */' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'blank', id: 4, answer: 'border' },
      { type: 'text', value: ': 2px solid black;' },
      { type: 'cmt', value: '  /* Rahmen */' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'blank', id: 5, answer: 'margin' },
      { type: 'text', value: ': 24px;' },
      { type: 'cmt', value: '  /* Außenabstand */' },
    ],
    [
      { type: 'text', value: '}' },
    ],
  ],
  wordBank: ['h1', '.card', '#logo', 'padding', 'border', 'margin', 'outline', 'gap'],
};

// ── 22.3 Drag & Drop: CSS-Konzepte ───────────────────────
export const dragDropChapter13 = {
  title: 'CSS-Konzepte zuordnen',
  instruction: 'Ordne jeden CSS-Begriff der passenden Beschreibung zu.',
  items: [
    { id: 'specificity', label: 'Spezifität' },
    { id: 'cascade',     label: 'Kaskade' },
    { id: 'boxmodel',    label: 'Box-Modell' },
    { id: 'pseudo',      label: ':hover' },
    { id: 'inherit',     label: 'inherit' },
  ],
  targets: [
    { id: 'specificity', label: 'Bestimmt welche Regel bei Konflikten gewinnt' },
    { id: 'cascade',     label: 'Regeln werden von oben nach unten verarbeitet' },
    { id: 'boxmodel',    label: 'content + padding + border + margin' },
    { id: 'pseudo',      label: 'Zustandsselektor – aktiv bei Maus darüber' },
    { id: 'inherit',     label: 'Wert wird vom Elternelement übernommen' },
  ],
};

// ── 22.4 Lückentext: Flexbox & Media Query ────────────────
export const fillChapter14 = {
  title: 'Flexbox & Media Query',
  instruction: 'Klicke ein Wort aus der Wortliste, dann die passende Lücke (oder umgekehrt).',
  lines: [
    [
      { type: 'cmt', value: '/* Flexbox Navigation */' },
    ],
    [
      { type: 'text', value: 'nav {' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'text', value: 'display: ' },
      { type: 'blank', id: 0, answer: 'flex' },
      { type: 'text', value: ';' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'blank', id: 1, answer: 'justify-content' },
      { type: 'text', value: ': space-between;' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'blank', id: 2, answer: 'align-items' },
      { type: 'text', value: ': center;' },
    ],
    [
      { type: 'text', value: '}' },
    ],
    [
      { type: 'text', value: '' },
    ],
    [
      { type: 'cmt', value: '/* Mobile-First Media Query */' },
    ],
    [
      { type: 'blank', id: 3, answer: '@media' },
      { type: 'text', value: ' (' },
      { type: 'blank', id: 4, answer: 'min-width' },
      { type: 'text', value: ': 768px) {' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'text', value: '.grid { display: ' },
      { type: 'blank', id: 5, answer: 'grid' },
      { type: 'text', value: '; grid-template-columns: repeat(3, 1fr); }' },
    ],
    [
      { type: 'text', value: '}' },
    ],
  ],
  wordBank: ['flex', 'grid', 'justify-content', 'align-items', '@media', 'min-width', 'max-width', 'flex-wrap'],
};

// ── 22.4 Drag & Drop: Layout-Eigenschaften ────────────────
export const dragDropChapter14 = {
  title: 'Layout-Eigenschaften zuordnen',
  instruction: 'Ordne jede CSS-Eigenschaft der passenden Beschreibung zu.',
  items: [
    { id: 'flexdir',   label: 'flex-direction' },
    { id: 'jc',        label: 'justify-content' },
    { id: 'ai',        label: 'align-items' },
    { id: 'gtc',       label: 'grid-template-columns' },
    { id: 'mq',        label: '@media' },
  ],
  targets: [
    { id: 'flexdir',   label: 'Legt die Hauptachse des Flex-Containers fest (row/column)' },
    { id: 'jc',        label: 'Verteilt Elemente entlang der Hauptachse' },
    { id: 'ai',        label: 'Richtet Elemente auf der Querachse aus' },
    { id: 'gtc',       label: 'Definiert die Spaltenstruktur eines CSS-Grids' },
    { id: 'mq',        label: 'Wendet CSS-Regeln ab einer bestimmten Bildschirmbreite an' },
  ],
};

// ── 22.5 Lückentext: HTML+CSS Zusammenfassung ─────────────
export const fillChapter15 = {
  title: 'HTML & CSS kombiniert',
  instruction: 'Klicke ein Wort aus der Wortliste, dann die passende Lücke (oder umgekehrt).',
  lines: [
    [
      { type: 'cmt', value: '<!-- Semantisches HTML mit Formular -->' },
    ],
    [
      { type: 'jsx', value: '<' },
      { type: 'blank', id: 0, answer: 'main' },
      { type: 'jsx', value: '>' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'jsx', value: '<form' },
      { type: 'text', value: ' ' },
      { type: 'blank', id: 1, answer: 'action' },
      { type: 'text', value: '="/submit">' },
    ],
    [
      { type: 'indent', value: '    ' },
      { type: 'jsx', value: '<input' },
      { type: 'text', value: ' type=' },
      { type: 'str', value: '"email"' },
      { type: 'text', value: ' ' },
      { type: 'blank', id: 2, answer: 'required' },
      { type: 'jsx', value: '>' },
    ],
    [
      { type: 'indent', value: '    ' },
      { type: 'jsx', value: '<button' },
      { type: 'text', value: ' type=' },
      { type: 'str', value: '"submit"' },
      { type: 'jsx', value: '>' },
      { type: 'text', value: 'Senden' },
      { type: 'jsx', value: '</button>' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'jsx', value: '</form>' },
    ],
    [
      { type: 'jsx', value: '</' },
      { type: 'blank', id: 3, answer: 'main' },
      { type: 'jsx', value: '>' },
    ],
    [
      { type: 'text', value: '' },
    ],
    [
      { type: 'cmt', value: '/* Flexbox-Karte im Grid */' },
    ],
    [
      { type: 'text', value: '.cards { display: ' },
      { type: 'blank', id: 4, answer: 'grid' },
      { type: 'text', value: '; gap: 1rem; }' },
    ],
    [
      { type: 'text', value: '.card  { display: ' },
      { type: 'blank', id: 5, answer: 'flex' },
      { type: 'text', value: '; flex-direction: column; }' },
    ],
  ],
  wordBank: ['main', 'action', 'required', 'grid', 'flex', 'header', 'method', 'section'],
};

// ── 22.5 Drag & Drop: Woche-22-Wiederholung ───────────────
export const dragDropChapter15 = {
  title: 'Woche 22 – Begriffe zuordnen',
  instruction: 'Ordne jeden Begriff dem richtigen Themenbereich zu.',
  items: [
    { id: 'http',      label: 'HTTP-Methoden' },
    { id: 'semantic',  label: 'Semantisches HTML' },
    { id: 'boxmodel',  label: 'Box-Modell' },
    { id: 'flexbox',   label: 'Flexbox' },
    { id: 'mediaq',    label: 'Media Queries' },
  ],
  targets: [
    { id: 'http',      label: 'GET, POST, PUT, DELETE – 22.1 Webarchitektur' },
    { id: 'semantic',  label: '<header>, <main>, <article> – 22.2 HTML' },
    { id: 'boxmodel',  label: 'padding + border + margin – 22.3 CSS' },
    { id: 'flexbox',   label: 'justify-content, align-items – 22.4 Layout' },
    { id: 'mediaq',    label: '@media (min-width: ...) – 22.4 Responsive' },
  ],
};

// ══════════════════════════════════════════════════════════
// 23.5 – JS Mini-App Review
// ══════════════════════════════════════════════════════════

// ── 23.5 Lückentext: JS Gesamtwiederholung ───────────────
export const fillChapter9 = {
  title: 'JavaScript Gesamtwiederholung',
  instruction: 'Klicke ein Wort aus der Wortliste, dann die passende Lücke (oder umgekehrt).',
  lines: [
    [
      { type: 'cmt', value: '// Arrow Function + Template Literal' },
    ],
    [
      { type: 'kw', value: 'const' },
      { type: 'text', value: ' ' },
      { type: 'blank', id: 0, answer: 'greet' },
      { type: 'text', value: ' = name => `Hallo ${name}!`;' },
    ],
    [
      { type: 'text', value: '' },
    ],
    [
      { type: 'cmt', value: '// Array-Methode + Destructuring' },
    ],
    [
      { type: 'kw', value: 'const' },
      { type: 'text', value: ' items = [{id:1,name:' },
      { type: 'str', value: "'Ana'" },
      { type: 'text', value: '},{id:2,name:' },
      { type: 'str', value: "'Ben'" },
      { type: 'text', value: '}];' },
    ],
    [
      { type: 'kw', value: 'const' },
      { type: 'text', value: ' names = items.' },
      { type: 'blank', id: 1, answer: 'map' },
      { type: 'text', value: '(({' },
      { type: 'blank', id: 2, answer: 'name' },
      { type: 'text', value: '}) => name);' },
    ],
    [
      { type: 'text', value: '' },
    ],
    [
      { type: 'cmt', value: '// DOM + Event' },
    ],
    [
      { type: 'text', value: 'document.' },
      { type: 'blank', id: 3, answer: 'querySelector' },
      { type: 'text', value: '(' },
      { type: 'str', value: "'#btn'" },
      { type: 'text', value: ').' },
      { type: 'blank', id: 4, answer: 'addEventListener' },
      { type: 'text', value: '(' },
      { type: 'str', value: "'click'" },
      { type: 'text', value: ', () => {' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'blank', id: 5, answer: 'fetch' },
      { type: 'text', value: '(' },
      { type: 'str', value: "'/api/data'" },
      { type: 'text', value: ').then(r => r.json()).then(console.log);' },
    ],
    [
      { type: 'text', value: '});' },
    ],
  ],
  wordBank: ['greet', 'map', 'name', 'querySelector', 'addEventListener', 'fetch', 'filter', 'textContent'],
};

// ── 23.5 Drag & Drop: JS Woche-Wiederholung ──────────────
export const dragDropChapter9 = {
  title: 'JavaScript Woche 23 – Konzepte zuordnen',
  instruction: 'Ordne jeden Begriff dem richtigen Thema aus Woche 23 zu.',
  items: [
    { id: 'const',    label: 'const / let' },
    { id: 'filter',   label: 'filter()' },
    { id: 'domsel',   label: 'querySelector' },
    { id: 'promise',  label: 'Promise' },
    { id: 'spread',   label: 'Spread ...' },
  ],
  targets: [
    { id: 'const',    label: '23.1 – Variablen-Deklaration ohne var' },
    { id: 'filter',   label: '23.2 – Array-Methode: filtert nach Bedingung' },
    { id: 'domsel',   label: '23.3 – Wählt DOM-Element per CSS-Selektor' },
    { id: 'promise',  label: '23.4 – Platzhalter für asynchronen Wert' },
    { id: 'spread',   label: '23.2 – Entpackt Array/Objekt-Elemente' },
  ],
};

// ══════════════════════════════════════════════════════════
// 24.1 – React Setup & JSX
// ══════════════════════════════════════════════════════════

// ── 24.1 Lückentext: JSX-Komponente ──────────────────────
export const fillChapter1 = {
  title: 'Erste React-Komponente',
  instruction: 'Klicke ein Wort aus der Wortliste, dann die passende Lücke (oder umgekehrt).',
  lines: [
    [
      { type: 'kw', value: 'import' },
      { type: 'text', value: ' ' },
      { type: 'blank', id: 0, answer: 'React' },
      { type: 'text', value: ' ' },
      { type: 'kw', value: 'from' },
      { type: 'text', value: ' ' },
      { type: 'str', value: "'react'" },
      { type: 'text', value: ';' },
    ],
    [
      { type: 'text', value: '' },
    ],
    [
      { type: 'kw', value: 'export default function' },
      { type: 'text', value: ' ' },
      { type: 'fn', value: 'Greeting' },
      { type: 'text', value: '() {' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'kw', value: 'const' },
      { type: 'text', value: ' name = ' },
      { type: 'str', value: "'Welt'" },
      { type: 'text', value: ';' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'kw', value: 'return' },
      { type: 'text', value: ' (' },
    ],
    [
      { type: 'indent', value: '    ' },
      { type: 'jsx', value: '<' },
      { type: 'blank', id: 1, answer: 'div' },
      { type: 'jsx', value: '>' },
    ],
    [
      { type: 'indent', value: '      ' },
      { type: 'jsx', value: '<h1>' },
      { type: 'text', value: 'Hallo {' },
      { type: 'blank', id: 2, answer: 'name' },
      { type: 'text', value: '}' },
      { type: 'jsx', value: '</h1>' },
    ],
    [
      { type: 'indent', value: '      ' },
      { type: 'jsx', value: '<p' },
      { type: 'text', value: ' ' },
      { type: 'blank', id: 3, answer: 'className' },
      { type: 'text', value: '=' },
      { type: 'str', value: '"subtitle"' },
      { type: 'jsx', value: '>' },
      { type: 'text', value: 'Willkommen!' },
      { type: 'jsx', value: '</p>' },
    ],
    [
      { type: 'indent', value: '    ' },
      { type: 'jsx', value: '</' },
      { type: 'blank', id: 4, answer: 'div' },
      { type: 'jsx', value: '>' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'text', value: ');' },
    ],
    [
      { type: 'text', value: '}' },
    ],
  ],
  wordBank: ['React', 'div', 'name', 'className', 'class', 'span', 'return', 'export'],
};

// ── 24.1 Drag & Drop: Vite Projektstruktur ────────────────
export const dragDropChapter1 = {
  title: 'Vite-Projektstruktur zuordnen',
  instruction: 'Ordne jede Datei ihrem Zweck zu.',
  items: [
    { id: 'indexhtml',   label: 'index.html' },
    { id: 'mainjsx',     label: 'src/main.jsx' },
    { id: 'appjsx',      label: 'src/App.jsx' },
    { id: 'packagejson', label: 'package.json' },
    { id: 'nodemod',     label: 'node_modules/' },
  ],
  targets: [
    { id: 'indexhtml',   label: 'HTML-Grundgerüst mit <div id="root">' },
    { id: 'mainjsx',     label: 'Einstiegspunkt – verbindet React mit #root' },
    { id: 'appjsx',      label: 'Hauptkomponente – liefert JSX zurück' },
    { id: 'packagejson', label: 'Metadaten, npm-Scripts & Abhängigkeiten' },
    { id: 'nodemod',     label: 'Installierte Pakete – nie manuell anfassen' },
  ],
};

// ══════════════════════════════════════════════════════════
// 24.2 – Fehlender Lückentext (DragDrop existiert bereits)
// ══════════════════════════════════════════════════════════

// ── 24.2 Lückentext: Komponenten & Props ─────────────────
export const fillChapter2 = {
  title: 'Komponente mit Props',
  instruction: 'Klicke ein Wort aus der Wortliste, dann die passende Lücke (oder umgekehrt).',
  lines: [
    [
      { type: 'cmt', value: '// Unterkomponente mit Props' },
    ],
    [
      { type: 'kw', value: 'function' },
      { type: 'text', value: ' ' },
      { type: 'fn', value: 'Card' },
      { type: 'text', value: '({ ' },
      { type: 'blank', id: 0, answer: 'title' },
      { type: 'text', value: ', ' },
      { type: 'blank', id: 1, answer: 'children' },
      { type: 'text', value: ' }) {' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'kw', value: 'return' },
      { type: 'text', value: ' (' },
    ],
    [
      { type: 'indent', value: '    ' },
      { type: 'jsx', value: '<div' },
      { type: 'text', value: ' ' },
      { type: 'blank', id: 2, answer: 'className' },
      { type: 'text', value: '=' },
      { type: 'str', value: '"card"' },
      { type: 'jsx', value: '>' },
    ],
    [
      { type: 'indent', value: '      ' },
      { type: 'jsx', value: '<h2>' },
      { type: 'text', value: '{' },
      { type: 'blank', id: 3, answer: 'title' },
      { type: 'text', value: '}' },
      { type: 'jsx', value: '</h2>' },
    ],
    [
      { type: 'indent', value: '      ' },
      { type: 'jsx', value: '<div>' },
      { type: 'text', value: '{' },
      { type: 'blank', id: 4, answer: 'children' },
      { type: 'text', value: '}' },
      { type: 'jsx', value: '</div>' },
    ],
    [
      { type: 'indent', value: '    ' },
      { type: 'jsx', value: '</div>' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'text', value: ');' },
    ],
    [
      { type: 'text', value: '}' },
    ],
  ],
  wordBank: ['title', 'children', 'className', 'props', 'class', 'label', 'content'],
};

// ══════════════════════════════════════════════════════════
// 24.3 – Fehlende Zuordnung (Fill existiert bereits)
// ══════════════════════════════════════════════════════════

// ── 24.3 Drag & Drop: useState-Konzepte ──────────────────
export const dragDropChapter3 = {
  title: 'useState-Konzepte zuordnen',
  instruction: 'Ordne jeden Begriff der passenden Beschreibung zu.',
  items: [
    { id: 'state',     label: 'State' },
    { id: 'setstate',  label: 'Setter-Funktion' },
    { id: 'rerender',  label: 'Re-Render' },
    { id: 'initval',   label: 'Initialwert' },
    { id: 'controlled',label: 'Controlled Input' },
  ],
  targets: [
    { id: 'state',     label: 'Reaktiver Wert einer Komponente' },
    { id: 'setstate',  label: 'Aktualisiert den State und löst Re-Render aus' },
    { id: 'rerender',  label: 'Neuzeichnen der Komponente nach State-Änderung' },
    { id: 'initval',   label: 'Startwert, der an useState() übergeben wird' },
    { id: 'controlled',label: 'Formularfeld dessen Wert durch State gesteuert wird' },
  ],
};

// ══════════════════════════════════════════════════════════
// 24.4 – Fehlender Lückentext (DragDrop existiert bereits)
// ══════════════════════════════════════════════════════════

// ── 24.4 Lückentext: map() mit key in JSX ────────────────
export const fillChapter4 = {
  title: 'Listen rendern mit map()',
  instruction: 'Klicke ein Wort aus der Wortliste, dann die passende Lücke (oder umgekehrt).',
  lines: [
    [
      { type: 'kw', value: 'const' },
      { type: 'text', value: ' fruits = [' },
      { type: 'str', value: "'Apfel'" },
      { type: 'text', value: ', ' },
      { type: 'str', value: "'Banane'" },
      { type: 'text', value: ', ' },
      { type: 'str', value: "'Mango'" },
      { type: 'text', value: '];' },
    ],
    [
      { type: 'text', value: '' },
    ],
    [
      { type: 'kw', value: 'function' },
      { type: 'text', value: ' ' },
      { type: 'fn', value: 'FruitList' },
      { type: 'text', value: '() {' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'kw', value: 'return' },
      { type: 'text', value: ' (' },
    ],
    [
      { type: 'indent', value: '    ' },
      { type: 'jsx', value: '<ul>' },
    ],
    [
      { type: 'indent', value: '      ' },
      { type: 'text', value: '{fruits.' },
      { type: 'blank', id: 0, answer: 'map' },
      { type: 'text', value: '(' },
      { type: 'blank', id: 1, answer: 'fruit' },
      { type: 'text', value: ' => (' },
    ],
    [
      { type: 'indent', value: '        ' },
      { type: 'jsx', value: '<li' },
      { type: 'text', value: ' ' },
      { type: 'blank', id: 2, answer: 'key' },
      { type: 'text', value: '={' },
      { type: 'blank', id: 3, answer: 'fruit' },
      { type: 'text', value: '}>' },
      { type: 'text', value: '{' },
      { type: 'blank', id: 4, answer: 'fruit' },
      { type: 'text', value: '}' },
      { type: 'jsx', value: '</li>' },
    ],
    [
      { type: 'indent', value: '      ' },
      { type: 'text', value: '))}' },
    ],
    [
      { type: 'indent', value: '    ' },
      { type: 'jsx', value: '</ul>' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'text', value: ');' },
    ],
    [
      { type: 'text', value: '}' },
    ],
  ],
  wordBank: ['map', 'fruit', 'key', 'filter', 'index', 'children', 'item'],
};

// ══════════════════════════════════════════════════════════
// 24.5 – React Mini-App Review
// ══════════════════════════════════════════════════════════

// ── 24.5 Lückentext: React Gesamtwiederholung ────────────
export const fillChapter10 = {
  title: 'React Gesamtwiederholung',
  instruction: 'Klicke ein Wort aus der Wortliste, dann die passende Lücke (oder umgekehrt).',
  lines: [
    [
      { type: 'kw', value: 'import' },
      { type: 'text', value: ' { ' },
      { type: 'blank', id: 0, answer: 'useState' },
      { type: 'text', value: ' } from ' },
      { type: 'str', value: "'react'" },
      { type: 'text', value: ';' },
    ],
    [
      { type: 'kw', value: 'import' },
      { type: 'text', value: ' ' },
      { type: 'blank', id: 1, answer: 'Item' },
      { type: 'text', value: ' from ' },
      { type: 'str', value: "'./Item'" },
      { type: 'text', value: ';' },
    ],
    [
      { type: 'text', value: '' },
    ],
    [
      { type: 'kw', value: 'export default function' },
      { type: 'text', value: ' ' },
      { type: 'fn', value: 'App' },
      { type: 'text', value: '() {' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'kw', value: 'const' },
      { type: 'text', value: ' [items, ' },
      { type: 'blank', id: 2, answer: 'setItems' },
      { type: 'text', value: '] = useState([' },
      { type: 'str', value: "'A'" },
      { type: 'text', value: ', ' },
      { type: 'str', value: "'B'" },
      { type: 'text', value: ']);' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'kw', value: 'return' },
      { type: 'text', value: ' (' },
    ],
    [
      { type: 'indent', value: '    ' },
      { type: 'jsx', value: '<ul>' },
    ],
    [
      { type: 'indent', value: '      ' },
      { type: 'text', value: '{items.' },
      { type: 'blank', id: 3, answer: 'map' },
      { type: 'text', value: '(item => <' },
      { type: 'blank', id: 4, answer: 'Item' },
      { type: 'text', value: ' ' },
      { type: 'blank', id: 5, answer: 'key' },
      { type: 'text', value: '={item} label={item} />)}' },
    ],
    [
      { type: 'indent', value: '    ' },
      { type: 'jsx', value: '</ul>' },
    ],
    [
      { type: 'indent', value: '  ' },
      { type: 'text', value: ');' },
    ],
    [
      { type: 'text', value: '}' },
    ],
  ],
  wordBank: ['useState', 'Item', 'setItems', 'map', 'key', 'filter', 'children', 'props'],
};

// ── 24.5 Drag & Drop: React Woche-Wiederholung ───────────
export const dragDropChapter10 = {
  title: 'React Woche 24 – Konzepte zuordnen',
  instruction: 'Ordne jeden Begriff dem richtigen Kapitel aus Woche 24 zu.',
  items: [
    { id: 'jsx',      label: 'JSX' },
    { id: 'props',    label: 'Props' },
    { id: 'usestate', label: 'useState' },
    { id: 'key',      label: 'key-Prop' },
    { id: 'children', label: 'children' },
  ],
  targets: [
    { id: 'jsx',      label: '24.1 – JavaScript-Erweiterung für HTML-ähnliche Syntax' },
    { id: 'props',    label: '24.2 – Unveränderliche Eingabedaten von außen' },
    { id: 'usestate', label: '24.3 – Hook für reaktiven Zustand in Komponenten' },
    { id: 'key',      label: '24.4 – Pflichtattribut für Listenelemente in map()' },
    { id: 'children', label: '24.2 – Untergeordnete Elemente per Containment einbetten' },
  ],
};

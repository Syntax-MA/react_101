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

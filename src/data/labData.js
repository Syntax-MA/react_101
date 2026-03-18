/**
 * labData.js – Übungslab-Aufgaben für alle 4 Kapitel
 *
 * Jede Aufgabe (exercise) hat:
 *   id          – eindeutige ID (number)
 *   title       – Aufgabentitel (string)
 *   description – Erklärung was zu tun ist (string, HTML erlaubt)
 *   filename    – Dateiname der im Editor-Header angezeigt wird
 *   startCode   – Vorgabe-Code im Editor (string)
 *   hint        – optionaler Tipp (string)
 *   tests[]     – Array von Test-Objekten:
 *     { label: string, check: (code: string) => boolean }
 */

// ══════════════════════════════════════════════════════
//  KAPITEL 1 – React Setup & JSX
// ══════════════════════════════════════════════════════
export const labChapter1 = {
  title: '🧪 Übungslab – React Setup & JSX',
  exercises: [
    {
      id: 1,
      title: 'Deine erste JSX-Komponente',
      description:
        'Schreibe eine Komponente namens <code>Hello</code>, die ein ' +
        '<code>&lt;h1&gt;</code> mit dem Text <strong>"Hallo React!"</strong> zurückgibt.',
      filename: 'Hello.jsx',
      startCode:
`function Hello() {
  // Schreibe hier dein return-Statement



}`,
      hint: 'JSX-Elemente werden mit spitzen Klammern geschrieben: <h1>Text</h1>. Vergiss das return-Keyword nicht!',
      tests: [
        {
          label: 'Funktion heißt Hello',
          check: code => /function\s+Hello\s*\(/.test(code),
        },
        {
          label: 'Enthält ein return-Statement',
          check: code => /return\s*[\(]?\s*</.test(code),
        },
        {
          label: 'Gibt ein <h1>-Element zurück',
          check: code => /<h1[\s>]/.test(code) && /<\/h1>/.test(code),
        },
        {
          label: 'Text lautet "Hallo React!"',
          check: code => /Hallo\s+React\s*!/.test(code),
        },
      ],
    },
    {
      id: 2,
      title: 'Variable in JSX einbetten',
      description:
        'Die Variable <code>name</code> ist bereits definiert. ' +
        'Gib sie im JSX aus: <code>&lt;p&gt;Hallo, {name}!&lt;/p&gt;</code>.',
      filename: 'Greeting.jsx',
      startCode:
`function Greeting() {
  const name = "Mete";

  return (
    // Schreibe ein <p>-Element das name einbettet

  );
}`,
      hint: 'Variablen in JSX werden mit geschweiften Klammern eingebettet: {variablenName}',
      tests: [
        {
          label: 'Enthält ein <p>-Element',
          check: code => /<p[\s>]/.test(code),
        },
        {
          label: 'Variable name wird mit {} eingebettet',
          check: code => /\{name\}/.test(code),
        },
        {
          label: 'Enthält den Text "Hallo"',
          check: code => /Hallo/.test(code),
        },
      ],
    },
    {
      id: 3,
      title: 'Fragment statt div',
      description:
        'Schreibe eine Komponente <code>Page</code>, die <strong>ohne</strong> einen ' +
        '<code>&lt;div&gt;</code>-Wrapper ein <code>&lt;h1&gt;</code> und ein ' +
        '<code>&lt;p&gt;</code> zurückgibt. Nutze ein <strong>Fragment</strong> <code>&lt;&gt;...&lt;/&gt;</code>.',
      filename: 'Page.jsx',
      startCode:
`function Page() {
  return (
    // Kein <div>! Nutze ein Fragment: <>...</>


  );
}`,
      hint: 'Fragments schreibt man als leere spitze Klammern: <> und </> statt <div> und </div>.',
      tests: [
        {
          label: 'Kein <div>-Wrapper',
          check: code => !/<div[\s>]/.test(code),
        },
        {
          label: 'Nutzt ein Fragment <> ... </>',
          check: code => /return\s*\(\s*<>/.test(code) || /return\s*<>/.test(code),
        },
        {
          label: 'Enthält ein <h1>-Element',
          check: code => /<h1[\s>]/.test(code),
        },
        {
          label: 'Enthält ein <p>-Element',
          check: code => /<p[\s>]/.test(code),
        },
      ],
    },
  ],
};

// ══════════════════════════════════════════════════════
//  KAPITEL 2 – Komponenten & Props
// ══════════════════════════════════════════════════════
export const labChapter2 = {
  title: '🧪 Übungslab – Komponenten & Props',
  exercises: [
    {
      id: 1,
      title: 'Props destructuren',
      description:
        'Schreibe eine Komponente <code>Button</code>, die eine Prop ' +
        '<code>label</code> empfängt und <code>&lt;button&gt;{label}&lt;/button&gt;</code> rendert. ' +
        'Destructuriere die Prop direkt im Parameter.',
      filename: 'Button.jsx',
      startCode:
`function Button(   ) {
  // Destructuriere label aus den Props

  return (
    // Rendere label im button

  );
}`,
      hint: 'Destructuring im Parameter: function Button({ label }) { ... }',
      tests: [
        {
          label: 'Prop label wird destructuriert',
          check: code => /\{\s*label\s*\}/.test(code),
        },
        {
          label: 'Gibt ein <button>-Element zurück',
          check: code => /<button[\s>]/.test(code),
        },
        {
          label: 'Zeigt {label} im Button',
          check: code => /\{label\}/.test(code),
        },
      ],
    },
    {
      id: 2,
      title: 'children-Prop verwenden',
      description:
        'Schreibe eine <code>Card</code>-Komponente. Sie soll ihre <code>children</code> ' +
        'in einem <code>&lt;div className="card"&gt;</code> einbetten.',
      filename: 'Card.jsx',
      startCode:
`function Card(   ) {
  // hole children aus den Props heraus

  return (
    // Bette children in ein <div className="card"> ein

  );
}`,
      hint: 'children ist eine ganz normale Prop: function Card({ children }) – und im JSX dann {children}.',
      tests: [
        {
          label: 'children wird als Prop empfangen',
          check: code => /\{\s*children\s*\}/.test(code),
        },
        {
          label: 'Enthält <div className="card">',
          check: code => /className\s*=\s*["']card["']/.test(code),
        },
        {
          label: 'children wird im JSX ausgegeben',
          check: code => /\{children\}/.test(code),
        },
      ],
    },
    {
      id: 3,
      title: 'Komponente exportieren',
      description:
        'Schreibe eine <code>Header</code>-Komponente mit einem ' +
        '<code>&lt;header&gt;</code>-Element und einem <code>&lt;h1&gt;</code> darin. ' +
        'Exportiere sie als <strong>Default-Export</strong>.',
      filename: 'Header.jsx',
      startCode:
`// Schreibe die Header-Komponente und exportiere sie


`,
      hint: 'export default steht entweder direkt vor function, oder am Ende der Datei: export default Header;',
      tests: [
        {
          label: 'Enthält eine Header-Funktion',
          check: code => /function\s+Header\s*\(/.test(code) || /const\s+Header\s*=/.test(code),
        },
        {
          label: 'Default-Export vorhanden',
          check: code => /export\s+default/.test(code),
        },
        {
          label: 'Enthält <header>-Element',
          check: code => /<header[\s>]/.test(code),
        },
        {
          label: 'Enthält <h1>-Element',
          check: code => /<h1[\s>]/.test(code),
        },
      ],
    },
  ],
};

// ══════════════════════════════════════════════════════
//  KAPITEL 3 – useState & Controlled Inputs
// ══════════════════════════════════════════════════════
export const labChapter3 = {
  title: '🧪 Übungslab – useState & Controlled Inputs',
  exercises: [
    {
      id: 1,
      title: 'useState importieren & nutzen',
      description:
        'Importiere <code>useState</code> aus <code>\'react\'</code> und erstelle in der ' +
        '<code>Counter</code>-Komponente einen State <code>count</code> mit Startwert <code>0</code>.',
      filename: 'Counter.jsx',
      startCode:
`// Importiere useState hier
import {    } from '   ';

function Counter() {
  // Erstelle den count-State mit Startwert 0
  const [    ,     ] =    (0);

  return <p>Zähler: {count}</p>;
}`,
      hint: 'useState kommt aus \'react\'. Die Syntax: const [wert, setWert] = useState(startwert);',
      tests: [
        {
          label: "import { useState } from 'react'",
          check: code => /import\s*\{\s*useState\s*\}\s*from\s*['"]react['"]/.test(code),
        },
        {
          label: 'useState(0) wird aufgerufen',
          check: code => /useState\s*\(\s*0\s*\)/.test(code),
        },
        {
          label: 'Array-Destructuring: [count, setCount]',
          check: code => /\[\s*\w+\s*,\s*\w+\s*\]\s*=\s*useState/.test(code),
        },
        {
          label: '{count} wird im JSX gerendert',
          check: code => /\{count\}/.test(code),
        },
      ],
    },
    {
      id: 2,
      title: 'onClick-Handler schreiben',
      description:
        'Erweitere den Counter: Füge dem Button einen <code>onClick</code>-Handler hinzu, ' +
        'der <code>setCount</code> mit <code>count + 1</code> aufruft.',
      filename: 'Counter.jsx',
      startCode:
`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Zähler: {count}</p>
      <button     >+1</button>
    </>
  );
}`,
      hint: 'onClick erwartet eine Funktion: onClick={() => setCount(count + 1)}',
      tests: [
        {
          label: 'onClick ist gesetzt',
          check: code => /onClick\s*=/.test(code),
        },
        {
          label: 'setCount wird aufgerufen',
          check: code => /setCount\s*\(/.test(code),
        },
        {
          label: 'count + 1 wird übergeben',
          check: code => /count\s*\+\s*1/.test(code),
        },
        {
          label: 'Arrow-Funktion als Handler',
          check: code => /onClick\s*=\s*\{[^}]*=>[^}]*\}/.test(code),
        },
      ],
    },
    {
      id: 3,
      title: 'Controlled Input',
      description:
        'Schreibe ein <code>&lt;input&gt;</code>-Element, dessen Wert durch den State ' +
        '<code>name</code> gesteuert wird. <code>onChange</code> soll <code>setName</code> ' +
        'mit <code>e.target.value</code> aufrufen.',
      filename: 'NameInput.jsx',
      startCode:
`import { useState } from 'react';

function NameInput() {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        // value und onChange hier ergänzen

      />
      <p>Hallo, {name}!</p>
    </div>
  );
}`,
      hint: 'value={name} macht es "controlled". onChange={e => setName(e.target.value)} aktualisiert den State.',
      tests: [
        {
          label: 'value={name} gesetzt',
          check: code => /value\s*=\s*\{name\}/.test(code),
        },
        {
          label: 'onChange ist vorhanden',
          check: code => /onChange\s*=/.test(code),
        },
        {
          label: 'setName wird in onChange aufgerufen',
          check: code => /onChange[^=]*=>[^}]*setName/.test(code) || /onChange\s*=\s*\{[^}]*setName/.test(code),
        },
        {
          label: 'e.target.value wird verwendet',
          check: code => /e\.target\.value/.test(code),
        },
      ],
    },
  ],
};

// ══════════════════════════════════════════════════════
//  KAPITEL 4 – Rendering, Listen & Keys
// ══════════════════════════════════════════════════════
export const labChapter4 = {
  title: '🧪 Übungslab – Rendering, Listen & Keys',
  exercises: [
    {
      id: 1,
      title: 'map() zum Transformieren',
      description:
        'Transformiere das <code>names</code>-Array mit <code>map()</code> so, ' +
        'dass alle Einträge in <strong>Großbuchstaben</strong> sind. ' +
        'Nutze die Arrow-Syntax und <code>toUpperCase()</code>.',
      filename: 'transform.js',
      startCode:
`const names = ['anna', 'ben', 'clara'];

// Erstelle upper mit map() und toUpperCase()
const upper =                    ;

console.log(upper); // ['ANNA', 'BEN', 'CLARA']`,
      hint: 'Arrow-Syntax: names.map(n => n.toUpperCase())',
      tests: [
        {
          label: '.map() wird verwendet',
          check: code => /\.map\s*\(/.test(code),
        },
        {
          label: 'toUpperCase() wird aufgerufen',
          check: code => /\.toUpperCase\s*\(\s*\)/.test(code),
        },
        {
          label: 'Ergebnis wird in upper gespeichert',
          check: code => /const\s+upper\s*=/.test(code) && !/const\s+upper\s*=\s*;/.test(code),
        },
        {
          label: 'Nutzt Arrow-Syntax =>',
          check: code => /\.map\s*\(\s*\w+\s*=>/.test(code),
        },
      ],
    },
    {
      id: 2,
      title: 'Liste mit key rendern',
      description:
        'Rendere die <code>fruits</code>-Liste als <code>&lt;ul&gt;</code> mit ' +
        '<code>&lt;li&gt;</code>-Elementen. Jedes <code>&lt;li&gt;</code> braucht ein ' +
        '<code>key</code>-Attribut (nutze <code>fruit.id</code>).',
      filename: 'FruitList.jsx',
      startCode:
`const fruits = [
  { id: 1, name: 'Apfel' },
  { id: 2, name: 'Birne' },
  { id: 3, name: 'Mango' },
];

function FruitList() {
  return (
    <ul>
      {fruits.   (   => (
        <li   >
          {  }
        </li>
      ))}
    </ul>
  );
}`,
      hint: 'key kommt direkt auf <li>: <li key={fruit.id}>. Zeige den Namen mit {fruit.name}.',
      tests: [
        {
          label: '.map() wird verwendet',
          check: code => /\.map\s*\(/.test(code),
        },
        {
          label: '<li>-Elemente werden gerendert',
          check: code => /<li[\s>]/.test(code),
        },
        {
          label: 'key-Attribut ist vorhanden',
          check: code => /key\s*=\s*\{/.test(code),
        },
        {
          label: 'key nutzt die id',
          check: code => /key\s*=\s*\{\s*\w+\.id\s*\}/.test(code),
        },
        {
          label: 'Name wird angezeigt',
          check: code => /\{\s*\w+\.name\s*\}/.test(code),
        },
      ],
    },
    {
      id: 3,
      title: 'Bedingtes Rendering mit &&',
      description:
        'Nutze den <code>&&</code>-Operator, um <code>&lt;p&gt;Angemeldet!&lt;/p&gt;</code> ' +
        'nur dann zu rendern, wenn <code>isLoggedIn</code> <code>true</code> ist.',
      filename: 'Status.jsx',
      startCode:
`function Status() {
  const isLoggedIn = true;

  return (
    <div>
      <h2>Status</h2>
      {/* Zeige den Absatz nur wenn isLoggedIn true ist */}


    </div>
  );
}`,
      hint: 'Der &&-Operator: {bedingung && <Element />}. Wenn links truthy → rechts rendern.',
      tests: [
        {
          label: '&&-Operator wird genutzt',
          check: code => /\{[^}]*&&[^}]*\}/.test(code) || /isLoggedIn\s*&&/.test(code),
        },
        {
          label: 'isLoggedIn wird geprüft',
          check: code => /isLoggedIn/.test(code.replace(/\/\/.*/g, '').replace(/\/\*[\s\S]*?\*\//g, '')),
        },
        {
          label: '<p>-Element vorhanden',
          check: code => /<p[\s>]/.test(code),
        },
        {
          label: 'Text "Angemeldet" ist enthalten',
          check: code => /Angemeldet/.test(code),
        },
      ],
    },
  ],
};

// ══════════════════════════════════════════════════════
//  KAPITEL 5 – JavaScript Fundamentals (23.1)
// ══════════════════════════════════════════════════════
export const labChapter5 = {
  title: '🧪 Übungslab – JavaScript Fundamentals',
  exercises: [
    {
      id: 1,
      title: 'const & let – Variablen deklarieren',
      description:
        'Deklariere eine Konstante <code>name</code> mit deinem Namen und eine Variable <code>age</code> mit deinem Alter. ' +
        'Erhöhe dann <code>age</code> um 1.',
      filename: 'variablen.js',
      startCode:
`// Deklariere hier die Variablen:



// Erhöhe age um 1:
`,
      hint: 'Konstanten werden mit const deklariert, veränderliche Werte mit let. Erhöhen: age = age + 1; oder age++;',
      tests: [
        {
          label: 'const für name verwendet',
          check: code => /const\s+name\s*=/.test(code),
        },
        {
          label: 'let für age verwendet',
          check: code => /let\s+age\s*=/.test(code),
        },
        {
          label: 'age wird erhöht',
          check: code => /age\s*=\s*age\s*\+\s*1|age\+\+|\+\+age|age\s*\+=\s*1/.test(code),
        },
      ],
    },
    {
      id: 2,
      title: 'Arrow Function schreiben',
      description:
        'Schreibe eine Arrow Function <code>multiply</code>, die zwei Zahlen <code>a</code> und <code>b</code> multipliziert ' +
        'und das Ergebnis zurückgibt. Nutze die Kurzform (implicit return).',
      filename: 'arrowFunction.js',
      startCode:
`// Schreibe eine Arrow Function "multiply":
// const multiply = ...

`,
      hint: 'Kurzform: const multiply = (a, b) => a * b; — kein return nötig bei einzeiligen Ausdrücken!',
      tests: [
        {
          label: 'const multiply verwendet',
          check: code => /const\s+multiply\s*=/.test(code),
        },
        {
          label: 'Arrow-Syntax =>',
          check: code => /=>\s*.+/.test(code),
        },
        {
          label: 'Multiplikation mit *',
          check: code => /\*/.test(code.replace(/\/\/.*/g, '')),
        },
      ],
    },
    {
      id: 3,
      title: 'Template Literal erstellen',
      description:
        'Erstelle eine Variable <code>message</code> mit einem Template Literal, das den Satz ' +
        '<em>„Hallo [name], du bist [age] Jahre alt!"</em> enthält. ' +
        'Verwende dabei die Variablen <code>name</code> und <code>age</code>.',
      filename: 'templateLiteral.js',
      startCode:
`const name = 'Alex';
const age = 28;

// Erstelle message mit Template Literal:
// const message = ...
`,
      hint: 'Template Literals nutzen Backticks ` statt Anführungszeichen, und ${variable} für Interpolation.',
      tests: [
        {
          label: 'Backticks verwendet',
          check: code => /`[^`]*`/.test(code),
        },
        {
          label: '${name} eingebettet',
          check: code => /\$\{name\}/.test(code),
        },
        {
          label: '${age} eingebettet',
          check: code => /\$\{age\}/.test(code),
        },
        {
          label: 'const message deklariert',
          check: code => /const\s+message\s*=/.test(code),
        },
      ],
    },
    {
      id: 4,
      title: 'Ternary Operator nutzen',
      description:
        'Schreibe einen Ausdruck mit dem Ternary Operator: ' +
        'Wenn <code>score</code> >= 50 ist, soll <code>result</code> den Wert <code>"bestanden"</code> haben, ' +
        'sonst <code>"nicht bestanden"</code>.',
      filename: 'ternary.js',
      startCode:
`const score = 72;

// Schreibe den Ternary Operator:
// const result = ...
`,
      hint: 'Syntax: const result = bedingung ? wertWennWahr : wertWennFalsch;',
      tests: [
        {
          label: 'Ternary Operator ? : verwendet',
          check: code => /\?\s*.+\s*:\s*.+/.test(code.replace(/\/\/.*/g, '')),
        },
        {
          label: 'score >= 50 geprüft',
          check: code => /score\s*>=\s*50/.test(code),
        },
        {
          label: '"bestanden" enthalten',
          check: code => /['"`]bestanden['"`]/.test(code),
        },
        {
          label: 'const result deklariert',
          check: code => /const\s+result\s*=/.test(code),
        },
      ],
    },
  ],
};

// ══════════════════════════════════════════════════════
//  KAPITEL 11 – Webarchitektur & HTTP (22.1)
// ══════════════════════════════════════════════════════
export const labChapter11 = {
  title: '🧪 Übungslab – Webarchitektur & HTTP',
  exercises: [
    {
      id: 1,
      title: 'HTTP-Methoden zuordnen',
      description:
        'Ergänze die Variable <code>method</code> mit der richtigen HTTP-Methode ' +
        'für den jeweiligen Use-Case als String (z. B. <code>"GET"</code>). ' +
        '<br>Use-Case: <strong>Neue Daten anlegen</strong>.',
      filename: 'http-methoden.js',
      startCode:
`// Use-Case: Neue Daten anlegen (z. B. neuer Nutzer)
const method = "";

// Use-Case: Daten abrufen
const method2 = "";

// Use-Case: Daten löschen
const method3 = "";`,
      hint: 'Neue Daten anlegen → POST · Daten abrufen → GET · Löschen → DELETE',
      tests: [
        {
          label: 'method ist "POST"',
          check: code => /const\s+method\s*=\s*["']POST["']/.test(code),
        },
        {
          label: 'method2 ist "GET"',
          check: code => /const\s+method2\s*=\s*["']GET["']/.test(code),
        },
        {
          label: 'method3 ist "DELETE"',
          check: code => /const\s+method3\s*=\s*["']DELETE["']/.test(code),
        },
      ],
    },
    {
      id: 2,
      title: 'URL-Bestandteile auslesen',
      description:
        'Nutze das <code>URL</code>-Objekt in JavaScript, um aus der gegebenen URL ' +
        'den <code>hostname</code> und den ersten Query-Parameter <code>sort</code> auszulesen.',
      filename: 'url-parsing.js',
      startCode:
`const urlString = "https://api.example.com/users?sort=name&page=2";
const url = new URL(urlString);

// Lese hostname aus:
const hostname = ;

// Lese den Query-Parameter "sort" aus:
const sort = ;`,
      hint: 'url.hostname gibt die Domain zurück. url.searchParams.get("sort") gibt den Wert des Parameters zurück.',
      tests: [
        {
          label: 'new URL() verwendet',
          check: code => /new\s+URL\s*\(/.test(code),
        },
        {
          label: 'hostname ausgelesen',
          check: code => /url\.hostname/.test(code),
        },
        {
          label: 'searchParams.get() verwendet',
          check: code => /searchParams\.get\s*\(/.test(code),
        },
        {
          label: '"sort" Parameter abgefragt',
          check: code => /searchParams\.get\s*\(\s*["']sort["']/.test(code),
        },
      ],
    },
    {
      id: 3,
      title: 'Status-Code-Kategorie bestimmen',
      description:
        'Schreibe eine Funktion <code>getCategory</code>, die einen HTTP-Status-Code ' +
        'als Zahl erhält und die Kategorie als String zurückgibt: ' +
        '<code>"Erfolg"</code> (2xx), <code>"Weiterleitung"</code> (3xx), ' +
        '<code>"Client-Fehler"</code> (4xx), <code>"Server-Fehler"</code> (5xx).',
      filename: 'status-kategorie.js',
      startCode:
`function getCategory(statusCode) {
  // Gib die passende Kategorie zurück:


}`,
      hint: 'Nutze Math.floor(statusCode / 100) um die Hunderterstelle zu bestimmen: 2 → "Erfolg", 3 → "Weiterleitung" …',
      tests: [
        {
          label: 'Funktion getCategory deklariert',
          check: code => /function\s+getCategory\s*\(/.test(code) || /const\s+getCategory\s*=/.test(code),
        },
        {
          label: '"Erfolg" zurückgegeben (2xx)',
          check: code => /['"`]Erfolg['"`]/.test(code),
        },
        {
          label: '"Client-Fehler" zurückgegeben (4xx)',
          check: code => /['"`]Client-Fehler['"`]/.test(code),
        },
        {
          label: '"Server-Fehler" zurückgegeben (5xx)',
          check: code => /['"`]Server-Fehler['"`]/.test(code),
        },
      ],
    },
  ],
};

// ══════════════════════════════════════════════════════
//  KAPITEL 12 – HTML: Struktur, Semantik & Formulare (22.2)
// ══════════════════════════════════════════════════════
export const labChapter12 = {
  title: '🧪 Übungslab – HTML Struktur & Formulare',
  exercises: [
    {
      id: 1,
      title: 'Semantische Struktur erstellen',
      description:
        'Erstelle ein HTML-Grundgerüst mit den semantischen Elementen ' +
        '<code>&lt;header&gt;</code>, <code>&lt;main&gt;</code> und <code>&lt;footer&gt;</code>. ' +
        'Im <code>&lt;header&gt;</code> soll ein <code>&lt;h1&gt;</code> stehen.',
      filename: 'struktur.html',
      startCode:
`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Meine Seite</title>
</head>
<body>
  <!-- Ergänze header, main und footer:-->


</body>
</html>`,
      hint: '<header>, <main> und <footer> sind semantische Elemente. Im <header> kommt ein <h1>.',
      tests: [
        {
          label: '<header> vorhanden',
          check: code => /<header[\s>]/.test(code) && /<\/header>/.test(code),
        },
        {
          label: '<main> vorhanden',
          check: code => /<main[\s>]/.test(code) && /<\/main>/.test(code),
        },
        {
          label: '<footer> vorhanden',
          check: code => /<footer[\s>]/.test(code) && /<\/footer>/.test(code),
        },
        {
          label: '<h1> im <header>',
          check: code => /<header[\s\S]*?<h1[\s\S]*?<\/header>/.test(code),
        },
      ],
    },
    {
      id: 2,
      title: 'Kontaktformular bauen',
      description:
        'Erstelle ein Formular mit den Feldern: ' +
        '<code>name</code> (type="text", required), ' +
        '<code>email</code> (type="email", required) und ' +
        'einem Submit-Button.',
      filename: 'formular.html',
      startCode:
`<!-- Erstelle ein Kontaktformular: -->
<form>


</form>`,
      hint: '<input type="text" name="name" required> — Vergiss nicht den <button type="submit">!',
      tests: [
        {
          label: '<form> vorhanden',
          check: code => /<form[\s>]/.test(code),
        },
        {
          label: 'input type="text" mit required',
          check: code => /type\s*=\s*["']text["'][^>]*required|required[^>]*type\s*=\s*["']text["']/.test(code),
        },
        {
          label: 'input type="email" vorhanden',
          check: code => /type\s*=\s*["']email["']/.test(code),
        },
        {
          label: 'Submit-Button vorhanden',
          check: code => /type\s*=\s*["']submit["']/.test(code) || /<button/.test(code),
        },
      ],
    },
    {
      id: 3,
      title: 'Navigationsliste mit Links',
      description:
        'Erstelle eine <code>&lt;nav&gt;</code> mit einer unsortierten Liste <code>&lt;ul&gt;</code>. ' +
        'Die Liste soll 3 <code>&lt;li&gt;</code>-Einträge mit <code>&lt;a&gt;</code>-Links zu ' +
        '<code>#home</code>, <code>#about</code> und <code>#contact</code> enthalten.',
      filename: 'navigation.html',
      startCode:
`<!-- Erstelle die Navigation: -->


`,
      hint: '<nav><ul><li><a href="#home">Home</a></li>...</ul></nav>',
      tests: [
        {
          label: '<nav> vorhanden',
          check: code => /<nav[\s>]/.test(code),
        },
        {
          label: '<ul> und <li>-Elemente',
          check: code => /<ul[\s>]/.test(code) && /<li[\s>]/.test(code),
        },
        {
          label: 'href="#home" vorhanden',
          check: code => /href\s*=\s*["']#home["']/.test(code),
        },
        {
          label: 'Mindestens 3 <li>-Einträge',
          check: code => (code.match(/<li[\s>]/g) || []).length >= 3,
        },
      ],
    },
  ],
};

// ══════════════════════════════════════════════════════
//  KAPITEL 13 – CSS Grundlagen (22.3)
// ══════════════════════════════════════════════════════
export const labChapter13 = {
  title: '🧪 Übungslab – CSS Grundlagen',
  exercises: [
    {
      id: 1,
      title: 'Klassen-Selektor & Box-Modell',
      description:
        'Erstelle eine CSS-Klasse <code>.card</code> mit: weißem Hintergrund (<code>#ffffff</code>), ' +
        '<code>padding: 1rem</code>, <code>border-radius: 8px</code> und ' +
        '<code>box-sizing: border-box</code>.',
      filename: 'card.css',
      startCode:
`/* Erstelle die .card-Klasse: */


`,
      hint: '.card { background: #ffffff; padding: 1rem; border-radius: 8px; box-sizing: border-box; }',
      tests: [
        {
          label: '.card Selektor vorhanden',
          check: code => /\.card\s*\{/.test(code),
        },
        {
          label: 'background gesetzt',
          check: code => /background(-color)?\s*:\s*#fff(fff)?/.test(code) || /background(-color)?\s*:\s*white/.test(code),
        },
        {
          label: 'padding: 1rem gesetzt',
          check: code => /padding\s*:\s*1rem/.test(code),
        },
        {
          label: 'box-sizing: border-box',
          check: code => /box-sizing\s*:\s*border-box/.test(code),
        },
      ],
    },
    {
      id: 2,
      title: 'Hover-Effekt mit Pseudo-Klasse',
      description:
        'Erstelle einen Hover-Effekt für Buttons: Der Selektor <code>button:hover</code> soll ' +
        'die Hintergrundfarbe auf <code>#0056b3</code> und den Cursor auf <code>pointer</code> setzen.',
      filename: 'hover.css',
      startCode:
`button {
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
}

/* Füge den :hover-Effekt hinzu: */
`,
      hint: 'button:hover { background-color: #0056b3; cursor: pointer; }',
      tests: [
        {
          label: 'button:hover Selektor vorhanden',
          check: code => /button\s*:\s*hover\s*\{/.test(code),
        },
        {
          label: 'background-color geändert',
          check: code => /button\s*:\s*hover[\s\S]*?background(-color)?\s*:/.test(code),
        },
        {
          label: 'cursor: pointer gesetzt',
          check: code => /cursor\s*:\s*pointer/.test(code),
        },
      ],
    },
    {
      id: 3,
      title: 'Typografie & Farben',
      description:
        'Style den <code>body</code>: Schriftart <code>Arial, sans-serif</code>, ' +
        'Zeilenhöhe <code>1.6</code>, Schriftfarbe <code>#333333</code>. ' +
        'Style außerdem <code>h1</code> mit <code>font-size: 2rem</code>.',
      filename: 'typografie.css',
      startCode:
`/* Style body und h1: */


`,
      hint: 'body { font-family: Arial, sans-serif; line-height: 1.6; color: #333333; } h1 { font-size: 2rem; }',
      tests: [
        {
          label: 'body Selektor vorhanden',
          check: code => /body\s*\{/.test(code),
        },
        {
          label: 'font-family gesetzt',
          check: code => /font-family\s*:\s*Arial/.test(code),
        },
        {
          label: 'line-height: 1.6 gesetzt',
          check: code => /line-height\s*:\s*1\.6/.test(code),
        },
        {
          label: 'h1 font-size: 2rem',
          check: code => /h1[\s\S]*?font-size\s*:\s*2rem/.test(code),
        },
      ],
    },
  ],
};

// ══════════════════════════════════════════════════════
//  KAPITEL 14 – CSS Layout & Responsive (22.4)
// ══════════════════════════════════════════════════════
export const labChapter14 = {
  title: '🧪 Übungslab – CSS Layout & Responsive',
  exercises: [
    {
      id: 1,
      title: 'Flexbox-Navigation',
      description:
        'Erstelle eine Navbar-Klasse <code>.navbar</code> mit Flexbox: ' +
        '<code>justify-content: space-between</code>, <code>align-items: center</code> und <code>gap: 1rem</code>.',
      filename: 'navbar.css',
      startCode:
`/* Flexbox-Navigation erstellen: */
.navbar {



}`,
      hint: '.navbar { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }',
      tests: [
        {
          label: 'display: flex gesetzt',
          check: code => /display\s*:\s*flex/.test(code),
        },
        {
          label: 'justify-content: space-between',
          check: code => /justify-content\s*:\s*space-between/.test(code),
        },
        {
          label: 'align-items: center',
          check: code => /align-items\s*:\s*center/.test(code),
        },
        {
          label: 'gap gesetzt',
          check: code => /gap\s*:\s*1rem/.test(code),
        },
      ],
    },
    {
      id: 2,
      title: 'CSS Grid – 3-Spalten-Layout',
      description:
        'Erstelle eine Klasse <code>.grid</code> mit CSS Grid: ' +
        '3 gleich breite Spalten mit <code>repeat(3, 1fr)</code> und einem Gap von <code>1.5rem</code>.',
      filename: 'grid.css',
      startCode:
`/* 3-Spalten-Grid erstellen: */
.grid {



}`,
      hint: '.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }',
      tests: [
        {
          label: 'display: grid gesetzt',
          check: code => /display\s*:\s*grid/.test(code),
        },
        {
          label: 'grid-template-columns mit repeat(3, 1fr)',
          check: code => /grid-template-columns\s*:\s*repeat\s*\(\s*3\s*,\s*1fr\s*\)/.test(code),
        },
        {
          label: 'gap: 1.5rem gesetzt',
          check: code => /gap\s*:\s*1\.5rem/.test(code),
        },
      ],
    },
    {
      id: 3,
      title: 'Media Query – Mobile-First',
      description:
        'Füge eine Media Query hinzu, die ab einer Breite von <code>768px</code> ' +
        'die Klasse <code>.grid</code> auf 2 Spalten (<code>repeat(2, 1fr)</code>) setzt.',
      filename: 'responsive.css',
      startCode:
`/* Basis: 1 Spalte auf Mobil */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Füge hier die Media Query für ab 768px hinzu: */
`,
      hint: '@media (min-width: 768px) { .grid { grid-template-columns: repeat(2, 1fr); } }',
      tests: [
        {
          label: '@media vorhanden',
          check: code => /@media/.test(code),
        },
        {
          label: 'min-width: 768px',
          check: code => /min-width\s*:\s*768px/.test(code),
        },
        {
          label: 'repeat(2, 1fr) in der Media Query',
          check: code => /@media[\s\S]*?repeat\s*\(\s*2\s*,\s*1fr\s*\)/.test(code),
        },
      ],
    },
  ],
};

// ══════════════════════════════════════════════════════
//  KAPITEL 15 – Portfolio-Projekt (22.5)
// ══════════════════════════════════════════════════════
export const labChapter15 = {
  title: '🧪 Übungslab – Portfolio-Projekt',
  exercises: [
    {
      id: 1,
      title: 'Navigation mit Flexbox',
      description:
        'Erstelle eine vollständige Navbar: ' +
        'Ein <code>&lt;nav class="navbar"&gt;</code> mit einem <code>&lt;span class="logo"&gt;</code> ' +
        'und einer <code>&lt;ul class="nav-links"&gt;</code> mit 3 Links. ' +
        'CSS: Flexbox mit <code>space-between</code>.',
      filename: 'navbar.html',
      startCode:
`<!-- HTML: -->
<nav class="navbar">
  <!-- Logo und Links hier: -->


</nav>

<style>
.navbar {
  /* Flexbox hier: */

}
.nav-links {
  display: flex;
  gap: 1rem;
  list-style: none;
}
</style>`,
      hint: '<span class="logo">Brand</span> + <ul><li><a href="#home">Home</a></li>...</ul> + display: flex; justify-content: space-between;',
      tests: [
        {
          label: '<nav class="navbar"> vorhanden',
          check: code => /<nav[^>]*class\s*=\s*["'][^"']*navbar[^"']*["']/.test(code),
        },
        {
          label: 'Logo-Element vorhanden',
          check: code => /class\s*=\s*["'][^"']*logo[^"']*["']/.test(code),
        },
        {
          label: 'Mindestens 3 <li>-Links',
          check: code => (code.match(/<li[\s>]/g) || []).length >= 3,
        },
        {
          label: 'display: flex in .navbar',
          check: code => /\.navbar[\s\S]*?display\s*:\s*flex/.test(code),
        },
      ],
    },
    {
      id: 2,
      title: 'Skills-Grid mit hover-Effekt',
      description:
        'Erstelle ein Karten-Grid für Skills mit CSS Grid (<code>auto-fit</code>, <code>minmax</code>) ' +
        'und einem <code>:hover</code>-Effekt: <code>transform: translateY(-4px)</code>.',
      filename: 'skills.html',
      startCode:
`<div class="skills-grid">
  <div class="skill-card">HTML</div>
  <div class="skill-card">CSS</div>
  <div class="skill-card">JavaScript</div>
</div>

<style>
.skills-grid {
  /* Grid hier: */

}
.skill-card {
  padding: 1.5rem;
  text-align: center;
}
/* Hover-Effekt: */

</style>`,
      hint: 'grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) + .skill-card:hover { transform: translateY(-4px); }',
      tests: [
        {
          label: 'display: grid gesetzt',
          check: code => /display\s*:\s*grid/.test(code),
        },
        {
          label: 'auto-fit und minmax() verwendet',
          check: code => /auto-fit/.test(code) && /minmax\s*\(/.test(code),
        },
        {
          label: ':hover Effekt vorhanden',
          check: code => /skill-card\s*:\s*hover/.test(code),
        },
        {
          label: 'transform: translateY() im hover',
          check: code => /translateY\s*\(/.test(code),
        },
      ],
    },
    {
      id: 3,
      title: 'Responsive mit Media Query',
      description:
        'Füge zum Karten-Grid eine Media Query hinzu, die auf Mobilgeräten ' +
        '(max-width: 600px) die Navigation (<code>.nav-links</code>) versteckt ' +
        'und das Grid auf 1 Spalte setzt.',
      filename: 'responsive.css',
      startCode:
`/* Desktop-Basis */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

/* Mobile Media Query hinzufügen: */
`,
      hint: '@media (max-width: 600px) { .nav-links { display: none; } .skills-grid { grid-template-columns: 1fr; } }',
      tests: [
        {
          label: '@media (max-width: 600px) vorhanden',
          check: code => /@media\s*\(\s*max-width\s*:\s*600px\s*\)/.test(code),
        },
        {
          label: '.nav-links display: none',
          check: code => /nav-links[\s\S]*?display\s*:\s*none/.test(code),
        },
        {
          label: 'Grid auf 1fr reduziert',
          check: code => /@media[\s\S]*?1fr/.test(code),
        },
      ],
    },
  ],
};

// ══════════════════════════════════════════════════════
//  KAPITEL 6 – DOM, Events & Interaktivität (23.3)
// ══════════════════════════════════════════════════════
export const labChapter6 = {
  title: '🧪 Übungslab – DOM & Events',
  exercises: [
    {
      id: 1,
      title: 'Element selektieren & Text ändern',
      description:
        'Selektiere das Element mit der ID <code>title</code> mit <code>querySelector</code> ' +
        'und ändere seinen <code>textContent</code> auf <em>"DOM manipuliert!"</em>.',
      filename: 'domSelect.js',
      startCode:
`// HTML hat: <h1 id="title">Originaler Titel</h1>

// Selektiere das Element und ändere den Text:


`,
      hint: 'const el = document.querySelector("#title"); el.textContent = "...";',
      tests: [
        {
          label: 'querySelector() verwendet',
          check: code => /querySelector\s*\(/.test(code),
        },
        {
          label: '#title selektiert',
          check: code => /querySelector\s*\(\s*['"`]#title['"`]/.test(code),
        },
        {
          label: 'textContent gesetzt',
          check: code => /\.textContent\s*=/.test(code),
        },
        {
          label: '"DOM manipuliert!" als Text',
          check: code => /DOM manipuliert!/.test(code),
        },
      ],
    },
    {
      id: 2,
      title: 'Click-Event mit addEventListener',
      description:
        'Selektiere einen Button mit der Klasse <code>.my-btn</code> und füge einen ' +
        '<code>click</code>-Event Listener hinzu. Der Callback soll <code>console.log("Geklickt!")</code> aufrufen.',
      filename: 'eventListener.js',
      startCode:
`// HTML hat: <button class="my-btn">Klick mich!</button>

// Selektiere den Button und füge einen Event Listener hinzu:


`,
      hint: 'btn.addEventListener("click", () => { ... });',
      tests: [
        {
          label: 'querySelector(".my-btn") verwendet',
          check: code => /querySelector\s*\(\s*['"`]\.my-btn['"`]/.test(code),
        },
        {
          label: 'addEventListener() verwendet',
          check: code => /addEventListener\s*\(/.test(code),
        },
        {
          label: '"click" Event',
          check: code => /addEventListener\s*\(\s*['"`]click['"`]/.test(code),
        },
        {
          label: 'console.log("Geklickt!") im Callback',
          check: code => /console\.log\s*\(\s*['"`]Geklickt!['"`]\s*\)/.test(code),
        },
      ],
    },
    {
      id: 3,
      title: 'classList.toggle() verwenden',
      description:
        'Selektiere ein Element mit der ID <code>box</code> und toggle beim Klick auf den Button ' +
        '<code>#toggle-btn</code> die Klasse <code>active</code> auf dem Element.',
      filename: 'classToggle.js',
      startCode:
`// HTML: <div id="box">...</div>  <button id="toggle-btn">Toggle</button>

// Implementiere den Toggle:


`,
      hint: 'Nutze classList.toggle("active") innerhalb des click-Callbacks.',
      tests: [
        {
          label: '#box selektiert',
          check: code => /querySelector\s*\(\s*['"`]#box['"`]/.test(code),
        },
        {
          label: '#toggle-btn selektiert',
          check: code => /querySelector\s*\(\s*['"`]#toggle-btn['"`]/.test(code),
        },
        {
          label: 'classList.toggle() verwendet',
          check: code => /classList\.toggle\s*\(/.test(code),
        },
        {
          label: '"active" Klasse getoggelt',
          check: code => /classList\.toggle\s*\(\s*['"`]active['"`]/.test(code),
        },
      ],
    },
  ],
};

// ══════════════════════════════════════════════════════
//  KAPITEL 7 – Fetch, Async/Await & APIs (23.4)
// ══════════════════════════════════════════════════════
export const labChapter7 = {
  title: '🧪 Übungslab – Fetch & Async/Await',
  exercises: [
    {
      id: 1,
      title: 'async/await Funktion schreiben',
      description:
        'Schreibe eine <code>async</code>-Funktion <code>getData</code>, die mit <code>await fetch()</code> ' +
        'Daten von <code>"https://jsonplaceholder.typicode.com/todos/1"</code> holt und ' +
        'das JSON-Ergebnis zurückgibt.',
      filename: 'asyncFetch.js',
      startCode:
`// Schreibe die async-Funktion getData:


`,
      hint: 'async function getData() { const res = await fetch(url); return await res.json(); }',
      tests: [
        {
          label: 'async function getData deklariert',
          check: code => /async\s+(function\s+getData|\w+\s+getData\s*=\s*async)/.test(code) ||
                        /const\s+getData\s*=\s*async/.test(code),
        },
        {
          label: 'await fetch() verwendet',
          check: code => /await\s+fetch\s*\(/.test(code),
        },
        {
          label: 'URL korrekt',
          check: code => /jsonplaceholder\.typicode\.com\/todos\/1/.test(code),
        },
        {
          label: 'res.json() aufgerufen',
          check: code => /\.json\s*\(\s*\)/.test(code),
        },
      ],
    },
    {
      id: 2,
      title: 'Error Handling mit try/catch',
      description:
        'Erweitere die <code>fetchUser</code>-Funktion um ein <code>try/catch</code>-Block. ' +
        'Im Fehlerfall soll <code>console.error(err)</code> aufgerufen werden. ' +
        'Prüfe außerdem mit <code>res.ok</code> ob der Request erfolgreich war.',
      filename: 'errorHandling.js',
      startCode:
`async function fetchUser(id) {
  // Füge try/catch und res.ok-Prüfung hinzu:
  const res = await fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`);
  const data = await res.json();
  return data;
}`,
      hint: 'try { ... if (!res.ok) throw new Error(...); ... } catch (err) { console.error(err); }',
      tests: [
        {
          label: 'try { ... } verwendet',
          check: code => /try\s*\{/.test(code),
        },
        {
          label: 'catch (err) verwendet',
          check: code => /catch\s*\(\s*\w+\s*\)/.test(code),
        },
        {
          label: 'res.ok geprüft',
          check: code => /res\.ok/.test(code) || /response\.ok/.test(code),
        },
        {
          label: 'console.error() im catch-Block',
          check: code => /console\.error\s*\(/.test(code),
        },
      ],
    },
    {
      id: 3,
      title: 'POST-Request senden',
      description:
        'Schreibe eine Funktion <code>createPost</code>, die einen POST-Request an ' +
        '<code>"https://jsonplaceholder.typicode.com/posts"</code> sendet. ' +
        'Das Body-Objekt soll <code>title</code> und <code>body</code> als Properties haben. ' +
        'Setze den Content-Type Header auf <code>"application/json"</code>.',
      filename: 'postRequest.js',
      startCode:
`async function createPost(title, body) {
  // Sende einen POST-Request:


}`,
      hint: 'fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({...}) })',
      tests: [
        {
          label: 'method: "POST" gesetzt',
          check: code => /method\s*:\s*['"`]POST['"`]/.test(code),
        },
        {
          label: 'Content-Type Header gesetzt',
          check: code => /Content-Type/.test(code),
        },
        {
          label: 'JSON.stringify() verwendet',
          check: code => /JSON\.stringify\s*\(/.test(code),
        },
        {
          label: 'await fetch() verwendet',
          check: code => /await\s+fetch\s*\(/.test(code),
        },
      ],
    },
  ],
};

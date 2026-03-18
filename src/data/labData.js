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

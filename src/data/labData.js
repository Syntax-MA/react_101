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
          check: code => /<>/.test(code) && /<\/>/.test(code),
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
    {
      id: 4,
      title: 'Berechnung in JSX',
      description:
        'Die Variable <code>price</code> ist <code>49</code>. Zeige in einem <code>&lt;p&gt;</code> den ' +
        'Preis inkl. 19% MwSt. an. Berechne direkt im JSX: <code>{price * 1.19}</code>.',
      filename: 'Price.jsx',
      startCode:
`function Price() {
  const price = 49;

  return (
    // Zeige den MwSt-Preis in einem <p> an


  );
}`,
      hint: 'In {} kannst du beliebige JavaScript-Ausdrücke schreiben – auch Rechnungen wie price * 1.19.',
      tests: [
        {
          label: 'Variable price ist definiert',
          check: code => /const\s+price\s*=\s*49/.test(code),
        },
        {
          label: 'Berechnung price * 1.19 im JSX',
          check: code => /\{\s*price\s*\*\s*1\.19\s*\}/.test(code),
        },
        {
          label: 'Enthält ein <p>-Element',
          check: code => /<p[\s>]/.test(code),
        },
      ],
    },
    {
      id: 5,
      title: 'className statt class',
      description:
        'Schreibe eine Komponente <code>Badge</code>, die ein <code>&lt;span&gt;</code> mit ' +
        'der Klasse <code>badge</code> zurückgibt. In JSX heißt das Attribut <code>className</code>, ' +
        'nicht <code>class</code>!',
      filename: 'Badge.jsx',
      startCode:
`function Badge() {
  return (
    // <span> mit className="badge" und dem Text "Neu"

  );
}`,
      hint: 'Das HTML-Attribut "class" heißt in JSX "className", weil "class" ein reserviertes Keyword in JavaScript ist.',
      tests: [
        {
          label: 'Enthält ein <span>-Element',
          check: code => /<span[\s>]/.test(code),
        },
        {
          label: 'Nutzt className (nicht class)',
          check: code => /className\s*=\s*["']badge["']/.test(code) && !/\s+class\s*=/.test(code),
        },
        {
          label: 'Enthält den Text "Neu"',
          check: code => /Neu/.test(code),
        },
      ],
    },
    {
      id: 6,
      title: 'Selbstschließende Tags',
      description:
        'In JSX müssen Tags die keinen Inhalt haben <strong>selbstschließend</strong> sein. ' +
        'Schreibe eine Komponente <code>Avatar</code>, die ein <code>&lt;img /&gt;</code> ' +
        'mit <code>src="avatar.png"</code> und <code>alt="Profilbild"</code> zurückgibt.',
      filename: 'Avatar.jsx',
      startCode:
`function Avatar() {
  return (
    // <img> muss in JSX selbstschließend sein: <img />

  );
}`,
      hint: 'In HTML schreibt man <img>, in JSX muss es <img /> sein (mit Schrägstrich vor >).',
      tests: [
        {
          label: 'Enthält ein selbstschließendes <img />',
          check: code => /<img\s[^>]*\/>/.test(code) || /<img\s[^>]*>/.test(code),
        },
        {
          label: 'src="avatar.png" gesetzt',
          check: code => /src\s*=\s*["']avatar\.png["']/.test(code),
        },
        {
          label: 'alt="Profilbild" gesetzt',
          check: code => /alt\s*=\s*["']Profilbild["']/.test(code),
        },
      ],
    },
    {
      id: 7,
      title: 'Ternary-Ausdruck in JSX',
      description:
        'Die Variable <code>isLoggedIn</code> ist <code>true</code>. Zeige im JSX entweder ' +
        '<code>"Willkommen zurück!"</code> oder <code>"Bitte anmelden"</code> an – ' +
        'je nach Wert von <code>isLoggedIn</code>. Nutze den Ternary-Operator <code>? :</code> direkt in {}.',
      filename: 'Status.jsx',
      startCode:
`function Status() {
  const isLoggedIn = true;

  return (
    <p>
      {/* Ternary hier: isLoggedIn ? "..." : "..." */}

    </p>
  );
}`,
      hint: 'Der Ternary-Operator: {bedingung ? "wenn wahr" : "wenn falsch"}',
      tests: [
        {
          label: 'isLoggedIn ist definiert',
          check: code => /const\s+isLoggedIn/.test(code),
        },
        {
          label: 'Ternary-Operator ? : wird verwendet',
          check: code => /isLoggedIn\s*\?/.test(code),
        },
        {
          label: 'Enthält "Willkommen zurück!"',
          check: code => /Willkommen\s+zur/.test(code),
        },
        {
          label: 'Enthält "Bitte anmelden"',
          check: code => /Bitte\s+anmelden/.test(code),
        },
      ],
    },
    {
      id: 8,
      title: 'JSX in Variable speichern',
      description:
        'Du kannst JSX auch in einer Variable speichern und sie dann im return verwenden. ' +
        'Schreibe eine Komponente <code>Card</code>: Speichere <code>&lt;h2&gt;Titel&lt;/h2&gt;</code> ' +
        'in einer Variable <code>header</code> und gib <code>{header}</code> in einem <code>&lt;div&gt;</code> aus.',
      filename: 'Card.jsx',
      startCode:
`function Card() {
  // Speichere JSX in der Variable "header"

  return (
    <div>
      {/* Gib header hier aus */}

    </div>
  );
}`,
      hint: 'const header = <h2>Titel</h2>; – dann im JSX: {header}',
      tests: [
        {
          label: 'Variable "header" ist deklariert',
          check: code => /const\s+header\s*=/.test(code),
        },
        {
          label: 'header enthält ein <h2>-Element',
          check: code => /const\s+header\s*=\s*[\(]?\s*<h2/.test(code),
        },
        {
          label: '{header} wird im JSX ausgegeben',
          check: code => /\{\s*header\s*\}/.test(code),
        },
      ],
    },
    {
      id: 9,
      title: 'Mehrere Elemente mit Fragment',
      description:
        'Schreibe eine Komponente <code>UserInfo</code>, die folgende drei Elemente ' +
        '<strong>ohne</strong> wrapper-<code>&lt;div&gt;</code> zurückgibt: ' +
        'ein <code>&lt;h2&gt;</code> mit dem Namen, ein <code>&lt;p&gt;</code> mit der E-Mail, ' +
        'und ein <code>&lt;small&gt;</code> mit der Rolle. Nutze ein Fragment.',
      filename: 'UserInfo.jsx',
      startCode:
`function UserInfo() {
  const name = "Anna Schmidt";
  const email = "anna@example.com";
  const role = "Admin";

  return (
    // Fragment mit h2, p, und small – kein div!

  );
}`,
      hint: 'Denk daran: <> ist der öffnende Fragment-Tag, </> der schließende.',
      tests: [
        {
          label: 'Fragment wird genutzt',
          check: code => /<>/.test(code) && /<\/>/.test(code),
        },
        {
          label: 'Kein <div>-Wrapper',
          check: code => !/<div[\s>]/.test(code),
        },
        {
          label: 'Enthält <h2> mit name',
          check: code => /<h2[\s>]/.test(code) && /\{name\}/.test(code),
        },
        {
          label: 'Enthält <p> mit email',
          check: code => /<p[\s>]/.test(code) && /\{email\}/.test(code),
        },
        {
          label: 'Enthält <small> mit role',
          check: code => /<small[\s>]/.test(code) && /\{role\}/.test(code),
        },
      ],
    },
    {
      id: 10,
      title: 'Inline-Style in JSX',
      description:
        'In JSX wird <code>style</code> als JavaScript-Objekt übergeben – nicht als String wie in HTML. ' +
        'Schreibe eine Komponente <code>HighlightBox</code>, die ein <code>&lt;div&gt;</code> mit ' +
        '<code>style={{ backgroundColor: "yellow", padding: "16px" }}</code> zurückgibt.',
      filename: 'HighlightBox.jsx',
      startCode:
`function HighlightBox() {
  return (
    // div mit style-Objekt: backgroundColor und padding


  );
}`,
      hint: 'style={{}} hat doppelte geschweifte Klammern: äußere {} für JSX-Ausdruck, innere {} für das Objekt. CSS-Eigenschaften werden camelCase geschrieben.',
      tests: [
        {
          label: 'Enthält ein <div>-Element',
          check: code => /<div[\s>]/.test(code),
        },
        {
          label: 'style-Attribut mit Objekt-Syntax',
          check: code => /style\s*=\s*\{\s*\{/.test(code),
        },
        {
          label: 'backgroundColor ist gesetzt',
          check: code => /backgroundColor\s*:/.test(code),
        },
        {
          label: 'padding ist gesetzt',
          check: code => /padding\s*:/.test(code),
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
        'Destructuriere die Prop direkt im Funktionsparameter.',
      filename: 'Button.jsx',
      startCode:
`function Button() {
  // Füge { label } als Parameter hinzu und gib <button>{label}</button> zurück
  return (
    <button>Platzhalter</button>
  );
}`,
      hint: 'Props kommen als Objekt rein. Destructuriere sie direkt: function Button({ label }) { ... }',
      tests: [
        {
          label: 'Prop label wird destructuriert',
          check: code => /function\s+Button\s*\(\s*\{[^}]*label[^}]*\}/.test(code),
        },
        {
          label: '{label} wird im <button> ausgegeben',
          check: code => /<button[^>]*>\s*\{\s*label\s*\}\s*<\/button>/.test(code),
        },
      ],
    },
    {
      id: 2,
      title: 'children-Prop verwenden',
      description:
        'Schreibe eine Komponente <code>Card</code>, die <code>children</code> als Prop empfängt ' +
        'und in einem <code>&lt;div className="card"&gt;</code> ausgibt. ' +
        'Die Komponente soll so aufrufbar sein: <code>&lt;Card&gt;Inhalt hier&lt;/Card&gt;</code>.',
      filename: 'Card.jsx',
      startCode:
`function Card() {
  // Füge children als Prop hinzu und gib es innerhalb eines div.card aus

  return (
    <div>
      {/* children hier ausgeben */}
    </div>
  );
}`,
      hint: 'children ist eine spezielle Prop – alles was zwischen öffnendem und schließendem Tag steht.',
      tests: [
        {
          label: 'children-Prop wird empfangen',
          check: code => /\{\s*children\s*\}/.test(code),
        },
        {
          label: 'className="card" ist gesetzt',
          check: code => /className\s*=\s*["']card["']/.test(code),
        },
        {
          label: '{children} wird ausgegeben',
          check: code => /\{\s*children\s*\}/.test(code),
        },
      ],
    },
    {
      id: 3,
      title: 'Komponente exportieren',
      description:
        'Schreibe eine Komponente <code>Headline</code>, die <code>text</code> als Prop empfängt ' +
        'und ein <code>&lt;h1&gt;</code> damit rendert. ' +
        'Exportiere die Komponente mit <code>export default</code>.',
      filename: 'Headline.jsx',
      startCode:
`// Schreibe die Komponente und exportiere sie mit "export default"
function Headline({ text }) {

}`,
      hint: 'export default steht vor function oder am Ende: export default Headline;',
      tests: [
        {
          label: 'Komponente heißt Headline',
          check: code => /function\s+Headline\s*\(/.test(code),
        },
        {
          label: 'text-Prop wird genutzt',
          check: code => /\{\s*text\s*\}/.test(code),
        },
        {
          label: 'Gibt ein <h1>-Element zurück',
          check: code => /<h1[\s>]/.test(code),
        },
        {
          label: 'export default vorhanden',
          check: code => /export\s+default/.test(code),
        },
      ],
    },
    {
      id: 4,
      title: 'Mehrere Props übergeben',
      description:
        'Schreibe eine Komponente <code>ProductCard</code>, die drei Props empfängt: ' +
        '<code>name</code> (String), <code>price</code> (Zahl) und <code>inStock</code> (Boolean). ' +
        'Zeige name in einem <code>&lt;h3&gt;</code>, price in einem <code>&lt;p&gt;</code>, ' +
        'und inStock in einem <code>&lt;span&gt;</code> – z.B. "Verfügbar" oder "Ausverkauft".',
      filename: 'ProductCard.jsx',
      startCode:
`function ProductCard({ name, price, inStock }) {
  return (
    <div>
      {/* h3 mit name */}
      {/* p mit price */}
      {/* span mit Verfügbar / Ausverkauft je nach inStock */}
    </div>
  );
}`,
      hint: 'Für den Boolean: {inStock ? "Verfügbar" : "Ausverkauft"} direkt im JSX.',
      tests: [
        {
          label: 'Alle drei Props werden destructuriert',
          check: code => /\{[^}]*name[^}]*price[^}]*inStock[^}]*\}/.test(code) ||
                         (/\{[^}]*name/.test(code) && /price/.test(code) && /inStock/.test(code)),
        },
        {
          label: '<h3> mit {name}',
          check: code => /<h3[\s>]/.test(code) && /\{\s*name\s*\}/.test(code),
        },
        {
          label: '<p> mit {price}',
          check: code => /<p[\s>]/.test(code) && /\{\s*price\s*\}/.test(code),
        },
        {
          label: 'inStock wird mit Ternary ausgewertet',
          check: code => /inStock\s*\?/.test(code),
        },
      ],
    },
    {
      id: 5,
      title: 'Default-Wert für Props',
      description:
        'Schreibe eine Komponente <code>Tag</code>, die eine Prop <code>color</code> empfängt. ' +
        'Wenn keine Farbe übergeben wird, soll <code>"gray"</code> als Standardwert genutzt werden. ' +
        'Setze den Default-Wert direkt beim Destructuring: <code>{ color = "gray" }</code>.',
      filename: 'Tag.jsx',
      startCode:
`function Tag({ label, color }) {
  // Ergänze einen Default-Wert "gray" für color
  return (
    <span style={{ backgroundColor: color }}>
      {label}
    </span>
  );
}`,
      hint: 'Default-Werte direkt im Parameter: function Tag({ label, color = "gray" })',
      tests: [
        {
          label: 'color hat Default-Wert "gray"',
          check: code => /color\s*=\s*["']gray["']/.test(code),
        },
        {
          label: 'color wird als backgroundColor genutzt',
          check: code => /backgroundColor\s*:\s*color/.test(code),
        },
        {
          label: '{label} wird ausgegeben',
          check: code => /\{\s*label\s*\}/.test(code),
        },
      ],
    },
    {
      id: 6,
      title: 'Komponente mehrfach instanziieren',
      description:
        'Die Komponente <code>Badge</code> ist bereits definiert. ' +
        'Schreibe eine Komponente <code>BadgeList</code>, die <strong>drei</strong> ' +
        '<code>&lt;Badge&gt;</code>-Instanzen mit unterschiedlichen <code>label</code>-Props rendert ' +
        '(z.B. "React", "JSX", "Vite").',
      filename: 'BadgeList.jsx',
      startCode:
`function Badge({ label }) {
  return <span className="badge">{label}</span>;
}

function BadgeList() {
  return (
    <div>
      {/* Drei Badge-Komponenten mit verschiedenen label-Props */}

    </div>
  );
}`,
      hint: 'Jede Instanz bekommt ihre eigene label-Prop: <Badge label="React" />',
      tests: [
        {
          label: 'Mindestens 3 Badge-Instanzen',
          check: code => (code.match(/<Badge\s/g) || []).length >= 3,
        },
        {
          label: 'Jede Badge hat eine label-Prop',
          check: code => (code.match(/label\s*=\s*["'][^"']+["']/g) || []).length >= 3,
        },
        {
          label: 'Alle drei Labels unterschiedlich',
          check: code => {
            const labels = [...(code.matchAll(/label\s*=\s*["']([^"']+)["']/g))].map(m => m[1]);
            return new Set(labels).size >= 3;
          },
        },
      ],
    },
    {
      id: 7,
      title: 'Props weiterreichen (Prop Drilling)',
      description:
        'Schreibe zwei Komponenten: <code>Parent</code> und <code>Child</code>. ' +
        '<code>Parent</code> hat eine Variable <code>message = "Hallo von oben!"</code> ' +
        'und gibt diese als Prop <code>text</code> an <code>Child</code> weiter. ' +
        '<code>Child</code> zeigt sie in einem <code>&lt;p&gt;</code> an.',
      filename: 'PropDrilling.jsx',
      startCode:
`function Child({ text }) {
  return <p>{text}</p>;
}

function Parent() {
  const message = "Hallo von oben!";

  return (
    <div>
      {/* Child mit text-Prop aufrufen */}

    </div>
  );
}`,
      hint: 'Props übergeben: <Child text={message} /> – ohne Anführungszeichen, weil es eine Variable ist.',
      tests: [
        {
          label: 'Child empfängt text-Prop',
          check: code => /function\s+Child\s*\(\s*\{[^}]*text[^}]*\}/.test(code),
        },
        {
          label: 'Parent gibt message als text weiter',
          check: code => /text\s*=\s*\{\s*message\s*\}/.test(code),
        },
        {
          label: '<Child> wird in Parent gerendert',
          check: code => /<Child[\s/]/.test(code),
        },
      ],
    },
    {
      id: 8,
      title: 'Objekt als Prop übergeben',
      description:
        'Schreibe eine Komponente <code>UserCard</code>, die ein Objekt-Prop <code>user</code> ' +
        'empfängt mit den Eigenschaften <code>name</code> und <code>age</code>. ' +
        'Zeige <code>user.name</code> in einem <code>&lt;h3&gt;</code> und ' +
        '<code>user.age</code> in einem <code>&lt;p&gt;</code> an.',
      filename: 'UserCard.jsx',
      startCode:
`function UserCard({ user }) {
  return (
    <div>
      {/* h3 mit user.name */}
      {/* p mit user.age */}

    </div>
  );
}`,
      hint: 'Auf Objekt-Eigenschaften zugreifst du mit Punktnotation: {user.name}',
      tests: [
        {
          label: 'user-Prop wird empfangen',
          check: code => /function\s+UserCard\s*\(\s*\{[^}]*user[^}]*\}/.test(code),
        },
        {
          label: '{user.name} in <h3>',
          check: code => /<h3[\s>]/.test(code) && /user\.name/.test(code),
        },
        {
          label: '{user.age} in <p>',
          check: code => /<p[\s>]/.test(code) && /user\.age/.test(code),
        },
      ],
    },
    {
      id: 9,
      title: 'Komponente mit onClick-Prop',
      description:
        'Props können auch Funktionen sein. Schreibe eine Komponente <code>ActionButton</code>, ' +
        'die die Props <code>label</code> und <code>onClick</code> empfängt und einen ' +
        '<code>&lt;button&gt;</code> rendert, der die <code>onClick</code>-Prop als Event-Handler nutzt.',
      filename: 'ActionButton.jsx',
      startCode:
`function ActionButton({ label, onClick }) {
  return (
    // <button> mit onClick-Handler und label als Text

  );
}`,
      hint: 'Die Prop onClick wird direkt als Handler übergeben: <button onClick={onClick}>',
      tests: [
        {
          label: 'label und onClick werden destructuriert',
          check: code => /\{[^}]*label[^}]*onClick[^}]*\}/.test(code) || /\{[^}]*onClick[^}]*label[^}]*\}/.test(code),
        },
        {
          label: 'onClick={onClick} am <button>',
          check: code => /onClick\s*=\s*\{\s*onClick\s*\}/.test(code),
        },
        {
          label: '{label} als Button-Text',
          check: code => />\s*\{\s*label\s*\}\s*<\/button>/.test(code),
        },
      ],
    },
    {
      id: 10,
      title: 'Komposition – Card mit Header und Body',
      description:
        'Schreibe zwei Komponenten: <code>CardHeader</code> (zeigt <code>title</code> in einem <code>&lt;h2&gt;</code>) ' +
        'und <code>CardBody</code> (gibt <code>children</code> in einem <code>&lt;div className="body"&gt;</code> aus). ' +
        'Kombiniere beide in einer <code>FullCard</code>-Komponente.',
      filename: 'FullCard.jsx',
      startCode:
`function CardHeader({ title }) {
  // h2 mit title

}

function CardBody({ children }) {
  // div.body mit children

}

function FullCard() {
  return (
    <div className="card">
      {/* CardHeader mit title="Mein Profil" */}
      {/* CardBody mit beliebigem Text-Inhalt */}

    </div>
  );
}`,
      hint: 'Komponenten kombinieren: <CardHeader title="..." /> und <CardBody>Text hier</CardBody>',
      tests: [
        {
          label: 'CardHeader gibt <h2> mit {title} zurück',
          check: code => /<h2[\s>]/.test(code) && /\{\s*title\s*\}/.test(code),
        },
        {
          label: 'CardBody nutzt children',
          check: code => /className\s*=\s*["']body["']/.test(code) && /\{\s*children\s*\}/.test(code),
        },
        {
          label: 'FullCard nutzt CardHeader',
          check: code => /<CardHeader[\s/]/.test(code),
        },
        {
          label: 'FullCard nutzt CardBody',
          check: code => /<CardBody[\s>]/.test(code),
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
        'Importiere <code>useState</code> und erstelle einen State <code>count</code> ' +
        'mit dem Startwert <code>0</code>. Zeige den Wert in einem <code>&lt;p&gt;</code> an.',
      filename: 'Counter.jsx',
      startCode:
`// Importiere useState aus react
import { } from 'react';

function Counter() {
  // Erstelle State: const [count, setCount] = useState(0);

  return (
    <div>
      <p>Zähler: </p>
    </div>
  );
}`,
      hint: 'useState importieren: import { useState } from "react"; Dann: const [count, setCount] = useState(0);',
      tests: [
        {
          label: 'useState wird importiert',
          check: code => /import\s*\{[^}]*useState[^}]*\}\s*from\s*['"]react['"]/.test(code),
        },
        {
          label: 'State count mit Startwert 0',
          check: code => /const\s*\[\s*count\s*,\s*setCount\s*\]\s*=\s*useState\s*\(\s*0\s*\)/.test(code),
        },
        {
          label: '{count} wird angezeigt',
          check: code => /\{\s*count\s*\}/.test(code),
        },
      ],
    },
    {
      id: 2,
      title: 'onClick-Handler schreiben',
      description:
        'Ergänze den Counter: Füge einen Button <code>"+1"</code> hinzu, der beim Klick ' +
        '<code>setCount(count + 1)</code> aufruft. Der Zähler soll bei jedem Klick um 1 steigen.',
      filename: 'Counter.jsx',
      startCode:
`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Schreibe eine increment-Funktion die setCount(count + 1) aufruft

  return (
    <div>
      <p>Zähler: {count}</p>
      {/* Button +1 mit onClick-Handler */}

    </div>
  );
}`,
      hint: 'function increment() { setCount(count + 1); } – dann onClick={increment} am Button.',
      tests: [
        {
          label: 'setCount wird aufgerufen',
          check: code => /setCount\s*\(\s*count\s*\+\s*1\s*\)/.test(code),
        },
        {
          label: 'Button mit onClick vorhanden',
          check: code => /<button[^>]+onClick/.test(code),
        },
        {
          label: 'Button-Text ist "+1"',
          check: code => />\s*\+1\s*<\/button>/.test(code),
        },
      ],
    },
    {
      id: 3,
      title: 'Controlled Input',
      description:
        'Schreibe ein gesteuertes Texteingabefeld: ' +
        'State <code>name</code> (Startwert <code>""</code>), ' +
        '<code>&lt;input&gt;</code> mit <code>value={name}</code> und ' +
        '<code>onChange</code>-Handler der <code>setName(e.target.value)</code> aufruft. ' +
        'Zeige den aktuellen Wert in einem <code>&lt;p&gt;</code> darunter.',
      filename: 'NameInput.jsx',
      startCode:
`import { useState } from 'react';

function NameInput() {
  const [name, setName] = useState('');

  return (
    <div>
      {/* input mit value und onChange */}

      {/* p: "Du hast eingegeben: {name}" */}

    </div>
  );
}`,
      hint: 'onChange={(e) => setName(e.target.value)} – e.target.value gibt den aktuellen Input-Wert zurück.',
      tests: [
        {
          label: 'State name mit Startwert ""',
          check: code => /const\s*\[\s*name\s*,\s*setName\s*\]\s*=\s*useState\s*\(\s*['"]{2}\s*\)/.test(code),
        },
        {
          label: 'value={name} am input',
          check: code => /value\s*=\s*\{\s*name\s*\}/.test(code),
        },
        {
          label: 'onChange ruft setName auf',
          check: code => /onChange/.test(code) && /setName/.test(code) && /e\.target\.value/.test(code),
        },
        {
          label: '{name} wird angezeigt',
          check: code => (code.match(/\{\s*name\s*\}/g) || []).length >= 2,
        },
      ],
    },
    {
      id: 4,
      title: 'Boolean State – Toggle',
      description:
        'Schreibe eine Komponente <code>ToggleBox</code>: State <code>visible</code> startet mit <code>false</code>. ' +
        'Ein Button "Anzeigen / Verstecken" wechselt den State mit <code>setVisible(!visible)</code>. ' +
        'Ein <code>&lt;p&gt;</code> wird <strong>nur angezeigt wenn</strong> <code>visible</code> <code>true</code> ist.',
      filename: 'ToggleBox.jsx',
      startCode:
`import { useState } from 'react';

function ToggleBox() {
  // State: visible, startet false

  return (
    <div>
      {/* Button der visible umschaltet */}
      {/* p "Dieser Text ist sichtbar!" nur wenn visible true */}

    </div>
  );
}`,
      hint: 'setVisible(!visible) negiert den Boolean. Für bedingte Ausgabe: {visible && <p>...</p>}',
      tests: [
        {
          label: 'State visible mit Startwert false',
          check: code => /useState\s*\(\s*false\s*\)/.test(code),
        },
        {
          label: 'setVisible(!visible) wird aufgerufen',
          check: code => /setVisible\s*\(\s*!visible\s*\)/.test(code),
        },
        {
          label: 'Bedingte Ausgabe mit visible',
          check: code => /visible\s*&&/.test(code),
        },
      ],
    },
    {
      id: 5,
      title: 'Mehrere State-Variablen',
      description:
        'Schreibe eine Komponente <code>LikeButton</code> mit zwei States: ' +
        '<code>likes</code> (Startwert <code>0</code>) und <code>liked</code> (Startwert <code>false</code>). ' +
        'Der Button zeigt "👍 Like ({likes})" an. Beim Klick: <code>likes + 1</code> und <code>liked</code> auf <code>true</code> setzen. ' +
        'Wenn <code>liked</code> true ist, Button deaktivieren (<code>disabled</code>).',
      filename: 'LikeButton.jsx',
      startCode:
`import { useState } from 'react';

function LikeButton() {
  // Zwei States: likes (0) und liked (false)

  const handleLike = () => {
    // likes erhöhen und liked auf true setzen

  };

  return (
    <button onClick={handleLike} disabled={/* liked einfügen */false}>
      👍 Like (0)
    </button>
  );
}`,
      hint: 'Du kannst mehrere useState() Aufrufe in einer Komponente haben.',
      tests: [
        {
          label: 'State likes startet mit 0',
          check: code => /useState\s*\(\s*0\s*\)/.test(code),
        },
        {
          label: 'State liked startet mit false',
          check: code => /useState\s*\(\s*false\s*\)/.test(code),
        },
        {
          label: 'likes wird erhöht',
          check: code => /setLikes\s*\(/.test(code),
        },
        {
          label: 'liked wird auf true gesetzt',
          check: code => /setLiked\s*\(\s*true\s*\)/.test(code),
        },
        {
          label: 'Button ist disabled wenn liked',
          check: code => /disabled\s*=\s*\{\s*liked\s*\}/.test(code),
        },
      ],
    },
    {
      id: 6,
      title: 'onSubmit mit preventDefault',
      description:
        'Schreibe eine <code>SearchForm</code>-Komponente: Ein <code>&lt;form&gt;</code> mit einem ' +
        '<code>&lt;input&gt;</code> (controlled, State <code>query</code>) und einem Submit-Button. ' +
        'Der <code>onSubmit</code>-Handler soll <code>e.preventDefault()</code> aufrufen und ' +
        'den Suchwert in einem <code>&lt;p&gt;</code> unterhalb anzeigen.',
      filename: 'SearchForm.jsx',
      startCode:
`import { useState } from 'react';

function SearchForm() {
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState('');

  const handleSubmit = (e) => {
    // preventDefault und submitted auf query setzen

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Suche..."
      />
      <button type="submit">Suchen</button>
      {/* Zeige submitted wenn vorhanden */}

    </form>
  );
}`,
      hint: 'e.preventDefault() verhindert das Neuladen. Dann setSubmitted(query) um den Wert zu speichern.',
      tests: [
        {
          label: 'e.preventDefault() wird aufgerufen',
          check: code => /e\.preventDefault\s*\(\s*\)/.test(code),
        },
        {
          label: 'submitted State wird gesetzt',
          check: code => /setSubmitted\s*\(\s*query\s*\)/.test(code),
        },
        {
          label: 'submitted wird angezeigt',
          check: code => /\{\s*submitted\s*\}/.test(code) || /submitted\s*&&/.test(code),
        },
      ],
    },
    {
      id: 7,
      title: 'Formular zurücksetzen',
      description:
        'Ergänze die <code>LoginForm</code>: Nach dem Submit sollen beide Felder (<code>email</code> ' +
        'und <code>password</code>) auf leere Strings zurückgesetzt werden. ' +
        'Außerdem: Setze einen State <code>message</code> auf <code>"Eingeloggt!"</code> und zeige ihn in einem <code>&lt;p&gt;</code>.',
      filename: 'LoginForm.jsx',
      startCode:
`import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 1. message auf "Eingeloggt!" setzen
    // 2. email zurücksetzen
    // 3. password zurücksetzen

  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="E-Mail" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Passwort" />
      <button type="submit">Login</button>
      {/* message anzeigen wenn vorhanden */}

    </form>
  );
}`,
      hint: 'Nach dem Submit: setEmail(""), setPassword(""), setMessage("Eingeloggt!")',
      tests: [
        {
          label: 'email wird zurückgesetzt',
          check: code => /setEmail\s*\(\s*['"]{2}\s*\)/.test(code),
        },
        {
          label: 'password wird zurückgesetzt',
          check: code => /setPassword\s*\(\s*['"]{2}\s*\)/.test(code),
        },
        {
          label: 'message wird auf "Eingeloggt!" gesetzt',
          check: code => /setMessage\s*\(\s*["']Eingeloggt/.test(code),
        },
        {
          label: 'message wird angezeigt',
          check: code => /\{\s*message\s*\}/.test(code) || /message\s*&&/.test(code),
        },
      ],
    },
    {
      id: 8,
      title: 'Validierung mit State',
      description:
        'Schreibe eine <code>AgeForm</code>: Ein <code>&lt;input type="number"&gt;</code> für das Alter (State <code>age</code>). ' +
        'Beim Submit: Wenn <code>age &lt; 18</code>, setze State <code>error</code> auf <code>"Mindestalter 18 Jahre"</code>. ' +
        'Sonst setze <code>error</code> auf <code>""</code> und zeige <code>"Zugang gewährt!"</code>.',
      filename: 'AgeForm.jsx',
      startCode:
`import { useState } from 'react';

function AgeForm() {
  const [age, setAge] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validierung: age < 18 → Fehlermeldung, sonst success

  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={age} onChange={e => setAge(e.target.value)} placeholder="Dein Alter" />
      <button type="submit">Prüfen</button>
      {/* Fehlermeldung wenn error nicht leer */}
      {/* Erfolgsmeldung wenn success true */}

    </form>
  );
}`,
      hint: 'if (Number(age) < 18) { setError("..."); setSuccess(false); } else { setError(""); setSuccess(true); }',
      tests: [
        {
          label: 'Prüft ob age < 18',
          check: code => /age\s*<\s*18/.test(code) || /Number\s*\(\s*age\s*\)\s*<\s*18/.test(code),
        },
        {
          label: 'Fehlermeldung wird gesetzt',
          check: code => /setError\s*\(\s*["']Mindestalter/.test(code),
        },
        {
          label: 'error wird im JSX angezeigt',
          check: code => /error\s*&&/.test(code) || /\{\s*error\s*\}/.test(code),
        },
        {
          label: 'success wird gesetzt',
          check: code => /setSuccess\s*\(\s*true\s*\)/.test(code),
        },
      ],
    },
    {
      id: 9,
      title: 'isLoggedIn State',
      description:
        'Schreibe eine Komponente <code>AuthView</code>: State <code>isLoggedIn</code> startet <code>false</code>. ' +
        'Wenn <code>isLoggedIn</code> false: zeige ein <code>&lt;form&gt;</code> mit einem Button "Login". ' +
        'Wenn <code>isLoggedIn</code> true: zeige stattdessen <code>&lt;p&gt;Willkommen!&lt;/p&gt;</code> und ' +
        'einen Button "Logout" der <code>isLoggedIn</code> wieder auf <code>false</code> setzt.',
      filename: 'AuthView.jsx',
      startCode:
`import { useState } from 'react';

function AuthView() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return (
      <div>
        {/* p "Willkommen!" und Button "Logout" der isLoggedIn auf false setzt */}

      </div>
    );
  }

  return (
    <div>
      {/* Button "Login" der isLoggedIn auf true setzt */}

    </div>
  );
}`,
      hint: 'Zwei return-Statements: eines für isLoggedIn=true, eines für false.',
      tests: [
        {
          label: 'State isLoggedIn startet mit false',
          check: code => /useState\s*\(\s*false\s*\)/.test(code),
        },
        {
          label: 'setIsLoggedIn(true) bei Login',
          check: code => /setIsLoggedIn\s*\(\s*true\s*\)/.test(code),
        },
        {
          label: 'setIsLoggedIn(false) bei Logout',
          check: code => /setIsLoggedIn\s*\(\s*false\s*\)/.test(code),
        },
        {
          label: '"Willkommen!" wird angezeigt',
          check: code => /Willkommen/.test(code),
        },
      ],
    },
    {
      id: 10,
      title: 'Controlled Input mit Zeichenanzahl',
      description:
        'Schreibe eine Komponente <code>Tweet</code>: State <code>text</code> (Startwert <code>""</code>). ' +
        'Ein <code>&lt;textarea&gt;</code> mit <code>value</code> und <code>onChange</code>. ' +
        'Zeige darunter die verbleibenden Zeichen: <code>280 - text.length</code>. ' +
        'Wenn weniger als 20 Zeichen übrig: mache die Anzeige rot (style color: "red").',
      filename: 'Tweet.jsx',
      startCode:
`import { useState } from 'react';

function Tweet() {
  const [text, setText] = useState('');
  const remaining = 280 - text.length;

  return (
    <div>
      {/* textarea mit value und onChange */}

      {/* p mit remaining – rot wenn remaining < 20 */}

    </div>
  );
}`,
      hint: 'Für bedingtes Styling: style={{ color: remaining < 20 ? "red" : "black" }}',
      tests: [
        {
          label: 'State text mit Startwert ""',
          check: code => /const\s*\[\s*text\s*,\s*setText\s*\]\s*=\s*useState\s*\(\s*['"]{2}\s*\)/.test(code),
        },
        {
          label: '<textarea> mit value und onChange',
          check: code => /<textarea/.test(code) && /value\s*=\s*\{\s*text\s*\}/.test(code) && /onChange/.test(code),
        },
        {
          label: 'remaining wird berechnet und angezeigt',
          check: code => /280\s*-\s*text\.length/.test(code) && /\{\s*remaining\s*\}/.test(code),
        },
        {
          label: 'Roter Text wenn remaining < 20',
          check: code => /remaining\s*<\s*20/.test(code) && /['"](red|#[rR])/.test(code),
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
        'Transformiere das Array <code>[1, 2, 3, 4, 5]</code> mit <code>.map()</code> so, ' +
        'dass jedes Element verdoppelt wird. Gib das Ergebnis in einem <code>&lt;p&gt;</code> aus.',
      filename: 'DoubleList.jsx',
      startCode:
`function DoubleList() {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map(/* Füge hier die map-Funktion ein */);

  return (
    <p>{doubled.join(', ')}</p>
  );
}`,
      hint: 'numbers.map(n => n * 2) gibt ein neues Array zurück, bei dem jedes Element verdoppelt ist.',
      tests: [
        {
          label: '.map() wird auf numbers aufgerufen',
          check: code => /numbers\.map\s*\(/.test(code),
        },
        {
          label: 'Jedes Element wird verdoppelt (* 2)',
          check: code => /n\s*\*\s*2/.test(code) || /num\s*\*\s*2/.test(code) || /x\s*\*\s*2/.test(code),
        },
        {
          label: 'Ergebnis wird ausgegeben',
          check: code => /\{\s*doubled/.test(code),
        },
      ],
    },
    {
      id: 2,
      title: 'Liste mit key rendern',
      description:
        'Rendere das folgende Array als ungeordnete Liste <code>&lt;ul&gt;</code>. ' +
        'Jedes Item soll ein <code>&lt;li&gt;</code> mit einer eindeutigen <code>key</code>-Prop sein.',
      filename: 'FruitList.jsx',
      startCode:
`function FruitList() {
  const fruits = [
    { id: 1, name: 'Apfel' },
    { id: 2, name: 'Birne' },
    { id: 3, name: 'Mango' },
  ];

  return (
    <ul>
      {fruits.map(fruit => (
        // <li> mit key={fruit.id} und fruit.name als Text


      ))}
    </ul>
  );
}`,
      hint: 'Vergiss das key-Attribut nicht: <li key={fruit.id}>{fruit.name}</li>',
      tests: [
        {
          label: '.map() wird auf fruits aufgerufen',
          check: code => /fruits\.map\s*\(/.test(code),
        },
        {
          label: '<li>-Element vorhanden',
          check: code => /<li[\s>]/.test(code),
        },
        {
          label: 'key={fruit.id} gesetzt',
          check: code => /key\s*=\s*\{\s*fruit\.id\s*\}/.test(code),
        },
        {
          label: 'fruit.name wird angezeigt',
          check: code => /fruit\.name/.test(code),
        },
      ],
    },
    {
      id: 3,
      title: 'Bedingtes Rendering mit &&',
      description:
        'Schreibe eine Komponente <code>Notification</code> mit einer Prop <code>message</code>. ' +
        'Zeige die Nachricht in einem <code>&lt;div className="notification"&gt;</code> ' +
        '<strong>nur dann</strong>, wenn <code>message</code> nicht leer ist. Nutze <code>&&</code>.',
      filename: 'Notification.jsx',
      startCode:
`function Notification({ message }) {
  return (
    <div>
      {/* div.notification nur anzeigen wenn message nicht leer */}
      {/* Tipp: message && <div>...</div> */}

    </div>
  );
}`,
      hint: '{message && <div className="notification">{message}</div>} – && rendert nur wenn der linke Wert truthy ist.',
      tests: [
        {
          label: '&& für bedingtes Rendering',
          check: code => /message\s*&&/.test(code),
        },
        {
          label: 'className="notification"',
          check: code => /className\s*=\s*["']notification["']/.test(code),
        },
        {
          label: '{message} wird ausgegeben',
          check: code => /\{\s*message\s*\}/.test(code),
        },
      ],
    },
    {
      id: 4,
      title: 'filter() – Liste filtern',
      description:
        'Filtere das Array so, dass nur Aufgaben mit <code>done: false</code> angezeigt werden. ' +
        'Nutze <code>.filter()</code> gefolgt von <code>.map()</code> und rendere die offenen Aufgaben als <code>&lt;li&gt;</code>.',
      filename: 'TodoList.jsx',
      startCode:
`function TodoList() {
  const todos = [
    { id: 1, text: 'React lernen', done: true },
    { id: 2, text: 'Projekt starten', done: false },
    { id: 3, text: 'useState üben', done: false },
    { id: 4, text: 'JSX verstehen', done: true },
  ];

  // Filtere nur done: false und render als <li>
  const openTodos = todos.filter(/* hier einfügen */);

  return (
    <ul>
      {openTodos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}`,
      hint: 'todos.filter(todo => !todo.done) gibt nur die unerledigten zurück.',
      tests: [
        {
          label: '.filter() wird aufgerufen',
          check: code => /todos\.filter\s*\(/.test(code),
        },
        {
          label: 'Filtert nach done: false',
          check: code => /!\s*todo\.done/.test(code) || /todo\.done\s*===\s*false/.test(code) || /todo\.done\s*==\s*false/.test(code),
        },
        {
          label: '.map() rendert die gefilterten Items',
          check: code => /openTodos\.map\s*\(/.test(code) || /\.filter\s*\([^)]+\)\s*\.map/.test(code),
        },
      ],
    },
    {
      id: 5,
      title: 'Ternary – unterschiedliche Ausgaben',
      description:
        'Schreibe eine Komponente <code>ScoreDisplay</code> mit Prop <code>score</code>. ' +
        'Zeige <code>"Bestanden ✅"</code> wenn <code>score &gt;= 50</code>, ' +
        'sonst <code>"Nicht bestanden ❌"</code>. Nutze den Ternary-Operator direkt im JSX.',
      filename: 'ScoreDisplay.jsx',
      startCode:
`function ScoreDisplay({ score }) {
  return (
    <div>
      <p>Punkte: {score}</p>
      <p>
        {/* Ternary: score >= 50 ? "Bestanden ✅" : "Nicht bestanden ❌" */}

      </p>
    </div>
  );
}`,
      hint: '{score >= 50 ? "Bestanden ✅" : "Nicht bestanden ❌"}',
      tests: [
        {
          label: 'Ternary mit score >= 50',
          check: code => /score\s*>=\s*50\s*\?/.test(code),
        },
        {
          label: '"Bestanden" in der Ausgabe',
          check: code => /Bestanden/.test(code),
        },
        {
          label: '"Nicht bestanden" in der Ausgabe',
          check: code => /Nicht\s+bestanden/.test(code),
        },
      ],
    },
    {
      id: 6,
      title: 'filter + map kombinieren',
      description:
        'Das Array enthält Produkte. Zeige <strong>nur Produkte deren Preis unter 30€ liegt</strong> als ' +
        '<code>&lt;li&gt;</code>-Liste. Nutze <code>.filter()</code> direkt vor <code>.map()</code> ' +
        'in einer Kette: <code>products.filter(...).map(...)</code>.',
      filename: 'CheapProducts.jsx',
      startCode:
`function CheapProducts() {
  const products = [
    { id: 1, name: 'Notizbuch', price: 8 },
    { id: 2, name: 'Laptop', price: 999 },
    { id: 3, name: 'Stift', price: 3 },
    { id: 4, name: 'Headset', price: 75 },
    { id: 5, name: 'Mauspad', price: 15 },
  ];

  return (
    <ul>
      {/* products.filter(p => p.price < 30).map(p => <li key={p.id}>{p.name} – {p.price}€</li>) */}

    </ul>
  );
}`,
      hint: 'Chaining: products.filter(p => p.price < 30).map(p => (<li key={p.id}>...</li>))',
      tests: [
        {
          label: '.filter() nach Preis < 30',
          check: code => /price\s*<\s*30/.test(code),
        },
        {
          label: '.map() nach .filter()',
          check: code => /\.filter\s*\([^)]+\)\s*\.map\s*\(/.test(code),
        },
        {
          label: 'key ist gesetzt',
          check: code => /key\s*=\s*\{/.test(code),
        },
        {
          label: 'name und price werden angezeigt',
          check: code => /p\.name/.test(code) && /p\.price/.test(code),
        },
      ],
    },
    {
      id: 7,
      title: 'Leere Liste behandeln',
      description:
        'Schreibe eine Komponente <code>SearchResults</code> mit Prop <code>results</code> (ein Array). ' +
        'Wenn das Array leer ist, zeige <code>&lt;p&gt;Keine Ergebnisse gefunden.&lt;/p&gt;</code>. ' +
        'Sonst rendere die Ergebnisse als <code>&lt;ul&gt;</code>-Liste.',
      filename: 'SearchResults.jsx',
      startCode:
`function SearchResults({ results }) {
  if (/* Array ist leer */) {
    return <p>Keine Ergebnisse gefunden.</p>;
  }

  return (
    <ul>
      {results.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}`,
      hint: 'results.length === 0 prüft ob das Array leer ist.',
      tests: [
        {
          label: 'Leeres Array wird abgefangen',
          check: code => /results\.length\s*===\s*0/.test(code) || /results\.length\s*==\s*0/.test(code) || /!\s*results\.length/.test(code),
        },
        {
          label: '"Keine Ergebnisse" wird angezeigt',
          check: code => /Keine\s+Ergebnisse/.test(code),
        },
        {
          label: '.map() rendert die Ergebnisse',
          check: code => /results\.map\s*\(/.test(code),
        },
      ],
    },
    {
      id: 8,
      title: 'Objekt-Array mit mehreren Feldern',
      description:
        'Rendere eine Tabelle <code>&lt;table&gt;</code> aus dem Schüler-Array. ' +
        'Jede Zeile soll <code>&lt;td&gt;</code> für Name, Alter und Note enthalten. ' +
        '<code>key</code> setzt du auf <code>student.id</code>.',
      filename: 'StudentTable.jsx',
      startCode:
`function StudentTable() {
  const students = [
    { id: 1, name: 'Lena', age: 24, grade: 'A' },
    { id: 2, name: 'Tom', age: 27, grade: 'B' },
    { id: 3, name: 'Sara', age: 22, grade: 'A' },
  ];

  return (
    <table>
      <thead>
        <tr><th>Name</th><th>Alter</th><th>Note</th></tr>
      </thead>
      <tbody>
        {students.map(student => (
          // <tr key> mit drei <td>: name, age, grade

        ))}
      </tbody>
    </table>
  );
}`,
      hint: '<tr key={student.id}><td>{student.name}</td><td>{student.age}</td><td>{student.grade}</td></tr>',
      tests: [
        {
          label: '.map() auf students',
          check: code => /students\.map\s*\(/.test(code),
        },
        {
          label: 'key={student.id}',
          check: code => /key\s*=\s*\{\s*student\.id\s*\}/.test(code),
        },
        {
          label: 'Name, Alter und Note in <td>',
          check: code => /student\.name/.test(code) && /student\.age/.test(code) && /student\.grade/.test(code),
        },
      ],
    },
    {
      id: 9,
      title: 'Dynamische className',
      description:
        'Schreibe eine <code>StatusBadge</code>-Komponente mit Prop <code>status</code> ' +
        '("active" | "inactive" | "pending"). ' +
        'Setze <code>className</code> dynamisch: ' +
        '<code>"badge badge-active"</code>, <code>"badge badge-inactive"</code> oder <code>"badge badge-pending"</code> ' +
        '– je nach Status. Nutze einen Template-Literal: <code>{`badge badge-${status}`}</code>.',
      filename: 'StatusBadge.jsx',
      startCode:
`function StatusBadge({ status }) {
  return (
    <span className={/* "badge badge-" + status als Template-Literal */}>
      {status}
    </span>
  );
}`,
      hint: 'Template-Literal in JSX: className={`badge badge-${status}`} – die Backticks kommen in die geschweiften Klammern.',
      tests: [
        {
          label: 'Template-Literal für className',
          check: code => /className\s*=\s*\{`badge\s+badge-\$\{status\}`\}/.test(code),
        },
        {
          label: 'status wird ausgegeben',
          check: code => /\{\s*status\s*\}/.test(code),
        },
      ],
    },
    {
      id: 10,
      title: 'Liste mit State verwalten',
      description:
        'Schreibe eine Komponente <code>ItemList</code>: State <code>items</code> startet mit <code>["Apfel", "Birne"]</code>. ' +
        'Ein <code>&lt;input&gt;</code> und ein Button <code>"Hinzufügen"</code> ermöglichen neue Einträge. ' +
        'Beim Klick: neues Item per <code>setItems([...items, inputValue])</code> hinzufügen und Input leeren. ' +
        'Rendere alle Items als <code>&lt;li&gt;</code>.',
      filename: 'ItemList.jsx',
      startCode:
`import { useState } from 'react';

function ItemList() {
  const [items, setItems] = useState(['Apfel', 'Birne']);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (!inputValue.trim()) return;
    // items erweitern und inputValue zurücksetzen

  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Neues Item..."
      />
      <button onClick={addItem}>Hinzufügen</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}`,
      hint: 'setItems([...items, inputValue]) erstellt ein neues Array mit dem neuen Item am Ende.',
      tests: [
        {
          label: 'State items startet mit 2 Einträgen',
          check: code => /useState\s*\(\s*\[/.test(code),
        },
        {
          label: 'Spread-Operator zum Hinzufügen',
          check: code => /\[\s*\.\.\.items\s*,/.test(code),
        },
        {
          label: 'inputValue wird zurückgesetzt',
          check: code => /setInputValue\s*\(\s*['"]{2}\s*\)/.test(code),
        },
        {
          label: 'items werden mit .map() gerendert',
          check: code => /items\.map\s*\(/.test(code),
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
      hint: 'Konstanten mit const, veränderliche Werte mit let. Erhöhen: age = age + 1; oder age++;',
      tests: [
        { label: 'const für name', check: code => /const\s+name\s*=/.test(code) },
        { label: 'let für age',    check: code => /let\s+age\s*=/.test(code) },
        { label: 'age erhöht',     check: code => /age\s*=\s*age\s*\+\s*1|age\+\+|\+\+age|age\s*\+=\s*1/.test(code) },
      ],
    },
    {
      id: 2,
      title: 'Arrow Function schreiben',
      description:
        'Schreibe eine Arrow Function <code>multiply</code>, die zwei Zahlen <code>a</code> und <code>b</code> multipliziert ' +
        'und das Ergebnis zurückgibt (Kurzform).',
      filename: 'arrowFunction.js',
      startCode:
`// const multiply = ...
`,
      hint: 'Kurzform: const multiply = (a, b) => a * b;',
      tests: [
        { label: 'const multiply',  check: code => /const\s+multiply\s*=/.test(code) },
        { label: 'Arrow-Syntax =>', check: code => /=>/.test(code) },
        { label: 'Multiplikation',  check: code => /\*/.test(code.replace(/\/\/.*/g, '')) },
      ],
    },
    {
      id: 3,
      title: 'Template Literal erstellen',
      description:
        'Erstelle eine Variable <code>message</code> mit einem Template Literal: <em>„Hallo [name], du bist [age] Jahre alt!"</em>.',
      filename: 'templateLiteral.js',
      startCode:
`const name = 'Alex';
const age = 28;

// const message = ...
`,
      hint: 'Backticks ` und ${variable} für Interpolation.',
      tests: [
        { label: 'Backticks',       check: code => /`/.test(code) },
        { label: 'name eingebettet', check: code => /\$\{\s*name\s*\}/.test(code) },
        { label: 'age eingebettet',  check: code => /\$\{\s*age\s*\}/.test(code) },
      ],
    },
    {
      id: 4,
      title: 'Ternary Operator nutzen',
      description:
        'Schreibe eine Funktion <code>getLabel(score)</code>, die <code>"Bestanden"</code> zurückgibt, ' +
        'wenn <code>score >= 50</code>, sonst <code>"Nicht bestanden"</code>.',
      filename: 'ternary.js',
      startCode:
`// const getLabel = ...
`,
      hint: 'const getLabel = score => score >= 50 ? "Bestanden" : "Nicht bestanden";',
      tests: [
        { label: 'getLabel definiert', check: code => /const\s+getLabel\s*=/.test(code) },
        { label: 'Ternary ?',          check: code => /\?/.test(code) },
        { label: 'Beide Texte',        check: code => /Bestanden/.test(code) && /Nicht bestanden/.test(code) },
      ],
    },
    {
      id: 5,
      title: 'Default-Parameter',
      description:
        'Schreibe eine Funktion <code>greet(name = "Gast")</code>, die <code>"Hallo, [name]!"</code> zurückgibt. ' +
        'Wird kein Name übergeben, soll <code>"Hallo, Gast!"</code> erscheinen.',
      filename: 'defaultParam.js',
      startCode:
`// const greet = ...
`,
      hint: 'Default-Parameter direkt in den Klammern: (name = "Gast")',
      tests: [
        { label: 'greet definiert',      check: code => /const\s+greet\s*=/.test(code) },
        { label: 'Default-Wert "Gast"', check: code => /=\s*['"]Gast['"]/.test(code) },
        { label: 'Template Literal',     check: code => /`/.test(code) },
      ],
    },
    {
      id: 6,
      title: 'Callbacks – Array.forEach',
      description:
        'Gegeben ist ein Array <code>fruits</code>. Nutze <code>forEach</code> mit einer Arrow-Callback-Funktion, ' +
        'um jeden Eintrag in Großbuchstaben in das Array <code>upper</code> zu pushen.',
      filename: 'callbacks.js',
      startCode:
`const fruits = ['apple', 'banana', 'cherry'];
const upper = [];

// Nutze forEach:


`,
      hint: 'fruits.forEach(f => upper.push(f.toUpperCase()))',
      tests: [
        { label: 'forEach verwendet',       check: code => /\.forEach\s*\(/.test(code) },
        { label: 'Arrow Function',          check: code => /=>/.test(code) },
        { label: 'toUpperCase aufgerufen',  check: code => /toUpperCase\(\)/.test(code) },
        { label: 'push ins upper-Array',    check: code => /upper\.push/.test(code) },
      ],
    },
    {
      id: 7,
      title: 'Logische Operatoren: && und ||',
      description:
        'Schreibe eine Funktion <code>display(user)</code>: ' +
        'Gibt <code>user.name</code> zurück, wenn <code>user.isActive</code> truthy ist (<code>&&</code>). ' +
        'Falls <code>user.name</code> falsy ist, soll <code>"Gast"</code> als Fallback verwendet werden (<code>||</code>).',
      filename: 'logicalOps.js',
      startCode:
`// const display = (user) => ...
`,
      hint: 'user.isActive && (user.name || "Gast")',
      tests: [
        { label: 'display definiert',  check: code => /const\s+display\s*=/.test(code) },
        { label: '&& verwendet',       check: code => /&&/.test(code) },
        { label: '|| verwendet',       check: code => /\|\|/.test(code) },
        { label: '"Gast" als Fallback', check: code => /['"]Gast['"]/.test(code) },
      ],
    },
    {
      id: 8,
      title: 'Nullish Coalescing ??',
      description:
        'Schreibe eine Funktion <code>getTitle(item)</code>: Gibt <code>item.title</code> zurück — ' +
        'oder <code>"Kein Titel"</code>, wenn <code>item.title</code> <code>null</code> oder <code>undefined</code> ist. ' +
        'Nutze den <code>??</code>-Operator.',
      filename: 'nullish.js',
      startCode:
`// const getTitle = (item) => ...
`,
      hint: 'item.title ?? "Kein Titel"',
      tests: [
        { label: 'getTitle definiert',   check: code => /const\s+getTitle\s*=/.test(code) },
        { label: '?? verwendet',          check: code => /\?\?/.test(code) },
        { label: '"Kein Titel" Fallback', check: code => /['"]Kein Titel['"]/.test(code) },
      ],
    },
    {
      id: 9,
      title: 'Kurzform-Methoden im Objekt',
      description:
        'Erstelle ein Objekt <code>calculator</code> mit Kurzform-Methoden <code>add(a, b)</code> ' +
        'und <code>subtract(a, b)</code>.',
      filename: 'shorthand.js',
      startCode:
`const calculator = {
  // add und subtract als Kurzform-Methoden:

};
`,
      hint: 'add(a, b) { return a + b; } — kein "function"-Keyword nötig.',
      tests: [
        { label: 'add definiert',      check: code => /add\s*\(/.test(code) },
        { label: 'subtract definiert', check: code => /subtract\s*\(/.test(code) },
        { label: 'kein "function"',    check: code => !/function\s+add|function\s+subtract/.test(code) },
      ],
    },
    {
      id: 10,
      title: 'Optional Chaining ?.',
      description:
        'Schreibe eine Funktion <code>getCity(user)</code>, die <code>user?.address?.city</code> zurückgibt — ' +
        'oder <code>"Unbekannt"</code> als Fallback (mit <code>??</code>).',
      filename: 'optionalChaining.js',
      startCode:
`// const getCity = (user) => ...
`,
      hint: 'user?.address?.city ?? "Unbekannt"',
      tests: [
        { label: 'getCity definiert',     check: code => /const\s+getCity\s*=/.test(code) },
        { label: 'Optional Chaining ?.', check: code => /\?\./.test(code) },
        { label: '?? Fallback',           check: code => /\?\?/.test(code) },
        { label: '"Unbekannt"',           check: code => /['"]Unbekannt['"]/.test(code) },
      ],
    },
  ],
};

export const labChapter11 = {
  title: '🧪 Übungslab – Webarchitektur & HTTP',
  exercises: [
    {
      id: 1,
      title: 'HTTP-Methoden zuordnen',
      description:
        'Schreibe für jede Aktion die passende HTTP-Methode als String in die Variablen: ' +
        '<code>createMethod</code> (neu anlegen), <code>readMethod</code> (abrufen), ' +
        '<code>updateMethod</code> (aktualisieren), <code>deleteMethod</code> (löschen).',
      filename: 'http1.js',
      startCode:
`const createMethod = '';  // Neue Ressource anlegen
const readMethod   = '';  // Ressource abrufen
const updateMethod = '';  // Ressource aktualisieren
const deleteMethod = '';  // Ressource löschen
`,
      hint: 'CRUD → POST, GET, PUT/PATCH, DELETE',
      tests: [
        { label: 'POST für create',  check: code => /createMethod\s*=\s*['"]POST['"]/.test(code) },
        { label: 'GET für read',     check: code => /readMethod\s*=\s*['"]GET['"]/.test(code) },
        { label: 'PUT/PATCH für update', check: code => /updateMethod\s*=\s*['"](?:PUT|PATCH)['"]/.test(code) },
        { label: 'DELETE für delete', check: code => /deleteMethod\s*=\s*['"]DELETE['"]/.test(code) },
      ],
    },
    {
      id: 2,
      title: 'URL-Bestandteile auslesen',
      description:
        'Nutze das <code>URL</code>-Objekt, um aus <code>https://api.example.com:8080/users?limit=10#top</code> ' +
        'den <code>hostname</code>, den <code>pathname</code> und den <code>search</code>-String auszulesen.',
      filename: 'http2.js',
      startCode:
`const url = new URL('https://api.example.com:8080/users?limit=10#top');

// Lese aus: hostname, pathname, search
const hostname = ;
const pathname = ;
const search   = ;
`,
      hint: 'url.hostname, url.pathname, url.search',
      tests: [
        { label: 'new URL() verwendet',  check: code => /new\s+URL\s*\(/.test(code) },
        { label: 'hostname gelesen',     check: code => /url\.hostname/.test(code) },
        { label: 'pathname gelesen',     check: code => /url\.pathname/.test(code) },
        { label: 'search gelesen',       check: code => /url\.search/.test(code) },
      ],
    },
    {
      id: 3,
      title: 'Status-Code-Kategorie bestimmen',
      description:
        'Schreibe eine Funktion <code>getCategory(status)</code>, die zurückgibt: ' +
        '<code>"Erfolg"</code> (2xx), <code>"Weiterleitung"</code> (3xx), ' +
        '<code>"Client-Fehler"</code> (4xx), <code>"Server-Fehler"</code> (5xx).',
      filename: 'http3.js',
      startCode:
`// const getCategory = (status) => ...
`,
      hint: 'Math.floor(status / 100) ergibt 2, 3, 4 oder 5.',
      tests: [
        { label: 'getCategory definiert',     check: code => /const\s+getCategory/.test(code) },
        { label: '"Erfolg" für 2xx',          check: code => /['"]Erfolg['"]/.test(code) },
        { label: '"Client-Fehler" für 4xx',   check: code => /['"]Client-Fehler['"]/.test(code) },
        { label: '"Server-Fehler" für 5xx',   check: code => /['"]Server-Fehler['"]/.test(code) },
      ],
    },
    {
      id: 4,
      title: 'Query-Parameter bauen',
      description:
        'Baue mit <code>URLSearchParams</code> eine Query-String-Variable <code>query</code> ' +
        'mit den Parametern <code>sort=price</code> und <code>limit=20</code>.',
      filename: 'http4.js',
      startCode:
`// const params = new URLSearchParams({ ... });
// const query  = params.toString();
`,
      hint: 'new URLSearchParams({ sort: "price", limit: 20 }).toString()',
      tests: [
        { label: 'URLSearchParams',     check: code => /URLSearchParams/.test(code) },
        { label: 'sort=price',          check: code => /sort['":\s]*price/.test(code) },
        { label: 'limit=20',            check: code => /limit['":\s]*20/.test(code) },
        { label: '.toString()',         check: code => /\.toString\s*\(\)/.test(code) },
      ],
    },
    {
      id: 5,
      title: 'Content-Type Header setzen',
      description:
        'Schreibe ein Fetch-Objekt <code>options</code> (kein fetch()-Aufruf nötig!) mit ' +
        '<code>method: "POST"</code> und einem Header <code>Content-Type: application/json</code>.',
      filename: 'http5.js',
      startCode:
`const options = {
  // method und headers:

};
`,
      hint: '{ method: "POST", headers: { "Content-Type": "application/json" } }',
      tests: [
        { label: 'method: "POST"',           check: code => /method\s*:\s*['"]POST['"]/.test(code) },
        { label: 'headers-Objekt',           check: code => /headers\s*:/.test(code) },
        { label: '"Content-Type"',           check: code => /['"]Content-Type['"]/.test(code) },
        { label: '"application/json"',       check: code => /['"]application\/json['"]/.test(code) },
      ],
    },
    {
      id: 6,
      title: 'REST-Pfade ableiten',
      description:
        'Definiere die REST-Pfad-Strings für eine User-API: ' +
        '<code>listPath</code> (alle User), <code>detailPath</code> (User mit ID 42), ' +
        '<code>postsPath</code> (Posts von User 42).',
      filename: 'http6.js',
      startCode:
`const baseUrl = 'https://api.example.com';

const listPath   = '';  // GET alle User
const detailPath = '';  // GET User 42
const postsPath  = '';  // GET Posts von User 42
`,
      hint: '/users | /users/42 | /users/42/posts',
      tests: [
        { label: '/users Pfad',           check: code => /listPath\s*=.*\/users['"]/.test(code) },
        { label: '/users/42 Pfad',        check: code => /detailPath\s*=.*\/users\/42['"]/.test(code) },
        { label: '/users/42/posts Pfad',  check: code => /postsPath\s*=.*\/users\/42\/posts['"]/.test(code) },
      ],
    },
    {
      id: 7,
      title: 'Response-Objekt analysieren',
      description:
        'Gegeben ist ein Fetch-Response. Schreibe Code, der: ' +
        '1. prüft ob <code>response.ok</code> true ist, ' +
        '2. bei Fehler den Status in einer Fehlermeldung loggt, ' +
        '3. bei Erfolg die Response als JSON zurückgibt.',
      filename: 'http7.js',
      startCode:
`async function handleResponse(response) {
  // Prüfe response.ok:


}
`,
      hint: 'if (!response.ok) { console.error(response.status); return; } return response.json();',
      tests: [
        { label: 'response.ok geprüft',   check: code => /response\.ok/.test(code) },
        { label: 'response.status geloggt', check: code => /response\.status/.test(code) },
        { label: 'response.json()',        check: code => /response\.json\s*\(\)/.test(code) },
      ],
    },
    {
      id: 8,
      title: 'Accept-Header setzen',
      description:
        'Schreibe eine Funktion <code>fetchJson(url)</code>, die einen GET-Request mit dem ' +
        'Header <code>Accept: application/json</code> sendet und das Ergebnis als JSON zurückgibt.',
      filename: 'http8.js',
      startCode:
`// async function fetchJson(url) { ... }
`,
      hint: 'fetch(url, { headers: { "Accept": "application/json" } }).then(r => r.json())',
      tests: [
        { label: '"Accept" Header',            check: code => /['"]Accept['"]/.test(code) },
        { label: '"application/json"',         check: code => /['"]application\/json['"]/.test(code) },
        { label: '.json() oder await .json()', check: code => /\.json\s*\(\)/.test(code) },
      ],
    },
    {
      id: 9,
      title: 'HTTP vs. HTTPS',
      description:
        'Definiere zwei Boolean-Variablen: <code>httpIsSecure</code> (<code>false</code>) und ' +
        '<code>httpsIsSecure</code> (<code>true</code>). ' +
        'Schreibe außerdem einen kurzen Kommentar, warum HTTPS sicherer ist.',
      filename: 'http9.js',
      startCode:
`const httpIsSecure  = ;  // HTTP sicher?
const httpsIsSecure = ;  // HTTPS sicher?

// Kommentar: Warum ist HTTPS sicherer?
`,
      hint: 'false / true — HTTPS verschlüsselt die Übertragung mit TLS/SSL.',
      tests: [
        { label: 'httpIsSecure = false',   check: code => /httpIsSecure\s*=\s*false/.test(code) },
        { label: 'httpsIsSecure = true',   check: code => /httpsIsSecure\s*=\s*true/.test(code) },
        { label: 'Kommentar vorhanden',    check: code => /\/\//.test(code) },
      ],
    },
    {
      id: 10,
      title: 'Vollständige Fetch-Funktion',
      description:
        'Schreibe <code>async function apiGet(endpoint)</code>: Baut die URL aus ' +
        '<code>https://api.example.com</code> + <code>endpoint</code> (Template Literal), ' +
        'sendet einen GET-Request, prüft <code>response.ok</code>, wirft bei Fehler und gibt JSON zurück.',
      filename: 'http10.js',
      startCode:
`const BASE_URL = 'https://api.example.com';

async function apiGet(endpoint) {
  // URL mit Template Literal bauen:

  // fetch → ok-Check → json:

}
`,
      hint: 'const url = `${BASE_URL}${endpoint}`; const r = await fetch(url); if (!r.ok) throw new Error(r.status); return r.json();',
      tests: [
        { label: 'Template Literal für URL', check: code => /`.*BASE_URL.*endpoint|`.*\$\{/.test(code) },
        { label: 'await fetch()',            check: code => /await\s+fetch/.test(code) },
        { label: 'ok-Check',                check: code => /\.ok/.test(code) },
        { label: 'throw new Error',         check: code => /throw\s+new\s+Error/.test(code) },
        { label: '.json() zurückgeben',      check: code => /return.*\.json\s*\(\)|return\s+await.*json/.test(code) },
      ],
    },
  ],
};

export const labChapter12 = {
  title: '🧪 Übungslab – HTML: Struktur, Semantik & Formulare',
  exercises: [
    {
      id: 1,
      title: 'Semantische Grundstruktur',
      description:
        'Erstelle das Grundgerüst einer Seite mit <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code> ' +
        'und <code>&lt;footer&gt;</code>. Im Header ein <code>&lt;h1&gt;</code>, im Main ein <code>&lt;p&gt;</code>.',
      filename: 'struktur.html',
      startCode:
`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Meine Seite</title>
</head>
<body>
  <!-- header, main, footer hier:  -->

</body>
</html>
`,
      hint: '<header><h1>Titel</h1></header><main><p>Text</p></main><footer>Footer</footer>',
      tests: [
        { label: '<header> vorhanden',  check: code => /<header/.test(code) },
        { label: '<main> vorhanden',    check: code => /<main/.test(code) },
        { label: '<footer> vorhanden',  check: code => /<footer/.test(code) },
        { label: '<h1> im Header',      check: code => /<h1/.test(code) },
      ],
    },
    {
      id: 2,
      title: 'Kontaktformular bauen',
      description:
        'Erstelle ein Formular mit: Text-Input (name="name"), E-Mail-Input (name="email"), ' +
        'Textarea (name="message") und einem Submit-Button.',
      filename: 'formular.html',
      startCode:
`<form>
  <!-- Felder hier einfügen -->

</form>
`,
      hint: '<input type="text" name="name"> <input type="email" name="email"> <textarea name="message"></textarea> <button type="submit">Senden</button>',
      tests: [
        { label: 'type="text" Input',   check: code => /type=['"]text['"]/.test(code) },
        { label: 'type="email" Input',  check: code => /type=['"]email['"]/.test(code) },
        { label: '<textarea>',          check: code => /<textarea/.test(code) },
        { label: 'Submit-Button',       check: code => /type=['"]submit['"]/.test(code) },
      ],
    },
    {
      id: 3,
      title: 'Navigationsliste mit Links',
      description:
        'Erstelle eine <code>&lt;nav&gt;</code> mit einer <code>&lt;ul&gt;</code>-Liste. ' +
        'Drei <code>&lt;li&gt;</code>-Einträge mit <code>&lt;a&gt;</code>-Links zu <code>#home</code>, <code>#about</code>, <code>#contact</code>.',
      filename: 'nav.html',
      startCode:
`<nav>
  <!-- ul mit 3 li > a Links -->

</nav>
`,
      hint: '<ul><li><a href="#home">Home</a></li> ... </ul>',
      tests: [
        { label: '<nav> vorhanden',  check: code => /<nav/.test(code) },
        { label: '<ul> vorhanden',   check: code => /<ul/.test(code) },
        { label: 'Drei <li>-Elemente', check: code => (code.match(/<li/g)||[]).length >= 3 },
        { label: 'href="#home"',     check: code => /href=['"]#home['"]/.test(code) },
      ],
    },
    {
      id: 4,
      title: 'Artikel mit figure & figcaption',
      description:
        'Schreibe ein <code>&lt;article&gt;</code> mit einem <code>&lt;h2&gt;</code>, einem <code>&lt;p&gt;</code> ' +
        'und einem <code>&lt;figure&gt;</code>, das ein <code>&lt;img&gt;</code> und eine <code>&lt;figcaption&gt;</code> enthält.',
      filename: 'artikel.html',
      startCode:
`<!-- article mit h2, p, figure > img + figcaption -->

`,
      hint: '<article><h2>Titel</h2><p>Text</p><figure><img src="..." alt="..."><figcaption>Beschreibung</figcaption></figure></article>',
      tests: [
        { label: '<article>',      check: code => /<article/.test(code) },
        { label: '<figure>',       check: code => /<figure/.test(code) },
        { label: '<figcaption>',   check: code => /<figcaption/.test(code) },
        { label: '<img> mit alt',  check: code => /<img.*alt=/.test(code) },
      ],
    },
    {
      id: 5,
      title: 'HTML-Tabelle',
      description:
        'Erstelle eine Tabelle mit <code>&lt;thead&gt;</code> (Spalten: Name, Alter, Stadt) ' +
        'und zwei Datenzeilen in <code>&lt;tbody&gt;</code>.',
      filename: 'tabelle.html',
      startCode:
`<table>
  <!-- thead und tbody hier -->

</table>
`,
      hint: '<thead><tr><th>Name</th><th>Alter</th><th>Stadt</th></tr></thead><tbody>...</tbody>',
      tests: [
        { label: '<thead> vorhanden', check: code => /<thead/.test(code) },
        { label: '<tbody> vorhanden', check: code => /<tbody/.test(code) },
        { label: 'Drei <th>',         check: code => (code.match(/<th/g)||[]).length >= 3 },
        { label: 'Zwei <tr> in tbody', check: code => (code.match(/<tr/g)||[]).length >= 3 },
      ],
    },
    {
      id: 6,
      title: 'Select & Option',
      description:
        'Baue ein <code>&lt;select&gt;</code>-Dropdown mit <code>name="country"</code> und drei Optionen: ' +
        'Deutschland, Österreich, Schweiz.',
      filename: 'select.html',
      startCode:
`<form>
  <label for="country">Land:</label>
  <!-- select mit 3 options -->

</form>
`,
      hint: '<select name="country"><option value="de">Deutschland</option>...</select>',
      tests: [
        { label: '<select>',           check: code => /<select/.test(code) },
        { label: 'name="country"',     check: code => /name=['"]country['"]/.test(code) },
        { label: 'Drei <option>',      check: code => (code.match(/<option/g)||[]).length >= 3 },
        { label: 'Deutschland Option', check: code => /Deutschland/.test(code) },
      ],
    },
    {
      id: 7,
      title: 'Input-Validierung mit required & pattern',
      description:
        'Füge einem PLZ-Input (5-stellige Zahl) das Attribut <code>required</code> und ein ' +
        '<code>pattern="[0-9]{5}"</code> hinzu. Außerdem einen passenden <code>title</code>-Text.',
      filename: 'validation.html',
      startCode:
`<form>
  <input type="text" name="plz"
    placeholder="PLZ"
    <!-- required, pattern, title ergänzen -->
  >
  <button type="submit">Prüfen</button>
</form>
`,
      hint: 'required pattern="[0-9]{5}" title="5-stellige Postleitzahl"',
      tests: [
        { label: 'required Attribut',     check: code => /required/.test(code) },
        { label: 'pattern="[0-9]{5}"',    check: code => /pattern=['"][^'"]*0-9[^'"]*5/.test(code) },
        { label: 'title Attribut',        check: code => /title=/.test(code) },
      ],
    },
    {
      id: 8,
      title: 'Accessibility: label & aria',
      description:
        'Schreibe ein Suchformular mit einem <code>&lt;label&gt;</code>, das per <code>for</code>-Attribut ' +
        'mit dem Input verknüpft ist. Füge dem Input <code>aria-label="Suche"</code> hinzu.',
      filename: 'accessibility.html',
      startCode:
`<form role="search">
  <!-- label + input mit id, aria-label -->

  <button type="submit">Suchen</button>
</form>
`,
      hint: '<label for="q">Suche:</label> <input id="q" type="search" aria-label="Suche">',
      tests: [
        { label: '<label> mit for',    check: code => /<label.*for=/.test(code) },
        { label: 'Input mit id',       check: code => /<input.*id=/.test(code) },
        { label: 'aria-label',         check: code => /aria-label/.test(code) },
        { label: 'for und id gleich',  check: code => { const forVal = (code.match(/for=['"]([^'"]+)['"]/) || [])[1]; const idVal = (code.match(/id=['"]([^'"]+)['"]/) || [])[1]; return forVal && forVal === idVal; } },
      ],
    },
    {
      id: 9,
      title: 'Meta-Tags im Head',
      description:
        'Ergänze im <code>&lt;head&gt;</code>: ein Charset-Meta-Tag (UTF-8), ein Viewport-Meta-Tag ' +
        'für Responsive Design und eine kurze <code>&lt;meta name="description"&gt;</code>.',
      filename: 'meta.html',
      startCode:
`<!DOCTYPE html>
<html lang="de">
<head>
  <!-- charset, viewport, description meta-tags -->

  <title>Meine Seite</title>
</head>
<body></body>
</html>
`,
      hint: '<meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta name="description" content="...">',
      tests: [
        { label: 'charset="UTF-8"',      check: code => /charset=['"]UTF-8['"]/.test(code) },
        { label: 'viewport Meta-Tag',    check: code => /name=['"]viewport['"]/.test(code) },
        { label: 'description Meta-Tag', check: code => /name=['"]description['"]/.test(code) },
        { label: 'initial-scale=1',      check: code => /initial-scale=1/.test(code) },
      ],
    },
    {
      id: 10,
      title: 'Vollständige Seite: aside & section',
      description:
        'Baue eine Seitenstruktur mit <code>&lt;main&gt;</code>, das eine <code>&lt;section&gt;</code> ' +
        '(mit Überschrift und Text) und ein <code>&lt;aside&gt;</code> (Seiteninhalt) enthält.',
      filename: 'seite.html',
      startCode:
`<body>
  <header><h1>Titel</h1></header>

  <!-- main mit section + aside -->

  <footer>Footer</footer>
</body>
`,
      hint: '<main><section><h2>...</h2><p>...</p></section><aside><p>Tipp</p></aside></main>',
      tests: [
        { label: '<section>',   check: code => /<section/.test(code) },
        { label: '<aside>',     check: code => /<aside/.test(code) },
        { label: '<main>',      check: code => /<main/.test(code) },
        { label: '<h2> in section', check: code => /<h2/.test(code) },
      ],
    },
  ],
};

export const labChapter13 = {
  title: '🧪 Übungslab – CSS: Styling, Selektoren & Debugging',
  exercises: [
    {
      id: 1,
      title: 'Klassen-Selektor & Box-Modell',
      description:
        'Gestalte eine <code>.card</code>-Klasse: Hintergrundfarbe <code>#fff</code>, ' +
        'Padding <code>16px</code>, Border-Radius <code>8px</code> und ein Box-Shadow.',
      filename: 'styles1.css',
      startCode:
`/* .card Styling */
`,
      hint: '.card { background: #fff; padding: 16px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }',
      tests: [
        { label: '.card Selektor',    check: code => /\.card\s*\{/.test(code) },
        { label: 'padding',          check: code => /padding\s*:/.test(code) },
        { label: 'border-radius',    check: code => /border-radius\s*:/.test(code) },
        { label: 'box-shadow',       check: code => /box-shadow\s*:/.test(code) },
      ],
    },
    {
      id: 2,
      title: 'Hover-Effekt mit :hover',
      description:
        'Schreibe CSS für einen Button <code>.btn</code>: Standard-Hintergrund <code>#667eea</code>, ' +
        'weiße Schrift, <code>cursor: pointer</code>. Beim <code>:hover</code> soll der Hintergrund auf <code>#5a67d8</code> wechseln.',
      filename: 'styles2.css',
      startCode:
`/* .btn und .btn:hover */
`,
      hint: '.btn { background: #667eea; color: white; cursor: pointer; } .btn:hover { background: #5a67d8; }',
      tests: [
        { label: '.btn Selektor',      check: code => /\.btn\s*\{/.test(code) },
        { label: '.btn:hover',         check: code => /\.btn\s*:\s*hover/.test(code) },
        { label: 'cursor: pointer',    check: code => /cursor\s*:\s*pointer/.test(code) },
        { label: 'Anderer Hintergrund bei hover', check: code => (code.match(/background[^;]+;/g)||[]).length >= 2 },
      ],
    },
    {
      id: 3,
      title: 'Typografie & Farben',
      description:
        'Style den <code>body</code>: Schriftfamilie (sans-serif), Schriftgröße <code>16px</code>, ' +
        'Zeilenabstand <code>1.6</code>, Textfarbe <code>#333</code>.',
      filename: 'styles3.css',
      startCode:
`/* body Styling */
`,
      hint: 'body { font-family: sans-serif; font-size: 16px; line-height: 1.6; color: #333; }',
      tests: [
        { label: 'body Selektor',     check: code => /body\s*\{/.test(code) },
        { label: 'font-family',       check: code => /font-family\s*:/.test(code) },
        { label: 'font-size',         check: code => /font-size\s*:/.test(code) },
        { label: 'line-height',       check: code => /line-height\s*:/.test(code) },
        { label: 'color',             check: code => /\bcolor\s*:/.test(code) },
      ],
    },
    {
      id: 4,
      title: 'CSS Custom Properties (Variablen)',
      description:
        'Definiere im <code>:root</code> zwei CSS-Variablen: <code>--primary: #667eea</code> und ' +
        '<code>--radius: 8px</code>. Nutze sie dann in einer <code>.card</code>-Regel.',
      filename: 'variables.css',
      startCode:
`/* :root und .card */
`,
      hint: ':root { --primary: #667eea; --radius: 8px; } .card { background: var(--primary); border-radius: var(--radius); }',
      tests: [
        { label: ':root { }',          check: code => /:root\s*\{/.test(code) },
        { label: '--primary definiert', check: code => /--primary\s*:/.test(code) },
        { label: '--radius definiert',  check: code => /--radius\s*:/.test(code) },
        { label: 'var() verwendet',    check: code => /var\s*\(--/.test(code) },
      ],
    },
    {
      id: 5,
      title: ':nth-child Selektor',
      description:
        'Style jede zweite Zeile einer Tabelle (<code>tr:nth-child(even)</code>) mit ' +
        'einem hellgrauen Hintergrund <code>#f5f5f5</code>.',
      filename: 'nth.css',
      startCode:
`/* Jede zweite tr einfärben */
`,
      hint: 'tr:nth-child(even) { background-color: #f5f5f5; }',
      tests: [
        { label: ':nth-child',          check: code => /:nth-child/.test(code) },
        { label: 'even',               check: code => /even/.test(code) },
        { label: 'background-color',   check: code => /background(-color)?\s*:/.test(code) },
      ],
    },
    {
      id: 6,
      title: 'Pseudo-Element ::before',
      description:
        'Füge jedem Element mit Klasse <code>.required</code> vor dem Text ein rotes Sternchen (<code>*</code>) ' +
        'per <code>::before</code> hinzu.',
      filename: 'pseudo.css',
      startCode:
`/* .required::before */
`,
      hint: '.required::before { content: "* "; color: red; }',
      tests: [
        { label: '.required::before',  check: code => /\.required\s*::before/.test(code) },
        { label: 'content: "* "',      check: code => /content\s*:\s*['"][*]['"]/  .test(code) },
        { label: 'color: red',         check: code => /color\s*:\s*red/.test(code) },
      ],
    },
    {
      id: 7,
      title: 'Transition für sanfte Animation',
      description:
        'Füge einem <code>.btn</code> eine Transition hinzu, sodass <code>background-color</code> und ' +
        '<code>transform</code> sich über <code>0.2s ease</code> animieren.',
      filename: 'transition.css',
      startCode:
`/* .btn transition */
`,
      hint: '.btn { transition: background-color 0.2s ease, transform 0.2s ease; }',
      tests: [
        { label: '.btn Selektor',          check: code => /\.btn\s*\{/.test(code) },
        { label: 'transition Property',    check: code => /transition\s*:/.test(code) },
        { label: 'background-color',       check: code => /background(-color)?/.test(code) },
        { label: '0.2s',                   check: code => /0\.2s/.test(code) },
      ],
    },
    {
      id: 8,
      title: 'Spezifität verstehen',
      description:
        'Schreibe drei CSS-Regeln für dasselbe Element: einen Element-Selektor (<code>p</code>), ' +
        'einen Klassen-Selektor (<code>.text</code>) und einen ID-Selektor (<code>#main</code>). ' +
        'Setze jeweils eine andere Farbe. Welcher gewinnt? Schreibe die Antwort als Kommentar.',
      filename: 'spezifitaet.css',
      startCode:
`/* Drei Regeln mit verschiedenen Selektoren: */



/* Kommentar: Welche Regel gewinnt und warum? */
`,
      hint: 'ID > Klasse > Element. #main hat die höchste Spezifität.',
      tests: [
        { label: 'p Selektor',      check: code => /^p\s*\{/m.test(code) },
        { label: '.text Selektor',  check: code => /\.text\s*\{/.test(code) },
        { label: '#main Selektor',  check: code => /#main\s*\{/.test(code) },
        { label: 'Kommentar',       check: code => new RegExp('\\/\\*.*\\*\\/').test(code) },
      ],
    },
    {
      id: 9,
      title: 'CSS Animation (@keyframes)',
      description:
        'Erstelle eine Animation <code>fadeIn</code> mit <code>@keyframes</code>: von <code>opacity: 0</code> ' +
        'zu <code>opacity: 1</code>. Wende sie auf <code>.hero</code> mit <code>1s ease</code> an.',
      filename: 'animation.css',
      startCode:
`/* @keyframes fadeIn und .hero animation */
`,
      hint: '@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } .hero { animation: fadeIn 1s ease; }',
      tests: [
        { label: '@keyframes',          check: code => /@keyframes/.test(code) },
        { label: 'from/to oder 0%/100%', check: code => /from|to|0%|100%/.test(code) },
        { label: 'opacity: 0',          check: code => /opacity\s*:\s*0/.test(code) },
        { label: 'animation Property',  check: code => /animation\s*:/.test(code) },
      ],
    },
    {
      id: 10,
      title: 'calc() & Einheiten kombinieren',
      description:
        'Schreibe eine <code>.sidebar</code>-Klasse mit einer Breite von <code>calc(100% - 300px)</code> ' +
        'und einem Padding von <code>1rem</code>. Setze außerdem <code>min-width: 200px</code>.',
      filename: 'calc.css',
      startCode:
`/* .sidebar mit calc(), padding, min-width */
`,
      hint: '.sidebar { width: calc(100% - 300px); padding: 1rem; min-width: 200px; }',
      tests: [
        { label: '.sidebar Selektor',  check: code => /\.sidebar\s*\{/.test(code) },
        { label: 'calc()',             check: code => /calc\s*\(/.test(code) },
        { label: '100% - 300px',       check: code => /100%\s*-\s*300px/.test(code) },
        { label: 'min-width',          check: code => /min-width\s*:/.test(code) },
      ],
    },
  ],
};

export const labChapter14 = {
  title: '🧪 Übungslab – CSS Layout & Responsive Design',
  exercises: [
    {
      id: 1,
      title: 'Flexbox-Navigation',
      description:
        'Gestalte eine <code>.navbar</code> mit Flexbox: Einträge horizontal, Abstand zwischen ihnen ' +
        '(<code>space-between</code>), vertikal zentriert (<code>center</code>).',
      filename: 'flex1.css',
      startCode:
`/* .navbar */
`,
      hint: '.navbar { display: flex; justify-content: space-between; align-items: center; }',
      tests: [
        { label: 'display: flex',            check: code => /display\s*:\s*flex/.test(code) },
        { label: 'justify-content',          check: code => /justify-content\s*:/.test(code) },
        { label: 'align-items',              check: code => /align-items\s*:/.test(code) },
        { label: 'space-between',            check: code => /space-between/.test(code) },
      ],
    },
    {
      id: 2,
      title: 'CSS Grid – 3-Spalten-Layout',
      description:
        'Erstelle ein <code>.grid</code>-Layout mit 3 gleich breiten Spalten (<code>1fr 1fr 1fr</code>) ' +
        'und einem Gap von <code>24px</code>.',
      filename: 'grid1.css',
      startCode:
`/* .grid */
`,
      hint: '.grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px; }',
      tests: [
        { label: 'display: grid',             check: code => /display\s*:\s*grid/.test(code) },
        { label: 'grid-template-columns',     check: code => /grid-template-columns\s*:/.test(code) },
        { label: '3x 1fr',                   check: code => (/1fr/g.exec(code)||[]).length >= 1 && new RegExp('1fr.*1fr.*1fr|repeat\\(3').test(code) },
        { label: 'gap',                       check: code => /\bgap\s*:/.test(code) },
      ],
    },
    {
      id: 3,
      title: 'Media Query – Mobile-First',
      description:
        'Schreibe CSS für <code>.container</code>: Standard (mobile) mit <code>padding: 16px</code>. ' +
        'Ab <code>768px</code> Breite soll der Padding auf <code>32px</code> steigen.',
      filename: 'responsive1.css',
      startCode:
`/* Mobile-First */

/* Ab 768px: */
`,
      hint: '.container { padding: 16px; } @media (min-width: 768px) { .container { padding: 32px; } }',
      tests: [
        { label: 'padding: 16px',      check: code => /padding\s*:\s*16px/.test(code) },
        { label: '@media',             check: code => /@media/.test(code) },
        { label: 'min-width: 768px',   check: code => /min-width\s*:\s*768px/.test(code) },
        { label: 'padding: 32px',      check: code => /padding\s*:\s*32px/.test(code) },
      ],
    },
    {
      id: 4,
      title: 'Flex-wrap für responsive Karten',
      description:
        'Erstelle ein <code>.cards</code>-Container mit Flexbox, <code>flex-wrap: wrap</code> und einem Gap von <code>16px</code>. ' +
        'Jede <code>.card</code> soll mindestens <code>250px</code> breit sein und wachsen können (<code>flex: 1 1 250px</code>).',
      filename: 'flex2.css',
      startCode:
`/* .cards und .card */
`,
      hint: '.cards { display: flex; flex-wrap: wrap; gap: 16px; } .card { flex: 1 1 250px; }',
      tests: [
        { label: 'flex-wrap: wrap',    check: code => /flex-wrap\s*:\s*wrap/.test(code) },
        { label: 'gap: 16px',         check: code => /gap\s*:\s*16px/.test(code) },
        { label: 'flex: 1 1 250px',   check: code => /flex\s*:\s*1\s+1\s+250px/.test(code) },
      ],
    },
    {
      id: 5,
      title: 'Grid Template Areas',
      description:
        'Definiere ein Layout mit <code>grid-template-areas</code>: Header oben (volle Breite), ' +
        'Sidebar links (1fr), Main rechts (3fr), Footer unten (volle Breite).',
      filename: 'grid2.css',
      startCode:
`/* Layout mit grid-template-areas */
.layout {
  display: grid;
  /* grid-template-areas hier: */

  /* grid-template-columns hier: */
}
`,
      hint: 'grid-template-areas: "header header" "sidebar main" "footer footer"; grid-template-columns: 1fr 3fr;',
      tests: [
        { label: 'grid-template-areas',  check: code => /grid-template-areas\s*:/.test(code) },
        { label: 'header area',          check: code => /header/.test(code) },
        { label: 'sidebar area',         check: code => /sidebar/.test(code) },
        { label: 'footer area',          check: code => /footer/.test(code) },
      ],
    },
    {
      id: 6,
      title: 'position: sticky',
      description:
        'Mache eine <code>.navbar</code> sticky: Sie soll oben am Viewport kleben (<code>top: 0</code>), ' +
        'einen <code>z-index: 100</code> und eine Hintergrundfarbe haben.',
      filename: 'sticky.css',
      startCode:
`/* .navbar sticky */
`,
      hint: '.navbar { position: sticky; top: 0; z-index: 100; background: white; }',
      tests: [
        { label: 'position: sticky',  check: code => /position\s*:\s*sticky/.test(code) },
        { label: 'top: 0',            check: code => /top\s*:\s*0/.test(code) },
        { label: 'z-index',           check: code => /z-index\s*:/.test(code) },
        { label: 'background',        check: code => /background/.test(code) },
      ],
    },
    {
      id: 7,
      title: 'Zentrieren mit Flexbox',
      description:
        'Zentriere einen Inhalt sowohl horizontal als auch vertikal in einem <code>.hero</code>-Container ' +
        '(volle Viewport-Höhe) mit Flexbox.',
      filename: 'center.css',
      startCode:
`/* .hero – vertikal und horizontal zentriert */
`,
      hint: '.hero { display: flex; justify-content: center; align-items: center; height: 100vh; }',
      tests: [
        { label: 'display: flex',          check: code => /display\s*:\s*flex/.test(code) },
        { label: 'justify-content: center', check: code => /justify-content\s*:\s*center/.test(code) },
        { label: 'align-items: center',    check: code => /align-items\s*:\s*center/.test(code) },
        { label: '100vh',                  check: code => /100vh/.test(code) },
      ],
    },
    {
      id: 8,
      title: 'repeat() und minmax()',
      description:
        'Erstelle ein responsives Grid mit <code>repeat(auto-fill, minmax(200px, 1fr))</code> — ' +
        'automatisch so viele Spalten wie passen.',
      filename: 'grid3.css',
      startCode:
`/* Responsives auto-fill Grid */
.auto-grid {

}
`,
      hint: '.auto-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; }',
      tests: [
        { label: 'display: grid',     check: code => /display\s*:\s*grid/.test(code) },
        { label: 'repeat()',          check: code => /repeat\s*\(/.test(code) },
        { label: 'auto-fill',        check: code => /auto-fill/.test(code) },
        { label: 'minmax()',         check: code => /minmax\s*\(/.test(code) },
      ],
    },
    {
      id: 9,
      title: 'Zwei-Spalten-Wechsel bei Mobile',
      description:
        'Mobile: <code>.two-col</code> ist einspaltig (flex-direction: column). ' +
        'Ab <code>600px</code>: zweispaltig (flex-direction: row, beide 50%).',
      filename: 'responsive2.css',
      startCode:
`/* Mobile: einspaltig */
.two-col {

}

/* Ab 600px: zweispaltig */
`,
      hint: '.two-col { display: flex; flex-direction: column; } @media (min-width: 600px) { .two-col { flex-direction: row; } .two-col > * { flex: 1; } }',
      tests: [
        { label: 'flex-direction: column', check: code => /flex-direction\s*:\s*column/.test(code) },
        { label: '@media min-width 600px', check: code => /@media.*min-width.*600px/.test(code) },
        { label: 'flex-direction: row',    check: code => /flex-direction\s*:\s*row/.test(code) },
      ],
    },
    {
      id: 10,
      title: 'aspect-ratio & object-fit',
      description:
        'Schreibe CSS für ein <code>.thumbnail</code>-Bild: Breite <code>100%</code>, ' +
        '<code>aspect-ratio: 16 / 9</code>, <code>object-fit: cover</code> und abgerundete Ecken.',
      filename: 'image.css',
      startCode:
`/* .thumbnail */
`,
      hint: '.thumbnail { width: 100%; aspect-ratio: 16/9; object-fit: cover; border-radius: 8px; }',
      tests: [
        { label: 'width: 100%',      check: code => /width\s*:\s*100%/.test(code) },
        { label: 'aspect-ratio',     check: code => /aspect-ratio\s*:/.test(code) },
        { label: 'object-fit: cover', check: code => /object-fit\s*:\s*cover/.test(code) },
        { label: 'border-radius',    check: code => /border-radius\s*:/.test(code) },
      ],
    },
  ],
};

export const labChapter15 = {
  title: '🧪 Übungslab – Portfolio-Projekt',
  exercises: [
    {
      id: 1,
      title: 'Navigation mit Flexbox',
      description:
        'Erstelle eine <code>&lt;nav&gt;</code> mit Logo-Link und 3 Navigations-Links. ' +
        'Style sie mit Flexbox: Logo links, Links rechts.',
      filename: 'nav.html',
      startCode:
`<nav class="navbar">
  <a href="#" class="logo">MeinPortfolio</a>
  <!-- 3 Nav-Links als ul > li > a -->

</nav>
`,
      hint: '<ul class="nav-links"><li><a href="#about">Über mich</a></li>...</ul>',
      tests: [
        { label: '<nav> vorhanden',    check: code => /<nav/.test(code) },
        { label: 'Logo-Link',          check: code => /logo/.test(code) },
        { label: 'Drei Nav-Links',     check: code => (code.match(/<li/g)||[]).length >= 3 },
        { label: 'href Attribute',     check: code => /href=/.test(code) },
      ],
    },
    {
      id: 2,
      title: 'Skills-Grid mit hover-Effekt',
      description:
        'Erstelle ein <code>.skills-grid</code> mit mind. 4 Skill-Karten (<code>.skill-card</code>). ' +
        'Das Grid soll 3 Spalten haben. Beim Hover: leichte Aufwärts-Bewegung mit <code>transform: translateY(-4px)</code>.',
      filename: 'skills.css',
      startCode:
`/* .skills-grid und .skill-card mit hover */
`,
      hint: '.skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); } .skill-card:hover { transform: translateY(-4px); }',
      tests: [
        { label: 'display: grid',            check: code => /display\s*:\s*grid/.test(code) },
        { label: '.skill-card:hover',         check: code => /\.skill-card\s*:\s*hover/.test(code) },
        { label: 'transform: translateY',     check: code => /transform\s*:.*translateY/.test(code) },
      ],
    },
    {
      id: 3,
      title: 'Responsive mit Media Query',
      description:
        'Mobile-First: <code>.projects-grid</code> ist einspaltig. ' +
        'Ab <code>768px</code>: zweispaltig, ab <code>1024px</code>: dreispaltig.',
      filename: 'responsive.css',
      startCode:
`/* Mobile: 1 Spalte */
.projects-grid {

}

/* 768px: 2 Spalten */

/* 1024px: 3 Spalten */
`,
      hint: 'grid-template-columns: 1fr → repeat(2, 1fr) → repeat(3, 1fr)',
      tests: [
        { label: 'Media Query 768px',   check: code => /@media.*768px/.test(code) },
        { label: 'Media Query 1024px',  check: code => /@media.*1024px/.test(code) },
        { label: 'display: grid',       check: code => /display\s*:\s*grid/.test(code) },
        { label: 'Drei Spalten-Angaben', check: code => (code.match(/grid-template-columns/g)||[]).length >= 2 },
      ],
    },
    {
      id: 4,
      title: 'Hero-Section',
      description:
        'Schreibe HTML für eine Hero-Section: <code>&lt;section class="hero"&gt;</code> mit einem ' +
        '<code>&lt;h1&gt;</code> (Name), einem <code>&lt;p&gt;</code> (Kurzbio) und einem CTA-Button.',
      filename: 'hero.html',
      startCode:
`<!-- Hero-Section -->
`,
      hint: '<section class="hero"><h1>Max Mustermann</h1><p>Frontend-Entwickler</p><a href="#contact" class="btn">Kontakt</a></section>',
      tests: [
        { label: '<section class="hero">', check: code => /<section.*hero/.test(code) },
        { label: '<h1> vorhanden',         check: code => /<h1/.test(code) },
        { label: '<p> Kurzbio',            check: code => /<p/.test(code) },
        { label: 'CTA Button/Link',        check: code => /<button|<a.*btn/.test(code) },
      ],
    },
    {
      id: 5,
      title: 'Projekt-Karte',
      description:
        'Baue eine Projekt-Karte als <code>&lt;article class="project-card"&gt;</code>: ' +
        'Bild, Projekt-Titel (<code>&lt;h3&gt;</code>), Beschreibung, Technologien als Tags und ein Link.',
      filename: 'projektKarte.html',
      startCode:
`<!-- Projekt-Karte -->
`,
      hint: '<article class="project-card"><img ...><h3>Projekt</h3><p>...</p><div class="tags"><span>HTML</span>...</div><a>Live →</a></article>',
      tests: [
        { label: '<article>',      check: code => /<article/.test(code) },
        { label: '<h3> Titel',     check: code => /<h3/.test(code) },
        { label: '<img>',          check: code => /<img/.test(code) },
        { label: 'Link vorhanden', check: code => /<a/.test(code) },
      ],
    },
    {
      id: 6,
      title: 'CSS-Variablen fürs Theme',
      description:
        'Definiere ein vollständiges Color-Theme in <code>:root</code>: ' +
        '<code>--color-primary</code>, <code>--color-text</code>, <code>--color-bg</code>, ' +
        '<code>--font-size-base</code>.',
      filename: 'theme.css',
      startCode:
`:root {
  /* Theme-Variablen hier: */

}
`,
      hint: ':root { --color-primary: #667eea; --color-text: #333; --color-bg: #fff; --font-size-base: 16px; }',
      tests: [
        { label: ':root {}',               check: code => /:root\s*\{/.test(code) },
        { label: '--color-primary',        check: code => /--color-primary\s*:/.test(code) },
        { label: '--color-text',           check: code => /--color-text\s*:/.test(code) },
        { label: '--color-bg',             check: code => /--color-bg\s*:/.test(code) },
      ],
    },
    {
      id: 7,
      title: 'Smooth Scroll & Active-State',
      description:
        'Aktiviere <code>scroll-behavior: smooth</code> am <code>html</code>-Element. ' +
        'Style außerdem einen <code>.nav-link.active</code> mit einer Unterline-Farbe als Akzent.',
      filename: 'navigation.css',
      startCode:
`/* Smooth Scroll und aktiver Nav-Link */
`,
      hint: 'html { scroll-behavior: smooth; } .nav-link.active { text-decoration: underline; color: var(--color-primary); }',
      tests: [
        { label: 'scroll-behavior: smooth', check: code => /scroll-behavior\s*:\s*smooth/.test(code) },
        { label: '.nav-link.active',         check: code => /\.nav-link\.active/.test(code) },
        { label: 'Farb- oder Styling-Regel', check: code => /color\s*:|text-decoration\s*:|border/.test(code) },
      ],
    },
    {
      id: 8,
      title: 'Formular: Kontakt-Sektion',
      description:
        'Erstelle ein Kontaktformular mit Name, E-Mail, Betreff (Select) und Nachricht (Textarea). ' +
        'Alle Felder mit <code>required</code>.',
      filename: 'kontakt.html',
      startCode:
`<section id="contact">
  <h2>Kontakt</h2>
  <form>
    <!-- name, email, select (Betreff), textarea, button -->

  </form>
</section>
`,
      hint: 'Vier Felder: <input name="name" required>, <input type="email" required>, <select required>, <textarea required>',
      tests: [
        { label: 'name Input',         check: code => /name=['"]name['"]/.test(code) },
        { label: 'email Input',        check: code => /type=['"]email['"]/.test(code) },
        { label: '<select>',           check: code => /<select/.test(code) },
        { label: '<textarea>',         check: code => /<textarea/.test(code) },
        { label: 'required überall',   check: code => (code.match(/required/g)||[]).length >= 3 },
      ],
    },
    {
      id: 9,
      title: 'Dark-Mode mit prefers-color-scheme',
      description:
        'Schreibe eine Media Query für <code>prefers-color-scheme: dark</code>. ' +
        'Im Dark-Mode soll <code>:root</code> andere Farbwerte für <code>--color-bg</code> (<code>#1a1a2e</code>) ' +
        'und <code>--color-text</code> (<code>#e2e8f0</code>) verwenden.',
      filename: 'darkmode.css',
      startCode:
`/* Basis-Theme */
:root {
  --color-bg: #ffffff;
  --color-text: #333333;
}

/* Dark-Mode */
`,
      hint: '@media (prefers-color-scheme: dark) { :root { --color-bg: #1a1a2e; --color-text: #e2e8f0; } }',
      tests: [
        { label: '@media prefers-color-scheme', check: code => /@media.*prefers-color-scheme/.test(code) },
        { label: 'dark',                         check: code => /dark/.test(code) },
        { label: '--color-bg im Dark-Mode',      check: code => { const dark = code.split('dark')[1] || ''; return /--color-bg/.test(dark); } },
        { label: '--color-text im Dark-Mode',    check: code => { const dark = code.split('dark')[1] || ''; return /--color-text/.test(dark); } },
      ],
    },
    {
      id: 10,
      title: 'Vollständiges Portfolio-Grundgerüst',
      description:
        'Schreibe das HTML-Grundgerüst eines Portfolios: <code>&lt;nav&gt;</code>, ' +
        '<code>&lt;section id="hero"&gt;</code>, <code>&lt;section id="projects"&gt;</code>, ' +
        '<code>&lt;section id="skills"&gt;</code>, <code>&lt;section id="contact"&gt;</code> und <code>&lt;footer&gt;</code>.',
      filename: 'index.html',
      startCode:
`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mein Portfolio</title>
</head>
<body>
  <!-- nav, hero, projects, skills, contact, footer -->

</body>
</html>
`,
      hint: 'Fünf Sections + nav + footer als Grundstruktur.',
      tests: [
        { label: '<nav> vorhanden',          check: code => /<nav/.test(code) },
        { label: 'id="hero"',                check: code => /id=['"]hero['"]/.test(code) },
        { label: 'id="projects"',            check: code => /id=['"]projects['"]/.test(code) },
        { label: 'id="skills"',              check: code => /id=['"]skills['"]/.test(code) },
        { label: 'id="contact"',             check: code => /id=['"]contact['"]/.test(code) },
        { label: '<footer>',                 check: code => /<footer/.test(code) },
      ],
    },
  ],
};

export const labChapter6 = {
  title: '🧪 Übungslab – DOM, Events & Interaktivität',
  exercises: [
    {
      id: 1,
      title: 'Element selektieren & Text ändern',
      description:
        'Selektiere das Element mit der ID <code>output</code> und setze seinen <code>textContent</code> auf <code>"Hallo DOM!"</code>.',
      filename: 'dom1.js',
      startCode:
`// document.getElementById oder querySelector nutzen:


`,
      hint: 'const el = document.getElementById("output"); el.textContent = "Hallo DOM!";',
      tests: [
        { label: 'getElementById oder querySelector', check: code => /getElementById|querySelector/.test(code) },
        { label: 'textContent gesetzt',              check: code => /textContent\s*=/.test(code) },
        { label: '"Hallo DOM!" zugewiesen',          check: code => /['"]Hallo DOM!['"]/.test(code) },
      ],
    },
    {
      id: 2,
      title: 'Click-Event mit addEventListener',
      description:
        'Füge einem Button mit der ID <code>btn</code> einen Click-EventListener hinzu. ' +
        'Beim Klick soll <code>console.log("Geklickt!")</code> ausgeführt werden.',
      filename: 'dom2.js',
      startCode:
`const btn = document.getElementById('btn');

// EventListener hinzufügen:
`,
      hint: 'btn.addEventListener("click", () => { console.log("Geklickt!"); });',
      tests: [
        { label: 'addEventListener',      check: code => /addEventListener/.test(code) },
        { label: '"click" Event',         check: code => /['"]click['"]/.test(code) },
        { label: 'console.log aufgerufen', check: code => /console\.log/.test(code) },
      ],
    },
    {
      id: 3,
      title: 'classList.toggle() verwenden',
      description:
        'Selektiere ein Element mit der Klasse <code>box</code> und toggle die Klasse <code>active</code> ' +
        'bei jedem Klick auf einen Button mit ID <code>toggleBtn</code>.',
      filename: 'dom3.js',
      startCode:
`const box = document.querySelector('.box');
const toggleBtn = document.getElementById('toggleBtn');

// addEventListener und classList.toggle nutzen:
`,
      hint: 'toggleBtn.addEventListener("click", () => box.classList.toggle("active"));',
      tests: [
        { label: 'classList.toggle',  check: code => /classList\.toggle/.test(code) },
        { label: '"active" Klasse',   check: code => /['"]active['"]/.test(code) },
        { label: 'addEventListener',  check: code => /addEventListener/.test(code) },
      ],
    },
    {
      id: 4,
      title: 'Neues Element erstellen',
      description:
        'Erstelle mit <code>createElement</code> ein neues <code>&lt;li&gt;</code>-Element, setze seinen ' +
        'Text auf <code>"Neuer Eintrag"</code> und hänge es an eine <code>&lt;ul&gt;</code> mit ID <code>list</code> an.',
      filename: 'dom4.js',
      startCode:
`const list = document.getElementById('list');

// createElement, textContent, appendChild:

`,
      hint: 'const li = document.createElement("li"); li.textContent = "Neuer Eintrag"; list.appendChild(li);',
      tests: [
        { label: 'createElement',      check: code => /createElement\s*\(/.test(code) },
        { label: 'textContent gesetzt', check: code => /textContent\s*=/.test(code) },
        { label: 'appendChild',        check: code => /appendChild/.test(code) },
      ],
    },
    {
      id: 5,
      title: 'Input-Event – Texteingabe live lesen',
      description:
        'Füge einem Input-Feld mit ID <code>searchInput</code> einen <code>input</code>-EventListener hinzu. ' +
        'Bei jeder Eingabe soll der aktuelle Wert mit <code>console.log(e.target.value)</code> ausgegeben werden.',
      filename: 'dom5.js',
      startCode:
`const searchInput = document.getElementById('searchInput');

// 'input' Event Listener:
`,
      hint: 'searchInput.addEventListener("input", e => console.log(e.target.value));',
      tests: [
        { label: '"input" Event',        check: code => /['"]input['"]/.test(code) },
        { label: 'e.target.value',        check: code => /e\.target\.value|event\.target\.value/.test(code) },
        { label: 'console.log',          check: code => /console\.log/.test(code) },
      ],
    },
    {
      id: 6,
      title: 'querySelectorAll & forEach',
      description:
        'Selektiere alle <code>&lt;p&gt;</code>-Elemente auf der Seite mit <code>querySelectorAll</code>. ' +
        'Durchlaufe sie mit <code>forEach</code> und setze die <code>style.color</code> jedes Elements auf <code>"blue"</code>.',
      filename: 'dom6.js',
      startCode:
`// querySelectorAll und forEach:

`,
      hint: 'document.querySelectorAll("p").forEach(p => p.style.color = "blue");',
      tests: [
        { label: 'querySelectorAll',   check: code => /querySelectorAll/.test(code) },
        { label: 'forEach verwendet',  check: code => /\.forEach/.test(code) },
        { label: 'style.color gesetzt', check: code => /style\.color\s*=/.test(code) },
      ],
    },
    {
      id: 7,
      title: 'Element entfernen mit remove()',
      description:
        'Selektiere ein Element mit der ID <code>deleteMe</code> und entferne es beim Klick auf ' +
        'einen Button mit ID <code>removeBtn</code> aus dem DOM (<code>.remove()</code>).',
      filename: 'dom7.js',
      startCode:
`const removeBtn = document.getElementById('removeBtn');
const target = document.getElementById('deleteMe');

// Click-Handler mit .remove():
`,
      hint: 'removeBtn.addEventListener("click", () => target.remove());',
      tests: [
        { label: 'addEventListener',  check: code => /addEventListener/.test(code) },
        { label: '.remove() aufgerufen', check: code => /\.remove\s*\(\)/.test(code) },
      ],
    },
    {
      id: 8,
      title: 'innerHTML – HTML dynamisch einfügen',
      description:
        'Erzeuge HTML für eine Karte: Ein <code>&lt;div&gt;</code> mit Klasse <code>card</code> und einem ' +
        '<code>&lt;h2&gt;</code> darin. Setze das per <code>innerHTML</code> in ein Element mit ID <code>container</code>.',
      filename: 'dom8.js',
      startCode:
`const container = document.getElementById('container');
const title = 'Meine Karte';

// innerHTML mit Template Literal:
`,
      hint: 'container.innerHTML = `<div class="card"><h2>${title}</h2></div>`;',
      tests: [
        { label: 'innerHTML gesetzt',    check: code => /innerHTML\s*=/.test(code) },
        { label: 'Template Literal',     check: code => /`/.test(code) },
        { label: 'Variable eingebettet', check: code => /\$\{/.test(code) },
      ],
    },
    {
      id: 9,
      title: 'data-* Attribut lesen',
      description:
        'Füge einem Button mit ID <code>infoBtn</code> einen Click-Handler hinzu. ' +
        'Beim Klick soll das <code>data-info</code>-Attribut des Buttons per <code>dataset.info</code> ' +
        'in die Konsole geloggt werden.',
      filename: 'dom9.js',
      startCode:
`const infoBtn = document.getElementById('infoBtn');
// <button id="infoBtn" data-info="Wichtige Info">Klick</button>

// Click-Handler mit dataset:
`,
      hint: 'infoBtn.addEventListener("click", () => console.log(infoBtn.dataset.info));',
      tests: [
        { label: 'addEventListener',  check: code => /addEventListener/.test(code) },
        { label: 'dataset.info',      check: code => /dataset\.info/.test(code) },
        { label: 'console.log',       check: code => /console\.log/.test(code) },
      ],
    },
    {
      id: 10,
      title: 'Formular-Submit & preventDefault',
      description:
        'Füge einem Formular mit ID <code>myForm</code> einen <code>submit</code>-Listener hinzu. ' +
        'Verhindere das Standard-Reload mit <code>preventDefault()</code> und logge den Wert ' +
        'eines Input-Feldes mit ID <code>nameInput</code>.',
      filename: 'dom10.js',
      startCode:
`const myForm = document.getElementById('myForm');
const nameInput = document.getElementById('nameInput');

// submit EventListener:
`,
      hint: 'myForm.addEventListener("submit", e => { e.preventDefault(); console.log(nameInput.value); });',
      tests: [
        { label: '"submit" Event',      check: code => /['"]submit['"]/.test(code) },
        { label: 'preventDefault',      check: code => /preventDefault\s*\(/.test(code) },
        { label: '.value gelesen',      check: code => /nameInput\.value|\bvalue\b/.test(code) },
      ],
    },
  ],
};

export const labChapter7 = {
  title: '🧪 Übungslab – Fetch, Async/Await & APIs',
  exercises: [
    {
      id: 1,
      title: 'async/await Funktion schreiben',
      description:
        'Schreibe eine <code>async</code>-Funktion <code>getData</code>, die auf ein <code>Promise.resolve("ok")</code> ' +
        'wartet (mit <code>await</code>) und das Ergebnis zurückgibt.',
      filename: 'async1.js',
      startCode:
`// async function getData() { ... }
`,
      hint: 'async function getData() { const result = await Promise.resolve("ok"); return result; }',
      tests: [
        { label: 'async Keyword',  check: code => /async\s+(function|\()/.test(code) },
        { label: 'await Keyword',  check: code => /await/.test(code) },
        { label: 'return result',  check: code => /return/.test(code) },
      ],
    },
    {
      id: 2,
      title: 'Error Handling mit try/catch',
      description:
        'Schreibe eine <code>async</code>-Funktion <code>safeFetch(url)</code> die einen <code>fetch</code>-Aufruf ' +
        'mit <code>try/catch</code> absichert. Im <code>catch</code>-Block soll der Fehler geloggt werden.',
      filename: 'async2.js',
      startCode:
`// async function safeFetch(url) { ... }
`,
      hint: 'async function safeFetch(url) { try { const r = await fetch(url); return r.json(); } catch(e) { console.error(e); } }',
      tests: [
        { label: 'try { }',         check: code => /try\s*\{/.test(code) },
        { label: 'catch (e)',       check: code => /catch\s*\(/.test(code) },
        { label: 'console.error',  check: code => /console\.(error|log)/.test(code) },
        { label: 'await fetch',    check: code => /await\s+fetch/.test(code) },
      ],
    },
    {
      id: 3,
      title: 'POST-Request senden',
      description:
        'Schreibe eine Funktion <code>postData(url, data)</code>, die einen POST-Request mit ' +
        '<code>fetch</code> sendet. Übergib <code>method: "POST"</code>, den passenden Content-Type-Header ' +
        'und <code>JSON.stringify(data)</code> als Body.',
      filename: 'async3.js',
      startCode:
`// async function postData(url, data) { ... }
`,
      hint: 'fetch(url, { method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(data) })',
      tests: [
        { label: 'method: "POST"',           check: code => /method\s*:\s*['"]POST['"]/.test(code) },
        { label: 'Content-Type Header',      check: code => /['"]Content-Type['"]/.test(code) },
        { label: 'JSON.stringify()',         check: code => /JSON\.stringify\s*\(/.test(code) },
        { label: 'await fetch() verwendet', check: code => /await\s+fetch\s*\(/.test(code) },
      ],
    },
    {
      id: 4,
      title: 'Fetch & JSON parsen',
      description:
        'Schreibe eine <code>async</code>-Funktion <code>getPost()</code>, die den Endpunkt ' +
        '<code>https://jsonplaceholder.typicode.com/posts/1</code> abruft, ' +
        'die Antwort mit <code>.json()</code> parst und zurückgibt.',
      filename: 'async4.js',
      startCode:
`// async function getPost() { ... }
`,
      hint: 'const res = await fetch(url); const data = await res.json(); return data;',
      tests: [
        { label: 'await fetch()',  check: code => /await\s+fetch\s*\(/.test(code) },
        { label: '.json() aufgerufen', check: code => /\.json\s*\(\)/.test(code) },
        { label: 'await vor .json()', check: code => /await\s+\w+\.json\s*\(\)|await\s+res\.json/.test(code) },
        { label: 'return statement',  check: code => /return/.test(code) },
      ],
    },
    {
      id: 5,
      title: 'Response-Status prüfen',
      description:
        'Ergänze eine Fetch-Funktion: Wenn <code>response.ok</code> false ist, ' +
        'wirf einen Fehler mit <code>throw new Error("HTTP-Fehler: " + response.status)</code>.',
      filename: 'async5.js',
      startCode:
`async function fetchWithCheck(url) {
  const response = await fetch(url);

  // Prüfe response.ok und werfe ggf. einen Fehler:


  return response.json();
}
`,
      hint: 'if (!response.ok) throw new Error("HTTP-Fehler: " + response.status);',
      tests: [
        { label: 'response.ok geprüft', check: code => /response\.ok/.test(code) },
        { label: 'throw new Error',     check: code => /throw\s+new\s+Error/.test(code) },
        { label: 'response.status',     check: code => /response\.status/.test(code) },
      ],
    },
    {
      id: 6,
      title: 'Daten in DOM einfügen',
      description:
        'Schreibe eine <code>async</code>-Funktion <code>loadTitle()</code>. ' +
        'Lade Post 1 von JSONPlaceholder, extrahiere den <code>title</code> aus dem JSON ' +
        'und setze ihn als <code>textContent</code> in ein Element mit ID <code>output</code>.',
      filename: 'async6.js',
      startCode:
`async function loadTitle() {
  // fetch → .json() → DOM-Ausgabe

}
`,
      hint: 'const data = await res.json(); document.getElementById("output").textContent = data.title;',
      tests: [
        { label: 'async Funktion',      check: code => /async/.test(code) },
        { label: 'await fetch + .json()', check: code => /await\s+fetch/.test(code) && /\.json\(\)/.test(code) },
        { label: '.title extrahiert',   check: code => /\.title/.test(code) },
        { label: 'textContent gesetzt', check: code => /textContent\s*=/.test(code) },
      ],
    },
    {
      id: 7,
      title: 'Loading-State anzeigen',
      description:
        'Zeige während eines Fetch-Abrufs einen Ladetext: Setze vor dem <code>await</code> ' +
        '<code>textContent</code> auf <code>"Lädt..."</code> und danach auf das Ergebnis.',
      filename: 'async7.js',
      startCode:
`const output = document.getElementById('output');

async function loadData() {
  // 1. Loading-Text setzen:

  // 2. Fetch:
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();

  // 3. Ergebnis anzeigen:

}
`,
      hint: 'output.textContent = "Lädt..."; ... output.textContent = data.title;',
      tests: [
        { label: '"Lädt..." Text',       check: code => /['"`]Lädt/.test(code) },
        { label: 'textContent zweimal',  check: code => (code.match(/textContent\s*=/g) || []).length >= 2 },
        { label: 'await fetch',          check: code => /await\s+fetch/.test(code) },
      ],
    },
    {
      id: 8,
      title: 'Array von URLs laden (for...of + await)',
      description:
        'Schreibe eine <code>async</code>-Funktion <code>loadMany()</code>. Lade nacheinander ' +
        'Posts 1, 2 und 3 von JSONPlaceholder per <code>for...of</code>-Schleife mit <code>await</code>. ' +
        'Sammle die Titel in einem Array.',
      filename: 'async8.js',
      startCode:
`const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3',
];

async function loadMany() {
  const titles = [];
  // for...of mit await:


  return titles;
}
`,
      hint: 'for (const url of urls) { const res = await fetch(url); const d = await res.json(); titles.push(d.title); }',
      tests: [
        { label: 'for...of Schleife',    check: code => /for\s+.*\s+of\s+/.test(code) },
        { label: 'await in der Schleife', check: code => /for.*of[sS]{0,100}await/.test(code) },
        { label: 'titles.push()',        check: code => /titles\.push/.test(code) },
        { label: 'return titles',        check: code => /return\s+titles/.test(code) },
      ],
    },
    {
      id: 9,
      title: 'Promise.all – parallel laden',
      description:
        'Schreibe eine Funktion <code>loadParallel()</code>, die zwei Posts <em>gleichzeitig</em> lädt. ' +
        'Nutze <code>Promise.all</code> mit zwei <code>fetch(...).then(r => r.json())</code>-Aufrufen.',
      filename: 'async9.js',
      startCode:
`async function loadParallel() {
  // Promise.all mit zwei fetch-Aufrufen:
  const [post1, post2] = await Promise.all([

  ]);
  return [post1.title, post2.title];
}
`,
      hint: 'await Promise.all([ fetch(url1).then(r=>r.json()), fetch(url2).then(r=>r.json()) ])',
      tests: [
        { label: 'Promise.all',       check: code => /Promise\.all\s*\(/.test(code) },
        { label: 'await davor',       check: code => /await\s+Promise\.all/.test(code) },
        { label: 'Zwei fetch-Calls',  check: code => (code.match(/fetch\s*\(/g) || []).length >= 2 },
        { label: '.json() auf beiden', check: code => (code.match(/\.json\s*\(\)/g) || []).length >= 2 },
      ],
    },
    {
      id: 10,
      title: 'Query-Parameter in der URL',
      description:
        'Schreibe eine Funktion <code>searchPosts(query)</code>, die von ' +
        '<code>https://jsonplaceholder.typicode.com/posts</code> mit einem Query-Parameter ' +
        '<code>userId=1</code> Daten lädt. Baue die URL mit einem Template Literal.',
      filename: 'async10.js',
      startCode:
`// async function searchPosts(userId) { ... }
`,
      hint: 'const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;',
      tests: [
        { label: 'Template Literal für URL', check: code => /`.*\$\{/.test(code) },
        { label: '?userId= in der URL',      check: code => /\?userId=/.test(code) || /\?\w+=/.test(code) },
        { label: 'await fetch()',            check: code => /await\s+fetch/.test(code) },
      ],
    },
  ],
};

export const labChapter10 = {
  title: '🏗️ Übungslab – React Mini-App bauen',
  exercises: [
    // ── 1 ──────────────────────────────────────────────────────────────────────
    {
      id: 1,
      title: 'App.jsx – State für Aufgaben anlegen',
      description:
        'Lege in <code>App.jsx</code> einen State <code>tasks</code> an. ' +
        'Der Anfangswert soll ein Array mit zwei Aufgaben-Objekten sein: ' +
        '<code>{ id: 1, text: "React lernen", completed: true }</code> und ' +
        '<code>{ id: 2, text: "App bauen", completed: false }</code>.',
      filename: 'App.jsx',
      startCode:
`import { useState } from 'react';

function App() {
  // Lege hier den tasks-State an:


  return <div>App</div>;
}

export default App;`,
      hint: 'useState nimmt den Anfangswert als Argument: const [tasks, setTasks] = useState([...])',
      tests: [
        {
          label: 'useState importiert',
          check: code => /import\s*\{[^}]*useState[^}]*\}\s*from\s*['"]react['"]/.test(code),
        },
        {
          label: 'tasks-State mit useState angelegt',
          check: code => /const\s*\[\s*tasks\s*,\s*setTasks\s*\]\s*=\s*useState\s*\(/.test(code),
        },
        {
          label: 'Anfangswert ist ein Array',
          check: code => /useState\s*\(\s*\[/.test(code),
        },
        {
          label: 'Objekte mit id, text, completed',
          check: code => /id\s*:/.test(code) && /text\s*:/.test(code) && /completed\s*:/.test(code),
        },
      ],
    },

    // ── 2 ──────────────────────────────────────────────────────────────────────
    {
      id: 2,
      title: 'addTask – neue Aufgabe hinzufügen',
      description:
        'Schreibe die Funktion <code>addTask(text)</code>. ' +
        'Sie soll ein neues Aufgaben-Objekt <code>{ id: Date.now(), text, completed: false }</code> ' +
        'ans Ende des <code>tasks</code>-Arrays anhängen. ' +
        'Verwende den Spread-Operator und setze den State mit <code>setTasks</code>.',
      filename: 'App.jsx',
      startCode:
`import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  // Schreibe hier addTask:
  const addTask = (text) => {


  };

  return <div>App</div>;
}

export default App;`,
      hint: 'Neues Array: setTasks([...tasks, { id: Date.now(), text, completed: false }])',
      tests: [
        {
          label: 'addTask als Funktion definiert',
          check: code => /const\s+addTask\s*=/.test(code),
        },
        {
          label: 'setTasks wird aufgerufen',
          check: code => /setTasks\s*\(/.test(code),
        },
        {
          label: 'Spread-Operator verwendet',
          check: code => /\.\.\.\s*tasks/.test(code),
        },
        {
          label: 'completed: false im neuen Objekt',
          check: code => /completed\s*:\s*false/.test(code),
        },
      ],
    },

    // ── 3 ──────────────────────────────────────────────────────────────────────
    {
      id: 3,
      title: 'toggleTask – erledigt/offen umschalten',
      description:
        'Schreibe <code>toggleTask(id)</code>. ' +
        'Sie soll das Task-Objekt mit der passenden <code>id</code> aktualisieren: ' +
        '<code>completed</code> wird umgekehrt (<code>!task.completed</code>). ' +
        'Alle anderen Tasks bleiben unverändert. Nutze <code>tasks.map()</code>.',
      filename: 'App.jsx',
      startCode:
`import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'React lernen', completed: false },
  ]);

  // Schreibe hier toggleTask:
  const toggleTask = (id) => {


  };

  return <div>App</div>;
}

export default App;`,
      hint: 'setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))',
      tests: [
        {
          label: 'toggleTask als Funktion definiert',
          check: code => /const\s+toggleTask\s*=/.test(code),
        },
        {
          label: 'tasks.map() verwendet',
          check: code => /tasks\.map\s*\(/.test(code),
        },
        {
          label: 'Spread-Operator auf task',
          check: code => /\.\.\.\s*task/.test(code),
        },
        {
          label: '!task.completed (toggle)',
          check: code => /!\s*task\.completed/.test(code),
        },
      ],
    },

    // ── 4 ──────────────────────────────────────────────────────────────────────
    {
      id: 4,
      title: 'deleteTask – Aufgabe entfernen',
      description:
        'Schreibe <code>deleteTask(id)</code>. ' +
        'Sie soll alle Aufgaben <strong>außer</strong> derjenigen mit der übergebenen <code>id</code> behalten. ' +
        'Nutze <code>tasks.filter()</code> und setze den State danach.',
      filename: 'App.jsx',
      startCode:
`import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'React lernen', completed: false },
    { id: 2, text: 'App bauen', completed: true },
  ]);

  // Schreibe hier deleteTask:
  const deleteTask = (id) => {


  };

  return <div>App</div>;
}

export default App;`,
      hint: 'setTasks(tasks.filter(task => task.id !== id))',
      tests: [
        {
          label: 'deleteTask als Funktion definiert',
          check: code => /const\s+deleteTask\s*=/.test(code),
        },
        {
          label: 'tasks.filter() verwendet',
          check: code => /tasks\.filter\s*\(/.test(code),
        },
        {
          label: 'Ungleich-Vergleich mit id (!=)',
          check: code => /!==?\s*id|id\s*!==?/.test(code),
        },
        {
          label: 'setTasks wird aufgerufen',
          check: code => /setTasks\s*\(/.test(code),
        },
      ],
    },

    // ── 5 ──────────────────────────────────────────────────────────────────────
    {
      id: 5,
      title: 'Filter-State & filteredTasks',
      description:
        'Füge einen zweiten State <code>filter</code> mit dem Startwert <code>"all"</code> hinzu. ' +
        'Berechne dann <code>filteredTasks</code> als abgeleiteten Wert: ' +
        'bei <code>"open"</code> nur Tasks mit <code>completed === false</code>, ' +
        'bei <code>"completed"</code> nur erledigte, sonst alle.',
      filename: 'App.jsx',
      startCode:
`import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'React lernen', completed: true },
    { id: 2, text: 'App bauen', completed: false },
  ]);

  // 1. Lege filter-State an (Startwert: 'all'):


  // 2. Berechne filteredTasks:


  return <div>{filteredTasks.length} Aufgaben</div>;
}

export default App;`,
      hint: 'const filteredTasks = tasks.filter(task => { if (filter === "open") return !task.completed; if (filter === "completed") return task.completed; return true; });',
      tests: [
        {
          label: 'filter-State angelegt',
          check: code => /const\s*\[\s*filter\s*,\s*setFilter\s*\]\s*=\s*useState\s*\(\s*['"]all['"]\s*\)/.test(code),
        },
        {
          label: 'filteredTasks definiert',
          check: code => /const\s+filteredTasks\s*=/.test(code),
        },
        {
          label: 'tasks.filter() verwendet',
          check: code => /tasks\.filter\s*\(/.test(code),
        },
        {
          label: '"open" und "completed" abgefragt',
          check: code => /['"]open['"]/.test(code) && /['"]completed['"]/.test(code),
        },
      ],
    },

    // ── 6 ──────────────────────────────────────────────────────────────────────
    {
      id: 6,
      title: 'TaskForm – Controlled Input',
      description:
        'Erstelle die Komponente <code>TaskForm</code>. ' +
        'Sie empfängt eine Prop <code>onAddTask</code>. ' +
        'Verwende einen lokalen <code>inputValue</code>-State für das <code>&lt;input&gt;</code>-Feld (Controlled Input). ' +
        'Beim Submit: <code>preventDefault()</code>, leere Eingaben ignorieren, <code>onAddTask</code> aufrufen, Input leeren.',
      filename: 'TaskForm.jsx',
      startCode:
`import { useState } from 'react';

function TaskForm({ onAddTask }) {
  // 1. Lokaler State für den Input:


  // 2. Submit-Handler:
  const handleSubmit = (e) => {


  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Controlled Input */}

      <button type="submit">Hinzufügen</button>
    </form>
  );
}

export default TaskForm;`,
      hint: 'Controlled Input: <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />',
      tests: [
        {
          label: 'useState für inputValue',
          check: code => /const\s*\[\s*inputValue\s*,\s*set\w+\s*\]\s*=\s*useState/.test(code),
        },
        {
          label: 'onSubmit am form',
          check: code => /onSubmit\s*=/.test(code),
        },
        {
          label: 'preventDefault() aufgerufen',
          check: code => /preventDefault\s*\(\s*\)/.test(code),
        },
        {
          label: 'value={inputValue} am input',
          check: code => /value\s*=\s*\{\s*inputValue\s*\}/.test(code),
        },
        {
          label: 'onChange aktualisiert State',
          check: code => /onChange\s*=/.test(code) && /setInputValue|set[A-Z]\w*/.test(code),
        },
        {
          label: 'onAddTask wird aufgerufen',
          check: code => /onAddTask\s*\(/.test(code),
        },
      ],
    },

    // ── 7 ──────────────────────────────────────────────────────────────────────
    {
      id: 7,
      title: 'FilterButtons – dynamische Button-Liste',
      description:
        'Erstelle <code>FilterButtons</code>. ' +
        'Die Komponente erhält <code>currentFilter</code> und <code>onFilterChange</code> als Props. ' +
        'Rendere drei Buttons (Alle / Offen / Erledigt) dynamisch mit <code>map()</code> aus einem Array. ' +
        'Der aktive Button bekommt die CSS-Klasse <code>active</code> (bedingte Klasse mit Ternary).',
      filename: 'FilterButtons.jsx',
      startCode:
`function FilterButtons({ currentFilter, onFilterChange }) {
  const filters = [
    { value: 'all', label: 'Alle' },
    { value: 'open', label: 'Offen' },
    { value: 'completed', label: 'Erledigt' },
  ];

  return (
    <div className="filter-buttons">
      {/* Rendere die filter-Buttons hier mit map() */}

    </div>
  );
}

export default FilterButtons;`,
      hint: 'filters.map(f => <button key={f.value} className={currentFilter === f.value ? "active" : ""} onClick={() => onFilterChange(f.value)}>{f.label}</button>)',
      tests: [
        {
          label: 'filters.map() verwendet',
          check: code => /filters\.map\s*\(/.test(code),
        },
        {
          label: 'key auf dem Button',
          check: code => /key\s*=\s*\{/.test(code),
        },
        {
          label: 'onClick ruft onFilterChange auf',
          check: code => /onClick\s*=/.test(code) && /onFilterChange/.test(code),
        },
        {
          label: 'Bedingte Klasse "active"',
          check: code => /active/.test(code) && /\?/.test(code),
        },
      ],
    },

    // ── 8 ──────────────────────────────────────────────────────────────────────
    {
      id: 8,
      title: 'TaskList – Liste mit Early Return',
      description:
        'Erstelle <code>TaskList</code>. ' +
        'Props: <code>tasks</code>, <code>onToggle</code>, <code>onDelete</code>. ' +
        'Wenn <code>tasks.length === 0</code>: early return mit <code>&lt;p&gt;Keine Aufgaben.&lt;/p&gt;</code>. ' +
        'Ansonsten: <code>&lt;ul&gt;</code> mit <code>tasks.map()</code>, jeder Eintrag als ' +
        '<code>&lt;li key={task.id}&gt;{task.text}&lt;/li&gt;</code>.',
      filename: 'TaskList.jsx',
      startCode:
`function TaskList({ tasks, onToggle, onDelete }) {
  // Early Return bei leerer Liste:


  return (
    <ul>
      {/* tasks mit map() rendern */}

    </ul>
  );
}

export default TaskList;`,
      hint: 'if (tasks.length === 0) return <p>Keine Aufgaben.</p>; — dann tasks.map(task => <li key={task.id}>{task.text}</li>)',
      tests: [
        {
          label: 'Early Return bei leerer Liste',
          check: code => /tasks\.length\s*===\s*0|tasks\.length\s*==\s*0/.test(code) && /return/.test(code),
        },
        {
          label: 'tasks.map() für die Liste',
          check: code => /tasks\.map\s*\(/.test(code),
        },
        {
          label: 'key={task.id} gesetzt',
          check: code => /key\s*=\s*\{\s*task\.id\s*\}/.test(code),
        },
        {
          label: '<ul> als Container',
          check: code => /<ul/.test(code),
        },
      ],
    },

    // ── 9 ──────────────────────────────────────────────────────────────────────
    {
      id: 9,
      title: 'TaskItem – bedingte CSS-Klasse',
      description:
        'Erstelle <code>TaskItem</code> mit Props <code>task</code>, <code>onToggle</code>, <code>onDelete</code>. ' +
        'Zeige eine Checkbox (<code>checked={task.completed}</code>) und den Text. ' +
        'Das <code>&lt;li&gt;</code> bekommt die Klasse <code>completed</code>, wenn <code>task.completed</code> true ist ' +
        '(Ternary: <code>"task-item completed"</code> vs. <code>"task-item"</code>). ' +
        'Ein ✕-Button ruft <code>onDelete(task.id)</code> auf.',
      filename: 'TaskItem.jsx',
      startCode:
`function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={/* bedingte Klasse */}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={/* onToggle aufrufen */}
      />
      <span>{task.text}</span>
      <button onClick={/* onDelete aufrufen */}>✕</button>
    </li>
  );
}

export default TaskItem;`,
      hint: 'className={task.completed ? "task-item completed" : "task-item"} — onChange={() => onToggle(task.id)} — onClick={() => onDelete(task.id)}',
      tests: [
        {
          label: 'Bedingte Klasse mit Ternary',
          check: code => /task\.completed\s*\?/.test(code) && /completed/.test(code),
        },
        {
          label: 'checked={task.completed}',
          check: code => /checked\s*=\s*\{\s*task\.completed\s*\}/.test(code),
        },
        {
          label: 'onChange ruft onToggle auf',
          check: code => /onChange\s*=/.test(code) && /onToggle\s*\(\s*task\.id\s*\)/.test(code),
        },
        {
          label: 'onClick ruft onDelete auf',
          check: code => /onClick\s*=/.test(code) && /onDelete\s*\(\s*task\.id\s*\)/.test(code),
        },
      ],
    },

    // ── 10 ─────────────────────────────────────────────────────────────────────
    {
      id: 10,
      title: 'App.jsx – openCount & Abschluss',
      description:
        'Berechne <code>openCount</code> (Anzahl nicht-erledigter Tasks mit <code>filter()</code>). ' +
        'Zeige im Header: wenn <code>openCount === 0</code> den Text <code>"Alle erledigt! 🎉"</code>, ' +
        'sonst <code>"{openCount} offen"</code> (Ternary). ' +
        'Importiere außerdem <code>TaskForm</code> und <code>TaskList</code> und binde sie in das JSX ein.',
      filename: 'App.jsx',
      startCode:
`import { useState } from 'react';
// Importiere TaskForm und TaskList:


function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'React lernen', completed: true },
    { id: 2, text: 'App bauen', completed: false },
  ]);

  const addTask = (text) =>
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);

  const toggleTask = (id) =>
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));

  const deleteTask = (id) =>
    setTasks(tasks.filter(t => t.id !== id));

  // Berechne openCount:


  return (
    <div className="app">
      <header>
        <h1>Aufgaben-Manager</h1>
        {/* Zeige openCount oder "Alle erledigt! 🎉" */}

      </header>
      {/* TaskForm und TaskList einbinden */}

    </div>
  );
}

export default App;`,
      hint: 'const openCount = tasks.filter(t => !t.completed).length; — dann im JSX: {openCount === 0 ? "Alle erledigt! 🎉" : `${openCount} offen`}',
      tests: [
        {
          label: 'TaskForm importiert',
          check: code => /import\s+TaskForm/.test(code),
        },
        {
          label: 'TaskList importiert',
          check: code => /import\s+TaskList/.test(code),
        },
        {
          label: 'openCount berechnet',
          check: code => /const\s+openCount\s*=/.test(code) && /\.filter\s*\(/.test(code),
        },
        {
          label: 'Ternary für Statusanzeige',
          check: code => /openCount\s*===\s*0\s*\?|openCount\s*==\s*0\s*\?/.test(code),
        },
        {
          label: '<TaskForm ... /> eingebunden',
          check: code => /<TaskForm/.test(code),
        },
        {
          label: '<TaskList ... /> eingebunden',
          check: code => /<TaskList/.test(code),
        },
      ],
    },
  ],
};

export const labChapter8 = {
  title: '🧪 Übungslab – Arrays, Objects & Moderne Patterns',
  exercises: [
    {
      id: 1,
      title: 'Array.map() – transformieren',
      description:
        'Nutze <code>map()</code>, um aus einem Array von Zahlen <code>[1, 2, 3, 4, 5]</code> ' +
        'ein neues Array <code>doubled</code> zu erstellen, in dem jede Zahl verdoppelt ist.',
      filename: 'arrays1.js',
      startCode:
`const numbers = [1, 2, 3, 4, 5];

// const doubled = ...
`,
      hint: 'const doubled = numbers.map(n => n * 2);',
      tests: [
        { label: '.map() verwendet',    check: code => /\.map\s*\(/.test(code) },
        { label: 'Verdopplung (* 2)',   check: code => /\*\s*2/.test(code) },
        { label: 'const doubled',       check: code => /const\s+doubled/.test(code) },
      ],
    },
    {
      id: 2,
      title: 'Array.filter() – filtern',
      description:
        'Filtere aus dem Array <code>scores</code> alle Werte heraus, die größer oder gleich 60 sind. ' +
        'Speichere das Ergebnis in <code>passing</code>.',
      filename: 'arrays2.js',
      startCode:
`const scores = [45, 72, 58, 91, 36, 65];

// const passing = ...
`,
      hint: 'const passing = scores.filter(s => s >= 60);',
      tests: [
        { label: '.filter() verwendet', check: code => /\.filter\s*\(/.test(code) },
        { label: '>= 60 Bedingung',     check: code => />=\s*60/.test(code) },
        { label: 'const passing',       check: code => /const\s+passing/.test(code) },
      ],
    },
    {
      id: 3,
      title: 'Array.find() – erstes Treffer finden',
      description:
        'Suche im Array <code>users</code> den ersten User mit <code>id === 2</code> mithilfe von <code>find()</code>.',
      filename: 'arrays3.js',
      startCode:
`const users = [
  { id: 1, name: 'Anna' },
  { id: 2, name: 'Ben' },
  { id: 3, name: 'Clara' },
];

// const found = ...
`,
      hint: 'const found = users.find(u => u.id === 2);',
      tests: [
        { label: '.find() verwendet',  check: code => /\.find\s*\(/.test(code) },
        { label: 'id === 2 Vergleich', check: code => /id\s*===\s*2/.test(code) },
        { label: 'const found',        check: code => /const\s+found/.test(code) },
      ],
    },
    {
      id: 4,
      title: 'Spread – Array zusammenführen',
      description:
        'Füge die Arrays <code>a</code> und <code>b</code> mit dem Spread-Operator zu einem neuen Array <code>combined</code> zusammen.',
      filename: 'spread1.js',
      startCode:
`const a = [1, 2, 3];
const b = [4, 5, 6];

// const combined = ...
`,
      hint: 'const combined = [...a, ...b];',
      tests: [
        { label: 'Spread ...a',       check: code => /\.\.\.a/.test(code) },
        { label: 'Spread ...b',       check: code => /\.\.\.b/.test(code) },
        { label: 'const combined',    check: code => /const\s+combined/.test(code) },
      ],
    },
    {
      id: 5,
      title: 'Spread – Objekt kopieren & erweitern',
      description:
        'Erstelle ein neues Objekt <code>updated</code>, das alle Eigenschaften von <code>user</code> enthält, ' +
        'aber mit einem geänderten <code>age: 30</code>. Nutze den Spread-Operator.',
      filename: 'spread2.js',
      startCode:
`const user = { id: 1, name: 'Anna', age: 25 };

// const updated = ...
`,
      hint: 'const updated = { ...user, age: 30 };',
      tests: [
        { label: 'Spread ...user',      check: code => /\.\.\.user/.test(code) },
        { label: 'age: 30 überschrieben', check: code => /age\s*:\s*30/.test(code) },
        { label: 'const updated',       check: code => /const\s+updated/.test(code) },
      ],
    },
    {
      id: 6,
      title: 'Array-Destructuring',
      description:
        'Destructure das Array <code>colors</code>: Die erste Farbe soll in <code>first</code>, ' +
        'die zweite in <code>second</code> gespeichert werden. Die dritte wird übersprungen.',
      filename: 'destruct1.js',
      startCode:
`const colors = ['red', 'green', 'blue'];

// Destructuring:
const [ /* ... */ ] = colors;
`,
      hint: 'const [first, second] = colors; — drittes Element einfach weglassen.',
      tests: [
        { label: 'Array-Destructuring []', check: code => /const\s*\[/.test(code) },
        { label: 'first Variable',         check: code => /\bfirst\b/.test(code) },
        { label: 'second Variable',        check: code => /\bsecond\b/.test(code) },
      ],
    },
    {
      id: 7,
      title: 'Objekt-Destructuring',
      description:
        'Destructure das Objekt <code>product</code>: Extrahiere <code>name</code>, <code>price</code> und <code>stock</code> ' +
        'als eigene Variablen.',
      filename: 'destruct2.js',
      startCode:
`const product = { name: 'Laptop', price: 999, stock: 5, category: 'Electronics' };

// Objekt-Destructuring:

`,
      hint: 'const { name, price, stock } = product;',
      tests: [
        { label: 'Objekt-Destructuring {}', check: code => /const\s*\{/.test(code) },
        { label: 'name extrahiert',         check: code => /\bname\b/.test(code) },
        { label: 'price extrahiert',        check: code => /\bprice\b/.test(code) },
        { label: 'stock extrahiert',        check: code => /\bstock\b/.test(code) },
      ],
    },
    {
      id: 8,
      title: 'Immutable Update – Array',
      description:
        'Füge dem Array <code>tasks</code> einen neuen Task <code>{ id: 3, text: "Lernen" }</code> hinzu — ' +
        '<strong>ohne</strong> das Original zu verändern. Nutze den Spread-Operator.',
      filename: 'immutable1.js',
      startCode:
`const tasks = [
  { id: 1, text: 'Kochen' },
  { id: 2, text: 'Laufen' },
];

// const newTasks = ... (Original tasks nicht verändern!)
`,
      hint: 'const newTasks = [...tasks, { id: 3, text: "Lernen" }];',
      tests: [
        { label: '...tasks Spread',          check: code => /\.\.\.tasks/.test(code) },
        { label: 'neues Objekt hinzugefügt', check: code => /id\s*:\s*3/.test(code) },
        { label: 'tasks.push NICHT benutzt', check: code => !/tasks\.push/.test(code) },
        { label: 'const newTasks',           check: code => /const\s+newTasks/.test(code) },
      ],
    },
    {
      id: 9,
      title: 'filter + map kombinieren',
      description:
        'Filtere aus <code>products</code> alle Produkte mit <code>price > 100</code> heraus ' +
        'und erstelle ein neues Array mit nur den <code>name</code>-Werten. Nutze <code>filter()</code> + <code>map()</code>.',
      filename: 'chain.js',
      startCode:
`const products = [
  { name: 'Stift', price: 2 },
  { name: 'Laptop', price: 999 },
  { name: 'Maus', price: 25 },
  { name: 'Monitor', price: 450 },
];

// const expensiveNames = ...
`,
      hint: 'const expensiveNames = products.filter(p => p.price > 100).map(p => p.name);',
      tests: [
        { label: '.filter()',           check: code => /\.filter\s*\(/.test(code) },
        { label: '.map()',              check: code => /\.map\s*\(/.test(code) },
        { label: 'price > 100',         check: code => /price\s*>\s*100/.test(code) },
        { label: '.name extrahiert',    check: code => /\.name/.test(code) },
      ],
    },
    {
      id: 10,
      title: 'ES6 Module – export & import',
      description:
        'Schreibe zwei Funktionen: <code>add(a, b)</code> und <code>subtract(a, b)</code>. ' +
        'Exportiere beide als <em>named exports</em>. Dann importiere sie in der zweiten Zeile (Kommentar).',
      filename: 'modules.js',
      startCode:
`// math.js – Funktionen definieren und exportieren:



// Importieren (nur als Kommentar zeigen):
// import { add, subtract } from './math.js';
`,
      hint: 'export const add = (a, b) => a + b; export const subtract = (a, b) => a - b;',
      tests: [
        { label: 'export verwendet',      check: code => /export\s+(const|function)/.test(code) },
        { label: 'add definiert',         check: code => /\badd\b/.test(code) },
        { label: 'subtract definiert',    check: code => /\bsubtract\b/.test(code) },
        { label: 'kein export default',   check: code => !/export\s+default/.test(code) },
      ],
    },
  ],
};

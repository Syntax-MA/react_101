/**
 * bugData.js
 * Daten für den Fehler-Simulator (BugFinder Komponente)
 *
 * Struktur je Aufgabe:
 * {
 *   id        – Nummer
 *   title     – kurzer Name des Bugs
 *   category  – 'js' | 'react' | 'html' | 'css'
 *   description – Was soll der Code tun? Was geht schief?
 *   buggyCode   – Code MIT Fehler (wird angezeigt und editierbar)
 *   hint        – Hinweis auf den Fehler
 *   explanation – Erklärung nach dem Lösen
 *   tests       – Array { label, check: code => boolean }
 * }
 */

// ── Kapitel 1: React Setup & JSX ─────────────────────────────────────────────
export const bugChapter1 = {
  title: '24.1 · React Setup & JSX',
  exercises: [
    {
      id: 1,
      title: 'Fehlende JSX-Wrapper',
      category: 'react',
      description:
        'Die Komponente soll Name und E-Mail nebeneinander ausgeben. Beim Start gibt es aber einen Build-Fehler. Finde und behebe ihn.',
      buggyCode:
`function UserCard({ name, email }) {
  return (
    <h2>{name}</h2>
    <p>{email}</p>
  );
}`,
      hint: 'JSX darf nur ein einziges Wurzelelement zurückgeben.',
      explanation:
        'JSX kann niemals mehrere Root-Elemente ohne Wrapper zurückgeben. Verwende ein Fragment <></> oder ein <div> als Container.',
      tests: [
        { label: 'Fragment oder div als Wrapper',   check: c => /<>|<div|<React\.Fragment/.test(c) },
        { label: 'h2 und p sind noch vorhanden',    check: c => /<h2/.test(c) && /<p/.test(c) },
      ],
    },
    {
      id: 2,
      title: 'class statt className',
      category: 'react',
      description:
        'Die Karte soll die CSS-Klasse "card" bekommen. In der Konsole erscheint aber eine Warnung. Was stimmt nicht?',
      buggyCode:
`function Card({ children }) {
  return (
    <div class="card">
      {children}
    </div>
  );
}`,
      hint: 'HTML-Attribute heißen in JSX manchmal anders als im echten HTML.',
      explanation:
        'In JSX heißt das Attribut className statt class, weil class ein reserviertes JavaScript-Schlüsselwort ist.',
      tests: [
        { label: 'className wird verwendet',  check: c => /className/.test(c) },
        { label: 'kein class= mehr vorhanden', check: c => !/\bclass=/.test(c) },
      ],
    },
    {
      id: 3,
      title: 'Selbstschließendes Tag fehlt',
      category: 'react',
      description:
        'Das Bild soll angezeigt werden, aber der Browser zeigt einen Fehler. Finde das Problem.',
      buggyCode:
`function Avatar({ src, alt }) {
  return (
    <div className="avatar">
      <img src={src} alt={alt}>
    </div>
  );
}`,
      hint: 'In JSX müssen void-Elemente wie <img> korrekt geschlossen werden.',
      explanation:
        'In JSX müssen alle Tags geschlossen sein. Void-Elemente (img, input, br usw.) brauchen einen abschließenden Slash: <img ... />',
      tests: [
        { label: '<img ... /> ist selbstschließend', check: c => /<img[^>]*\/>/.test(c) },
      ],
    },
  ],
};

// ── Kapitel 2: Komponenten & Props ────────────────────────────────────────────
export const bugChapter2 = {
  title: '24.2 · Komponenten & Props',
  exercises: [
    {
      id: 1,
      title: 'Props werden nicht destructured',
      category: 'react',
      description:
        'Die Greeting-Komponente soll den Namen ausgeben. Stattdessen erscheint "[object Object]". Warum?',
      buggyCode:
`function Greeting(props) {
  return <h1>Hallo, {props}!</h1>;
}

// Aufruf: <Greeting name="Anna" />`,
      hint: 'props ist ein Objekt. Du willst einen bestimmten Wert daraus.',
      explanation:
        'props ist ein JS-Objekt. Mit {props} gibt man das gesamte Objekt aus → "[object Object]". Richtig wäre props.name oder Destructuring: function Greeting({ name }).',
      tests: [
        { label: 'props.name oder destructured name verwendet', check: c => /props\.name|{\s*name\s*}/.test(c) },
      ],
    },
    {
      id: 2,
      title: 'Prop-Typ Fehler: Zahl als String',
      category: 'react',
      description:
        'Der Preis soll 10 % erhöht werden. Das Ergebnis ist aber "1010" statt 11. Was ist falsch?',
      buggyCode:
`function Price({ amount }) {
  const increased = amount * 1.1;
  return <span>{increased}€</span>;
}

// Aufruf: <Price amount="10" />`,
      hint: 'Was passiert, wenn eine Zahl-Operation mit einem String-Wert durchgeführt wird?',
      explanation:
        '"10" * 1.1 ergibt zwar 11 (JS konvertiert den String implizit), aber der Fehler steckt im Aufruf: amount="10" übergibt einen String. Richtig: amount={10} – ohne Anführungszeichen werden JS-Ausdrücke übergeben.',
      tests: [
        { label: 'amount wird als Zahl übergeben', check: c => /amount=\{10\}/.test(c) },
      ],
    },
    {
      id: 3,
      title: 'Children werden nicht gerendert',
      category: 'react',
      description:
        'Die Box-Komponente soll ihren Inhalt anzeigen. Die Seite bleibt aber leer. Warum?',
      buggyCode:
`function Box({ title }) {
  return (
    <div className="box">
      <h3>{title}</h3>
    </div>
  );
}

// Aufruf:
// <Box title="Info">
//   <p>Wichtiger Hinweis!</p>
// </Box>`,
      hint: 'Es gibt eine spezielle Prop für Kinderelemente.',
      explanation:
        'Inhalte zwischen öffnendem und schließendem Tag werden als children-Prop übergeben. Ohne {children} in der Komponente werden sie ignoriert.',
      tests: [
        { label: 'children wird verwendet', check: c => /children/.test(c) },
        { label: 'children wird gerendert',  check: c => /\{children\}/.test(c) },
      ],
    },
  ],
};

// ── Kapitel 3: useState & Inputs ──────────────────────────────────────────────
export const bugChapter3 = {
  title: '24.3 · useState & Inputs',
  exercises: [
    {
      id: 1,
      title: 'State wird direkt mutiert',
      category: 'react',
      description:
        'Der Zähler soll bei jedem Klick hochzählen. Er bleibt aber immer auf 0. Was ist das Problem?',
      buggyCode:
`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    count = count + 1;  // direkte Mutation!
  }

  return (
    <>
      <p>Zähler: {count}</p>
      <button onClick={increment}>+1</button>
    </>
  );
}`,
      hint: 'In React darf State nie direkt verändert werden.',
      explanation:
        'count ist eine const-Variable und darf nicht direkt geändert werden. React erkennt State-Änderungen nur über die Setter-Funktion: setCount(count + 1).',
      tests: [
        { label: 'setCount wird aufgerufen',    check: c => /setCount/.test(c) },
        { label: 'count wird nicht direkt geändert', check: c => !/count\s*=\s*count/.test(c) },
      ],
    },
    {
      id: 2,
      title: 'Uncontrolled Input',
      category: 'react',
      description:
        'Das Eingabefeld soll den Namen im State speichern. Die Anzeige unter dem Input aktualisiert sich aber nicht. Was fehlt?',
      buggyCode:
`import { useState } from 'react';

function NameInput() {
  const [name, setName] = useState('');

  return (
    <>
      <input type="text" placeholder="Dein Name" />
      <p>Hallo, {name}!</p>
    </>
  );
}`,
      hint: 'Damit React vom Input-Wert weiß, muss man zwei Dinge angeben.',
      explanation:
        'Ein "Controlled Input" braucht value={name} und onChange={e => setName(e.target.value)}. Ohne value weiß React nicht, was im Input steht.',
      tests: [
        { label: 'value={name} vorhanden',                    check: c => /value=\{name\}/.test(c) },
        { label: 'onChange mit setName vorhanden',            check: c => /onChange/.test(c) && /setName/.test(c) },
      ],
    },
    {
      id: 3,
      title: 'useState falsch initialisiert',
      category: 'react',
      description:
        'Die Einkaufsliste soll Items per Klick hinzufügen. Beim Klick erscheint aber ein TypeError. Was ist falsch?',
      buggyCode:
`import { useState } from 'react';

function ShoppingList() {
  const [items, setItems] = useState();  // kein Startwert!

  function addItem() {
    setItems([...items, 'Neues Item']);
  }

  return (
    <>
      <button onClick={addItem}>Hinzufügen</button>
      <ul>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>
    </>
  );
}`,
      hint: 'Spread und .map() funktionieren nur auf Arrays. Ist items immer ein Array?',
      explanation:
        'useState() ohne Argument → items ist undefined. [...undefined] und undefined.map() werfen einen TypeError. Richtig: useState([]) – leeres Array als Startwert.',
      tests: [
        { label: 'useState([]) als Startwert', check: c => /useState\(\[\]\)/.test(c) },
      ],
    },
  ],
};

// ── Kapitel 4: Rendering & Listen ─────────────────────────────────────────────
export const bugChapter4 = {
  title: '24.4 · Rendering & Listen',
  exercises: [
    {
      id: 1,
      title: 'Fehlender Key in Liste',
      category: 'react',
      description:
        'Die Produktliste läuft, gibt aber eine Konsolen-Warnung aus. Welche Prop fehlt?',
      buggyCode:
`function ProductList({ products }) {
  return (
    <ul>
      {products.map(product => (
        <li>{product.name} – {product.price}€</li>
      ))}
    </ul>
  );
}`,
      hint: 'React braucht bei Listen eine eindeutige Identifikation für jedes Element.',
      explanation:
        'React benötigt bei dynamisch gerenderten Listen ein key-Prop auf dem äußersten Element. Es hilft React, Änderungen effizient zu erkennen. Gut: key={product.id}.',
      tests: [
        { label: 'key-Prop auf <li> vorhanden',      check: c => /key=/.test(c) },
        { label: 'key nutzt eine eindeutige ID',      check: c => /key=\{.*\.id\}|key=\{.*id.*\}/.test(c) },
      ],
    },
    {
      id: 2,
      title: 'Bedingtes Rendering – falsy value',
      category: 'react',
      description:
        'Wenn count 0 ist, soll "Kein Eintrag" erscheinen. Stattdessen wird "0" angezeigt. Warum?',
      buggyCode:
`function Counter({ count }) {
  return (
    <div>
      {count && <span>Anzahl: {count}</span>}
      {!count && <span>Kein Eintrag</span>}
    </div>
  );
}`,
      hint: 'Was passiert, wenn count den Wert 0 hat und man {count && ...} schreibt?',
      explanation:
        'In JavaScript ist 0 ein falsy Wert. JSX rendert aber primitive Zahlen – also wird "0" tatsächlich ausgegeben. Besser: {count > 0 && ...} oder den Ternary-Operator verwenden.',
      tests: [
        { label: 'count > 0 oder Ternary verwendet', check: c => /count\s*>\s*0|count\s*===\s*0|\?/.test(c) },
      ],
    },
    {
      id: 3,
      title: 'Array-Mutation statt Spread',
      category: 'react',
      description:
        'Ein neues Item soll der Liste hinzugefügt werden und die Ansicht soll sich aktualisieren. Es passiert aber nichts. Warum?',
      buggyCode:
`import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState(['Lernen', 'Üben']);

  function addTodo() {
    todos.push('Neuer Eintrag');  // Mutation!
    setTodos(todos);
  }

  return (
    <>
      <button onClick={addTodo}>Hinzufügen</button>
      <ul>{todos.map((t, i) => <li key={i}>{t}</li>)}</ul>
    </>
  );
}`,
      hint: 'React erkennt State-Änderungen nur, wenn ein neues Array-Objekt übergeben wird.',
      explanation:
        'Array.push() mutiert das bestehende Array. setTodos(todos) übergibt danach noch die gleiche Referenz – React erkennt keine Änderung, kein Re-Render. Richtig: setTodos([...todos, \'Neuer Eintrag\'])',
      tests: [
        { label: 'Spread-Operator [...todos, ...] wird verwendet', check: c => /\[\s*\.\.\.todos/.test(c) },
        { label: 'push() wird nicht mehr verwendet',              check: c => !/\.push\(/.test(c) },
      ],
    },
  ],
};

// ── Kapitel 5–8: Web JavaScript ───────────────────────────────────────────────
export const bugChapter5 = {
  title: '23.1 · JS Fundamentals',
  exercises: [
    {
      id: 1,
      title: 'var statt const/let',
      category: 'js',
      description:
        'Die Funktion soll den Preis mit 19% MwSt berechnen. Das Ergebnis ist aber falsch. Finde den Bug.',
      buggyCode:
`function calculatePrice(net) {
  var tax = 19;
  var gross = net + (net / 100 * tax);
  tax = 21;  // Aus versehen überschrieben!
  return gross;
}

console.log(calculatePrice(100)); // Erwartet: 119`,
      hint: 'Welches Schlüsselwort verhindert versehentliche Neu-Zuweisung?',
      explanation:
        'Mit const kann tax nicht mehr überschrieben werden. Der Fehler wäre sofort sichtbar. var erlaubt beliebige Neu-Zuweisung und ist daher fehleranfälliger.',
      tests: [
        { label: 'const tax verwendet',        check: c => /const\s+tax/.test(c) },
        { label: 'Überschreibung von tax fehlt', check: c => !/tax\s*=\s*21/.test(c) },
      ],
    },
    {
      id: 2,
      title: 'Falscher Vergleichsoperator',
      category: 'js',
      description:
        'Die Funktion soll prüfen ob jemand volljährig ist. Für age=18 gibt sie false zurück. Was ist falsch?',
      buggyCode:
`function isAdult(age) {
  if (age = 18) {  // Bug!
    return true;
  }
  return age > 18;
}

console.log(isAdult(17)); // Erwartet: false
console.log(isAdult(18)); // Erwartet: true`,
      hint: 'Was ist der Unterschied zwischen = und ===?',
      explanation:
        'age = 18 ist eine Zuweisung, keine Vergleich. Sie setzt age auf 18 und gibt 18 zurück (truthy) → immer true. Richtig: age >= 18 oder age === 18.',
      tests: [
        { label: 'Vergleichsoperator >= oder === verwendet', check: c => /age\s*>=\s*18|age\s*===\s*18/.test(c) },
        { label: 'Keine Zuweisung in if-Bedingung',         check: c => !/if\s*\(\s*age\s*=[^=]/.test(c) },
      ],
    },
    {
      id: 3,
      title: 'typeof-Prüfung fehlt',
      category: 'js',
      description:
        'Die Funktion soll zwei Zahlen addieren, aber bei "2" + 3 gibt sie "23" zurück statt 5. Behebe das.',
      buggyCode:
`function add(a, b) {
  return a + b;
}

console.log(add("2", 3));  // Gibt "23" statt 5`,
      hint: 'Überprüfe den Typ der Eingaben und konvertiere sie wenn nötig.',
      explanation:
        'In JS ist "2" + 3 = "23" (String-Konkatenation). Die Funktion muss die Eingaben zuerst in Zahlen umwandeln: Number(a) + Number(b) oder parseFloat(a) + parseFloat(b).',
      tests: [
        { label: 'Number() oder parseFloat() verwendet', check: c => /Number\s*\(|parseFloat\s*\(|parseInt\s*\(/.test(c) },
        { label: 'add("2", 3) ergibt 5',                check: c => { try { /* eslint-disable */ const fn = new Function('a','b', c.replace(/function add[^{]+{/,'').replace(/}\s*$/, '')); return fn('2',3) === 5; } catch { return false; } } },
      ],
    },
  ],
};

// ── Kapitel 6–8 (vereinfacht) ─────────────────────────────────────────────────
export const bugChapter6 = {
  title: '23.2 · Arrays & Objects',
  exercises: [
    {
      id: 1,
      title: 'splice statt filter',
      category: 'js',
      description:
        'Aus dem Array sollen alle geraden Zahlen entfernt werden. splice() ändert aber das Original. Nutze stattdessen filter().',
      buggyCode:
`const numbers = [1, 2, 3, 4, 5, 6];

// Entferne alle geraden Zahlen (mutiert Original!)
for (let i = numbers.length - 1; i >= 0; i--) {
  if (numbers[i] % 2 === 0) numbers.splice(i, 1);
}

console.log(numbers); // [1, 3, 5]`,
      hint: 'filter() erstellt ein neues Array ohne das Original zu verändern.',
      explanation:
        'splice() verändert das originale Array (Mutation). In React und modernem JS bevorzugt man unveränderliche Operationen. filter() gibt ein neues Array zurück: const odds = numbers.filter(n => n % 2 !== 0)',
      tests: [
        { label: 'filter() wird verwendet',       check: c => /\.filter\s*\(/.test(c) },
        { label: 'splice() wird nicht verwendet', check: c => !/\.splice\s*\(/.test(c) },
      ],
    },
    {
      id: 2,
      title: 'Object-Spread fehlt beim Update',
      category: 'js',
      description:
        'Der User soll eine neue E-Mail-Adresse bekommen. Alle anderen Felder sollen erhalten bleiben. Das funktioniert aber nicht.',
      buggyCode:
`const user = { name: 'Anna', email: 'alt@mail.de', role: 'admin' };

// Update der E-Mail – löscht alle anderen Felder!
const updated = { email: 'neu@mail.de' };

console.log(updated.name);  // undefined!`,
      hint: 'Wie kannst du ein Objekt kopieren und nur ein Feld ändern?',
      explanation:
        'Wenn man ein neues Objekt mit nur email erstellt, gehen name und role verloren. Mit Spread-Operator: const updated = { ...user, email: "neu@mail.de" } werden alle alten Felder übernommen und nur email überschrieben.',
      tests: [
        { label: 'Spread-Operator {...user} verwendet', check: c => /\{\s*\.\.\.user/.test(c) },
        { label: 'email wird überschrieben',           check: c => /email\s*:/.test(c) },
      ],
    },
    {
      id: 3,
      title: 'Fehlende Rückgabe in map()',
      category: 'js',
      description:
        'Jeder Preis soll um 10% erhöht werden. Das Ergebnis enthält aber nur undefineds.',
      buggyCode:
`const prices = [10, 20, 30, 40];

const increased = prices.map(price => {
  price * 1.1;  // return fehlt!
});

console.log(increased); // [undefined, undefined, ...]`,
      hint: 'Callback-Funktionen in map() müssen einen Wert zurückgeben.',
      explanation:
        'Bei einer Arrow Function mit {} muss return explizit angegeben werden. Oder Kurzform ohne {}: price => price * 1.1 (implicit return).',
      tests: [
        { label: 'return vorhanden oder implicit return', check: c => /return\s+price|price\s*=>\s*price/.test(c) },
        { label: 'Kein undefined im Ergebnis',           check: c => { try { const arr = [10,20,30,40]; const fn = new Function('prices', c + '\nreturn increased;'); const res = fn(arr); return Array.isArray(res) && res[0] === 11; } catch { return false; } } },
      ],
    },
  ],
};

export const bugChapter7 = {
  title: '23.3 · DOM & Events',
  exercises: [
    {
      id: 1,
      title: 'Script läuft vor DOM',
      category: 'js',
      description:
        'Das Script soll den Titel ändern, gibt aber "null" aus. Warum?',
      buggyCode:
`// index.html hat <h1 id="title">Hallo</h1>

const title = document.querySelector('#title');
console.log(title);  // null!
title.textContent = 'Willkommen';`,
      hint: 'Wann wird das Script ausgeführt – vor oder nach dem HTML?',
      explanation:
        'Script-Tags im <head> laufen bevor der Browser das HTML geparst hat – #title existiert noch nicht. Fix: Script am Ende von <body> platzieren oder DOMContentLoaded abwarten: document.addEventListener("DOMContentLoaded", () => { ... })',
      tests: [
        { label: 'DOMContentLoaded oder defer verwendet', check: c => /DOMContentLoaded|defer|<script[^>]+defer/.test(c) },
      ],
    },
    {
      id: 2,
      title: 'innerHTML statt textContent',
      category: 'js',
      description:
        'User-Input soll im Div angezeigt werden. Das ist aber eine Sicherheitslücke! Warum, und wie behebst du es?',
      buggyCode:
`const input = document.querySelector('#user-input');
const output = document.querySelector('#output');

input.addEventListener('input', () => {
  output.innerHTML = input.value;  // XSS-Risiko!
});`,
      hint: 'Was passiert wenn jemand <script>alert("XSS")</script> eingibt?',
      explanation:
        'innerHTML führt HTML-Tags aus – ein Angreifer könnte Schadcode einschleusen (XSS). Für User-Input immer textContent verwenden: output.textContent = input.value. Es rendert nur Text, kein HTML.',
      tests: [
        { label: 'textContent statt innerHTML', check: c => /textContent/.test(c) && !/innerHTML/.test(c) },
      ],
    },
    {
      id: 3,
      title: 'Event-Listener mehrfach registriert',
      category: 'js',
      description:
        'Beim ersten Klick passiert das Richtige. Aber jeder weitere Klick führt den Handler doppelt, dreifach usw. aus. Warum?',
      buggyCode:
`function setupButton() {
  const btn = document.querySelector('#btn');
  btn.addEventListener('click', () => {
    console.log('Klick!');
  });
}

// setupButton() wird bei jedem Render aufgerufen
setupButton();
setupButton();
setupButton();`,
      hint: 'Was passiert, wenn addEventListener() mehrfach aufgerufen wird?',
      explanation:
        'Jeder addEventListener()-Aufruf fügt einen NEUEN Handler hinzu. Drei Aufrufe = drei Handler = drei Logs pro Klick. Lösung: Event-Listener nur einmal registrieren, oder removeEventListener() vor dem Hinzufügen aufrufen.',
      tests: [
        { label: 'setupButton() nur einmal aufgerufen', check: c => (c.match(/setupButton\(\)/g) || []).length <= 1 },
      ],
    },
  ],
};

export const bugChapter8 = {
  title: '23.4 · Fetch & Async/Await',
  exercises: [
    {
      id: 1,
      title: 'fetch ohne await',
      category: 'js',
      description:
        'Die Funktion soll User-Daten holen und ausgeben. Sie gibt aber "[object Promise]" aus. Was fehlt?',
      buggyCode:
`async function getUser(id) {
  const response = fetch(\`/api/users/\${id}\`);
  const data = response.json();
  console.log(data.name);  // [object Promise]
}`,
      hint: 'fetch() und .json() sind beide asynchron und geben Promises zurück.',
      explanation:
        'fetch() gibt ein Promise zurück – ohne await bekommt man das ungelöste Promise. Gleiches gilt für .json(). Richtig: const response = await fetch(...); const data = await response.json();',
      tests: [
        { label: 'await vor fetch()',      check: c => /await\s+fetch/.test(c) },
        { label: 'await vor .json()',      check: c => /await\s+response\.json\(\)|await\s+\w+\.json\(\)/.test(c) },
      ],
    },
    {
      id: 2,
      title: 'Fehlende Fehlerbehandlung',
      category: 'js',
      description:
        'Die Funktion stürzt bei einem Netzwerkfehler ab. Baue eine Fehlerbehandlung ein.',
      buggyCode:
`async function loadData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}`,
      hint: 'Was passiert, wenn fetch() fehlschlägt oder die URL nicht erreichbar ist?',
      explanation:
        'Unbehandelte Promise-Fehler können die App zum Absturz bringen. Verwende try/catch: try { const res = await fetch(url); ... } catch (error) { console.error(error); }',
      tests: [
        { label: 'try/catch vorhanden',   check: c => /try\s*\{/.test(c) && /catch\s*\(/.test(c) },
      ],
    },
    {
      id: 3,
      title: 'HTTP-Fehler nicht geprüft',
      category: 'js',
      description:
        'fetch() wirft bei 404 oder 500 keinen Fehler – es gilt als Erfolg. Das Script merkt es aber nicht. Fix?',
      buggyCode:
`async function getPost(id) {
  const res = await fetch(\`/api/posts/\${id}\`);
  const data = await res.json();  // Kein Check ob ok!
  return data;
}`,
      hint: 'fetch() resolved auch bei HTTP-Fehler-Statuscodes wie 404 oder 500.',
      explanation:
        'fetch() rejected nur bei Netzwerkfehlern, nicht bei HTTP 4xx/5xx. Prüfe res.ok oder res.status: if (!res.ok) throw new Error(`HTTP error ${res.status}`);',
      tests: [
        { label: 'res.ok oder res.status wird geprüft', check: c => /res\.ok|res\.status|response\.ok|response\.status/.test(c) },
        { label: 'Fehler wird geworfen oder behandelt', check: c => /throw\s+new\s+Error|catch\s*\(/.test(c) },
      ],
    },
  ],
};

/* ══════════════════════════════════════════════════════════════
   22.1 – Webarchitektur & HTTP
══════════════════════════════════════════════════════════════ */
export const bugChapter9 = {
  title: '22.1 · Webarchitektur & HTTP',
  exercises: [
    {
      id: 1,
      title: 'Falscher HTTP-Method für Formular',
      category: 'html',
      description:
        'Dieses Formular soll Login-Daten sicher ans Backend schicken. ' +
        'Mit der aktuellen Methode landen Passwörter aber in der URL! Fix?',
      buggyCode:
`<form action="/login" method="get">
  <label for="email">E-Mail:</label>
  <input type="email" id="email" name="email">

  <label for="password">Passwort:</label>
  <input type="password" id="password" name="password">

  <button type="submit">Einloggen</button>
</form>`,
      hint: 'Formulare mit sensiblen Daten sollen POST verwenden, nicht GET.',
      explanation:
        'GET hängt alle Formularfelder als Query-String an die URL an – Passwörter wären im Browser-Verlauf und Server-Log sichtbar. Für Login-Formulare immer method="post" verwenden.',
      tests: [
        { label: 'method="post" vorhanden', check: c => /method\s*=\s*["']post["']/i.test(c) },
        { label: 'Kein method="get" mehr', check: c => !/method\s*=\s*["']get["']/i.test(c) },
      ],
    },
    {
      id: 2,
      title: 'Fehlendes alt-Attribut',
      category: 'html',
      description:
        'Das Profilbild wird geladen, aber Screen-Reader und langsame Verbindungen ' +
        'bekommen keinen alternativen Text. Was fehlt?',
      buggyCode:
`<div class="profile">
  <img src="/images/avatar.jpg" class="avatar">
  <h2>Max Mustermann</h2>
  <p>Web-Entwickler aus München</p>
</div>`,
      hint: 'Jedes <img>-Element braucht ein alt-Attribut für Barrierefreiheit.',
      explanation:
        'Das alt-Attribut ist Pflicht für Barrierefreiheit (WCAG) und wird angezeigt wenn das Bild nicht lädt. Füge alt="Profilbild von Max Mustermann" (oder ähnlich) hinzu.',
      tests: [
        { label: 'alt-Attribut vorhanden', check: c => /alt\s*=\s*["'][^"']+["']/.test(c) },
        { label: 'alt ist nicht leer', check: c => !/alt\s*=\s*["']\s*["']/.test(c) },
      ],
    },
    {
      id: 3,
      title: 'Falsche URL-Konstruktion',
      category: 'js',
      description:
        'Die Funktion soll eine API-URL zusammenbauen, aber der Endpunkt ist falsch – ' +
        'es fehlt ein Trennzeichen. Was ist das Problem?',
      buggyCode:
`const BASE_URL = 'https://api.example.com';

function getUserUrl(userId) {
  return BASE_URL + 'users/' + userId;
}

console.log(getUserUrl(42));
// Ergibt: "https://api.example.comusers/42"`,
      hint: 'Zwischen BASE_URL und dem Pfad fehlt ein "/".',
      explanation:
        'BASE_URL endet ohne "/" und "users/" fängt ohne "/" an – zusammengeklebt ergibt das einen ungültigen Pfad. Fix: BASE_URL + "/users/" + userId, oder noch besser als Template-Literal: `${BASE_URL}/users/${userId}`.',
      tests: [
        { label: 'Trennzeichen "/" vorhanden', check: c => /BASE_URL\s*\+\s*['"`]\/|`\$\{BASE_URL\}\//.test(c) },
        { label: 'Kein direktes Zusammenkleben ohne "/"', check: c => !/BASE_URL\s*\+\s*['"`]users/.test(c) },
      ],
    },
  ],
};

/* ══════════════════════════════════════════════════════════════
   22.2 – HTML: Struktur, Semantik & Formulare
══════════════════════════════════════════════════════════════ */
export const bugChapter10 = {
  title: '22.2 · HTML: Struktur, Semantik & Formulare',
  exercises: [
    {
      id: 1,
      title: 'Nicht-semantisches Layout',
      category: 'html',
      description:
        'Die Navigationsleiste wird mit einem generischen <code>&lt;div&gt;</code> gebaut. ' +
        'Screenreader und Suchmaschinen erkennen sie nicht als Navigation. Welches semantische Element soll hier stehen?',
      buggyCode:
`<div class="navigation">
  <a href="/">Start</a>
  <a href="/ueber-uns">Über uns</a>
  <a href="/kontakt">Kontakt</a>
</div>

<div class="main-content">
  <h1>Willkommen!</h1>
</div>`,
      hint: 'HTML5 hat spezielle Elemente für Navigation und Hauptinhalt.',
      explanation:
        'Verwende <nav> für die Navigationsleiste und <main> für den Hauptinhalt. Diese semantischen Elemente helfen Screen-Readern und verbessern das SEO.',
      tests: [
        { label: '<nav> statt <div class="navigation">', check: c => /<nav[\s>]/.test(c) },
        { label: '<main> statt <div class="main-content">', check: c => /<main[\s>]/.test(c) },
      ],
    },
    {
      id: 2,
      title: 'Fehlende label-Verknüpfung',
      category: 'html',
      description:
        'Das Formular hat Labels, aber Klicks auf den Label-Text fokussieren das Inputfeld nicht. ' +
        'Außerdem können Screen-Reader das Label nicht dem Input zuordnen. Was fehlt?',
      buggyCode:
`<form>
  <label>Name</label>
  <input type="text" name="name" placeholder="Dein Name">

  <label>E-Mail</label>
  <input type="email" name="email" placeholder="deine@email.de">

  <button type="submit">Absenden</button>
</form>`,
      hint: 'Labels müssen über for/id oder durch Verschachtelung mit dem Input verknüpft sein.',
      explanation:
        'Jedes <label> braucht ein for-Attribut, dessen Wert mit der id des dazugehörigen Inputs übereinstimmt: <label for="name">Name</label> <input id="name" ...>. Alternativ: Input in das Label verschachteln.',
      tests: [
        { label: 'for-Attribut im Label vorhanden', check: c => /for\s*=\s*["'][^"']+["']/.test(c) },
        { label: 'id-Attribut im Input vorhanden', check: c => /id\s*=\s*["'][^"']+["']/.test(c) },
      ],
    },
    {
      id: 3,
      title: 'Unclosed Tag verursacht Layout-Bruch',
      category: 'html',
      description:
        'Die Produktkarte sieht im Browser komplett falsch aus – Inhalt läuft aus dem Container heraus. ' +
        'Findest du den Fehler in der HTML-Struktur?',
      buggyCode:
`<div class="card">
  <img src="produkt.jpg" alt="Produktbild">
  <div class="card-body">
    <h3>Produkt A</h3>
    <p>Hochwertiger Artikel für den täglichen Einsatz.
    <span class="price">€ 29,99</span>
  </div>
  <button>In den Warenkorb</button>
</div>`,
      hint: 'Schau dir die <p>-Zeile genau an.',
      explanation:
        'Das <p>-Element wird nie geschlossen. Der Browser interpretiert dann alles Folgende als Inhalt des Paragraphen – einschließlich des <span> und des </div>. Fix: </p> nach dem Text einfügen.',
      tests: [
        { label: '</p> vorhanden', check: c => /<\/p>/.test(c) },
        { label: 'Tag-Reihenfolge korrekt', check: c => c.indexOf('</p>') < c.indexOf('</div>') },
      ],
    },
  ],
};

/* ══════════════════════════════════════════════════════════════
   22.3 – CSS Grundlagen: Styling, Selektoren & Debugging
══════════════════════════════════════════════════════════════ */
export const bugChapter11 = {
  title: '22.3 · CSS Grundlagen: Selektoren & Debugging',
  exercises: [
    {
      id: 1,
      title: 'Falscher Selektor: Klasse vs. ID',
      category: 'css',
      description:
        'Der Button soll blau werden, aber das CSS greift nicht. ' +
        'Im HTML steht <code>&lt;button class="btn-primary"&gt;</code>. Was stimmt am Selektor nicht?',
      buggyCode:
`#btn-primary {
  background-color: #3b82f6;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}`,
      hint: '#-Selektor ist für IDs, .-Selektor für Klassen.',
      explanation:
        'Im HTML wird class="btn-primary" verwendet – das ist eine Klasse. Der CSS-Selektor muss deshalb .btn-primary lauten (mit Punkt), nicht #btn-primary (mit Raute, das wäre eine ID).',
      tests: [
        { label: '.btn-primary verwendet (Klassen-Selektor)', check: c => /\.btn-primary/.test(c) },
        { label: '#btn-primary entfernt', check: c => !/#btn-primary/.test(c) },
      ],
    },
    {
      id: 2,
      title: 'Fehlende Einheit bei CSS-Wert',
      category: 'css',
      description:
        'Die Box soll 200px breit sein, aber im Browser hat sie Breite 0. ' +
        'Was ist falsch an der width-Deklaration?',
      buggyCode:
`.box {
  width: 200;
  height: 150px;
  background-color: #e2e8f0;
  border: 1px solid #cbd5e1;
}`,
      hint: 'CSS-Längenangaben brauchen immer eine Einheit – außer bei Wert 0.',
      explanation:
        'width: 200 ist eine ungültige CSS-Deklaration – ohne Einheit wird sie ignoriert. Korrekt: width: 200px, width: 200%, oder width: 12.5rem etc. Nur bei Wert 0 darf die Einheit fehlen.',
      tests: [
        { label: 'width hat eine Einheit', check: c => /width\s*:\s*\d+(\.\d+)?(px|rem|em|%|vw)/.test(c) },
        { label: 'Kein "width: 200;" ohne Einheit', check: c => !/width\s*:\s*200\s*;/.test(c) },
      ],
    },
    {
      id: 3,
      title: 'Spezifitäts-Konflikt',
      category: 'css',
      description:
        'Der Text im Paragraph soll rot sein, aber er bleibt schwarz. ' +
        'Das allgemeine <code>p</code>-Styling überschreibt die spezifische Regel nicht – oder umgekehrt? Finde das Problem.',
      buggyCode:
`p {
  color: red;
}

#content .article p {
  color: black;
}

/* Dieser Paragraph soll rot sein: */
/* <div id="content"><div class="article"><p>Text</p></div></div> */`,
      hint: 'Welche Regel hat höhere Spezifität? ID + Klasse + Element schlägt immer ein einzelnes Element.',
      explanation:
        '#content .article p hat Spezifität (1,1,1) – sehr hoch durch die ID. Die Regel color:red mit nur p hat (0,0,1) und verliert. Lösungen: die spezifischere Regel für red verwenden, oder !important (als letztes Mittel), oder die Struktur anpassen.',
      tests: [
        { label: 'Spezifischere Regel für rot', check: c => /#content.*color\s*:\s*red|\.article.*color\s*:\s*red|p.*color\s*:\s*red\s*!important/.test(c) },
        { label: 'color: red vorhanden', check: c => /color\s*:\s*red/.test(c) },
      ],
    },
  ],
};

/* ══════════════════════════════════════════════════════════════
   22.4 – CSS Layout & Responsive Design
══════════════════════════════════════════════════════════════ */
export const bugChapter12 = {
  title: '22.4 · CSS Layout & Responsive Design',
  exercises: [
    {
      id: 1,
      title: 'Falsche Flex-Richtung',
      category: 'css',
      description:
        'Die Navigations-Links sollen nebeneinander stehen, aber sie werden untereinander angezeigt. ' +
        'Was fehlt oder ist falsch?',
      buggyCode:
`.navbar {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px 24px;
  background: #1e293b;
}

.navbar a {
  color: white;
  text-decoration: none;
}`,
      hint: 'flex-direction bestimmt die Hauptachse. "row" = waagerecht, "column" = senkrecht.',
      explanation:
        'flex-direction: column stapelt die Elemente untereinander. Für nebeneinander muss es flex-direction: row heißen (das ist auch der Standardwert – die Zeile kann auch ganz weggelassen werden).',
      tests: [
        { label: 'flex-direction: row oder kein column', check: c => /flex-direction\s*:\s*row/.test(c) || !/flex-direction\s*:\s*column/.test(c) },
        { label: 'display: flex vorhanden', check: c => /display\s*:\s*flex/.test(c) },
      ],
    },
    {
      id: 2,
      title: 'Media Query ohne schließende Klammer',
      category: 'css',
      description:
        'Ab 768px soll das Layout zweispaltig werden, aber der Breakpoint greift nie. ' +
        'Schau dir die Media Query Syntax genau an.',
      buggyCode:
`/* Mobile: einspaltig */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

/* Ab 768px: zweispaltig */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
/* fehlende schließende Klammer! */`,
      hint: 'Eine @media-Regel braucht zwei schließende geschweifte Klammern.',
      explanation:
        'Der @media-Block schließt nie – die innere Regel } schließt .grid, aber der @media-Block selbst braucht eine weitere } am Ende. Ohne sie ist der CSS-Block syntaktisch falsch und wird vom Browser ignoriert.',
      tests: [
        { label: 'Zwei schließende } am Ende', check: c => {
          const closing = (c.match(/}/g) || []).length;
          const opening = (c.match(/{/g) || []).length;
          return opening === closing;
        }},
        { label: '@media vorhanden', check: c => /@media/.test(c) },
      ],
    },
    {
      id: 3,
      title: 'position: absolute ohne positioned Parent',
      category: 'css',
      description:
        'Der Badge soll oben-rechts in der Karte erscheinen, springt aber ans Fenster-Eck. ' +
        'Was fehlt am Parent-Element?',
      buggyCode:
`.card {
  width: 200px;
  padding: 16px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

.badge {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #ef4444;
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
}`,
      hint: 'position: absolute sucht den nächsten Vorfahren mit einer position-Angabe (nicht static).',
      explanation:
        'Absolut positionierte Elemente richten sich am nächsten Vorfahren aus, der position: relative, absolute, fixed oder sticky hat. Da .card kein position hat, springt der Badge ans Viewport-Eck. Fix: position: relative zu .card hinzufügen.',
      tests: [
        { label: '.card hat position: relative', check: c => /\.card\s*\{[^}]*position\s*:\s*relative/.test(c) },
        { label: '.badge hat position: absolute', check: c => /\.badge\s*\{[^}]*position\s*:\s*absolute/.test(c) },
      ],
    },
  ],
};

/* ══════════════════════════════════════════════════════════════
   22.5 – Portfolio-Projekt
══════════════════════════════════════════════════════════════ */
export const bugChapter13 = {
  title: '22.5 · Portfolio-Projekt',
  exercises: [
    {
      id: 1,
      title: 'Viewport Meta-Tag fehlt',
      category: 'html',
      description:
        'Das Portfolio sieht auf dem Desktop super aus, aber auf dem Handy ist alles winzig klein ' +
        'und die Media Queries greifen nicht. Was fehlt im <code>&lt;head&gt;</code>?',
      buggyCode:
`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Mein Portfolio</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Hallo, ich bin Max</h1>
</body>
</html>`,
      hint: 'Für Responsive Design braucht jede Seite einen bestimmten Meta-Tag im Head.',
      explanation:
        'Ohne <meta name="viewport" content="width=device-width, initial-scale=1.0"> zeigt der mobile Browser die Seite herausgezoomt an (als ob das Display 980px breit wäre). Media Queries richten sich dann nach der falschen Breite. Dieser Tag ist ein Muss für jede responsive Seite.',
      tests: [
        { label: 'viewport meta-tag vorhanden', check: c => /name\s*=\s*["']viewport["']/.test(c) },
        { label: 'width=device-width enthalten', check: c => /width=device-width/.test(c) },
      ],
    },
    {
      id: 2,
      title: 'CSS-Variable nicht definiert',
      category: 'css',
      description:
        'Die Primärfarbe soll per CSS-Variable gesetzt werden, aber Buttons bleiben farblos. ' +
        'Was wurde vergessen?',
      buggyCode:
`/* Buttons und Links nutzen die Primärfarbe */
.btn {
  background-color: var(--color-primary);
  color: white;
  padding: 10px 24px;
  border-radius: 6px;
  border: none;
}

a {
  color: var(--color-primary);
}`,
      hint: 'CSS-Variablen müssen in einem Selektor definiert werden – meistens in :root.',
      explanation:
        'var(--color-primary) verweist auf eine Custom Property, die nirgends definiert ist. Deshalb fällt der Browser auf transparent/initial zurück. Füge am Anfang einen :root-Block ein: :root { --color-primary: #3b82f6; }',
      tests: [
        { label: ':root Block vorhanden', check: c => /:root\s*\{/.test(c) },
        { label: '--color-primary definiert', check: c => /--color-primary\s*:/.test(c) },
      ],
    },
    {
      id: 3,
      title: 'Kontaktformular: action fehlt',
      category: 'html',
      description:
        'Das Kontaktformular sieht gut aus, aber beim Absenden passiert nichts – ' +
        'die Daten landen nirgends. Was fehlt am Formular-Element?',
      buggyCode:
`<form method="post">
  <label for="name">Name</label>
  <input type="text" id="name" name="name" required>

  <label for="msg">Nachricht</label>
  <textarea id="msg" name="message" rows="5" required></textarea>

  <button type="submit">Senden</button>
</form>`,
      hint: 'Formulare brauchen ein Ziel – wohin sollen die Daten geschickt werden?',
      explanation:
        'Das action-Attribut fehlt. Ohne action schickt der Browser die Daten an die aktuelle URL – das ist selten gewollt. Für ein Portfolio-Kontaktformular wäre z.B. ein Dienst wie Formspree üblich: action="https://formspree.io/f/deinCode".',
      tests: [
        { label: 'action-Attribut vorhanden', check: c => /action\s*=\s*["'][^"']+["']/.test(c) },
        { label: 'method="post" behalten', check: c => /method\s*=\s*["']post["']/i.test(c) },
      ],
    },
  ],
};

/* ══════════════════════════════════════════════════════════════
   23.5 – JavaScript Mini-App (Freitag)
   Synthese-Bugs: alles aus der Woche zusammen
══════════════════════════════════════════════════════════════ */
export const bugChapter14 = {
  title: '23.5 · JS Mini-App – Fehler-Simulator',
  exercises: [
    {
      id: 1,
      title: 'await vergessen',
      category: 'js',
      description:
        'Die loadData()-Funktion soll Nutzer von einer API laden und anzeigen. ' +
        'Aber statt der Daten erscheint "[object Promise]" in der Liste. Warum?',
      buggyCode:
`async function loadData() {
  const res  = fetch('https://randomuser.me/api/?results=5');
  const data = res.json();

  data.results.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.name.first;
    list.appendChild(li);
  });
}`,
      hint: 'fetch() und .json() sind beide asynchron – was muss vor beiden stehen?',
      explanation:
        'Ohne await gibt fetch() ein Promise-Objekt zurück, kein echtes Response-Objekt. Das gleiche gilt für .json(). Beide Zeilen brauchen await: const res = await fetch(...) und const data = await res.json().',
      tests: [
        { label: 'await fetch() vorhanden',  check: c => /await\s+fetch\(/.test(c) },
        { label: 'await res.json() vorhanden', check: c => /await\s+\w+\.json\(\)/.test(c) },
      ],
    },
    {
      id: 2,
      title: 'Array direkt mutiert',
      category: 'js',
      description:
        'Die App soll erlauben, User aus der Liste zu entfernen. ' +
        'Nach dem Klick auf "Entfernen" verschwindet der User aber nicht aus der Anzeige. ' +
        'Was ist falsch an der removeUser-Funktion?',
      buggyCode:
`let users = [
  { id: 1, name: 'Anna' },
  { id: 2, name: 'Ben'  },
  { id: 3, name: 'Clara'},
];

function removeUser(id) {
  const index = users.findIndex(u => u.id === id);
  users.splice(index, 1);   // direktes Mutieren!
  render();
}

function render() {
  list.innerHTML = users.map(u =>
    \`<li>\${u.name} <button onclick="removeUser(\${u.id})">×</button></li>\`
  ).join('');
}`,
      hint: 'splice() verändert das Original-Array direkt. In modernem JS soll State immutabel sein.',
      explanation:
        'splice() mutiert das Array an Ort und Stelle. Das funktioniert hier zufällig, ist aber eine schlechte Praxis (führt zu Bugs bei reaktiven Frameworks). Besser: users = users.filter(u => u.id !== id) – das erzeugt ein neues Array ohne das gelöschte Element.',
      tests: [
        { label: 'filter() statt splice()', check: c => /\.filter\(/.test(c) && !/\.splice\(/.test(c) },
        { label: 'users wird neu zugewiesen', check: c => /users\s*=\s*users\.filter/.test(c) },
      ],
    },
    {
      id: 3,
      title: 'Event Listener falsch angehängt',
      category: 'js',
      description:
        'Der "Laden"-Button soll beim Klick Daten abrufen. ' +
        'Aber nichts passiert wenn man ihn anklickt. Findest du den Fehler?',
      buggyCode:
`const btn = document.getElementById('loadBtn');

async function loadData() {
  const res  = await fetch('https://api.example.com/data');
  const data = await res.json();
  console.log(data);
}

btn.addEventListener('click', loadData());`,
      hint: 'Wird loadData als Funktion übergeben, oder als Ergebnis eines Funktionsaufrufs?',
      explanation:
        'loadData() ruft die Funktion sofort beim Registrieren des Listeners auf und übergibt das Ergebnis (ein Promise) als Callback. So wird die Funktion beim Klick nie ausgeführt. Richtig: btn.addEventListener("click", loadData) – ohne die Klammern, damit loadData als Referenz übergeben wird.',
      tests: [
        { label: 'loadData ohne () als Callback', check: c => /addEventListener\(\s*['"]click['"]\s*,\s*loadData\s*\)/.test(c) },
        { label: 'Keine sofortige Ausführung im Listener', check: c => !/addEventListener\(\s*['"]click['"]\s*,\s*loadData\(\)/.test(c) },
      ],
    },
  ],
};

/* ══════════════════════════════════════════════════════════════
   24.5 – React Mini-App (Freitag)
   Synthese-Bugs: alles aus der React-Woche zusammen
══════════════════════════════════════════════════════════════ */
export const bugChapter15 = {
  title: '24.5 · React Mini-App – Fehler-Simulator',
  exercises: [
    {
      id: 1,
      title: 'State direkt mutiert (Array)',
      category: 'react',
      description:
        'Die Todo-App soll neue Einträge hinzufügen. Nach dem Absenden des Formulars ' +
        'erscheint der neue Eintrag aber nicht in der Liste – obwohl keine Fehlermeldung kommt. Warum?',
      buggyCode:
`function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  function addTodo() {
    todos.push({ id: Date.now(), text: input });
    setTodos(todos);
    setInput('');
  }

  return (
    <>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTodo}>Hinzufügen</button>
      <ul>{todos.map(t => <li key={t.id}>{t.text}</li>)}</ul>
    </>
  );
}`,
      hint: 'React re-rendert nur, wenn sich die State-Referenz ändert – nicht bei Mutation des Originals.',
      explanation:
        'todos.push() mutiert das existierende Array direkt. setTodos(todos) übergibt dieselbe Array-Referenz – React erkennt keine Änderung und überspringt den Re-Render. Fix: setTodos([...todos, { id: Date.now(), text: input }]) – Spread erzeugt ein neues Array-Objekt.',
      tests: [
        { label: 'Spread-Operator [...todos, ...] verwendet', check: c => /\[\s*\.\.\.\s*todos/.test(c) },
        { label: 'Kein .push() auf todos', check: c => !/todos\.push\(/.test(c) },
      ],
    },
    {
      id: 2,
      title: 'Fehlendes key-Prop',
      category: 'react',
      description:
        'Die Komponente rendert eine Produktliste, aber in der Konsole erscheint eine Warnung: ' +
        '"Each child in a list should have a unique key prop." Wo fehlt das key?',
      buggyCode:
`function ProductList({ products }) {
  return (
    <ul>
      {products.map(product => (
        <li>
          <strong>{product.name}</strong>
          <span> – {product.price} €</span>
        </li>
      ))}
    </ul>
  );
}`,
      hint: 'Das key-Prop gehört auf das äußerste Element, das .map() zurückgibt.',
      explanation:
        'React braucht key auf jedem Element einer gemappten Liste, um Änderungen effizient zu erkennen. Das key muss eindeutig unter Geschwister-Elementen sein. Füge key={product.id} (oder einen anderen eindeutigen Wert) zum <li>-Element hinzu.',
      tests: [
        { label: 'key-Prop auf <li> vorhanden', check: c => /<li\s[^>]*key\s*=/.test(c) },
        { label: 'key nutzt eindeutigen Wert (id, name...)', check: c => /key=\{product\.(id|name)\}|key=\{`/.test(c) },
      ],
    },
    {
      id: 3,
      title: 'useEffect Dependency Array fehlt',
      category: 'react',
      description:
        'Die Komponente soll Daten einmalig beim Mounten laden. ' +
        'Stattdessen läuft der Fetch in einer Endlosschleife und der Browser friert ein. Was ist das Problem?',
      buggyCode:
`function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => setUser(data));
  });

  if (!user) return <p>Lädt...</p>;
  return <h2>{user.name}</h2>;
}`,
      hint: 'useEffect ohne zweites Argument läuft nach jedem Render – auch nach dem, den setUser() ausgelöst hat.',
      explanation:
        'Kein Dependency Array → useEffect läuft nach jedem Render. setUser() löst einen Re-Render aus → useEffect läuft wieder → Endlosschleife. Fix: Füge [userId] als Dependency Array hinzu: useEffect(() => { ... }, [userId]). So läuft der Effekt nur, wenn sich userId ändert (und beim ersten Render).',
      tests: [
        { label: 'Dependency Array vorhanden', check: c => /useEffect\([\s\S]*?,\s*\[/.test(c) },
        { label: 'userId als Dependency', check: c => /useEffect\([\s\S]*?,\s*\[\s*userId\s*\]/.test(c) },
      ],
    },
  ],
};

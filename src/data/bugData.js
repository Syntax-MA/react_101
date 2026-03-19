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

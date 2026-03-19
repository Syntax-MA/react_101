import './CodeDiff.css';

/**
 * CodeDiff – zeigt zwei Code-Versionen mit Diff-Highlighting
 *
 * Props:
 *   before   – Code-String "vorher" (optional)
 *   after    – Code-String "nachher"
 *   filename – Dateiname im Header (optional)
 *   lang     – Sprache (nur für Label, optional)
 *
 * Alternativ: diff-String direkt übergeben via:
 *   diff     – Text mit Zeilen die mit + oder - beginnen
 *
 * Verwendung mit before/after (automatisches diff):
 *   <CodeDiff
 *     filename="App.jsx"
 *     before={`function App() {\n  return <div>Hallo</div>;\n}`}
 *     after={`function App() {\n  const name = 'Welt';\n  return <div>Hallo {name}</div>;\n}`}
 *   />
 *
 * Verwendung mit diff-String:
 *   <CodeDiff filename="App.jsx" diff={`
 *  function App() {
 * -  return <div>Hallo</div>;
 * +  const name = 'Welt';
 * +  return <div>Hallo {name}</div>;
 *  }
 *   `} />
 */
export default function CodeDiff({ before, after, diff, filename, lang = 'jsx' }) {
  // Diff generieren wenn before+after gegeben
  const lines = diff ? parseDiff(diff) : generateDiff(before ?? '', after ?? '');

  const added   = lines.filter(l => l.type === 'add').length;
  const removed = lines.filter(l => l.type === 'remove').length;

  return (
    <div className="codediff">
      <div className="codediff__header">
        <span className="codediff__filename">{filename || `diff.${lang}`}</span>
        <span className="codediff__stats">
          {added   > 0 && <span className="codediff__stat codediff__stat--add">+{added}</span>}
          {removed > 0 && <span className="codediff__stat codediff__stat--rem">−{removed}</span>}
        </span>
      </div>
      <div className="codediff__body">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`codediff__line codediff__line--${line.type}`}
          >
            <span className="codediff__gutter" aria-hidden="true">
              {line.type === 'add' ? '+' : line.type === 'remove' ? '−' : ' '}
            </span>
            <span className="codediff__code">{line.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Hilfsfunktionen ── */

/** Parst einen diff-String (Zeilen mit +/-/ ) in Line-Objekte */
function parseDiff(diffStr) {
  return diffStr
    .split('\n')
    // Erste und letzte Leerzeile entfernen
    .filter((line, i, arr) => !(i === 0 && line.trim() === '') && !(i === arr.length - 1 && line.trim() === ''))
    .map(line => {
      if (line.startsWith('+')) return { type: 'add',    text: line.slice(1) };
      if (line.startsWith('-')) return { type: 'remove', text: line.slice(1) };
      return { type: 'context', text: line.startsWith(' ') ? line.slice(1) : line };
    });
}

/** Einfaches LCS-basiertes Diff zwischen zwei Code-Strings */
function generateDiff(before, after) {
  const aLines = before.split('\n');
  const bLines = after.split('\n');

  // LCS-Diff (einfach, O(n*m))
  const lcs = computeLCS(aLines, bLines);
  const result = [];
  let ai = 0, bi = 0, li = 0;

  while (ai < aLines.length || bi < bLines.length) {
    if (ai < aLines.length && bi < bLines.length && li < lcs.length && aLines[ai] === lcs[li] && bLines[bi] === lcs[li]) {
      result.push({ type: 'context', text: aLines[ai] });
      ai++; bi++; li++;
    } else if (bi < bLines.length && (li >= lcs.length || bLines[bi] !== lcs[li])) {
      result.push({ type: 'add', text: bLines[bi] });
      bi++;
    } else {
      result.push({ type: 'remove', text: aLines[ai] });
      ai++;
    }
  }

  return result;
}

function computeLCS(a, b) {
  const m = a.length, n = b.length;
  // Zu große Diffs: einfach nach Gleichheit mappen
  if (m * n > 10000) {
    const bSet = new Set(b);
    return a.filter(l => bSet.has(l));
  }
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  const lcs = [];
  let i = m, j = n;
  while (i > 0 && j > 0) {
    if (a[i - 1] === b[j - 1]) { lcs.unshift(a[i - 1]); i--; j--; }
    else if (dp[i - 1][j] > dp[i][j - 1]) i--;
    else j--;
  }
  return lcs;
}

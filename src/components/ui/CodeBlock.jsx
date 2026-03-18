import './CodeBlock.css';

/**
 * CodeBlock – syntaxgefärbter Code-Bereich
 *
 * Props:
 *   filename  – Dateiname / Label links im Header (string)
 *   lang      – Sprachkürzel rechts im Header, z.B. "JSX", "bash" (string)
 *   children  – Code-Inhalt als JSX (nutze <span className="kw"> etc.)
 */
export default function CodeBlock({ filename = '', lang = '', children }) {
  return (
    <div className="code-block">
      <div className="code-header">
        <span className="code-filename">{filename}</span>
        {lang && <span className="code-lang">{lang}</span>}
      </div>
      <pre>{children}</pre>
    </div>
  );
}

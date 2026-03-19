import { useState, useRef, useEffect } from 'react';
import { glossar } from '../../data/glossarData';
import './GlossarTerm.css';

/**
 * GlossarTerm – klickbarer Fachbegriff mit Tooltip-Popup
 *
 * Props:
 *   term     – der angezeigte Begriff (muss in glossarData.js existieren)
 *   children – Anzeigetext (optional, fällt auf term zurück)
 */
export default function GlossarTerm({ term, children }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const definition = glossar[term];
  if (!definition) return <span>{children ?? term}</span>;

  // Schließen wenn außerhalb geklickt
  useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <span className="glossar-term" ref={ref}>
      <button
        className={`glossar-term__trigger${open ? ' glossar-term__trigger--open' : ''}`}
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-label={`Begriff: ${term}`}
      >
        {children ?? term}
        <span className="glossar-term__dot" aria-hidden="true" />
      </button>
      {open && (
        <span className="glossar-term__popup" role="tooltip">
          <span className="glossar-term__popup-title">{term}</span>
          <span className="glossar-term__popup-def">{definition}</span>
        </span>
      )}
    </span>
  );
}

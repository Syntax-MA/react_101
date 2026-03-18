import './Concept.css';

/**
 * Concept – farbige Infobox mit Akzentrand links
 *
 * Props:
 *   title   – Überschrift (string)
 *   color   – Akzentfarbe: 'react' | 'green' | 'yellow' | 'purple' | 'orange' (string)
 *   children – Inhalt (ReactNode)
 */
export default function Concept({ title, color = 'react', children }) {
  return (
    <div className={`concept concept--${color}`}>
      {title && <h4 className="concept-title">{title}</h4>}
      <div className="concept-body">{children}</div>
    </div>
  );
}

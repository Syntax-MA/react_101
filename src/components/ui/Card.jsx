import './Card.css';

/**
 * Card – einfache Inhaltskarte
 *
 * Props:
 *   icon     – Emoji / Icon oben (string, optional)
 *   title    – Kartenüberschrift (string, optional)
 *   children – Karteninhalt (ReactNode)
 */
export default function Card({ icon, title, children }) {
  return (
    <div className="card">
      {icon && <div className="card-icon">{icon}</div>}
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-body">{children}</div>
    </div>
  );
}

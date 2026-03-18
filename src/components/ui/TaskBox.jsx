import './TaskBox.css';

/**
 * TaskBox – grüne Aufgabenbox
 *
 * Props:
 *   title    – Aufgabentitel (string)
 *   time     – Zeitangabe, z.B. "15 Min" (string, optional)
 *   children – Aufgabeninhalt, z.B. <ol>...</ol> (ReactNode)
 */
export default function TaskBox({ title, time, children }) {
  return (
    <div className="task-box">
      <div className="task-box__header">
        <span className="task-box__tag">Aufgabe</span>
        <h4 className="task-box__title">{title}</h4>
        {time && <span className="task-box__time">⏱ {time}</span>}
      </div>
      <div className="task-box__body">{children}</div>
    </div>
  );
}

import './MarkdownViewer.css';

/**
 * Lightweight markdown renderer.
 * Handles: headings, bold, inline-code, code blocks, tables, hr, lists, blockquotes.
 * No external dependencies.
 *
 * Props:
 *   content  – raw markdown string (via ?raw import)
 */
export default function MarkdownViewer({ content }) {
  const html = mdToHtml(content);
  return (
    <div
      className="md-viewer"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

/* ─── Markdown → HTML converter ─────────────────────────── */

function mdToHtml(md) {
  const lines = md.split('\n');
  const out = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Fenced code block
    if (/^```/.test(line)) {
      const lang = line.slice(3).trim() || '';
      const codeLines = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i])) {
        codeLines.push(escape(lines[i]));
        i++;
      }
      i++; // skip closing ```
      const langClass = lang ? ` class="language-${lang}"` : '';
      out.push(`<pre class="md-code-block"><code${langClass}>${codeLines.join('\n')}</code></pre>`);
      continue;
    }

    // Horizontal rule
    if (/^---+$/.test(line.trim())) {
      out.push('<hr class="md-hr" />');
      i++;
      continue;
    }

    // Headings
    const hMatch = line.match(/^(#{1,6})\s+(.*)/);
    if (hMatch) {
      const level = hMatch[1].length;
      out.push(`<h${level} class="md-h${level}">${inline(hMatch[2])}</h${level}>`);
      i++;
      continue;
    }

    // Blockquote
    if (/^>\s/.test(line)) {
      const bqLines = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        bqLines.push(lines[i].replace(/^>\s?/, ''));
        i++;
      }
      out.push(`<blockquote class="md-blockquote">${inline(bqLines.join(' '))}</blockquote>`);
      continue;
    }

    // Table
    if (/\|/.test(line) && i + 1 < lines.length && /^[\s|:-]+$/.test(lines[i + 1])) {
      const headers = parseRow(line);
      i += 2; // skip separator
      const rows = [];
      while (i < lines.length && /\|/.test(lines[i])) {
        rows.push(parseRow(lines[i]));
        i++;
      }
      const thead = `<thead><tr>${headers.map(h => `<th>${inline(h)}</th>`).join('')}</tr></thead>`;
      const tbody = rows.map(r => `<tr>${r.map(c => `<td>${inline(c)}</td>`).join('')}</tr>`).join('');
      out.push(`<table class="md-table"><thead>${thead}</thead><tbody>${tbody}</tbody></table>`);
      continue;
    }

    // Unordered list
    if (/^[-*]\s/.test(line)) {
      const items = [];
      while (i < lines.length && /^[-*]\s/.test(lines[i])) {
        items.push(`<li>${inline(lines[i].replace(/^[-*]\s/, ''))}</li>`);
        i++;
      }
      out.push(`<ul class="md-ul">${items.join('')}</ul>`);
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(`<li>${inline(lines[i].replace(/^\d+\.\s/, ''))}</li>`);
        i++;
      }
      out.push(`<ol class="md-ol">${items.join('')}</ol>`);
      continue;
    }

    // Details/summary (<details><summary>)
    if (/^<details>/.test(line)) {
      const detailLines = [line];
      i++;
      while (i < lines.length && !/^<\/details>/.test(lines[i])) {
        detailLines.push(lines[i]);
        i++;
      }
      detailLines.push('</details>');
      i++;
      // pass through raw HTML for details/summary
      out.push(detailLines.join('\n'));
      continue;
    }

    // Checkbox list item  - [ ] or - [x]
    if (/^- \[[ x]\]/.test(line)) {
      const items = [];
      while (i < lines.length && /^- \[[ x]\]/.test(lines[i])) {
        const checked = /^- \[x\]/.test(lines[i]);
        const text = lines[i].replace(/^- \[[ x]\]\s*/, '');
        items.push(`<li class="md-check"><input type="checkbox" ${checked ? 'checked' : ''} disabled /> ${inline(text)}</li>`);
        i++;
      }
      out.push(`<ul class="md-checklist">${items.join('')}</ul>`);
      continue;
    }

    // Empty line
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Paragraph
    out.push(`<p class="md-p">${inline(line)}</p>`);
    i++;
  }

  return out.join('\n');
}

function escape(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function parseRow(line) {
  return line.split('|').slice(1, -1).map(c => c.trim());
}

function inline(str) {
  return str
    // bold + italic
    .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
    // bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // inline code
    .replace(/`([^`]+)`/g, '<code class="md-inline-code">$1</code>')
    // links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    // images
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="md-img" />')
    // strikethrough
    .replace(/~~(.*?)~~/g, '<del>$1</del>');
}

export const load = async ({ fetch }) => {
  const res = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQNOvtjX92oquh9aWYaMmJCaM2BahCIqEh9d0KNBgVzy_VU49_TwLkXFxEizQApaYCgtAPmHXGMD4_G/pub?gid=0&single=true&output=csv');
  const text = await res.text();

  // --- Improved CSV Parser (handles quoted fields, commas, and URLs) ---
  function parseCSV(text) {
    const rows = [];
    let currentRow = [];
    let currentCell = '';
    let insideQuotes = false;

    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (c === '"') {
        // Toggle quote state, unless it's a double-quote escape ("")
        if (insideQuotes && text[i + 1] === '"') {
          currentCell += '"';
          i++;
        } else {
          insideQuotes = !insideQuotes;
        }
      } else if (c === ',' && !insideQuotes) {
        currentRow.push(currentCell);
        currentCell = '';
      } else if ((c === '\n' || c === '\r') && !insideQuotes) {
        if (currentCell !== '' || currentRow.length) {
          currentRow.push(currentCell);
          rows.push(currentRow);
          currentRow = [];
          currentCell = '';
        }
      } else {
        currentCell += c;
      }
    }

    // Push last row if not empty
    if (currentCell || currentRow.length) {
      currentRow.push(currentCell);
      rows.push(currentRow);
    }

    return rows;
  }

  // Parse the CSV text
  const rows = parseCSV(text);
  const [headers, ...data] = rows;

  // Convert to structured posts
  const posts = data
    .filter(r => r.length >= 2)
    .map(row => {
      /** @type {Record<string, string>} */
      const obj = {};
      headers.forEach((h, i) => {
        const key = h.trim();
        if (key && row[i] !== undefined) {
          obj[key] = row[i].trim();
        }
      });
      return obj;
    })
    .filter(post => post.Title && post.Content) // Only include valid posts
    .reverse(); // Show newest first

  return { posts };
};

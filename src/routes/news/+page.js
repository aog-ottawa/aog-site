export const load = async ({ fetch }) => {
  const res = await fetch('https://docs.google.com/spreadsheets/d/e/REPLACE_WITH_YOUR_SHEET_ID/pub?output=csv');
  const text = await res.text();

  // Parse CSV into JSON
  const rows = text.split('\n').map(r => r.split(','));
  const [headers, ...data] = rows;

  const posts = data
    .filter(r => r.length >= 2)
    .map(row => {
      /** @type {Record<string, string>} */
      const obj = {};
      headers.forEach((h, i) => {
        const key = h.trim();
        if (key && row[i] !== undefined) {
          obj[key] = row[i];
        }
      });
      return obj;
    })
    .filter(post => post.Title && post.Content) // Only include posts with required fields
    .reverse(); // newest first

  return { posts };
};
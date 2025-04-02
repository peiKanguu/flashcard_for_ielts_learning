export async function loadWordsFromFile(file) {
  const text = await file.text();
  const lines = text.split(/\r?\n/).filter(Boolean);
  return lines.map(line => {
    const parts = line.split(/\t|\s{2,}/);
    return {
      word: parts[0] || '',
      definition: parts[1] || '',
      example1: parts[2] || '',
      example2: parts[3] || ''
    };
  });
}
export default function cleanSet(set, startString) {
  const filteredValues = [];

  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((s) => {
    if (typeof s === 'string' && s.startsWith(startString)) {
      filteredValues.push(s.slice(startString.length));
    }
  });
  return filteredValues.join('-');
}

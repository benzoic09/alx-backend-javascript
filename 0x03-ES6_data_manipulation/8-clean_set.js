export default function cleanSet(set, startString) {
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));
  if (startString === '') {
    return filteredValues.join('-');
  }
  return filteredValues.map((value) => value.slice(startString.length)).join('-');
}

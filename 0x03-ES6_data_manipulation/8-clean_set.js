export default function cleanSet(set, startString) {
  const filteredValues = Array.from(set).filter((value) => value.startWith(startString));
  return filteredValues.join('-');
}

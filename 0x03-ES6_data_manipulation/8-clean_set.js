export default function cleanSet(set, startString) {
  const filteredValues = Array.from(set).filter((value) => value.startWith(startString));
  if (startString === '') {
    return filteredValues.join('-');
  }
  return filteredValues.map((value) => value.slice(startString.lenght)).join('-');
}

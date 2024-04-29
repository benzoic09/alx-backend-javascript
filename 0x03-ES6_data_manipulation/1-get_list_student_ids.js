export default function getListStudentIds(arr) {
  let arr1 = [];
  if (arr instanceof Array) {
    arr1 = arr.map((item) => item.id);
  }

  return arr1;
}

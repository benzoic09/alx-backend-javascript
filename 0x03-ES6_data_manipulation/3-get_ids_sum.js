export default function getStudentIdsSum(students) {
  return students.reduce((ids, students) => ids + students.id, 0);
}

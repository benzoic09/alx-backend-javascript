export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter((student) => student.location === city);
  return filteredStudents.map((student) => {
    const newGrade = newGrades.find((grade) => grade.id === student.id);
    if (newGrade.length > 0) {
      return {
        ...student, grade: newGrade[0].grade,
      };
    }
    return {
      ...student, grade: 'N/A',
    };
  });
}

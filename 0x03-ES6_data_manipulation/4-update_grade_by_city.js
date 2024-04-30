export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students by the specified city
  const filteredStudents = students.filter((student) => student.location === city);
  return filteredStudents.map((student) => {
    const newGrade = newGrades.find((grade) => grade.id === student.id);
    if (newGrade.length > 0) {
      return {
        ...student, grade: filteredStudents[0].grade,
      };
    }
    return {
      ...student, grade: 'N/A',
    };
  });
}

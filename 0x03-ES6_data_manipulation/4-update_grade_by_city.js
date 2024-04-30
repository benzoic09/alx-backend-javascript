export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students by the specified city
  const filteredStudents = students.filter((student) => student.city === city);

  // Update grades for students in the filtered list
  const updatedStudents = filteredStudents.map((student) => {
    const newGrade = newGrades.find((grade) => grade.studentid === student.id);
    if (newGrade) {
      // Create a new object with the updated grade
      return { ...student, grade: newGrade.grade };
    }
    // Return the original student object if no new grade is found
    return student;
  });

  return updatedStudents;
}

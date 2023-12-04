export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students based on location
  const studentsInCity = students.filter((student) => student.location === city);

  // Update student grades with map
  return studentsInCity.map((student) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: matchingGrade ? matchingGrade.grade : 'N/A',
    };
  });
}

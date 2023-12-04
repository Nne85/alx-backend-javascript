export default function getStudentIdsSum(students) {
  return students.reduce((arr, student) => arr + student.id, 0);
}

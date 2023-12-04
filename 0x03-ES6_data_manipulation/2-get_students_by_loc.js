const getStudentsByLocation = (students, city) => students.filter((arr) => arr.location === city);

export default getStudentsByLocation;

export default function updateStuentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      studentGrade = gradeObj === undefined ? 'N/A' : gradeObj.grade;
      return {...student, grade};
    })
}
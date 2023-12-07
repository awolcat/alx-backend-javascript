export default function updateStuentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      const studentGrade = gradeObj === undefined ? 'N/A' : gradeObj.grade;
      return { ...student, studentGrade };
    });
}

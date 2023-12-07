export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const mappedArray = array.map((obj) => obj.id);
  return mappedArray;
}

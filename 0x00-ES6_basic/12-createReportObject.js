export default function createReportObject(employeesList) {
  const obj = {};
  for (const prop in employeesList) {
    obj[prop] = employeesList[prop];
  }
  return {
    allEmployees: obj,
    getNumberOfDepartments(list) {
      let count = 0;
      for (const val in list) {
        count += 1;
      }
      return count;
    },
  };
}

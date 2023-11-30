/* eslint no-underscore-dangle: 0 */
export default class HolbertonCourse {
  constructor(name, length, students) {
    /* Validating parameters before instance initialization */
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a String');
    }
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a Number');
    }
    if (Array.isArray(students)) {
      for (const student of students) {
        if (typeof student !== 'string') {
          throw new TypeError('Students must be an Array of Strings');
        }
      }
      this._students = students;
    } else {
      throw new TypeError('Students must be an Array');
    }
  }

  /* Property getters */
  get name() { return this._name; }

  get length() { return this._length; }

  get students() { return this._students; }

  /* Property setters */
  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a String');
    }
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a Number');
    }
  }

  set students(students) {
    if (Array.isArray(students)) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an Array');
    }
  }
}

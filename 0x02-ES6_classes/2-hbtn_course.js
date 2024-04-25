export default class HolbertonCourse {
  constructor(name, length, student) {
    this.name = name;
    this.length = length;
    this.student = student;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if(!(students instanceof Array) || !students.every((s) => typeof s === 'string')) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an Array');
    }
    this._students = students;
  }
}
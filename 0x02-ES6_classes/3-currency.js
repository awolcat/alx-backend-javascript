/* eslint no-underscore-dangle: 0 */
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /* Getters */
  get code() { return this._code; }

  get name() { return this._name; }

  /* Setters */
  set code(x) {
    this._code = x;
  }

  set name(x) {
    this._name = x;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

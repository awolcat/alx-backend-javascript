import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  /* Getters */
  get amount() { return this._amount; }

  get currency() { return this._currency; }

  /* Setters */
  set amount(x) { this._amount = x; }
  set currency(x) { this._currency = x; }

  displayFullPrice() { return `${this._amount} ${this._currency.name} (${this._currency.code})`; }

  static convertPrice(amount, conversionRate) { return amount * conversionRate; }
}

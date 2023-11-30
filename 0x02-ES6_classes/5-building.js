export default class Building {
  constructor(sqft) {
    if (new.target !== Building && !new.target.hasOwnProperty('evacuationWarningMessage')) {
      this.evacuationWarningMessage()
    }
    this._sqft = sqft;
  }

  /* Getter */
  get sqft() { return this._sqft; }

  /* Setter */
  set sqft(sqft) { this._sqft = sqft; }

  /* Method without a definition requires Child classes to define and therefore ovrride it*/
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

/* eslint no-underscore-dangle: 0 */
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    // this._sqft = sqft; //Overrides parent prop not necessary
    this._floors = floors;
  }

  /* Getters */
  get sqft() { return this._sqft; }

  get floors() { return this._floors; }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}

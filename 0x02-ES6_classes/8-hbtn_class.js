export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  set location(location) {
    this._location = location;
  }

  set size(size) {
    this._size = size;
  }

  [Symbol.toPrimitive](size) {
    if (size === 'number') {
      return this._size;
    }

    if (size === 'string') {
      return this._location;
    }
    return this;
  }
}

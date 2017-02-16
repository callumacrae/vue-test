/**
 * Equivalent to array.forEach().
 *
 * @param {function} cb A predicate function.
 * @returns {MountedComponent} self.
 */
export function each(cb) {
  Array.from(this._el).forEach((el, i) => {
    const elMount = this._newFromThis(el);
    cb.call(elMount, i, elMount);
  });

  return this;
}

/**
 * Equivalent to array.map().
 *
 * @param {function} cb A predicate function.
 * @returns {Array} Array of values returned by predicate function.
 */
export function map(cb) {
  return Array.from(this._el).map((el, i) => {
    const elMount = this._newFromThis(el);
    return cb.call(elMount, i, elMount);
  });
}

/**
 * Equivalent to array.some().
 *
 * @param {function} cb A predicate function.
 * @returns {boolean} True if predicate function returns true at least once.
 */
export function some(cb) {
  return Array.from(this._el).some((el, i) => {
    const elMount = this._newFromThis(el);
    return cb.call(elMount, i, elMount);
  });
}

/**
 * Equivalent to array.every().
 *
 * @param {function} cb A predicate function.
 * @returns {boolean} True if predicate function returns true every time.
 */
export function every(cb) {
  return Array.from(this._el).every((el, i) => {
    const elMount = this._newFromThis(el);
    return cb.call(elMount, i, elMount);
  });
}

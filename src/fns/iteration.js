import MountedComponent from '../MountedComponent';

/**
 * Equivalent to array.forEach().
 *
 * @param {function} cb A predicate function.
 * @returns {MountedComponent} self.
 */
exports.each = function componentEach(cb) {
  Array.from(this._el).forEach((el, i) => {
    const elMount = new MountedComponent();
    elMount._vm = this._vm;
    elMount._el = [el];

    cb.call(elMount, i, elMount);
  });

  return this;
};

/**
 * Equivalent to array.map().
 *
 * @param {function} cb A predicate function.
 * @returns {Array} Array of values returned by predicate function.
 */
exports.map = function componentMap(cb) {
  return Array.from(this._el).map((el, i) => {
    const elMount = new MountedComponent();
    elMount._vm = this._vm;
    elMount._el = [el];

    return cb.call(elMount, i, elMount);
  });
};

/**
 * Equivalent to array.some().
 *
 * @param {function} cb A predicate function.
 * @returns {boolean} True if predicate function returns true at least once.
 */
exports.some = function componentSome(cb) {
  return Array.from(this._el).some((el, i) => {
    const elMount = new MountedComponent();
    elMount._vm = this._vm;
    elMount._el = [el];

    return cb.call(elMount, i, elMount);
  });
};

/**
 * Equivalent to array.every().
 *
 * @param {function} cb A predicate function.
 * @returns {boolean} True if predicate function returns true every time.
 */
exports.every = function componentEvery(cb) {
  return Array.from(this._el).every((el, i) => {
    const elMount = new MountedComponent();
    elMount._vm = this._vm;
    elMount._el = [el];

    return cb.call(elMount, i, elMount);
  });
};

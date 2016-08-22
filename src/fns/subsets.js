import MountedComponent from '../MountedComponent';

/**
 * Get element or (if no argument) array of elements.
 *
 * @param {number} [n] Index of element to get.
 * @returns {Array|HTMLElement|null} Array of elements or element.
 */
exports.get = function getElement(n) {
  if (typeof n === 'undefined') {
    return Array.from(this._el);
  }

  return this._el[n] || null;
};

/**
 * Get an element as a MountedComponent.
 *
 * @param {number} n Index of element to get.
 * @returns {MountedComponent|null} New MountedComponent.
 */
exports.eq = function getElementAsMountedComponent(n) {
  if (!this._el[n]) {
    return null;
  }

  const elMount = new MountedComponent();
  elMount._vm = this._vm;
  elMount._el = [this._el[n]];

  return elMount;
};

/**
 * Filter elements using a predicate function.
 *
 * @param {function} cb Predicate function: return truthy to keep element.
 * @returns {MountedComponent} Subset MountedComponent. Can be empty.
 */
exports.filter = function filterElements(cb) {
  const subset = Array.from(this._el).filter((el, i) => {
    const elMount = new MountedComponent();
    elMount._vm = this._vm;
    elMount._el = [el];

    return cb.call(elMount, i, elMount);
  });

  const mountedSubset = new MountedComponent();
  mountedSubset._vm = this._vm;
  mountedSubset._el = subset;

  return mountedSubset;
};

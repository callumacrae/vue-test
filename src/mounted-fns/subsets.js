/**
 * Get element or (if no argument) array of elements.
 *
 * @param {number} [n] Index of element to get.
 * @returns {Array|HTMLElement|null} Array of elements or element.
 */
export function get(n) {
  if (typeof n === 'undefined') {
    return Array.from(this._el);
  }

  return this._el[n] || null;
}

/**
 * Get an element as a MountedComponent.
 *
 * @param {number} n Index of element to get.
 * @returns {MountedComponent|null} New MountedComponent.
 */
export function eq(n) {
  if (!this._el[n]) {
    return null;
  }

  return this._newFromThis(this._el[n]);
}

/**
 * Filter elements using a predicate function.
 *
 * @param {function} cb Predicate function: return truthy to keep element.
 * @returns {MountedComponent} Subset MountedComponent. Can be empty.
 */
export function filter(cb) {
  const subset = Array.from(this._el).filter((el, i) => {
    const elMount = this._newFromThis(el);

    return cb.call(elMount, i, elMount);
  });

  return this._newFromThis(subset);
}

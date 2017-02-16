import matchesSelector from 'matches-selector';

/**
 * Test whether an element has a given class or not.
 *
 * @param {string} className The name of the class to test for.
 * @returns {boolean} True if the element has the class.
 */
export function hasClass(className) {
  return Array.from(this._el).some((el) => el.classList.contains(className));
}

/**
 * Test whether an element matches a given selector or not.
 *
 * @param {string} selector Selector to use.
 * @returns {boolean} True if an element matches the selector.
 */
export function matches(selector) {
  return Array.from(this._el).some((el) => matchesSelector(el, selector));
}

/**
 * Test whether an element contains a given selector or not.
 *
 * @param {string} selector Selector to use.
 * @returns {boolean} True if an element matches the selector.
 */
export function contains(selector) {
  return Array.from(this._el).some((el) => el.querySelectorAll(selector).length);
}

/**
 * Tests whether an element has no child nodes (including text and whitespace)
 *
 * @returns {boolean} True if element is empty.
 */
export function isEmpty() {
  return !Array.from(this._el).some((el) => el.childNodes.length);
}

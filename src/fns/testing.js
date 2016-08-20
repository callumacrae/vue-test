/**
 * Test whether an element has a given class or not.
 *
 * @param {string} className The name of the class to test for.
 * @returns {boolean} True if the element has the class.
 */
exports.hasClass = function componentHasClass(className) {
  return Array.from(this._el).some((el) => el.classList.contains(className));
};

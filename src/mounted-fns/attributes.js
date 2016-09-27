/**
 * Get a given attribute from the first element.
 *
 * @param {string} attrName The name of the attribute.
 * @returns {string|null} The value of the attribute, or null.
 */
exports.attr = function componentAttr(attrName) {
  return this._el[0].getAttribute(attrName);
};

/**
 * Get a given data attribute from the first element.
 *
 * @param {string} attrName The name of the data attribute.
 * @returns {string|null} The value of the data attribute, or undefined.
 */
exports.data = function componentDataAttr(attrName) {
  return this._el[0].dataset[attrName];
};

/**
 * Get the HTML of the first element.
 *
 * @returns {string} The HTML.
 */
exports.html = function componentHtml() {
  return this._el[0].outerHTML;
};

/**
 * Get a given property from the first element.
 *
 * @param {string} propName The name of the property.
 * @returns {boolean} True or false.
 */
exports.prop = function componentProp(propName) {
  return this._el[0][propName];
};

/**
 * Get the text contained within an element.
 *
 * @returns {string} The text.
 */
exports.text = function componentText() {
  return this._el[0].textContent;
};

/**
 * Get the value of an input element.
 *
 * @returns {text} The value.
 */
exports.value = function componentValue() {
  return this._el[0].value;
};

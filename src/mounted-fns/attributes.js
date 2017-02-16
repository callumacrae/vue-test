/**
 * Get a given attribute from the first element.
 *
 * @param {string} attrName The name of the attribute.
 * @returns {string|null} The value of the attribute, or null.
 */
export function attr(attrName) {
  return this._el[0].getAttribute(attrName);
}

/**
 * Get a given data attribute from the first element.
 *
 * @param {string} attrName The name of the data attribute.
 * @returns {string|null} The value of the data attribute, or undefined.
 */
export function data(attrName) {
  return this._el[0].dataset[attrName];
}

/**
 * Get the HTML of the first element.
 *
 * @returns {string} The HTML.
 */
export function html() {
  return this._el[0].outerHTML;
}

/**
 * Get a given property from the first element.
 *
 * @param {string} propName The name of the property.
 * @returns {boolean} True or false.
 */
export function prop(propName) {
  return this._el[0][propName];
}

/**
 * Get the text contained within an element.
 *
 * @returns {string} The text.
 */
export function text() {
  return this._el[0].textContent;
}

/**
 * Get the value of an input element.
 *
 * @returns {text} The value.
 */
export function value() {
  return this._el[0].value;
}

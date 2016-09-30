import matches from 'matches-selector';

/**
 * Find all elements within the mounted element(s) matching a given selector.
 *
 * @param {string} selector The selector to use.
 * @returns {MountedComponent} A new MountedComponent.
 */
exports.find = function componentFind(selector) {
  const found = [];

  Array.from(this._el).forEach((el) => {
    found.push(...el.querySelectorAll(selector));
  });

  if (!found.length) {
    return null;
  }

  return this._newFromThis(found);
};

/**
 * Find all children of mounted element(s), optionally matching a given
 * selector.
 *
 * @param {string} [selector] The selector to filter by.
 * @returns {*}
 */
exports.children = function componentChildren(selector) {
  let children = [];

  Array.from(this._el).forEach((el) => children.push(...el.children));

  if (selector) {
    children = children.filter((child) => matches(child, selector));
  }

  if (!children.length) {
    return null;
  }

  return this._newFromThis(children);
};

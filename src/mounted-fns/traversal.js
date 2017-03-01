import matches from 'matches-selector';

/**
 * Find all elements within the mounted element(s) matching a given selector.
 *
 * @param {string} selector The selector to use.
 * @returns {MountedComponent} A new MountedComponent.
 */
export function find(selector) {
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
 * @returns {MountedComponent} A new MountedComponent.
 */
export function children(selector) {
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

/**
 * Returns the parent of a mounted element. Will search upwards until it finds
 * a parent matching the given selector.
 *
 * @returns {MountedComponent} A new MountedComponent.
 */
export function parent(selector) {
  let parent = this._el[0].parentElement;

  if (!selector) {
    return this._newFromThis(parent);
  }

  while (parent && !matches(parent, selector)) {
    parent = parent.parentElement;
  }

  if (!parent) {
    return null;
  }

  return this._newFromThis(parent);
};

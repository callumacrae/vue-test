import MountedComponent from './MountedComponent';

/**
 * Mount a given component with optional props, returning a MountedComponent
 * object with methods like `.text()` and `.find()`.
 *
 * @param {Object} TestComponent A Vue component to mount.
 * @param {Object} [props] An optional objects containing properties to pass.
 * * @param {string} [slot] Optional slot content as a string.
 * @returns {MountedComponent}
 */
export function mount(TestComponent, props, slot) {
  const mounted = new MountedComponent();
  mounted._init(TestComponent, props, slot);
  return mounted;
}

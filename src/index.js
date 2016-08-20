import MountedComponent from './MountedComponent';

/**
 * Mount a given component with optional props, returning a MountedComponent
 * object with methods like `.text()` and `.find()`.
 *
 * @param {Object} TestComponent A Vue component to mount.
 * @param {Object} [props] An optional objects containing properties to pass.
 * @returns {MountedComponent}
 */
export function mount(TestComponent, props) {
  const mounted = new MountedComponent();
  mounted._init(TestComponent, props);
  return mounted;
}

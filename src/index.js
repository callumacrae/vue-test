import MountedComponent from './MountedComponent';
import Vue from 'vue';

/**
 * Mount a given component with optional props, returning a MountedComponent
 * object with methods like `.text()` and `.find()`.
 *
 * @param {Object} TestComponent A Vue component to mount.
 * @param {Object} [props] An optional objects containing properties to pass.
 * @param {string} [slot] Optional slot content as a string.
 * @returns {MountedComponent}
 */
export function mount(TestComponent, props, slot, events) {
  const mounted = new MountedComponent();
  mounted._init(TestComponent, props, slot, events);
  return mounted;
}

/**
 * Returns a function that creates new mounted instances of a components.
 *
 * @param {Object} TestComponent A Vue component to mount.
 * @returns {function([props], [slot]): MountedComponent} Function with
 * props and slot arguments.
 */
export function createMounter(TestComponent) {
  return (props, slot) => mount(TestComponent, props, slot);
}

// Passthrough
export { default as chaiPlugin } from './chai-plugin';

// Shutoff the message from Vue about not being in production mode.
Vue.config.productionTip = false;

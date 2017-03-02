// NOTE: vue-test requires the **Full** version of Vue (which includes the compiler).
// Make sure your build configuration for testing aliases vue properly.
import Vue from 'vue';
import dashify from 'dashify';

import * as attributeFns from './mounted-fns/attributes';
import * as eventFns from './mounted-fns/events';
import * as iterationFns from './mounted-fns/iteration';
import * as subsetFns from './mounted-fns/subsets';
import * as testFns from './mounted-fns/testing';
import * as traversalFns from './mounted-fns/traversal';

export default function MountedComponent() {}

Object.defineProperty(MountedComponent.prototype, 'length', {
  get() {
    return this._el.length;
  },
  enumerable: true
});

/**
 * Initialise a new component with a vm and elements. Used internally by the
 * `mount()` function.
 *
 * @param {Object} TestComponent A Vue component to mount.
 * @param {Object} [props] An optional objects containing properties to pass.
 * @param {string} [slot] Optional slot content as a string.
 * @private
 */
MountedComponent.prototype._init = function initMountedComponent(TestComponent, props = {}, slot = '', eventBindings = {}) {
  // Necessary hack to support Vue 1.x: for 2.x, we could just use v-bind
  // https://github.com/vuejs/vue/issues/2114
  const propsString = Object.keys(props)
    .map((prop) => `:${dashify(prop)}="${prop}"`)
    .join(' ');

  this._vm = new Vue({
    template: `<div><test-component ${propsString}>${slot}</test-component></div>`,
    components: { TestComponent },
    data: props
  }).$mount();

  Object.keys(eventBindings).forEach(function(event) {
    this._vm.$children[0].$on(event, eventBindings[event]);
  }, this);

  this._el = this._vm.$el.children;
};

/**
 * Generate a new MountedComponent in the same VM, but with different elements.
 *
 * @param {Array|HTMLElement} el HTML element (or array of)
 * @returns {MountedComponent} New MountedComponent.
 * @private
 */
MountedComponent.prototype._newFromThis = function newFromThis(el) {
  const elMount = new MountedComponent();
  elMount._vm = this._vm;
  elMount._el = Array.isArray(el) ? el : [el];

  return elMount;
};

Object.assign(MountedComponent.prototype, attributeFns);
Object.assign(MountedComponent.prototype, eventFns);
Object.assign(MountedComponent.prototype, iterationFns);
Object.assign(MountedComponent.prototype, subsetFns);
Object.assign(MountedComponent.prototype, testFns);
Object.assign(MountedComponent.prototype, traversalFns);

import Vue from 'vue';

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
 * @private
 */
MountedComponent.prototype._init = function initMountedComponent(TestComponent, props = {}) {
  // If propsString makes you say wtf, please +1 the following issue:
  // https://github.com/vuejs/vue/issues/2114
  const propsString = Object.keys(props)
    .map((prop) => `:${prop}="${prop}"`)
    .join(' ');

  this._vm = new Vue({
    template: `<div><test-component ${propsString}></test-component></div>`,
    components: { TestComponent },
    data: props
  }).$mount();

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

Object.assign(MountedComponent.prototype, require('./fns/attributes'));
Object.assign(MountedComponent.prototype, require('./fns/iteration'));
Object.assign(MountedComponent.prototype, require('./fns/subsets'));
Object.assign(MountedComponent.prototype, require('./fns/testing'));
Object.assign(MountedComponent.prototype, require('./fns/traversal'));

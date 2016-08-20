import Vue from 'vue';

export default function MountedComponent() {}

Object.defineProperty(MountedComponent.prototype, 'length', {
  get() {
    return this._el.length;
  },
  enumerable: true
});

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

MountedComponent.prototype.find = function componentFind(selector) {
  const found = [];

  Array.from(this._el).forEach((el) => {
    found.push(...el.querySelectorAll(selector));
  });

  if (!found.length) {
    return null;
  }

  const newMount = new MountedComponent();
  newMount._vm = this._vm;
  newMount._el = found;

  return newMount;
};

MountedComponent.prototype.html = function componentHtml() {
  return this._el[0].outerHTML;
};


MountedComponent.prototype.text = function componentText() {
  return this._el[0].textContent;
};

MountedComponent.prototype.value = function componentValue() {
  return this._el[0].value;
};

MountedComponent.prototype.data = function componentDataAttr(attrName) {
  return this._el[0].dataset[attrName];
};

MountedComponent.prototype.attr = function componentAttr(attrName) {
  return this._el[0].getAttribute(attrName);
};

MountedComponent.prototype.prop = function componentProp(propName) {
  return this._el[0][propName];
};

MountedComponent.prototype.hasClass = function componentHasClass(className) {
  return Array.from(this._el).some((el) => el.classList.contains(className));
};

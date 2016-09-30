import MountedComponent from '../MountedComponent';

export function assert(chai) {
  const Assertion = chai.Assertion;

  return function (selector) {
    const obj = this._obj;

    new Assertion(obj).to.be.instanceof(MountedComponent);
    new Assertion(selector).to.be.ok;

    this.assert(
      obj.matches(selector),
      'expected Vue component to match selector #{exp}',
      'expected Vue component to not match selector #{exp}',
      selector
    );
  };
}

export function chain(chai, utils) {
  return function () {
    utils.flag(this, 'vue.match', true);
  };
}

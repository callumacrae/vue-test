import MountedComponent from '../MountedComponent';

export default function match(chai, utils) {
  const Assertion = chai.Assertion;

  Assertion.addChainableMethod('match', function (selector) {
    const obj = this._obj;

    new Assertion(obj).to.be.instanceof(MountedComponent);
    new Assertion(selector).to.be.ok;

    this.assert(
      obj.matches(selector),
      'expected Vue component to match selector #{exp}',
      'expected Vue component to not match selector #{exp}',
      selector
    );
  }, function () {
    utils.flag(this, 'vue.match', true);
  });
}

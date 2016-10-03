import MountedComponent from '../MountedComponent';

export default function selector(chai, utils) {
  const Assertion = chai.Assertion;

  Assertion.addMethod('selector', function (selector) {
    const obj = this._obj;

    new Assertion(obj).to.be.instanceof(MountedComponent);
    new Assertion(selector).to.be.ok;

    if (utils.flag(this, 'vue.match')) {
      this.match(selector);
      return;
    }

    if (utils.flag(this, 'contains')) {
      this.assert(
        obj.contains(selector),
        'expected Vue component to contain selector #{exp}',
        'expected Vue component to not contain selector #{exp}',
        selector
      );
      return;
    }

    throw new Error('you need to specify either contains or matches');
  });
}

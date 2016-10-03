import MountedComponent from '../MountedComponent';

export default function attribute(chai, utils) {
  const Assertion = chai.Assertion;

  Assertion.addChainableMethod('attribute', function (attribute) {
    const obj = this._obj;

    new Assertion(obj).to.be.instanceof(MountedComponent);
    new Assertion(attribute).to.be.ok;

    utils.flag(this, 'vue.attribute', attribute);

    this.assert(
      obj.matches(`[${attribute}]`),
      'expected Vue component to have attribute #{exp}',
      'expected Vue component to not have attribute #{exp}',
      attribute
    );
  });

  Assertion.addMethod('equals', function (expected) {
    const obj = this._obj;

    new Assertion(obj).to.be.instanceof(MountedComponent);
    const attribute = utils.flag(this, 'vue.attribute');
    new Assertion(attribute).to.be.ok;

    this.assert(
      obj.attr(attribute) === expected,
      `expected attribute ${attribute} to equal #{exp}, got #{act}`,
      `expected attribute ${attribute} to not equal #{exp}`,
      attribute,
      obj.attr(attribute)
    );
  });
}

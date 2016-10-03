import MountedComponent from '../MountedComponent';

export default function value(chai, utils) {
  const Assertion = chai.Assertion;

  Assertion.addMethod('value', function (value) {
    const obj = this._obj;

    new Assertion(obj).to.be.instanceof(MountedComponent);

    this.assert(
      obj.value() === value,
      'expected Vue component to have value #{exp} but got #{act}',
      'expected Vue component to not have value #{exp}',
      value,
      obj.value()
    );
  });
}

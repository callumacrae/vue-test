import MountedComponent from '../MountedComponent';

export function fragment(chai) {
  const Assertion = chai.Assertion;

  return function () {
    const obj = this._obj;

    new Assertion(obj).to.be.instanceof(MountedComponent);

    console.log(obj.isFragment());

    this.assert(
      obj.isFragment(),
      'expected Vue component to be a fragment instance',
      'expected Vue component to not be a fragment instance'
    );
  };
}

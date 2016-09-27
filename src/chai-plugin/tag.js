import MountedComponent from '../MountedComponent';

export function tag(chai, utils) {
  const Assertion = chai.Assertion;

  return function (tagName) {
    const obj = this._obj;

    new Assertion(obj).to.be.instanceof(MountedComponent);

    const containsFlag = utils.flag(this, 'contains');

    if (containsFlag) {
      this.assert(
        obj.find(tagName),
        'expected Vue component to contain tagName #{exp}',
        'expected Vue component to not contain tagName #{exp}',
        tagName
      );
    } else {
      this.assert(
        obj.get(0).tagName === tagName.toUpperCase(),
        'expected Vue component to have tagName #{exp} but got #{act}',
        'expected Vue component to not have tagName #{exp}',
        tagName.toUpperCase(),
        obj.get(0).tagName
      );
    }
  };
}

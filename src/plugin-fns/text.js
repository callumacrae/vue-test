import MountedComponent from '../MountedComponent';

export function text(chai, utils) {
  const Assertion = chai.Assertion;

  return function (text) {
    const obj = this._obj;

    new Assertion(obj).to.be.instanceof(MountedComponent);

    const containsFlag = utils.flag(this, 'contains');

    if (containsFlag) {
      this.assert(
        obj.text().indexOf(text) !== -1,
        'expected Vue component to contain text #{exp}',
        'expected Vue component to not contain text #{exp}',
        text
      );
    } else {
      this.assert(
        obj.text() === text,
        'expected Vue component to have text #{exp} but got #{act}',
        'expected Vue component to not have text #{exp}',
        text,
        obj.text()
      );
    }
  };
}

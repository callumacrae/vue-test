import MountedComponent from '../MountedComponent';

export function className(chai, utils) {
  const Assertion = chai.Assertion;

  return function (className) {
    const obj = this._obj;

    new Assertion(className).to.not.contain(' ', 'invalid classname');
    new Assertion(obj).to.be.instanceof(MountedComponent);

    const containsFlag = utils.flag(this, 'contains');

    if (containsFlag) {
      this.assert(
        obj.find(`.${className}`),
        'expected Vue component to contain element with className #{exp}',
        'expected Vue component to not contain element with className #{exp}',
        className
      );
    } else {
      this.assert(
        obj.hasClass(className),
        'expected Vue component to have className #{exp} (#{act})',
        'expected Vue component to not have className #{exp}',
        className,
        obj.attr('class')
      );
    }
  };
}

import MountedComponent from '../MountedComponent';

export default function empty(chai) {
  const Assertion = chai.Assertion;

  Assertion.overwriteProperty('empty', function (_super) {
    return function () {
      const obj = this._obj;

      if (obj instanceof MountedComponent) {
        this.assert(
          obj.isEmpty(),
          'expected Vue component to be empty',
          'expected Vue component to not be empty'
        );
      } else {
        _super.call(this);
      }
    };
  });
}

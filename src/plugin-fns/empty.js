import MountedComponent from '../MountedComponent';

export function empty() {
  return function (_super) {
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
  };
}

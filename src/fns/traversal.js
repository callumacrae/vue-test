import MountedComponent from '../MountedComponent';

exports.find = function componentFind(selector) {
  const found = [];

  Array.from(this._el).forEach((el) => {
    found.push(...el.querySelectorAll(selector));
  });

  if (!found.length) {
    return null;
  }

  const newMount = new MountedComponent();
  newMount._vm = this._vm;
  newMount._el = found;

  return newMount;
};

exports.hasClass = function componentHasClass(className) {
  return Array.from(this._el).some((el) => el.classList.contains(className));
};

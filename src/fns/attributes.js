exports.attr = function componentAttr(attrName) {
  return this._el[0].getAttribute(attrName);
};

exports.data = function componentDataAttr(attrName) {
  return this._el[0].dataset[attrName];
};

exports.html = function componentHtml() {
  return this._el[0].outerHTML;
};

exports.prop = function componentProp(propName) {
  return this._el[0][propName];
};

exports.text = function componentText() {
  return this._el[0].textContent;
};

exports.value = function componentValue() {
  return this._el[0].value;
};

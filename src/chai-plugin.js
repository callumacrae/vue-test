export default function chaiPlugin(chai, utils) {
  const Assertion = chai.Assertion;

  Assertion.addMethod('tag', require('./plugin-fns/tag').tag(chai, utils));
  Assertion.addMethod('className', require('./plugin-fns/className').className(chai, utils));

  const match = require('./plugin-fns/match');
  Assertion.addChainableMethod('match', match.assert(chai, utils), match.chain(chai, utils));

  Assertion.overwriteProperty('empty', require('./plugin-fns/empty').empty(chai, utils));
  Assertion.addMethod('selector', require('./plugin-fns/selector').selector(chai, utils));
}
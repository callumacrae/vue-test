export default function chaiPlugin(chai, utils) {
  const Assertion = chai.Assertion;

  Assertion.addMethod('tag', require('./plugin-fns/tag').tag(chai, utils));
  Assertion.addMethod('className', require('./plugin-fns/className').className(chai, utils));
}

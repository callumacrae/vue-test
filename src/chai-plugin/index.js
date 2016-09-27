export default function chaiPlugin(chai, utils) {
  const Assertion = chai.Assertion;

  Assertion.addMethod('tag', require('./tag').tag(chai, utils));
  Assertion.addMethod('className', require('./className').className(chai, utils));
}

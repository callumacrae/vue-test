import { mount, chaiPlugin } from '../../../src/index.js';
import Input from '../../fixtures/Input.vue';

chai.use(chaiPlugin);

describe('Chai plugin', function () {
  describe('.to.have.value()', function () {
    it('should not throw for correct value', function () {
      const mounted = mount(Input);

      assert.doesNotThrow(function () {
        expect(mounted).to.have.value('default value');
      }, assert.AssertionError);
    });

    it('should throw for incorrect value', function () {
      const mounted = mount(Input);

      assert.throws(function () {
        expect(mounted).to.have.value('default');
      }, assert.AssertionError);
    });

    it('should throw for correct value when negated', function () {
      const mounted = mount(Input);

      assert.throws(function () {
        expect(mounted).to.not.have.value('default value');
      }, assert.AssertionError);
    });

    it('should not throw for incorrect value when negated', function () {
      const mounted = mount(Input);

      assert.doesNotThrow(function () {
        expect(mounted).to.not.have.value('default');
      }, assert.AssertionError);
    });
  });
});

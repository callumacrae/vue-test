import { mount, chaiPlugin } from '../../../src/index.js';
import Tree from '../../fixtures/Tree.vue';

chai.use(chaiPlugin);

describe('Chai plugin', function () {
  describe('.to.be.empty', function () {
    it('should not throw when element empty', function () {
      const mounted = mount(Tree);
      const child = mounted.find('.empty');

      assert.doesNotThrow(function () {
        expect(child).to.be.empty;
      }, assert.AssertionError);
    });

    it('should throw when a element not empty', function () {
      const mounted = mount(Tree);
      const child = mounted.find('.a');

      assert.throws(function () {
        expect(child).to.be.empty;
      }, assert.AssertionError);
    });

    it('should throw when element empty and inverted', function () {
      const mounted = mount(Tree);
      const child = mounted.find('.empty');

      assert.throws(function () {
        expect(child).to.not.be.empty;
      }, assert.AssertionError);
    });

    it('should not throw when a element not empty and inverted', function () {
      const mounted = mount(Tree);
      const child = mounted.find('.a');

      assert.doesNotThrow(function () {
        expect(child).to.not.be.empty;
      }, assert.AssertionError);
    });
  });
});

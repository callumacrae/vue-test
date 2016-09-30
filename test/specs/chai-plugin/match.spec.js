import { mount, chaiPlugin } from '../../../src/index.js';
import Tree from '../../fixtures/Tree.vue';

chai.use(chaiPlugin);

describe('Chai plugin', function () {
  describe('.to.match()', function () {
    it('should not throw when a selector matches', function () {
      const mounted = mount(Tree);
      const child = mounted.find('.child-div');

      assert.doesNotThrow(function () {
        expect(child).to.match('#app .child-div');
      }, assert.AssertionError);
    });

    it('should throw when a selector doesnt match', function () {
      const mounted = mount(Tree);
      const child = mounted.find('.child-div');

      assert.throws(function () {
        expect(child).to.match('p');
      }, assert.AssertionError);
    });

    it('should throw when a selector matches and not used', function () {
      const mounted = mount(Tree);
      const child = mounted.find('.child-div');

      assert.throws(function () {
        expect(child).to.not.match('#app .child-div');
      }, assert.AssertionError);
    });

    it('should not throw when a selector match esand not used', function () {
      const mounted = mount(Tree);
      const child = mounted.find('.child-div');

      assert.doesNotThrow(function () {
        expect(child).to.not.match('p');
      }, assert.AssertionError);
    });
  });
});

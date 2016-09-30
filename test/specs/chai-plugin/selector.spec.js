import { mount, chaiPlugin } from '../../../src/index.js';
import Tree from '../../fixtures/Tree.vue';

chai.use(chaiPlugin);

describe('Chai plugin', function () {
  describe('.to.contain.selector()', function () {
    it('should not throw when a selector contained', function () {
      const mounted = mount(Tree);

      assert.doesNotThrow(function () {
        expect(mounted).to.contain.selector('.child-div');
      }, assert.AssertionError);
    });

    it('should throw when a selector isnt contained', function () {
      const mounted = mount(Tree);

      assert.throws(function () {
        expect(mounted).to.contain.selector('.nope');
      }, assert.AssertionError);
    });

    it('should throw when a selector contained and not used', function () {
      const mounted = mount(Tree);

      assert.throws(function () {
        expect(mounted).to.not.contain.selector('.child-div');
      }, assert.AssertionError);
    });

    it('should not throw when a selector not contained and not used', function () {
      const mounted = mount(Tree);

      assert.doesNotThrow(function () {
        expect(mounted).to.not.contain.selector('.nope');
      }, assert.AssertionError);
    });
  });

  describe('.to.match.selector()', function () {
    it('should not throw when a selector matches', function () {
      const mounted = mount(Tree);
      const child = mounted.find('.child-div');

      assert.doesNotThrow(function () {
        expect(child).to.match.selector('#app .child-div');
      }, assert.AssertionError);
    });

    it('should throw when a selector doesnt match', function () {
      const mounted = mount(Tree);
      const child = mounted.find('.child-div');

      assert.throws(function () {
        expect(child).to.match.selector('p');
      }, assert.AssertionError);
    });

    it('should throw when a selector matches and not used', function () {
      const mounted = mount(Tree);
      const child = mounted.find('.child-div');

      assert.throws(function () {
        expect(child).to.not.match.selector('#app .child-div');
      }, assert.AssertionError);
    });

    it('should not throw when a selector match esand not used', function () {
      const mounted = mount(Tree);
      const child = mounted.find('.child-div');

      assert.doesNotThrow(function () {
        expect(child).to.not.match.selector('p');
      }, assert.AssertionError);
    });
  });
});

import { mount, chaiPlugin } from '../../../src/index.js';
import Fragment from '../../fixtures/Fragment.vue';
import Tree from '../../fixtures/Tree.vue';

chai.use(chaiPlugin);

describe('Chai plugin', function () {
  describe('.to.be.fragment', function () {
    it('should not throw when element is fragment', function () {
      const mounted = mount(Fragment);

      assert.doesNotThrow(function () {
        expect(mounted).to.be.fragment;
      }, assert.AssertionError);
    });

    it('should throw when element not fragment', function () {
      const mounted = mount(Tree);

      assert.throws(function () {
        expect(mounted).to.be.fragment;
      }, assert.AssertionError);
    });

    it('should throw when element is fragment and negated', function () {
      const mounted = mount(Fragment);

      assert.throws(function () {
        expect(mounted).to.not.be.fragment;
      }, assert.AssertionError);
    });

    it('should not throw when element not fragment and negated', function () {
      const mounted = mount(Tree);

      assert.doesNotThrow(function () {
        expect(mounted).to.not.be.fragment;
      }, assert.AssertionError);
    });

    it('should throw when element, not component', function () {
      const mounted = mount(Tree);
      const child = mounted.find('button');

      assert.throws(function () {
        expect(child).to.be.fragment;
      }, /can only be called on root components/);
    });
  });
});

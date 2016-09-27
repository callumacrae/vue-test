import { mount, chaiPlugin } from '../../../src/index.js';
import Tree from '../../fixtures/Tree.vue';

chai.use(chaiPlugin);

describe('Chai plugin', function () {
  describe('.to.have.className()', function () {
    it('should not throw for className found', function () {
      const mounted = mount(Tree);

      assert.doesNotThrow(function () {
        expect(mounted.find('.child-div')).to.have.className('child-div');
      }, assert.AssertionError);
    });

    it('should throw for className not found', function () {
      const mounted = mount(Tree);

      assert.throws(function () {
        expect(mounted.find('.child-div')).to.have.className('not-div');
      }, assert.AssertionError);
    });

    it('should throw for className found when negated', function () {
      const mounted = mount(Tree);

      assert.throws(function () {
        expect(mounted.find('.child-div')).to.not.have.className('child-div');
      }, assert.AssertionError);
    });

    it('should not throw for className not found when negated', function () {
      const mounted = mount(Tree);

      assert.doesNotThrow(function () {
        expect(mounted.find('.child-div')).to.not.have.className('not-div');
      }, assert.AssertionError);
    });
  });

  describe('.to.contain.className()', function () {
    it('should not throw for className found', function () {
      const mounted = mount(Tree);

      assert.doesNotThrow(function () {
        expect(mounted).to.contain.className('child-div');
      }, assert.AssertionError);
    });

    it('should throw for className not found', function () {
      const mounted = mount(Tree);

      assert.throws(function () {
        expect(mounted).to.contain.className('not-div');
      }, assert.AssertionError);
    });

    it('should throw for className found when negated', function () {
      const mounted = mount(Tree);

      assert.throws(function () {
        expect(mounted).to.not.contain.className('child-div');
      }, assert.AssertionError);
    });

    it('should not throw for className not found when negated', function () {
      const mounted = mount(Tree);

      assert.doesNotThrow(function () {
        expect(mounted).to.not.contain.className('not-div');
      }, assert.AssertionError);
    });
  });
});

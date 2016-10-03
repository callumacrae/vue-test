import { mount, chaiPlugin } from '../../../src/index.js';
import Tree from '../../fixtures/Tree.vue';

chai.use(chaiPlugin);

describe('Chai plugin', function () {
  describe('.to.have.text()', function () {
    it('should not throw for correct text', function () {
      const mounted = mount(Tree);

      assert.doesNotThrow(function () {
        expect(mounted.find('h1')).to.have.text('Title');
      }, assert.AssertionError);
    });

    it('should work with parent elements with multiple children', function () {
      const mounted = mount(Tree);

      assert.doesNotThrow(function () {
        expect(mounted.find('.b')).to.have.text('List 3 with link');
      }, assert.AssertionError);
    });

    it('should throw for wrong text', function () {
      const mounted = mount(Tree);

      assert.throws(function () {
        expect(mounted.find('h1')).to.have.text('itle');
      }, assert.AssertionError);
    });

    it('should throw for correct text when negated', function () {
      const mounted = mount(Tree);

      assert.throws(function () {
        expect(mounted.find('h1')).to.not.have.text('Title');
      }, assert.AssertionError);
    });

    it('should not throw for wrong text when negated', function () {
      const mounted = mount(Tree);

      assert.doesNotThrow(function () {
        expect(mounted.find('h1')).to.not.have.text('itle');
      }, assert.AssertionError);
    });
  });

  describe('.to.contain.text()', function () {
    it('should not throw when correct text contained', function () {
      const mounted = mount(Tree);

      assert.doesNotThrow(function () {
        expect(mounted).to.contain.text('List 3');
      }, assert.AssertionError);
    });

    it('should throw when correct text not contained', function () {
      const mounted = mount(Tree);

      assert.throws(function () {
        expect(mounted).to.contain.text('List 4');
      }, assert.AssertionError);
    });

    it('should throw when correct text contained when negated', function () {
      const mounted = mount(Tree);

      assert.throws(function () {
        expect(mounted).to.not.contain.text('List 3');
      }, assert.AssertionError);
    });

    it('should not throw when incorrect text contained when negated', function () {
      const mounted = mount(Tree);

      assert.doesNotThrow(function () {
        expect(mounted).to.not.contain.text('List 4');
      }, assert.AssertionError);
    });
  });
});

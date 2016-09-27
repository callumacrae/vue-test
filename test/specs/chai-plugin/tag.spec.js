import { mount, chaiPlugin } from '../../../src/index.js';
import Tree from '../../fixtures/Tree.vue';

chai.use(chaiPlugin);

describe('Chai plugin', function () {
  describe('.to.be.tag()', function () {
    it('should not throw for correct tag', function () {
      const mounted = mount(Tree);

      assert.doesNotThrow(function () {
        expect(mounted).to.be.tag('div');
      }, assert.AssertionError);
    });

    it('should throw for wrong tag', function () {
      const mounted = mount(Tree);

      assert.throws(function () {
        expect(mounted).to.be.tag('p');
      }, assert.AssertionError);
    });

    it('should throw for correct tag when negated', function () {
      const mounted = mount(Tree);

      assert.throws(function () {
        expect(mounted).to.not.be.tag('div');
      }, assert.AssertionError);
    });

    it('should not throw for wrong tag when negated', function () {
      const mounted = mount(Tree);

      assert.doesNotThrow(function () {
        expect(mounted).to.not.be.tag('p');
      }, assert.AssertionError);
    });
  });

  describe('.to.contain.tag()', function () {
    it('should not throw for correct tag', function () {
      const mounted = mount(Tree);

      assert.doesNotThrow(function () {
        expect(mounted).to.contain.tag('button');
      }, assert.AssertionError);
    });

    it('should throw for wrong tag', function () {
      const mounted = mount(Tree);

      assert.throws(function () {
        expect(mounted).to.contain.tag('table');
      }, assert.AssertionError);
    });

    it('should throw for correct tag when negated', function () {
      const mounted = mount(Tree);

      assert.throws(function () {
        expect(mounted).to.not.contain.tag('button');
      }, assert.AssertionError);
    });

    it('should not throw for wrong tag when negated', function () {
      const mounted = mount(Tree);

      assert.doesNotThrow(function () {
        expect(mounted).to.not.contain.tag('table');
      }, assert.AssertionError);
    });
  });
});

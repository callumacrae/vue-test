import { mount, chaiPlugin } from '../../../src/index.js';
import Tree from '../../fixtures/Tree.vue';

chai.use(chaiPlugin);

describe('Chai plugin', function () {
  describe('.to.have.attribute()', function () {
    it('should not throw when attribute present', function () {
      const mounted = mount(Tree);

      assert.doesNotThrow(function () {
        expect(mounted).to.have.attribute('data-foo');
      }, assert.AssertionError);
    });

    it('should throw when attribute not present', function () {
      const mounted = mount(Tree);

      assert.throws(function () {
        expect(mounted).to.have.attribute('class');
      }, assert.AssertionError);
    });

    it('should throw when attribute present and negated', function () {
      const mounted = mount(Tree);

      assert.throws(function () {
        expect(mounted).to.not.have.attribute('data-foo');
      }, assert.AssertionError);
    });

    it('should not throw when attribute not present and negated', function () {
      const mounted = mount(Tree);

      assert.doesNotThrow(function () {
        expect(mounted).to.not.have.attribute('class');
      }, assert.AssertionError);
    });

    describe('.that.equals()', function () {
      it('should not throw when attribute equals correct value', function () {
        const mounted = mount(Tree);

        assert.doesNotThrow(function () {
          expect(mounted).to.have.attribute('data-foo').that.equals('bar');
        }, assert.AssertionError);
      });

      it('should throw when attribute equals incorrect value', function () {
        const mounted = mount(Tree);

        assert.throws(function () {
          expect(mounted).to.have.attribute('data-foo').that.equals('wrong');
        }, assert.AssertionError);
      });

      it('should throw when attribute equals correct value and negated', function () {
        const mounted = mount(Tree);

        assert.throws(function () {
          expect(mounted).to.have.attribute('data-foo').that.not.equals('bar');
        }, assert.AssertionError);
      });

      it('should not throw when attribute equals incorrect value and negated', function () {
        const mounted = mount(Tree);

        assert.doesNotThrow(function () {
          expect(mounted).to.have.attribute('data-foo').that.not.equals('wrong');
        }, assert.AssertionError);
      });
    });
  });
});

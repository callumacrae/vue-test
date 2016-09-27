import { mount, chaiPlugin } from '../../../src/index.js';
import Tree from '../../fixtures/Tree.vue';

chai.use(chaiPlugin);

describe('Chai plugin', function () {
  describe('.to.be.ok', function () {
    it('should not throw when okay', function () {
      const mounted = mount(Tree);

      assert.doesNotThrow(function () {
        expect(mounted).to.be.ok;
      }, assert.AssertionError);
    });

    it('should throw when not okay', function () {
      const mounted = mount(Tree);

      assert.throws(function () {
        expect(mounted.find('baaaaa')).to.be.ok;
      }, assert.AssertionError);
    });
  });
});

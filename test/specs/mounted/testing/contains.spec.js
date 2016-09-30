import { mount } from '../../../../src/index.js';
import Tree from '../../../fixtures/Tree.vue';

describe('.contains()', function () {
  it('should return true when a selector is contained', function () {
    const mounted = mount(Tree);
    expect(mounted.contains('.child-div')).to.equal(true);
  });

  it('should return false when a selector doesnt match', function () {
    const mounted = mount(Tree);
    expect(mounted.contains('.not-found')).to.equal(false);
  });
});

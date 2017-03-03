import { mount2 } from '../../../../src/index.js';
import Tree from '../../../fixtures/Tree.vue';

describe('.prop()', function () {
  it('should return true when property found', function () {
    const mounted = mount2(Tree).find('.disabled');
    expect(mounted.prop('disabled')).to.equal(true);
  });

  it('should return false when property not found', function () {
    const mounted = mount2(Tree).find('.not-disabled');
    expect(mounted.prop('disabled')).to.equal(false);
  });
});

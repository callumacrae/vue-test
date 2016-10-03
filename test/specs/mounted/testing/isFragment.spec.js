import { mount } from '../../../../src/index.js';
import Fragment from '../../../fixtures/Fragment.vue';
import Tree from '../../../fixtures/Tree.vue';

describe('.isFragment()', function () {
  it('should return true when element is fragment', function () {
    const mounted = mount(Fragment);
    expect(mounted.isFragment()).to.equal(true);
  });

  it('should return false when element not empty', function () {
    const mounted = mount(Tree);
    expect(mounted.isFragment()).to.equal(false);
  });

  it('should throw error when element, not component', function () {
    const mounted = mount(Tree);
    const child = mounted.find('button');

    expect(function () {
      child.isFragment();
    }).to.throw(/can only be called on root components/);
  });
});

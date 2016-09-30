import { mount } from '../../../../src/index.js';
import Tree from '../../../fixtures/Tree.vue';

describe('.matches()', function () {
  it('should return true when a selector matches', function () {
    const mounted = mount(Tree);
    const child = mounted.find('.child-div');

    expect(child.matches('#app .child-div')).to.equal(true);
  });

  it('should return false when a selector doesnt match', function () {
    const mounted = mount(Tree);
    const child = mounted.find('.child-div');

    expect(child.matches('p')).to.equal(false);
  });
});

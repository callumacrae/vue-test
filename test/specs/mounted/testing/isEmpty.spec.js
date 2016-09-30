import { mount } from '../../../../src/index.js';
import Tree from '../../../fixtures/Tree.vue';

describe('.matches()', function () {
  it('should return true when element empty', function () {
    const mounted = mount(Tree);
    const child = mounted.find('.empty');

    expect(child.isEmpty()).to.equal(true);
  });

  it('should return false when element not empty', function () {
    const mounted = mount(Tree);
    const child = mounted.find('.a');

    expect(child.isEmpty()).to.equal(false);
  });
});

import { mount } from '../../../src/index.js';
import Tree from '../../fixtures/Tree.vue';

describe('.data()', function () {
  it('should return data attributes of element', function () {
    const mounted = mount(Tree);
    expect(mounted.data('foo')).to.equal('bar');
  });

  it('should return undefined when data attribute not found', function () {
    const mounted = mount(Tree);
    expect(mounted.data('blalba')).to.equal(undefined);
  });
});

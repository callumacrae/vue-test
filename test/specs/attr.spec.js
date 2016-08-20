import { mount } from 'src/index.js';
import Tree from '../fixtures/Tree.vue';

describe('.attr()', function () {
  it('should return attributes of element', function () {
    const mounted = mount(Tree);
    expect(mounted.attr('id')).to.equal('app');
  });

  it('should return null when attribute not found', function () {
    const mounted = mount(Tree);
    expect(mounted.attr('src')).to.equal(null);
  });
});

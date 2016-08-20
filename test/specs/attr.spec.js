import { mount } from 'src/index.js';
import Tree from '../fixtures/Tree.vue';

describe('.attr()', function () {
  it('should return attributes of element', function () {
    const mounted = mount(Tree);
    expect(mounted.attr('data-foo')).to.equal('bar');
  });

  it('should return undefined when attribute not found', function () {
    const mounted = mount(Tree);
    expect(mounted.data('notfound')).to.equal(undefined);
  });
});

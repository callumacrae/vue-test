import { mount } from '../../../../src/index.js';
import Tree from '../../../fixtures/Tree.vue';

describe('.parent()', function () {
  it('should return parent of element', function () {
    const mounted = mount(Tree);
    const parent = mounted.find('.a').parent();

    expect(parent).to.be.have.length(1);
    expect(parent._el[0]).to.be.an.instanceof(HTMLDivElement);
    expect(parent._el[0].className).to.equal('second-child-div');
  });

  it('should return matching-selector parent of element', function () {
    const mounted = mount(Tree);
    const parent = mounted.find('.a').parent('#app');

    expect(parent).to.be.have.length(1);
    expect(parent._el[0]).to.be.an.instanceof(HTMLDivElement);
    expect(parent._el[0].id).to.equal('app');
  });

  it('should return null if selector fails to match parent', function () {
    const mounted = mount(Tree);
    const children = mounted.find('.second-child-div').parent('.not-found');

    expect(children).to.equal(null);
  });
});

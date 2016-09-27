import { mount } from '../../../../src/index.js';
import Tree from '../../../fixtures/Tree.vue';

describe('.find()', function () {
  it('should return single elements', function () {
    const mounted = mount(Tree);
    const childTitle = mounted.find('h1');

    expect(childTitle).to.have.property('_vm');
    expect(childTitle).to.have.property('_el');
    expect(childTitle._vm).to.have.property('$el');
    expect(childTitle._el).to.be.have.length(1);
    expect(childTitle._el[0]).to.be.an.instanceof(HTMLHeadingElement);

    expect(childTitle._el[0].outerHTML).to.equal('<h1>Title</h1>');
  });

  it('should return multiple elements', function () {
    const mounted = mount(Tree);
    const childTitle = mounted.find('ul li');

    expect(childTitle._el).to.be.have.length(3);
    expect(childTitle._el[0]).to.be.an.instanceof(HTMLLIElement);
    expect(childTitle._el[1]).to.be.an.instanceof(HTMLLIElement);
    expect(childTitle._el[2]).to.be.an.instanceof(HTMLLIElement);
  });

  it('should not modify the original vm', function () {
    const mounted = mount(Tree);
    const childTitle = mounted.find('h1');

    expect(mounted._el).to.not.deep.equal(childTitle._el);
  });

  it('should return null if nothing found', function () {
    const mounted = mount(Tree);
    const child = mounted.find('.doesnt-exist');

    expect(child).to.equal(null);
  });
});

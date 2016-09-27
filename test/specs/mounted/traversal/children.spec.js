import { mount } from '../../../../src/index.js';
import Tree from '../../../fixtures/Tree.vue';

describe('.children()', function () {
  it('should return children of single element', function () {
    const mounted = mount(Tree);
    const children = mounted.find('ul').children();

    expect(children).to.be.have.length(3);
    expect(children._el[0]).to.be.an.instanceof(HTMLLIElement);
    expect(children._el[1]).to.be.an.instanceof(HTMLLIElement);
    expect(children._el[2]).to.be.an.instanceof(HTMLLIElement);
  });

  it('should return children of multiple elements', function () {
    const mounted = mount(Tree);
    const children = mounted.find('div').children();

    expect(children).to.be.have.length(3);
    expect(children._el[0]).to.be.an.instanceof(HTMLUListElement);
    expect(children._el[1]).to.be.an.instanceof(HTMLSpanElement);
    expect(children._el[2]).to.be.an.instanceof(HTMLSpanElement);
  });

  it('should return filtered children of single element', function () {
    const mounted = mount(Tree);
    const children = mounted.find('.second-child-div').children('.b');

    expect(children).to.have.length(1);
    expect(children._el[0]).to.be.an.instanceof(HTMLSpanElement);
  });

  it('should return filtered children of multiple elements', function () {
    const mounted = mount(Tree);
    const children = mounted.find('div,ul').children('.b');

    expect(children).to.have.length(2);
    expect(children._el[0]).to.be.an.instanceof(HTMLLIElement);
    expect(children._el[1]).to.be.an.instanceof(HTMLSpanElement);
  });

  it('should return null if nothing found', function () {
    const mounted = mount(Tree);
    const children = mounted.find('span').children();

    expect(children).to.equal(null);
  });
});

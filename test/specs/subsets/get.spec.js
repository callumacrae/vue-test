import { mount } from '../../../src/index.js';
import Tree from '../../fixtures/Tree.vue';

describe('.get()', function () {
  it('should return array when called with no args', function () {
    const mounted = mount(Tree);
    const lis = mounted.find('li');

    const lisArray = lis.get();

    expect(lisArray).to.be.an.instanceof(Array);
    expect(lisArray).to.have.length(3);

    lisArray.forEach(function (li) {
      expect(li).to.be.an.instanceof(HTMLLIElement);
    });
  });

  it('should return element when called with number', function () {
    const mounted = mount(Tree);
    const lis = mounted.find('li');
    const li = lis.get(1);

    expect(li).to.be.an.instanceof(HTMLLIElement);
    expect(li.textContent).to.equal('List 2');
  });

  it('should return null when no element', function () {
    const mounted = mount(Tree);
    const lis = mounted.find('li');
    const li = lis.get(3);

    expect(li).to.equal(null);
  });
});

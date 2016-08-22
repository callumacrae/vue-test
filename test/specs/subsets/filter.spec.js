import { mount } from 'src/index.js';
import Tree from '../../fixtures/Tree.vue';
import MountedComponent from '../../../src/MountedComponent';

describe('.filter()', function () {
  it('should get a subset of elements', function () {
    const mounted = mount(Tree);
    const lis = mounted.find('li');

    let called = 0;

    const subset = lis.filter(function (i, li) {
      expect(i).to.equal(called);

      expect(li).to.be.an.instanceof(MountedComponent);
      expect(li._el[0]).to.equal(lis._el[i]);

      called++;

      return li.text().length === 6;
    });

    expect(subset).to.be.an.instanceof(MountedComponent);
    expect(subset).to.have.length(2);

    expect(subset._el).to.contain(lis._el[1]);
    expect(subset._el).to.not.contain(lis._el[2]);
  });

  it('should return an empty MountedComponent, if nothing found', function () {
    const mounted = mount(Tree);
    const lis = mounted.find('li');

    const subset = lis.filter(() => false);

    expect(subset).to.be.an.instanceof(MountedComponent);
    expect(subset).to.have.length(0);
  });
});

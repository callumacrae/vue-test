import { mount } from '../../../../src/index.js';
import Tree from '../../../fixtures/Tree.vue';
import MountedComponent from '../../../../src/MountedComponent';

describe('.each()', function () {
  it('should iterate through elements', function () {
    const mounted = mount(Tree);
    const lis = mounted.find('li');

    let called = 0;

    lis.each(function (i, li) {
      expect(i).to.equal(called);

      expect(li).to.be.an.instanceof(MountedComponent);
      expect(li._el[0]).to.equal(lis._el[i]);

      called++;
    });

    expect(called).to.equal(3);
  });

  it('should have `this` equal to the iteration element', function () {
    const mounted = mount(Tree);

    mounted.find('li').each(function (i, li) {
      expect(this).to.equal(li);
    });
  });

  it('should return itself', function () {
    const mounted = mount(Tree);
    expect(mounted.each(() => {})).to.equal(mounted);
  });
});

import { mount } from 'src/index.js';
import Tree from '../../fixtures/Tree.vue';
import MountedComponent from '../../../src/MountedComponent';

describe('.map()', function () {
  /* eslint-disable array-callback-return */

  it('should iterate through elements', function () {
    const mounted = mount(Tree);
    const lis = mounted.find('li');

    let called = 0;

    lis.map(function (i, li) {
      expect(i).to.equal(called);

      expect(li).to.be.an.instanceof(MountedComponent);
      expect(li._el[0]).to.equal(lis._el[i]);

      called++;
    });

    expect(called).to.equal(3);
  });

  it('should have `this` equal to the iteration element', function () {
    const mounted = mount(Tree);

    mounted.find('li').map(function (i, li) {
      expect(this).to.equal(li);
    });
  });

  it('should collect return values', function () {
    const mounted = mount(Tree);
    const lis = mounted.find('li');

    const mapReturns = lis.map((i, li) => li.text().indexOf(i + 1));
    expect(mapReturns).to.deep.equal([5, 5, 5]);
  });
});

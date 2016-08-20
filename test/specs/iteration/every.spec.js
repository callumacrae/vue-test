import { mount } from 'src/index.js';
import Tree from '../../fixtures/Tree.vue';
import MountedComponent from '../../../src/MountedComponent';

describe('.every()', function () {
  /* eslint-disable array-callback-return */

  it('should iterate through elements', function () {
    const mounted = mount(Tree);
    const lis = mounted.find('li');

    let called = 0;

    lis.every(function (i, li) {
      expect(i).to.equal(called);

      expect(li).to.be.an.instanceof(MountedComponent);
      expect(li._el[0]).to.equal(lis._el[i]);

      called++;

      return true;
    });

    expect(called).to.equal(3);
  });

  it('should have `this` equal to the iteration element', function () {
    const mounted = mount(Tree);

    mounted.find('li').every(function (i, li) {
      expect(this).to.equal(li);
      return true;
    });
  });

  it('should return true when predicate returns true every time', function () {
    const mounted = mount(Tree);
    const lis = mounted.find('li');

    const returnValue = lis.every((i, li) => li.text().indexOf('List') !== -1);
    expect(returnValue).to.equal(true);
  });

  it('should return false when predicate returns false', function () {
    const mounted = mount(Tree);
    const lis = mounted.find('li');

    const returnValue = lis.every((i, li) => li.text() === 'List 2');
    expect(returnValue).to.equal(false);
  });
});

import { mount } from 'src/index.js';
import Tree from '../../fixtures/Tree.vue';
import MountedComponent from '../../../src/MountedComponent';

describe('.eq()', function () {
  it('should return element when called with number', function () {
    const mounted = mount(Tree);
    const lis = mounted.find('li');
    const li = lis.eq(1);

    expect(li).to.be.an.instanceof(MountedComponent);
    expect(li).to.have.length(1);
    expect(li.text()).to.equal('List 2');
  });

  it('should return null when no element', function () {
    const mounted = mount(Tree);
    const lis = mounted.find('li');
    const li = lis.eq(3);

    expect(li).to.equal(null);
  });
});

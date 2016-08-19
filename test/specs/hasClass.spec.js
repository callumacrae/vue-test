import { mount } from 'src/index.js';
import Tree from '../fixtures/Tree.vue';

describe('.hasClass()', function () {
  it('should return true when a class is present', function () {
    const mounted = mount(Tree);
    const child = mounted.find('.child-div');

    expect(child.hasClass('child-div')).to.equal(true);
  });

  it('should return false when a class is not present', function () {
    const mounted = mount(Tree);
    const child = mounted.find('.child-div');

    expect(child.hasClass('no-class')).to.equal(false);
  });

  it('should return true when the second element has class', function () {
    const mounted = mount(Tree);
    const child = mounted.find('li');

    expect(child.hasClass('list-item')).to.equal(true);
  });

  it('should not freak out when there are no classes', function () {
    const mounted = mount(Tree);
    expect(mounted.hasClass('no-class')).to.equal(false);
  });
});

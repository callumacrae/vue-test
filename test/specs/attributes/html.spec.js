import { mount } from 'src/index.js';
import Title from '../../fixtures/Title.vue';

describe('.html()', function () {
  it('should return HTML of element', function () {
    const mounted = mount(Title);

    expect(mounted.html()).to.equal('<h1>Hello world!</h1>');
  });
});

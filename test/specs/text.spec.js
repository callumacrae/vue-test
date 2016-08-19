import { mount } from 'src/index.js';
import Title from '../fixtures/Title.vue';

describe('.text()', function () {
  it('should return text of element', function () {
    const mounted = mount(Title, { title: 'foo bar baz' });

    expect(mounted.text()).to.equal('foo bar baz');
  });
});

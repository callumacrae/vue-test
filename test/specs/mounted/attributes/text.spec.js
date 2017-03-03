import { mount2 } from '../../../../src/index.js';
import Title from '../../../fixtures/Title.vue';

describe('.text()', function () {
  it('should return text of element', function () {
    const mounted = mount2(Title, { props: { title: 'foo bar baz' } });

    expect(mounted.text()).to.equal('foo bar baz');
  });
});

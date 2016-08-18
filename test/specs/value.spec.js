import mount from 'src/index.js';
import Input from '../fixtures/Input.vue';

describe('.value()', function () {
  it('should return value of input', function () {
    const mounted = mount(Input);

    expect(mounted.value()).to.equal('default value');
  });
});

import { mount2 } from '../../../../src/index.js';
import Input from '../../../fixtures/Input.vue';
import Title from '../../../fixtures/Title.vue';

describe('.value()', function () {
  it('should return value of input', function () {
    const mounted = mount2(Input);

    expect(mounted.value()).to.equal('default value');
  });

  it('should return empty string when no value', function () {
    const mounted = mount2(Input, { props: { value: '' } });
    expect(mounted.value()).to.equal('');
  });

  it('should return undefined when not an input', function () {
    const mounted = mount2(Title);
    expect(mounted.value()).to.equal(undefined);
  });
});

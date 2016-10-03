import { mount } from '../../../../src/index.js';
import Events from '../../../fixtures/Events.vue';

describe('.trigger()', function () {
  it('should return trigger events', function () {
    const mounted = mount(Events);
    const link = mounted.find('a:first-child');

    link.trigger('click');

    expect(link._el[0].className).to.equal('clicked');
  });

  it('should trigger multiple events', function () {
    const mounted = mount(Events);

    mounted.find('a:nth-child(odd)').trigger('click');

    const links = mounted.find('a');

    expect(links._el[0].className).to.equal('clicked');
    expect(links._el[1].className).to.equal('unclicked');
    expect(links._el[2].className).to.equal('clicked');
    expect(links._el[3].className).to.equal('unclicked');
    expect(links._el[4].className).to.equal('clicked');
  });
});

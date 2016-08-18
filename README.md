# vue-test

> Component testing for Vue.js

**WIP**

## Mounting a component for testing

```js
import mount from 'vue-test';
import YourComponent from './YourComponent.vue';

const mountedComponent = mount(YourComponent, {
  prop: 'Object of props'
});

expect(mountedComponent.find('h1').text()).to.equal('Hello world!');
```

## Methods

- [x] `.find()`
- [ ] `.children()`
- [ ] `.parent()`
- [ ] `.contains(selector)`
- [ ] `.hasClass(className)`
- [ ] `.is(selector)`
- [x] `.html()`
- [x] `.text()`
- [x] `.value()`
- [ ] `.isEmpty()`
- [ ] `.simulate(event)`

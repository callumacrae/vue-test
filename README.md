# vue-test

> Component testing for Vue.js

**WIP**

## Mounting a component for testing

```js
import { mount } from 'vue-test';
import YourComponent from './YourComponent.vue';

const mountedComponent = mount(YourComponent, {
  prop: 'Object of props'
});

expect(mountedComponent.find('h1').text()).to.equal('Hello world!');
```

## Methods

### Traversal

- [x] `.find()`
- [ ] `.children()`
- [ ] `.parent()`

### Attributes

- [x] `.html()`
- [x] `.text()`
- [x] `.value()`
- [ ] `.data()`
- [ ] `.attr()`
- [ ] `.prop()`

### Iteration

- [ ] `.each()`
- [ ] `.map()`
- [ ] `.some()`
- [ ] `.every()`

### Testing

- [ ] `.contains(selector)`
- [x] `.hasClass(className)`
- [ ] `.is(selector)`
- [ ] `.isEmpty()`

### Events

- [ ] `.simulate(event)`
- [ ] `.fired(event)` ?

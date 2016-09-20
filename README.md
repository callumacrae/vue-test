# vue-test [![Build Status](https://travis-ci.org/callumacrae/vue-test.svg?branch=master)](https://travis-ci.org/callumacrae/vue-test)

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
- [x] `.children()`
- [ ] `.parent()`

### Attributes

- [x] `.html()`
- [x] `.text()`
- [x] `.value()`
- [x] `.data()`
- [x] `.attr()`
- [x] `.prop()`

### Iteration

- [x] `.each()`
- [x] `.map()`
- [x] `.some()`
- [x] `.every()`

### Subsets

- [x] `.get()`
- [x] `.eq()`
- [x] `.filter()`

### Testing

- [ ] `.contains(selector)`
- [x] `.hasClass(className)`
- [ ] `.is(selector)`
- [ ] `.isEmpty()`

### Events

- [ ] `.simulate(event)`
- [ ] `.fired(event)` ?

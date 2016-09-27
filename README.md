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
- [ ] `.matches(selector)`
- [ ] `.isEmpty()`

### Events

- [ ] `.trigger(event)`
- [ ] `.fired(event)` ?

## Test helpers

- [x] `expect(mountedComponent).to.be.ok`
- [x] `expect(mountedComponent).to.be.tag('p')`
- [x] `expect(mountedComponent).to.contain.tag('p')`
- [ ] `expect(mountedComponent).to.match('#id .class')`
- [ ] `expect(mountedComponent).to.contain('#id .class')`
- [x] `expect(mountedComponent).to.have.className('alert')`
- [ ] `expect(mountedComponent).to.not.be.fragment`
- [ ] `expect(mountedComponent).to.have.value('input value')`
- [ ] `expect(mountedComponent).to.contain.text('some text')`
- [ ] `expect(mountedComponent).to.have.attribute('style')`
- [ ] `expect(mountedComponent).to.have.attribute('style').that.equals('something')`

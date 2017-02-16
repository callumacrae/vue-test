# vue-test [![Build Status](https://travis-ci.org/callumacrae/vue-test.svg?branch=master)](https://travis-ci.org/callumacrae/vue-test)

> Component testing utilities for Vue.js (work with both Vue 1 and 2)

## Installation

```
$ npm install --save-dev vue-test
```

## Usage

The library is divided into two parts: the `mount()` function and the chai
assertion library plugin. The `mount()` function is used for mounting components
in your tests without having to directly interact with the DOM, and the chai
plugin can be used to write readable tests with understandable output for
mounted Vue components.

### The `mount()` function

The `mount()` function takes two arguments, a Vue component, and some optional
properties, and returns a wrapped mounted component with some useful utility
functions.

```js
import { mount } from 'vue-test';
import Title from './Title.vue';

const mountedTitle = mount(Title, {
  title: 'Hello world!'
});

mountedTitle.find('h1').text(); // Hello world!
```

Check out [mount-api.md](docs/mount-api.md) for a full list of the available
functions.


### Chai plugin

vue-test includes a chai plugin which you can use to test a component mounted
with the `mount()` function.

Here's how you add it:

```js
import { chaiPlugin } from 'vue-test';
chai.use(chaiPlugin);
```

Here's a very quick overview of what you can do:

- `expect(mountedComponent).to.be.ok`
- `expect(mountedComponent).to.be.tag('p')`
- `expect(mountedComponent).to.contain.tag('p')`
- `expect(mountedComponent).to.match.selector('#id .class')`
- `expect(mountedComponent).to.contain.selector('#id .class')`
- `expect(mountedComponent).to.be.empty`
- `expect(mountedComponent).to.have.className('alert')`
- `expect(mountedComponent).to.have.value('input value')`
- `expect(mountedComponent).to.have.text('some text')`
- `expect(mountedComponent).to.contain.text('some text')`
- `expect(mountedComponent).to.have.attribute('style')`
- `expect(mountedComponent).to.have.attribute('style').that.equals('something')`

It's all pretty descriptive and understandable, but for full explanations, see
[chai-plugin-api.md](docs/chai-plugin-api.md).

### Contributing

If you feel something is missing or find a bug, feel free to send a PR or open
an issue. If you haven't contributed to a project on GitHub before, feel free to
ask me for help and I can help you out :smile:

### License

This project is released under the MIT license.

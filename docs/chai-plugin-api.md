# Chai plugin

vue-test includes a chai plugin which you can use to test a component mounted
with the `mount()` function.

It cannot test Vue components directly as it relies on the utility functions
provided by `mount()`. Wrap your components using `mount()` first: the
documentation for that can be found in [mount-api.md](mount-api.md).

Here's how you add the plugin to chai:

```js
import { chaiPlugin } from 'vue-test';
chai.use(chaiPlugin);
```

This adds a number of useful functions that you can use when using the BDD
style of chai assertions with `expect` and `should`.

Here's a very quick overview of what you can do:

- `expect(mountedComponent).to.be.ok`
- `expect(mountedComponent).to.be.tag('p')`
- `expect(mountedComponent).to.contain.tag('p')`
- `expect(mountedComponent).to.match.selector('#id .class')`
- `expect(mountedComponent).to.contain.selector('#id .class')`
- `expect(mountedComponent).to.be.empty`
- `expect(mountedComponent).to.have.className('alert')`
- `expect(mountedComponent).to.not.be.fragment`
- `expect(mountedComponent).to.have.value('input value')`
- `expect(mountedComponent).to.have.text('some text')`
- `expect(mountedComponent).to.contain.text('some text')`
- `expect(mountedComponent).to.have.attribute('style')`
- `expect(mountedComponent).to.have.attribute('style').that.equals('something')`

All of these are negatable: just add `.not` after `.to`.

And a full breakdown:

## `.to.be.ok`

Tests whether a component exists.

```js
expect(mountedComponent).to.be.ok; // correct
expect(mountedComponent.find('.not-found')).to.be.ok; // will throw
```

## `.to.be.tag(tagName)`

Tests whether a component is an element with a given tag name.

```js
expect(mountedComponent).to.be.tag('p');
expect(mountedComponent).not.to.be.tag('div');
```

## `.to.contain.tag(tagName)`

Tests whether a component contains an element with a given tag name.

```js
expect(mountedComponent).to.contain.tag('p');
```

## `.to.match.selector(selector)`

Tests whether a component matches a given selector.

```js
expect(mountedComponent).to.match.selector('p.text [data-something]');
```

## `.to.contain.selector(selector)`

Tests whether a component contains an element matching a given selector.

```js
expect(mountedComponent).to.contain.selector('.component__child');
```

## `.to.be.empty`

Tests whether a component has no children.

```js
expect(mountedComponent).to.be.empty;
```

## `.to.have.className(className)`

Tests whether a component has a given class name.

```js
expect(mountedComponent).to.have.className('component--red');
```

## `.to.be.fragment`

Tests whether a component is a fragment instance.

```js
expect(mountedComponent).to.be.fragment;
```

## `.to.have.value(className)`

Tests whether a component has a given value (useful for input elements).

```js
expect(mountedComponent).to.have.value('input text here');
```

## `.to.have.text(className)`

Tests whether a component's text equals a given value.

```js
expect(mountedComponent).to.have.text('Hello world!');
```

## `.to.contain.text(className)`

Tests whether a component's text contains a given value.

```js
expect(mountedComponent).to.contain.text('world!');
```

## `.to.have.attribute(attribute)`

Tests whether a component has a given attribute.

```js
expect(mountedComponent).to.have.attribute('id');
```

## `.to.have.attribute(attribute).that.equals(attributeValue)`

Tests whether a component has a given attribute, and tests it against a given
value.

```js
expect(mountedComponent).to.have.attribute('id').that.equals('app');
```

# The `mount()` function - API documentation

## The `mount()` function

The `mount()` function takes two arguments, a Vue component, and some optional
properties, and returns a wrapped mounted component with some useful utility
functions.

```js
const mountedComponent = mount(VueComponent, optionalProps);
```

## Traversal utility functions

Three traversal functions allow you to navigate around the DOM inside your
component.

They all return `null` if nothing is found.

### `.find(selector)`

Returns all the children of a component matching a given selector:

```js
const anchorsInComponent = mountedComponent.find('a');
```

### `.children(selector)`

Gets all the direct children of a component, optionally matching a given selector:

```js
const componentChildren = mountedComponent.children();
const componentChildrenAnchors = mountedComponent.children('a');
```

### `.parent(selector)`

Returns either the immediate parent of a component, or if specified the first
parent matching an optional selector.

```js
const componentParent = mountedComponent.parent();
const componentParentForm = mountedComponent.parent('form');
```

## Attribute utility functions

These functions allow you to get data from an element, such as the contained
HTML or the value of an attribute.

### `.html()`

Return the HTML of a component.

```js
const componentHtml = mountedComponent.html();
```

### `.text()`

Return the text of a component.

```js
const componentHtml = mountedComponent.text();
```

### `.value()`

Return the value of a component (useful for input elements).

```js
const componentValue = mountedComponent.value();
```

### `.data()`

Return the value of a data attribute of a component.

```js
const componentDataTimeout = mountedComponent.data('timeout');
```

### `.attr()`

Return the value of an attribute of a component.

```js
const componentId = mountedComponent.attr('id');
```

### `.prop()`

Return the value of a property of a component. Will be true or false.

```js
const componentChecked = mountedComponent.prop('checked');
```

### Iteration utility functions

These functions allow you to iterate through components with multiple elements,
running a callback on each one. They're basically the same as JavaScript's 
Array iteration functions with the same names.

`this` is the current element as a mounted component.

#### `.each()`

Equivalent to `[].forEach()`. Iterate through elements, running a callback on
each one.

```js
mountedComponent.find('p').each(function (mountedParagraph, index) {
  this.html(); // this is a mounted component, too!
});
```

#### `.map()`

Equivalent to `[].map()`. Iterate through elements, running a callback on each
one and returning an array of the callback return values.


```js
const paragraphTexts = mountedComponent.find('p').map(function () {
  return this.text();
});
```

#### `.some()`

Equivalent to `[].some()`. Iterate through elements, testing each element and
returning true if the callback function returns true for any of the elements.

```js
const anyEmpty = mountedComponent.find('p').some(function () {
  return this.isEmpty();
});
```

#### `.every()`

Equivalent to `[].every()`. Iterate through elements, testing each element and
returning true if the callback function returns true for every element.

```js
const allEmpty = mountedComponent.find('p').every(function () {
  return this.isEmpty();
});
```

### Subset utility functions

The subset utility functions exist to help you get a subset of the elements of
a component: be that just one element, or a number of them.

#### `.get(i)`

Gets either the elements contained within a component as an Array, or an
individual element if an index is specified.

```js
const paragraphElements = mountedComponent.find('p').get();
const paragraphElement = mountedComponent.find('p').get(2);
```

#### `.eq(i)`

Returns the element in a component at a given index as a mounted component.

```js
const mountedParagraph = mountedComponent.find('p').eq(2);
```

#### `.filter(predicate)`

Returns a subset of the elements within a component according to a predicate
function. The predicate function will be passed the elements and must return
true or false. Returns a mounted component, not an array of elements.

```js
const emptyParagraphs = mountedComponent.find('p').filter(function () {
  return this.isEmpty();
});
```

### Testing utility functions

These functions return true or false depending on whether something is true or
not.

#### `.contains(selector)`

Returns true if a component contains an element matching a given selector.

```js
const containsParagraph = mountedComponent.contains('p');
```

#### `.hasClass(className)`

Returns true if a component has a given class name.

```js
const isRed = mountedComponent.hasClass('component--red');
```

#### `.matches(selector)`

Returns true if the component itself matches a given selector.

```js
const isParagraph = mountedComponent.is('p');
```

#### `.isEmpty()`

Returns true if a component has no children.

```js
const isEmpty = mountedComponent.isEmpty();
```

#### `.isFragment()`

Returns true if a component is a fragment instance. Can only be called on the
instance itself: won't work on a new mounted component created using `.find()`.

```js
const isFragment = mountedComponent.isFragment();
```

### Event utility functions

There is only one event utility function, `.trigger()`.

#### `.trigger(event)`

Triggers an event on an element. Accepts either an instance of the `Event`
class, or a string containing the event name to fire.

```js
mountedComponent.trigger('click');
mountedComponent.trigger(new Event('some-event'));
```

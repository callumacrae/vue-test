<template>
  <div id="app" data-foo="bar">
    <h1>Title</h1>
    <p>This app has a bit of structure!</p>
    <p>Yay</p>
    <div class="child-div">
      <ul>
        <li>List 1</li>
        <li class="list-item">List 2</li>
        <li class="b">List 3 with <a href="#">link</a></li>
      </ul>
    </div>

    <div class="second-child-div">
      <span class="a">a</span>
      <span class="b">b</span>
    </div>

    <button class="disabled" disabled>Disabled button</button>
    <button class="not-disabled">Not disabled button</button>

    <div class="empty"></div>
  </div>
</template>

<script>
  export default {
  };
</script>

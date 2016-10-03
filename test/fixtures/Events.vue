<template>
  <div>
    <a @click="clicked" class="unclicked">one</a>
    <a @click="clicked" class="unclicked">two</a>
    <a @click="clicked" class="unclicked">three</a>
    <a @click="clicked" class="unclicked">four</a>
    <a @click="clicked" class="unclicked">five</a>
  </div>
</template>

<script>
  export default {
    methods: {
      clicked(e) {
        e.target.className = 'clicked';
      }
    }
  };
</script>

<template>
  <input type="text" value="{{ value }}">
</template>

<script>
  export default {
    props: [{
      name: 'value',
      default: 'default value'
    }]
  };
</script>

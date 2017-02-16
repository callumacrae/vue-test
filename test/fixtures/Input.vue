<template>
  <input type="text" :value="value">
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        default: 'default value'
      }
    }
  };
</script>

<template>
  <input type="text" value="{{ value || 'default value' }}">
</template>

<script>
  export default {
    props: ['value']
  };
</script>

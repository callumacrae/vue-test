<template>
  <h1>{{ title || "Hello world!" }}</h1>
</template>

<script>
  export default {
    props: ['title']
  };
</script>

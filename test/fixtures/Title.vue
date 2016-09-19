<template>
  <h1>{{ title || titleKebabTest || "Hello world!" }}</h1>
</template>

<script>
  export default {
    props: ['title', 'titleKebabTest']
  };
</script>

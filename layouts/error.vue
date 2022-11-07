<template>
  <div class="app-error">
    <h1 v-if="error.statusCode === 404">Page Not Found</h1>
    <h1 v-else>Page Error</h1>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

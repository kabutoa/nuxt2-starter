<template>
  <div class="app-list-detail">{{ $route.params.id }}</div>
</template>

<script>
export default {
  validate({ params }) {
    // id must be a number
    return /^\d+$/.test(params.id)
  },
  transition: 'slide',
}
</script>

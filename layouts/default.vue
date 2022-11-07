<template>
  <div class="app">
    <global-header />
    <nuxt keep-alive />
  </div>
</template>

<script>
import GlobalHeader from '@/components/header'

export default {
  components: {
    GlobalHeader,
  },
}
</script>

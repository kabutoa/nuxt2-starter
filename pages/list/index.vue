<template>
  <div class="app-list">
    <ul>
      <li v-for="i in 5" :key="i">
        <nuxt-link :to="`/list/${i}`">id: {{ i }}</nuxt-link>
      </li>
      <li>
        <!-- 参数校验 -->
        <nuxt-link to="/list/NaN">id: NaN</nuxt-link>
      </li>
    </ul>
  </div>
</template>

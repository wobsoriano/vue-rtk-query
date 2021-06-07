<template>
  <Pokemon />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Pokemon from './components/Pokemon.vue';

export default defineComponent({
  name: 'App',
  components: { Pokemon }
})
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
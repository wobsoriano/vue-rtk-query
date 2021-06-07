<template>
  <div class="app">
    <input type="text" v-model="name" />
    <p v-if="isLoading">Fetching...</p>
    <div v-else>
      <p v-if="error" class="error">Error fetching pokemon</p>
      <div v-else class="data-container">
        <pre>{{data}}</pre>
      </div>
      <button @click="refetch">Refetch</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { useGetPokemonByNameQuery } from '../store';

export default defineComponent({
  setup() {
    const name = ref('pikachu');

    return {
      ...useGetPokemonByNameQuery(name),
      name,
    }
  }
})
</script>

<style>
.app {
  width: 800px;
  margin: auto;
  padding: 1em;
}

.data-container {
  height: 70vh;
  overflow: scroll;
  margin-top: 20px;
}

.error {
  color: red;
}

input {
  font-size: large;
  padding: 0.2em;
  width: 100%
}

button {
  margin-top: 10px;
}
</style>
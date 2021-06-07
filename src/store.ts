import { configureStore } from '@reduxjs/toolkit';
import { computed, onUnmounted, ref, Ref, onMounted, watch } from 'vue'
import { pokemonApi } from './services';

const reduxStore = configureStore({
    reducer: {
      [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pokemonApi.middleware),
})

export function useGetPokemonByNameQuery(name: Ref<string>) {
    const store = ref(reduxStore.getState());
    const refetch = ref(() => {});
    const unsubscribe = ref(() => {});

    const unsubscribeStore = reduxStore.subscribe(() => {
        store.value = reduxStore.getState();
    });

    const getPokemonByName = () => {
        const result = reduxStore.dispatch(pokemonApi.endpoints.getPokemonByName.initiate(name.value.toLowerCase()));
        refetch.value = result.refetch;
        unsubscribe.value  = result.unsubscribe;
    }

    const result = computed(() => pokemonApi.endpoints.getPokemonByName.select(name.value.toLowerCase())(store.value));
  
    const isLoading = computed(() => result.value.isLoading);
    const error = computed(() => result.value.isError);
    const data = computed(() => result.value.data);

    onMounted(getPokemonByName);
    watch(name, getPokemonByName);

    onUnmounted(() => {
        unsubscribeStore();
        unsubscribe.value();
    });

    return {
        data,
        refetch,
        isLoading,
        error
    }
}
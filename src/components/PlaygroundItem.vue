<script setup>

import { ref, watch } from 'vue'
import { useOptionStore } from '../stores/optionStore'


const store = useOptionStore()

const props = defineProps({
    the_prop: {
      type: Object,
      required: true
    }
})

const val = ref(null)

watch( () => store.pings, (pings) => val.value = `pings: ${ pings }`)

</script>


<template>
  <div>
    <p>PlaygoundItem</p>
    <p>{{ JSON.stringify( props.the_prop) }}</p>
    <p>watcher: {{ val }}</p>
    <p>reactive: {{ store.pings }}</p>
  </div>
</template>

<style lang="scss">

</style>

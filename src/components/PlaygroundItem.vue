<script setup>

const props = defineProps({
    the_prop: {
      type: Object,
      required: true
    }
})

</script>


<template>
  <div>
    <p>PlaygoundItem</p>
    <p>{{ JSON.stringify( props.the_prop) }}</p>
  </div>
</template>

<style lang="scss">

</style>

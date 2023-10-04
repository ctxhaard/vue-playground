<script setup>

const props = defineProps({
    the_prop: {
      type: String,
      required: true
    }
})

</script>


<template>
  <div>
    <p>PlaygoundItem</p>
    <p>{{ props.the_prop }}</p>
  </div>
</template>

<style lang="scss">

</style>

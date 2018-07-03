<template>
  <div id="app-index">
    <app-header />
    <app-works />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Works from '~/components/Works.vue'

export default {
  components: {
    'app-header': Header,
    'app-works': Works
  }
}
</script>

<style>

</style>

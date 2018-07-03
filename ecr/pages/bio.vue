<template>
  <div id="app-bio">
    <app-header />
    <app-bio />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Bio from '~/components/Bio.vue'

export default {
  components: {
    'app-header': Header,
    'app-bio': Bio
  }
}
</script>

<style>

</style>

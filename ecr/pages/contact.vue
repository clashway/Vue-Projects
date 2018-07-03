<template>
  <div id="app-index">
    <app-header />
    <app-contact />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Contact from '~/components/Contact.vue'

export default {
  components: {
    'app-header': Header,
    'app-contact': Contact
  }
}
</script>

<style>

</style>

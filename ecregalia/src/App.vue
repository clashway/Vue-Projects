<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Works from './components/Works.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-works': Works
  },
  data () {
    return {
    }
  }
}
</script>

<style>
ul {
  list-style-type: none;
}
div {
  display: block;
}
h1, h2 {
  font-family: 'Lato', sans-serif;
  letter-spacing: 0.05em;
  line-height: 1.5rem;
}
</style>

<template>
  <div class="app-header">
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </div>
</template>

<script>
import { bus } from '../main'

export default {
  data () {
    return {
      title: 'Football Legends'
    }
  },
  methods: {
    changeTitle: function() {
      this.title = 'Football Heros'
      bus.$emit('changeTitle', this.title)
    }
  }
}
</script>

<style scoped>
h1{
  color: red
}
.app-header{
  padding: 10px;
  background-color: grey;
  text-align: center;
}
</style>

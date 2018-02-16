<template>
  <div class="app-footer">
    <p>{{ copyright }}</p>
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
import { bus } from '../main'
export default {
  data () {
    return {
      copyright: 'Copyright Lash Systems',
      title: 'Football Legends',
    }
  },
  created() {
    bus.$on('changeTitle', (data) => {
      this.title = data;
    })
  }
}
</script>

<style scoped>
p{
  color: blue
}
.app-footer{
  padding: 10px;
  background-color: grey;
  text-align: center;
}
h3{
  color: red
}
</style>

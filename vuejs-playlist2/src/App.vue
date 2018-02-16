<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import AddBlog from './components/AddBlog.vue'
import ShowBlogs from './components/ShowBlogs.vue'
import ListBlogs from './components/ListBlogs.vue'
import SingleBlog from './components/SingleBlog.vue'

export default {
  components: {
    'add-blog': AddBlog,
    'show-blogs': ShowBlogs,
    'list-blogs': ListBlogs,
    'app-header': Header,
    'single-blog': SingleBlog
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
body{
  margin: 0;
  font-family: sans-serif;
}
</style>

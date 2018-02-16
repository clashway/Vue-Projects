<template>
  <div v-theme:column id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="blog in filteredBlogs" class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id"><h2>{{ blog.title }}</h2></router-link>
      <article v-rainbow>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
  data () {
    return {
      blogs: [],
      search: '',
    }
  },
  created() {
    this.$http.get('https://vue-playlist-d0030.firebaseio.com/posts.json').then(function(data) {
      return data.json();
    }).then(function(data) {
      var blogsArray = [];
      for (let key in data) {
        data[key].id = key;
        blogsArray.push(data[key]);
      }
      this.blogs = blogsArray;
    });
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
    snippet(value) {
      return value.slice(0, 100) + '...';
    }
  },
  directives: {
    'rainbow': {
      bind(el, binding, vnode) {
        el.style.color = "#" + Math.random().toString().slice(2, 8);
      }
    }
  },
  mixins: [searchMixin]
}
</script>

<style scoped>
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>

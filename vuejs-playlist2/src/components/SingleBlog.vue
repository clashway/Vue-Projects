<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.content }}</article>
      <p>Tags: <span v-for="tag in blog.categories"> {{ tag }} </span></p>
      <p>Written by: {{ blog.author }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
      blog: {},
      foundBlog: false
    }
  },
  created() {
    this.$http.get('https://vue-playlist-d0030.firebaseio.com/posts/' + this.id + '.json').then(function(data) {
      return data.json();
    }).then(function(data) {
      this.blog = data;
    });
  }
}
</script>

<style scoped>
#single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>

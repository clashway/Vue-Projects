<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label>Police & Fire</label>
        <input type="checkbox" value="police-fire" v-model="blog.categories">
        <label>Pets</label>
        <input type="checkbox" value="pets" v-model="blog.categories">
        <label>Fishing</label>
        <input type="checkbox" value="fishing" v-model="blog.categories">
        <label>Golfing</label>
        <input type="checkbox" value="golfing" v-model="blog.categories">
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
          <option v-for="author in authors">{{ author }}</option>
      </select>
      <button v-on:click.prevent="post">Save</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for saving your post</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
        Blog Author: <template v-if="blog.author != '-- Select Author --'">{{ blog.author }}</template>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: '-- Select Author --'
      },
      authors: ['-- Select Author --', 'Bob', 'John', 'Bill'],
      submitted: false
    }
  },
  methods: {
    post: function() {
      this.$http.post('https://vue-playlist-d0030.firebaseio.com/posts.json',this.blog).then(function(data) {
        this.submitted = true
      });
    }
  }
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label{
  display: inline-block;
}
</style>

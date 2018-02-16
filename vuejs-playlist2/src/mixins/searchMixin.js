export default {
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter((blog) => {
        console.log(this.search + ' ' + blog.title)
        return blog.title.match(this.search)
      });
    }
  }
}

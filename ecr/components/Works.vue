<template>
  <div id="app-works">
    <div v-for="(book, index) in books" :key="index">
      <article class="book-section">
        <div class="book-image">
          <img src="../assets/book.jpg" alt="">
        </div>
        <div class="book-column-two">
          <h1 class="book-title">{{ book.title }}</h1>
          <div class="book-description">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      books: [
        {
          title: 'TK',
        }
      ]
    }
  }
}
</script>

<style scoped>
.book-section {
  display: flex;
  flex-direction: row;
  padding: 50px 50px 50px 50px;
  justify-content: center;
}
h1.book-title {
  font-size: 1.5em;
  font-weight: 400;
  letter-spacing: 0.1em;
  border-bottom: 1px solid #e6e5e5;
  margin-bottom: 10px;
  padding-bottom: 10px;
}
.book-description {
  text-align: justify;
  font-family: 'Lato', sans-serif;
  letter-spacing: 0.05em;
  line-height: 1.5rem;
  font-size: 1rem;
  font-weight: 300;
}
.book-image img {
  width: 280px;
  padding-right: 50px;
}
.book-column-two {
  flex-direction: column;
  margin-top: -15px;
}
@media screen and ( max-width: 600px ) {
  .book-section {
    display: block;
    padding: 25px 15px 15px 15px;
  }
  .book-image {
    text-align: center;
  }
  .book-image img {
    padding-right: 0;
  }
  .book-column-two {
    margin-top: 10px;
  }
  .book-title {
    text-align: center;
  }
}
</style>

<template>
  <div id="app-works">
    <div v-for="(book, index) in books" :key="index">
      <article class="book-section">
        <div class="book-image">
          <img src="../assets/book.jpg" alt="">
        </div>
        <div class="book-column-two">
          <h1 class="book-title">{{ book.title }}</h1>
          <div class="book-description" v-html="book.description"></div>
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
          title: 'Paradiso',
          description: '<p><b style="font-weight: 400">David Sedaris returns with his most deeply personal and darkly hilarious book.</b></p><p>If youve ever laughed your way through David Sedaris\'s cheerfully misanthropic stories, you might think you know what you\'re getting with <i>Calypso.</i> You\'d be wrong.</p><p>When he buys a beach house on the Carolina coast, Sedaris envisions long, relaxing vacations spent playing board games and lounging in the sun with those he loves most. And life at the Sea Section, as he names the vacation home, is exactly as idyllic as he imagined, except for one tiny, vexing realization: it\'s impossible to take a vacation from yourself.</p>',
          image: ''
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
  .book-image {
    text-align: center;
  }
  .book-image img {
    padding-right: 0;
  }
  .book-section {
    display: block;
  }
  .book-column-two {
    margin-top: 10px;
  }
}
</style>

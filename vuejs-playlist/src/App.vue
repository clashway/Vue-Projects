<template>
  <div>
    <app-header></app-header>
    <app-players v-bind:players="players" v-on:changeFavorite="setFavorite"></app-players>
    <app-footer></app-footer>
    <p v-if="favorite">{{ favorite }}</p>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Players from './components/Players.vue'
export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-players': Players
  },
  data () {
    return {
      players: [
        {name: 'John Elway', number: 6},
        {name: 'Tom Brady', number: 17},
        {name: 'Aaron Rodgers', number: 33}
      ],
      favorite: ''
    }
  },
  methods: {
    setFavorite: function(newFavorite) {
      this.favorite = newFavorite;
    }
  }
}
</script>

<style>

</style>

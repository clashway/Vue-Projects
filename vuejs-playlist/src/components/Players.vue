<template>
  <div class="app-players">
    <p v-if="favorite">Decidedly the fave = {{ favorite }}</p>
    <div v-for="player in players">
      <span>{{ player.name }}</span>
      <span>{{ player.number }}</span>
    </div>
    <p>
      <label> Fave: </label> <input ref="favorite" v-on:keyup.enter="setFavorite">
    </p>

  </div>
</template>

<script>
export default {
  props: {
    players: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      favorite: ''
    }
  },
  methods: {
    setFavorite: function() {
      this.favorite = this.$refs.favorite.value
      this.$emit('changeFavorite', this.favorite)
    }
  },
  // lifecycle hooks
  created() {
    // Fetch data here.
  },
  mounted() {
    // Change the dom here if you need to.
  },
  updated() {
    // Same as created except after change.
  }
}
</script>

<style scoped>
.app-players{
  padding: 10px;
  background-color: green;
  text-align: center;
}
</style>

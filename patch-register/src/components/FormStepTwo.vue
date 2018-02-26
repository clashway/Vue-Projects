<template>
  <div class="step-two">
    <h2>Success!</h2>
    <h3>Welcome To Patch.</h3>
    <p>Would you like to verify....?</p>
    <v-btn>Continue with Facebook</v-btn>
    <v-btn>Continue with Credit Card</v-btn>
    <v-btn>Continue with Manual Approval</v-btn>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        step: 1,
        registration: {
          patch: null,
          email: null,
          first_name: null,
          last_name: null,
          password: null
        }
      }
    },
    methods: {
      createProfile() {
        alert('hey')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

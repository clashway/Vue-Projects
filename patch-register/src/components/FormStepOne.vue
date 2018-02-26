<template>
  <form class="register-form step-one">
    <v-card>Create a free profile to join your neighbors on Patch</v-card>
    <v-text-field type="text" v-model="registration.patch" placeholder="Find your town or zip code"/>
    <v-text-field type="text" v-model="registration.email" placeholder="Enter your email"/>
    <v-text-field type="text" v-model="registration.first_name" placeholder="First Name"/>
    <v-text-field type="text" v-model="registration.last_name" placeholder="Last Name"/>
    <v-text-field type="password" v-model="registration.password" placeholder="New Password" />
    <v-btn color="green" type="submit" v-on:click.prevent="createProfile">Create Profile</v-btn>
  </form>
</template>

<script>
  import router from '../router/index'
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
        router.push('step-two')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

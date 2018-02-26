<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-layout align-center justify-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
  </v-content>
  </v-app>
</template>

<script>

export default {
  data () {
    return {
      step: 1,
      title: 'Patch Registration',
      registration: {
        patch: null,
        email: null,
        first_name: '',
        last_name: '',
        password: null
      }
    }
  },
  methods: {
    setStep(step) {
      this.step = step
    }
  }
}
</script>

<style>
.register-form{
  max-width: 400px;
}
</style>

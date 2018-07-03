<template>
  <div id="app-header">
    <div class="header">
      <h2 class="branding">
        <router-link :to="'/'">{{ branding }}</router-link>
      </h2>
      <a class="social-fb" :href="fbLink"></a>
      <a class="social-twitter" :href="twitterLink"></a>
    </div>
    <nav>
      <ul class="navigation">
        <li v-for="link in navLinks">
          <router-link :to="link.link">{{ link.title }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      branding: 'EC Regalia',
      navLinks: [
        {title:'WORKS', link: 'works'},
        {title:'BIO', link: 'bio'},
        {title:'CONTACT', link: 'contact'}
      ],
      fbLink: 'https://facebook.com/personal-page',
      twitterLink: 'https://twitter.com/handle'
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
}
h2.branding {
  margin-top: 5px;
  margin-left: 50px;
  font-size: 35px;
  font-weight: 300
}
.branding a {
  text-decoration: none;
  color: black;
}
.social-fb {
  position: absolute;
  right: 7%;
  margin-top: -7px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  background: url(../assets/facebook.svg) no-repeat;
}
.social-twitter {
  position: absolute;
  right: 3%;
  margin-top: -7px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  background: url(../assets/twitter.svg) no-repeat;
}
nav {
  margin-top: -20px;
}
nav a.active,
nav a.exact-active {
  text-decoration: underline;
}
.navigation {
  height: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
  border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  margin-left: -10px;
  margin-right: -10px;
}
.navigation li {
  padding: 0 40px 0 40px;
}
.navigation a {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
.navigation a:hover {
  text-decoration: underline;
}
</style>

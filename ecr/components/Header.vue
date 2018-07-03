<template>
  <div id="app-header">
    <div class="header">
      <h2 class="branding">
        <router-link :to="'/'">{{ branding }}</router-link>
      </h2>
      <ul class="social-links">
        <li><a class="social-fb" :href="fbLink"></a></li>
        <li><a class="social-twitter" :href="twitterLink"></a></li>
      </ul>

    </div>
    <nav>
      <ul class="navigation">
        <li v-for="(link, index) in navLinks" :key="index" >
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
        {title:'BIO', link: 'bio'},
        {title:'WORKS', link: 'works'},
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
  padding-bottom: 20px;
}
h2.branding {
  margin-top: 5px;
  /* margin-left: 50px; */
  font-size: 35px;
  font-weight: 300
}
.branding a {
  text-decoration: none;
  color: black;
}
.social-links {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  right: 7%;
  height: 34px;
  width: 80px;
}
.social-links li {
  padding-right: 15px;
}
.social-links a {
  width: 24px;
  height: 24px;
  background-size: 24px 24px;
  cursor: pointer;
  display: inline-block;
  text-indent: -9999px;
}
a.social-fb {
  background: url(~/assets/facebook.svg) no-repeat;
}
a.social-twitter {
  background: url(~/assets/twitter.svg) no-repeat;
}

nav a.active,
nav a.exact-active {
  text-decoration: underline;
}
.navigation {
  width: 100%;
  height: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
  border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
}
nav ul {
  padding-left: 0;
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
@media screen and ( max-width: 600px ) {
  .social-links {
    display: none;
  }
}
</style>

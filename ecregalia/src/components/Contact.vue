<template>
  <div id="app-header">
    <div class="header">
      <h2 class="branding">{{ branding }}</h2>
      <a class="social-fb" href=""></a>
      <a class="social-twitter" href=""></a>
    </div>
    <nav>
      <ul class="navigation">
        <li v-for="link in navLinks">
          <a :href="link.link">{{ link.title }}</a>
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
        {title:'WORKS', link: 'blah'},
        {title:'BIO', link: 'blah'},
        {title:'CONTACT', link: 'blah'}
      ]
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

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ecr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      { src: 'https://www.gstatic.com/firebasejs/5.2.0/firebase.js'},
      { innerHTML: `// Initialize Firebase
        var config = {
          apiKey: "AIzaSyAUT6bxa7dsOraG4Qb6N1RZ47n30B-f1GI",
          authDomain: "ecregalia6.firebaseapp.com",
          databaseURL: "https://ecregalia6.firebaseio.com",
          projectId: "ecregalia6",
          storageBucket: "ecregalia6.appspot.com",
          messagingSenderId: "427320962979"
        };
        firebase.initializeApp(config);
      `,
      type: 'text/javascript', charset: 'utf-8'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

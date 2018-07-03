import Works from './components/Works.vue'
import Bio from './components/Bio.vue'
import Contact from './components/Contact.vue'

export default [
  {path: '/', component: Works},
  {path: '/works', component: Works},
  {path: '/bio', component: Bio},
  {path: '/contact', component: Contact}
]

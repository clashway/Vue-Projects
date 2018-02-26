import Vue from 'vue'
import Router from 'vue-router'
import FormStepOne from '../components/FormStepOne'
import FormStepTwo from '../components/FormStepTwo'
import FormStepThree from '../components/FormStepThree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FormStepOne',
      component: FormStepOne
    },
    {
      path: '/step-two',
      name: 'FormStepTwo',
      component: FormStepTwo
    },
    {
      path: '/step-three',
      name: 'FormStepThree',
      component: FormStepThree
    }
  ]
})

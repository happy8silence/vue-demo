import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        header: Header,
        footer: Footer
      }
    }
  ]
})

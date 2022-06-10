import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home/index.vue'
import AboutView from '../views/About/index.vue'
import ProduktView from '../views/Produkt/index.vue'
import DetailView from '../views/Detail/index.vue'
import KontaktView from '../views/Kontakt/Kontaktrechts.vue'
import OrderView from '../views/Einkaufswagen/index.vue'
import LoginView from '../views/Anmelden/LoginView.vue'
import RegistrierenView from '../views/Register/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/produkt',
    name: 'produkt',
    meta:{
      keepAlive: true 
    },
    component: ProduktView
  },
  {
    path: '/detail/:id',
    // path:'/detail',
    // query:{id:detailsId},
    name: 'detail',
    component: DetailView
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component:KontaktView
  },
  {
    path: '/order',
    name: 'order',
    component:OrderView
  },
  {
      path: '/login',
      name: 'login',
      component:LoginView
    },
  {
      path: '/registrieren',
      name: 'registrieren',
      component:RegistrierenView
    }
]

const router = new VueRouter({
  linkExactActiveClass:'active',
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props:true //accepts props
  },

  //redirects
  {
    path: '/about-us',
    redirect: '/about'
  },
  //404 page
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component:NotFound,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), //base url of project
  routes
})

export default router

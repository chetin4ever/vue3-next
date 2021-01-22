import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/Home.vue"
import DcHeros from "@/views/DcHeros.vue"
import Calender from "@/views/Calender.vue"
import MarkDown from "@/views/MarkDown.vue"
import Slider from "@/views/Slider.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dc-heros",
    name: "DcHeros",
    component: DcHeros,
  },
  {
    path: "/Calender",
    name: "Calender",
    component: Calender,
  },
  {
    path: "/MarkDown",
    name: "MarkDown",
    component: MarkDown,
  },
  {
    path: "/Slider",
    name: "Slider",
    component: Slider,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

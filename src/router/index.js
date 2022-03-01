import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Explore from "../views/Explore.vue";
import Contact from "../views/Contact.vue";
import Log from "../views/Log.vue";
import Sign from "../views/Sign.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  ,
  {
    path: "/log",
    name: "Log",
    component: Log,
  },
  {
    path: "/sign",
    name: "Sign",
    component: Sign,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

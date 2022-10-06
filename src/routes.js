import { createWebHistory, createRouter } from "vue-router";

import Home from "./components/Home.vue";
import AddBook from "./components/AddBook.vue";
import UpdateBook from "./components/UpdateBook.vue";
import NotFound from "./components/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/add/book",
    name: "AddBook",
    component: AddBook,
  },
  {
    path: "/update/book/:id",
    name: "UpdateBook",
    component: UpdateBook,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

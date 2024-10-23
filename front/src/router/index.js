import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Users from '../views/Users.vue';
import CreateUser from '../views/CreateUser.vue';
import EditUser from '../views/EditUser.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/users', component: Users, meta: { requiresAuth: true } },
  { path: '/users/create', component: CreateUser, meta: { requiresAuth: true } },
  { path: '/users/edit/:id', component: EditUser, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Verificar si el usuario está autenticado antes de acceder a rutas protegidas
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.meta.requiresAuth && !token) {
    next('/login');
  } else {
    next();
  }
});

export default router;

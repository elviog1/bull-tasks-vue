import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignInView from "@/views/SignInView.vue";
import RegisterView from "@/views/RegisterView.vue";
import TaskApprovedView from "@/views/TaskApprovedView.vue";
import ProfileLayout from "@/layout/ProfileLayout.vue";
import TaskRejectedView from "@/views/TaskRejectedView.vue";
import TaskPendingView from "@/views/TaskPendingView.vue";
import TaskView from "@/views/TaskView.vue";
import TaskNewView from "@/views/TaskNewView.vue";
import { useAuthStore } from "@/stores/counter";
import TaskUpdateView from "@/views/TaskUpdateView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/sign-in",
      name: "signin",
      component: SignInView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/profile",
      name: "profile",
      meta: { requiresAuth: true },
      component: ProfileLayout,
      children: [
        {
          path: "approved",
          name: "approved",
          component: TaskApprovedView,
        },
        {
          path: "rejected",
          name: "rejected",
          component: TaskRejectedView,
        },
        {
          path: "pending",
          name: "pending",
          component: TaskPendingView,
        },
        {
          path: "",
          name: "tasks",
          component: TaskView,
        },
        {
          path: "new-task",
          name: "new task",
          component: TaskNewView,
        },
        {
          path: "task-update/:taskId",
          name: "task update",
          component: TaskUpdateView,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore(); // Obtén el store de autenticación
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Verificar si el usuario tiene un token
    if (!authStore.token) {
      // Si no tiene un token, redirigir al usuario a la página de inicio de sesión
      next("/sign-in");
    } else {
      // Si tiene un token, permitir la navegación a la ruta protegida
      next();
    }
  } else {
    if (authStore.token) {
      next("/profile");
    } else {
      // Si la ruta no requiere autenticación, permitir la navegación
      next();
    }
  }
});

export default router;

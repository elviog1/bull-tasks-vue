import axios from "axios";
import { defineStore } from "pinia";
export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    token: localStorage.getItem("task-token") || "",
    tasks: [],
  }),
  getters: {
    username() {
      const token = this.token;
      if (token) {
        const tokenPayload = token.split(".")[1];
        const decodedToken = JSON.parse(atob(tokenPayload));
        return decodedToken.username;
      } else {
        return "";
      }
    },
    userId() {
      const token = this.token;
      if (token) {
        const tokenPayload = token.split(".")[1];
        const decodedToken = JSON.parse(atob(tokenPayload));
        return decodedToken.id;
      } else {
        return "";
      }
    },
  },
  actions: {
    setToken(token: string) {
      this.token = token;
      localStorage.setItem("task-token", token);
    },
    logout() {
      this.token = "";
      localStorage.removeItem("task-token");
    },
    async fetchTasks() {
      const userId = this.userId;
      try {
        const response = await axios.get(
          `http://localhost:4000/api/task/${userId}`
        );
        this.tasks = response.data; // Actualiza el estado de las tareas con los datos obtenidos del servidor
      } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error; // Lanza el error para manejarlo en el componente
      }
    },
  },
});

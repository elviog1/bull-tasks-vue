<script setup lang="ts">
import { sidebarLinks } from "../constants/sidebarLinks";
import { RouterLink } from "vue-router";
import Bull from "../assets/bull.png";
import { useAuthStore } from "@/stores/counter";
const authStore = useAuthStore()
// const username = getUsernameFromToken()
const name = authStore.username
const logout = ()=>{
  authStore.logout()
}
// function getUsernameFromToken(){
//   const token = authStore.token
//   const tokenPayload = token.split('.')[1]
//   const decodedToken = JSON.parse(atob(tokenPayload))

//   return decodedToken.username
// }
</script>
<template>
  <section
    class="text-zinc-300 bg-zinc-800 max-w-xs w-full flex justify-center"
  >
    <div class="flex flex-col justify-between py-4 w-full items-center">
      <!-- LOGO & USERNAME -->
      <div class="flex flex-col items-center gap-3">
        <img :src="Bull" alt="Bull logo" className="w-10" />
        <p className=" text-sm hidden md:block">
          <!-- Welcome <span className="text-indigo-500">{{username}}</span> -->
          Welcome <span className="text-indigo-500">{{name}}</span>
        </p>
      </div>

      <!-- LINKS TASKS -->
      <div class="flex flex-col w-full">
        <RouterLink
          v-for="link in sidebarLinks"
          :key="link.label"
          :to="link.route"
          class="text-2xl p-2 flex items-center gap-3 hover:bg-zinc-700 duration-300 text-zinc-500 hover:text-zinc-300"
        >
          <i :class="[link.icon, link.color]"></i>
          {{ link.label }}
        </RouterLink>
      </div>

      <!-- NEW TASK -->
      <div class="w-full">
        <RouterLink
          to="/profile/new-task"
          class="text-2xl p-2 flex items-center gap-3 hover:bg-zinc-700 duration-300 text-zinc-500 hover:text-zinc-300"
        >
          <i class="pi pi-folder-plus text-blue-500"></i>
          New Task</RouterLink
        >
      </div>
      <!-- LOG OUT -->
      <div class="w-full">
        <RouterLink
        @click="logout"
          to="/"
          class="text-2xl p-2 flex items-center gap-3 hover:bg-zinc-700 duration-300 text-zinc-500 hover:text-zinc-300"
        >
          <i class="pi pi-sign-out text-zinc-400"></i>
          Log out</RouterLink
        >
      </div>
    </div>
  </section>
</template>

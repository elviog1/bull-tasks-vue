<script setup lang="ts">
import { sidebarLinks } from "../constants/sidebarLinks";
import { RouterLink } from "vue-router";
import Bull from "../assets/bull.png";
import { useAuthStore } from "@/stores/counter";
const authStore = useAuthStore();
const name = authStore.username;
const logout = () => {
  authStore.logout();
};
</script>
<template>
  <section
    class="bg-zinc-800 text-zinc-300 font-bold md:max-w-xs w-16 md:w-full flex flex-col items-center h-screen justify-center gap-10"
  >
    <div class="flex flex-col gap-4">
      <!-- LOGO & USERNAME -->
      <div class="flex gap-2 items-center">
        <img :src="Bull" alt="Bull logo" className="w-10" />
        <h1 className=" text-2xl md:text-4xl duration-100 hidden md:block">Bull Tasks</h1>
      </div>
        <p className="text-sm hidden md:block">
          <!-- Welcome <span className="text-indigo-500">{{username}}</span> -->
          Welcome <span className="text-indigo-500">{{ name }}</span>
        </p>

      <!-- LINKS TASKS -->
      <div class="flex flex-col gap-2">
        <RouterLink
          v-for="link in sidebarLinks"
          :key="link.label"
          :to="link.route"
          class="flex items-center text-xl w-full p-2 rounded-md gap-4 hover:bg-zinc-700 duration-200"
        >
          <i class="text-2xl" :class="[link.icon, link.color]"></i>
          <span class="hidden md:block">
              {{ link.label }}
          </span>
        </RouterLink>
      </div>

      <!-- NEW TASK -->
      <div class="w-full">
        <RouterLink
          to="/profile/new-task"
          class="flex text-xl gap-4 items-center justify-start  p-2 rounded-md hover:bg-zinc-700 duration-200"
        >
          <i class="pi pi-folder-plus text-blue-500 text-2xl "></i>
          <span class="hidden md:block" >
            New Task
            
          </span>
          </RouterLink
        >
      </div>
      <!-- LOG OUT -->
      <div class="w-full">
        <RouterLink
          @click="logout"
          to="/"
          class="flex text-xl gap-4 items-center justify-start  p-2 rounded-md hover:bg-zinc-700 duration-200"
        >
          <i class="pi pi-sign-out text-zinc-400 text-2xl"></i>
<span class="hidden md:block" >

  Log out
</span>
          </RouterLink
        >
      </div>
    </div>
  </section>
</template>

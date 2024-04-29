<script setup lang="ts">
import { RouterLink } from "vue-router";
import BullTasks from "../assets/bull.png";
</script>

<template>
  <main class="bg-zinc-900 min-h-screen flex justify-center items-center">
    <div class="flex flex-col gap-4 items-center">
      <h1 class="text-4xl text-zinc-300 font-bold">BullTasks</h1>
      <img :src="BullTasks" alt="Bulltasks" class="w-80" />
      <RouterLink
        className="bg-indigo-600 hover:bg-indigo-500 text-center duration-200 text-xl font-bold text-zinc-300 w-full py-2 rounded-md"
        to="/sign-in"
        >Sign in</RouterLink
      >
    </div>
  </main>
</template>

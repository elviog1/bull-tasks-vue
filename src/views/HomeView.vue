<script setup lang="ts">
import { RouterLink } from 'vue-router';
import BullTasks from '../assets/bull.png'
</script>

<template>
  <main class="bg-zinc-900 min-h-screen flex justify-center items-center">
    <div class="flex flex-col gap-4 items-center">
      <h1 class="text-4xl">BullTasks</h1>
      <img :src="BullTasks" alt="Bulltasks" class="w-80" />
      <RouterLink to="/sign-in">Sign in</RouterLink>
    </div>
  </main>
</template>

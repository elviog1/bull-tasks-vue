<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useAuthStore } from './stores/counter';
const authStore = useAuthStore()
if(!authStore.token){
    const storedToken = localStorage.getItem('task-token')
    if(storedToken){
        authStore.setToken(storedToken)
    }
}


</script>

<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Sidebar from '../components/Sidebar.vue'
</script>
<template>
    <div class="flex min-h-screen bg-zinc-900">
        <Sidebar />
        <RouterView />
    </div>
</template>
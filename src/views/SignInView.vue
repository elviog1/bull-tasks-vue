<script setup lang="ts">
import SignInView from "../components/form/SignIn.vue";
</script>
<template>
    <div class="bg-zinc-900 min-h-screen flex justify-center items-center">
        <div class="flex flex-col gap-3">
            <span className="text-2xl font-semibold text-white">Login</span>
            <SignInView />
        </div>
    </div>
</template>
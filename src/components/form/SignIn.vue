<script setup lang="ts">
import { useAuthStore } from "@/stores/counter";
import axios from "axios";
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const authStore = useAuthStore()
const router = useRouter()
const loginUser = async () => {
  const userData = {
    email: email.value,
    password: password.value,
  };
  const response = await axios
    .post("http://localhost:4000/api/auth/login", userData)
    .then((res) => {
      console.log(res)
      const token = res.data.token
      authStore.setToken(token)
      router.push("profile")
    })
    .catch(e => console.log(e));
};
</script>
<template>
  <form action="" className="max-w-md bg-zinc-700 p-5 rounded-md" @submit.prevent="loginUser">
    <input
      type="email"
      className="p-2 my-2 rounded-md w-full"
      placeholder="Email"
      v-model="email"
    />
    <input
      type="password"
      className="p-2 my-2 rounded-md w-full"
      placeholder="Password"
      v-model="password"
    />
    <button
      type="submit"
      className="bg-indigo-500 text-zinc-300 font-bold w-full my-2 p-2 rounded-md hover:bg-indigo-600 duration-300"
    >
      Login
    </button>
    <p className="text-zinc-500 py-2 flex gap-3">
      Don't have an account?
      <RouterLink
        className="text-indigo-500 font-bold hover:text-zinc-400"
        to="/register"
      >
        Sign up
      </RouterLink>
    </p>
  </form>
</template>

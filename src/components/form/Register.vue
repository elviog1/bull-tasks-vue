<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
const username = ref("");
const email = ref("");
const password = ref("");
const router = useRouter();
const errors = ref([]);

const registerUser = async () => {
  const userData = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  const response = await axios
    .post("https://bull-tasks-nest.onrender.com/api/auth/register", userData)
    .then((res) => {
      console.log(res);
      router.push("/sign-in");
    })
    .catch((e) => {
      errors.value = e.response.data.message;
      console.log(errors.value);
    });
};
console.log(errors.value);
</script>
<template>
  <form
    className="max-w-md bg-zinc-700 p-5 rounded-md"
    @submit.prevent="registerUser"
  >
    <span className="text-2xl font-semibold text-white">Register</span>
    <input
      type="text"
      className="p-2 my-2 rounded-md w-full"
      placeholder="Username"
      v-model="username"
    />

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
      Register
    </button>
    <p className="text-zinc-500 py-2 flex gap-3">
      Already have an account?
      <RouterLink
        className="text-indigo-500 font-bold hover:text-zinc-400"
        to="/sign-in"
      >
        Sign in
      </RouterLink>
    </p>
    <p class="text-red-500 text-sm font-bold" v-for="error in errors">
      {{ error }}
    </p>
  </form>
</template>

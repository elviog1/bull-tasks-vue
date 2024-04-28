<script setup lang="ts">
import { useAuthStore } from "@/stores/counter";
import axios from "axios";
import Calendar from "primevue/calendar";
import { ref } from "vue";
import { useRouter } from "vue-router";
const date = ref<Date>(new Date());
const title = ref("");
const description = ref("");
const authStore = useAuthStore();
const userId = authStore.userId;
const router = useRouter();
const handleSubmit = async () => {
  const taskData = {
    title: title.value,
    description: description.value,
    date: date.value,
    userId: userId,
  };
  const response = axios
    .post("http://localhost:4000/api/task", taskData)
    .then((res) => {
      console.log(res);
      router.push("/profile");
    })
    .catch((e) => console.log(e));
};
</script>
<template>
  <form
    class="bg-zinc-700 max-w-md w-full p-5 rounded-md"
    @submit.prevent="handleSubmit"
  >
    <input
      className="w-full p-2 my-2 rounded-md "
      type="text"
      placeholder="Title"
      v-model="title"
    />

    <textarea
      className="w-full p-2 my-2 rounded-md resize-none"
      placeholder="Description"
      rows="4"
      v-model="description"
    ></textarea>
    <Calendar v-model="date" touchUI class="w-full text-xl mb-2" />
    <button
      className="bg-indigo-600 hover:bg-indigo-500 duration-200 text-xl font-bold text-zinc-300 w-full py-2 rounded-md"
    >
      Save
    </button>
  </form>
</template>
<style></style>

<script setup lang="ts">
import { defineProps, onMounted, ref } from "vue";
import Calendar from "primevue/calendar";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
const propsTask = defineProps({
  task: Object,
});
console.log(propsTask.task?.date);
const handleUpdate = async () => {
  try {
    const taskData = {
      title: propsTask.task?.title,
      description: propsTask.task?.description,
      status: propsTask.task?.status,
      date: propsTask.task?.date,
    };
    const response = await axios
      .put(`http://localhost:4000/api/task/${propsTask?.task?._id}`, taskData)
      .then((res) => {
        router.push("/profile");
      });
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
  <form
    v-if="propsTask.task"
    className="bg-zinc-700 max-w-md p-5 rounded-md"
    @submit.prevent="handleUpdate"
  >
    <input
      className="w-full p-2 my-2 rounded-md"
      type="text"
      placeholder="Title"
      v-model="propsTask.task.title"
    />

    <textarea
      className="w-full p-2 my-2 rounded-md resize-none"
      placeholder="Description"
      rows="3"
      v-model="propsTask.task.description"
    ></textarea>

    <Calendar
      touchUI
      class="w-full text-xl mb-2"
      v-model="propsTask.task.date"
    />
    <select
      className="p-2 my-2 w-full rounded-md"
      v-model="propsTask.task.status"
    >
      <option value="Pending">Pending</option>
      <option value="Approved">Approved</option>
      <option value="Rejected">Rejected</option>
    </select>

    <button
      className="bg-indigo-600 hover:bg-indigo-500 duration-200 text-xl font-bold text-zinc-300 w-full py-2 rounded-md"
    >
      Save
    </button>
  </form>
</template>

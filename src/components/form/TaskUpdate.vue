<script setup lang="ts">
import { defineProps } from 'vue';
const propsTask = defineProps({
  task:Object
})
console.log(propsTask.task)
</script>
<template>
  <form className="bg-zinc-700 max-w-md p-5 rounded-md">
    <input
      className="w-full p-2 my-2 rounded-md"
      type="text"
      placeholder="Title"
    />

    <textarea
      className="w-full p-2 my-2 rounded-md resize-none"
      placeholder="Description"
      rows="3"
    ></textarea>

    <input type="date" className="p-2 my-2 w-full rounded-md" />

    <select className="p-2 my-2 w-full rounded-md">
      <option value="pending">Pending</option>
      <option value="approved">Accepted</option>
      <option value="rejected">Rejected</option>
    </select>

    <button
      className="bg-indigo-600 hover:bg-indigo-500 duration-200 text-xl font-bold text-zinc-300 w-full py-2 rounded-md"
    >
      Save
    </button>
  </form>
</template>

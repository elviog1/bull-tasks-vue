<script setup lang="ts">
import { defineProps } from 'vue';
const propTask = defineProps({
  task:Object
})
</script>
<template>
  <div className="bg-zinc-800 max-w-xs w-full p-5 rounded-md" v-if="propTask.task">
    <div className="flex justify-between items-center">
      <p className="font-bold text-zinc-400 my-2">
       {{ propTask.task.dateCreated }}
      </p>
      <div className="flex gap-4">
        <i className="pi pi-file-edit hover:text-gray-300 cursor-pointer text-gray-500 duration-200
        text-2xl"></i>
        <span className="pi pi-trash hover:text-gray-300 cursor-pointer text-gray-500 duration-200
        text-2xl"></span>
      </div>
    </div>
    <h2
      className="text-center font-bold bg-zinc-700 rounded-md p-2 text-zinc-300 truncate"
    >
      {{propTask.task.title}}
    </h2>
    <p
      className="text-zinc-400 p-2 rounded-md my-2 h-36 overflow-y-auto border-dashed border-2"
    >
      {{propTask.task.description}}
    </p>
    <div className="flex justify-between items-center  p-3 rounded-md">
      <span class="duration-200 text-white py-2 px-6 rounded-md font-bold" :class="{ 'bg-amber-500 hover:bg-amber-400': task?.status === 'Pending', 'bg-green-500 hover:bg-green-400': task?.status === 'Approved', 'bg-red-500 hover:bg-red-400': task?.status === 'Rejected' }">{{ task?.status }}</span>
      <p
        className="flex gap-1 items-center text-zinc-400 hover:text-zinc-300 duration-200 font-bold"
      >
      <div class="flex gap-2 items-center">
        <i class="pi pi-calendar"></i>
        <span>{{ propTask.task.date }}</span>
      </div>
      </p>
    </div>
  </div>
</template>

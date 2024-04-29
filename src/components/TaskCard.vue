<script setup lang="ts">
import axios from 'axios';
import { defineProps, getCurrentInstance, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const propTask = defineProps({
  task:Object
})
console.log(propTask.task)
const router = useRouter()

const handleUpdate = (id:string)=>{
  router.push(`/profile/task-update/${id}`)
}

const handleDeleteTask = (id:string)=>{
  const response = axios.delete(`https://bull-tasks-nest.onrender.com/api/task/${id}`).then(res => {
    console.log(res)
  }).catch(e => console.log(e))
}

const dateCreated = ref("")
const date = ref("")
onMounted(()=>{
  dateCreated.value = new Date(propTask.task?.createdAt).toLocaleDateString()
  date.value = new Date(propTask.task?.date).toLocaleDateString()
})
</script>
<template>
  <div className="bg-zinc-800 max-w-xs w-full p-5 rounded-md" v-if="propTask.task">
    <div className="flex justify-between items-center">
      <p className="font-bold text-zinc-400 my-2">
       {{ dateCreated }}
      </p>
      <div className="flex gap-4">
        <i className="pi pi-file-edit hover:text-gray-300 cursor-pointer text-gray-500 duration-200
        text-2xl" @click="handleUpdate(propTask.task?._id)"></i>
        <i className="pi pi-trash hover:text-gray-300 cursor-pointer text-gray-500 duration-200
        text-2xl" @click="$emit('delete-task', propTask.task?._id)"></i>
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
        <span>{{ date }}</span>
      </div>
      </p>
    </div>
  </div>
</template>

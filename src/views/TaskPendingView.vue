<script setup lang="ts">
import TaskCard from "@/components/TaskCard.vue";
import { useAuthStore } from "@/stores/counter";
import { onMounted, ref } from "vue";
import type { Task } from "./TaskView.vue";
import axios from "axios";
import Swal from "sweetalert2";

const authStore = useAuthStore();
const userId = authStore.userId;
const tasks = ref<Task[]>([]);
const tasksPending = ref<Task[]>([]);

const handleDeleteTask = (id: string) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
      const response = axios
        .delete(`http://localhost:4000/api/task/${id}`)
        .then((res) => {
          getAllTasks();
        });
    }
  });
};

const getAllTasks = async () => {
  try {
    const response = await axios.get(
      `http://localhost:4000/api/task/${userId}`
    );
    tasks.value = response.data;
    tasksPending.value = tasks.value.filter(
      (task) => task.status === "Pending"
    );
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  await getAllTasks();
});
</script>
<template>
  <div className="w-full overflow-y-auto max-h-screen">
    <div className="py-10">
      <h1 className="text-center text-3xl font-bold text-zinc-300 py-6">
        Tasks Rejected ({{ tasksPending?.length }})
      </h1>
      <div class="flex flex-wrap gap-4 justify-center">
        <TaskCard
          v-for="task in tasksPending"
          :key="task._id"
          :task="task"
          @delete-task="handleDeleteTask"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TaskCard from "@/components/TaskCard.vue";
import { useAuthStore } from "@/stores/counter";
import { onMounted, ref } from "vue";
import type { Task } from "./TaskView.vue";
import axios from "axios";

const authStore = useAuthStore();
const userId = authStore.userId;
const tasks = ref<Task[]>([]);
const tasksRejected = ref<Task[]>([]);

const handleDeleteTask = (id: string) => {
  const response = axios
    .delete(`http://localhost:4000/api/task/${id}`)
    .then((res) => {
      console.log(res);
      getAllTasks();
    })
    .catch((e) => console.log(e));
};

const getAllTasks = async () => {
  try {
    const response = await axios.get(
      `http://localhost:4000/api/task/${userId}`
    );
    tasks.value = response.data;
    tasksRejected.value = tasks.value.filter(
      (task) => task.status === "Rejected"
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
        Tasks Rejected ({{ tasksRejected?.length }})
      </h1>
      <div class="flex flex-wrap gap-4 justify-center">
        <TaskCard
          v-for="task in tasksRejected"
          :key="task._id"
          :task="task"
          @delete-task="handleDeleteTask"
        />
      </div>
    </div>
  </div>
</template>

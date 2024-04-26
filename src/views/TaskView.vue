<script setup lang="ts">
import TaskCard from "@/components/TaskCard.vue";
import axios from "axios";
import { useAuthStore } from "@/stores/counter";
import { onMounted, ref } from "vue";

export interface Task {
  _id: string;
  title:string;
  description:string;
  status:string;
  date:Date;
}

const authStore = useAuthStore();
const userId = authStore.userId;
const tasks = ref<Task[]>([]);
onMounted(async () => {
  try {
    const response = await axios.get(
      `http://localhost:4000/api/task/${userId}`
    );
    tasks.value = response.data;
  } catch (error) {
    console.log(error);
  }
});
</script>
<template>
  <div className="w-full overflow-y-auto max-h-screen">
    <div className="py-10">
      <h1 className="text-center text-3xl font-bold text-zinc-300 py-6">
        All Tasks ({{ tasks?.length }})
      </h1>
      <div class="flex flex-wrap gap-4 justify-center">
        <TaskCard v-for="task in tasks" :key="task._id" :task="task" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TaskUpdate from "@/components/form/TaskUpdate.vue";
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const taskData = ref({});
const taskId = router.currentRoute.value.params.taskId;
onMounted(async () => {
  try {
    const response = await axios.get(
      `https://bull-tasks-nest.onrender.com/api/task/id/${taskId}`
    );
    taskData.value = response.data;
  } catch (error) {
    console.log(error);
  }
});
</script>
<template>
  <div className="flex justify-center w-full items-center">
    <div>
      <h2 className="text-center text-3xl font-bold text-zinc-300 py-6">
        Task update
      </h2>
      <TaskUpdate :task="taskData" />
    </div>
  </div>
</template>

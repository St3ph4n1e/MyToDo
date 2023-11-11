<script setup lang="ts">
import CreateTask from '@/components/CreateTask.vue';
import TaskList from '@/components/TaskList.vue';
import TaskFilter from '@/components/TaskFilter.vue';
</script>

<template>
    <div class="container">
        <TaskFilter/>
        <CreateTask/>
        <TaskList/>
    </div>

</template>

<style scoped>

</style>
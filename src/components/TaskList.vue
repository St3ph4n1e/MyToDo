<script setup lang="ts">
import TaskItem from './TaskItem.vue';
import { useItemStore } from '../stores/item'

const store = useItemStore()

const tasks = store.itemList;

</script>

<template>

    <h1> Liste de taches</h1>
    <div>
        <TaskItem v-for="task in tasks"/>
    </div>
   
</template>

<style scoped>

input, textarea {

    margin: 0 auto;
    
}

</style>

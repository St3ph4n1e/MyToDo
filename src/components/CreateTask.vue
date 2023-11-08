<script setup lang="ts">
import type { NewItem } from '@/interfaces/item.interface';
import { useItemStore } from '@/stores/item';
import { reactive } from 'vue';

const store = useItemStore()
const toDo = reactive<NewItem>({
    content: ''
})

function submit() {
    if (toDo.content!= null) {
        store.createItem(toDo.content)
        console.log(toDo)
    }
}
</script>

<template>
     <div> 
        <h2>New item </h2>
        <label for="new-todo">To-do Name <input v-model="toDo.content" type="text" id="new-todo"></label>
        <button @click="submit">add To-Do</button>
    </div>

</template>

<style scoped>
</style>
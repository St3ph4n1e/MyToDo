<script setup lang="ts">

import type { ItemInterface } from '@/interfaces/item.interface';
import { useItemStore } from '@/stores/item';
import { ref, watch } from 'vue';

const store = useItemStore()

const task = store.itemList

const isComplete = true


function taskComplete() {

console.log('Task completed!');
    
}

function putInTrash() {

    console.log('Put in trash!');

}

console.log(task)


</script>

<template>

<div class="container">

    <ul class="list-group todos mx-auto text-light">
    <li v-for="item in task" :key="item.id" class="list-group-item d-flex justify-content-between align-items-center">
      <span :class="{ complete: isComplete }">{{ item["content"] }}</span>
      <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" @click="taskComplete" class="bi bi-check-lg" viewBox="0 0 16 16">
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
      </svg>
      <i @click="putInTrash" class="far fa-trash-alt delete ms-4"></i></span>
    </li>
    </ul>

</div>
  
</template>

<style scoped>

li.list-group-item{
  background-color: #423a6f;
  color: #F8F9FA;
}
</style>
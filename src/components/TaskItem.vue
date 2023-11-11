<script setup lang="ts">

import { useItemStore } from '@/stores/item';

const store = useItemStore()

const task = store.itemList

console.log(task)


</script>

<template>

<div class="container">

    <ul class="list-group todos mx-auto text-light">
    <li v-for="item in task" :key="item.id" class="list-group-item d-flex justify-content-between align-items-center">
      <span>{{ item["content"] }}</span>
      <i class="fas fa-check" aria-hidden="true"></i>
      <i class="far fa-trash-alt delete"></i>
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
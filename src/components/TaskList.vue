<script setup lang="ts">
import TaskItem from './TaskItem.vue';


</script>

<template>

    <div class="container">
        <TaskItem/>
    </div>
   
</template>

<style scoped>

li.list-group-item{
  background-color: #423a6f;
  color: #F8F9FA;
}

.delete{
  cursor: pointer;
}

</style>

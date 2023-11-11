<script setup lang="ts">

</script>

<template>

    <div class="container text-center text-light my-4">
        <h1 class="mb-4">Todo List</h1>
        <form class="search">
        <input type="text" class="form-control m-auto" name="search" placeholder="search todos">
    </form>

    </div>
  
</template>

<style scoped>
input[type=text],
input[type=text]:focus{
  color: #fff;
  border: none;
  background-color: rgba(0, 0, 0, .2);
}

</style>
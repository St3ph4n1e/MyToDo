<script setup lang="ts">

import { useItemStore } from '@/stores/item';
import { ref, watch } from 'vue';

const store = useItemStore()

const task = store.itemList

const search = ref('')

  
function searchItem(search: string) {

    if (search.length > 0) {
        store.searchItem(search)  
    }
  
}

</script>

<template>

    <div class="container text-center text-light my-4">
        <h1 class="mb-4">Todo List</h1>
        <form class="search" @submit.prevent="searchItem(search)">
            <div class="input-group">
        <input type="text" v-model="search" class="form-control m-auto" name="search" placeholder="search todos">
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            </button>
        </div>
            </div>
            
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
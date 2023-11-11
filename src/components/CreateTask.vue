<script setup lang="ts">
import type { NewItem } from '@/interfaces/item.interface';
import { useItemStore } from '@/stores/item';
import { reactive } from 'vue';

const store = useItemStore()
const toDo = reactive<NewItem>({
    content: ''
})

function submit() {
    if (toDo.content.length > 0) {
        store.createItem(toDo.content)
        console.log(toDo)
    }
}
</script>

<template>
  <div class="container">
    <form class="add text-center my-4">
        <label for="add" class="add text-light">Add a new todo:</label>
        <div class="input-group">
            <input v-model="toDo.content" type="text" class="form-control" name="add" id="add">
            <div class="input-group-append">
                <button @click="submit" class="btn btn-outline-secondary" type="button"> +
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
label.add{
  margin-bottom: 15px;
}
</style>
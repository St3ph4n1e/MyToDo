<script setup lang="ts">
import type { ItemInterface } from '@/interfaces/item.interface';
import { useItemStore } from '@/stores/item';

const store = useItemStore()

const task = store.itemList




</script>

<template>

<div class="container">

    <p>{{ task }}</p>

</div>
  
</template>

<style scoped>

</style>
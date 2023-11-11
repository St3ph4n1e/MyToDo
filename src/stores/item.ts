// useItemStore.ts
import { defineStore } from 'pinia'
import type { ItemInterface } from '@interfaces/item.interface'

interface ItemState {
  itemList: ItemInterface[]
}

export const useItemStore = defineStore('item', {
  state: (): ItemState => {
    return {
      itemList: []
    }
  },
  actions: {
    createItem(content: string) {
      const item: ItemInterface = {
        id: Math.floor(Math.random() * 100000000),
        complete: false,
        content
      }
      this.itemList.push(item)
    },
    searchItem(search: string): ItemInterface[] {
      console.log(search)
      return this.itemList.filter((item) =>
        item.content.toLowerCase().includes(search.toLowerCase())
      )
    }
  }
})

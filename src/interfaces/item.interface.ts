export interface NewItem {
  content: string
}

export interface ItemInterface extends NewItem {
  id: number
  complete: bool
}

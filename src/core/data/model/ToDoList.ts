import { IToDoItem } from '@/core/domain/model/IToDoItem'
import { IToDoList } from '@/core/domain/model/IToDoList'

interface ToDoListParams {
  items: IToDoItem[]
}
export class ToDoList implements IToDoList {
  readonly items: IToDoItem[]

  constructor(params: ToDoListParams) {
    this.items = params.items
  }

  add(item: IToDoItem): void {
    this.items.push(item)
  }

  delete(item: IToDoItem): void {
    const itemIndex = this.items.findIndex(
      (itemElement) => itemElement.id.value === item.id.value,
    )
    if (itemIndex !== -1) {
      this.items.splice(itemIndex, 1)
    } else {
      throw new Error('Elemento não encontrado!')
    }
  }
}

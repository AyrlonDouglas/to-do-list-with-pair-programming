import { IStorage } from '@/core/domain/model/IStorage'
import { IToDoList } from '@/core/domain/model/IToDoList'
import { ToDoList } from './ToDoList'
import { ToDoItem } from './ToDoItem'
import { IToDoItem } from '@/core/domain/model/IToDoItem'

const LOCALKEY = 'toDoList'

export class LocalStorage implements IStorage<IToDoList> {

  get(): IToDoList {
    const items = localStorage.getItem(LOCALKEY)
    const toDoItems = items && JSON.parse(items)?.map(((item: IToDoItem) => new ToDoItem({ done: item.done, name: item.name })))
    const newList = new ToDoList({ items: toDoItems ?? [] })
    return newList
  }

  save(element: unknown): void {
    localStorage.setItem(LOCALKEY, JSON.stringify(element))
  }
}

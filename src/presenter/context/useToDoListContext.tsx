import { createContext, useContext, useState } from 'react'
import { LocalStorage } from '@/core/data/model/LocalStorage'
import { IToDoItem } from '@/core/domain/model/IToDoItem'
import { IToDoList } from '@/core/domain/model/IToDoList'
import { SaveItemInToDoList } from '@/core/data/usecases/SaveItemInToDoList'
import { EditItemInToDoList } from '@/core/data/usecases/EditItemInToDoList'
import { DeleteItemToDoList } from '@/core/data/usecases/DeleteItemInToDoList'

const ToDoListContext = createContext({
  storage: LocalStorage.getInstance(),
  todoItemList: null as unknown as IToDoList,
  saveItemInList: (_: IToDoItem) => {},
  editItemInList: (_: IToDoItem) => {},
  deleteItemInList: (_: IToDoItem) => {},
})

export const ToDoListProvider = ({ children }: any) => {
  const storage = LocalStorage.getInstance()
  const [todoItemList, setTodoItemList] = useState(storage.get())

  const saveItemInList = (item: IToDoItem) => {
    new SaveItemInToDoList({
      storage: storage,
      item,
      list: storage.get(),
    }).save()

    setTodoItemList(storage.get())
  }

  const editItemInList = (item: IToDoItem) => {
    new EditItemInToDoList({
      item: item,
      list: storage.get(),
      storage,
    }).edit()

    setTodoItemList(storage.get())
  }

  const deleteItemInList = (item: IToDoItem) => {
    new DeleteItemToDoList({
      item,
      list: storage.get(),
      storage,
    }).delete()

    setTodoItemList(storage.get())
  }

  return (
    <ToDoListContext.Provider
      value={{
        todoItemList,
        storage,
        saveItemInList,
        editItemInList,
        deleteItemInList,
      }}
    >
      {children}
    </ToDoListContext.Provider>
  )
}
export const useToDoListContext = () => {
  return useContext(ToDoListContext)
}

import { useEffect, useState } from 'react'
import Button from '@/presenter/components/Button'
import { ButtomTypeEnum } from '@/shared/enums/ButtomTypeEnum'
import { ToDoItem } from '@/core/data/model/ToDoItem'
import './styles.css'
import { useToDoListContext } from '@/presenter/context/useToDoListContext'

export default function ListLayout(props: ListLayoutProps) {
  const { header, list, status, openSaveItem, toggleOpenSaveItem, editItemId } =
    props
  const [item, setItem] = useState<string>()
  const { saveItemInList, todoItemList, editItemInList } = useToDoListContext()

  const editItem = () => {
    const todoItem = todoItemList.items.find(
      (item) => item.id.value === editItemId,
    )
    if (todoItem) {
      editItemInList({
        ...todoItem,
        name: item!,
      })
    }
  }

  const saveItem = () => {
    if (!item) return
    if (editItemId) {
      editItem()
    } else {
      addItem()
    }
    toggleOpenSaveItem()
  }

  const addItem = () => {
    const toDoItem = new ToDoItem({
      done: false,
      name: item!,
    })
    saveItemInList(toDoItem)
  }

  useEffect(() => {
    if (editItemId) {
      const todoItem = todoItemList.items.find(
        (item) => item.id.value === editItemId,
      )
      setItem(todoItem?.name)
    }
  }, [editItemId])

  return (
    <div className="container-listLayout">
      <div className="header">{header}</div>
      {openSaveItem ? (
        <div className="saveItemcontainer">
          <h3>{editItemId ? 'Editar item' : 'Adiconar item'}</h3>
          <input
            className="inputItem"
            type="text"
            value={item}
            onChange={(value) => setItem(value.target.value)}
          />
          <div className="saveItemAction">
            <Button
              typeButton={ButtomTypeEnum.CONTAINED}
              label="Salvar"
              onClick={() => {
                saveItem()
                setItem(undefined)
              }}
            />
            <Button
              typeButton={ButtomTypeEnum.OUTLINED}
              label="Cancelar"
              onClick={() => {
                toggleOpenSaveItem()
                setItem(undefined)
              }}
            />
          </div>
        </div>
      ) : (
        <>
          <div className="status">{status}</div>
          <div className="list">{list}</div>
        </>
      )}
    </div>
  )
}

interface ListLayoutProps {
  header: JSX.Element
  status: JSX.Element
  list: JSX.Element
  openSaveItem: boolean
  toggleOpenSaveItem: () => void
  editItemId: string | undefined
}

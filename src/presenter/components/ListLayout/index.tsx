import Button from '@/presenter/components/Button'
import './styles.css'
import { ButtomTypeEnum } from '@/shared/enums/ButtomTypeEnum'
import { useState } from 'react'
import { SaveItemInToDoList } from '@/core/data/usecases/SaveItemInToDoList'
import { LocalStorage } from '@/core/data/model/LocalStorage'
import { ToDoItem } from '@/core/data/model/ToDoItem'
import { GetToDoList } from '@/core/data/usecases/GetToDoList'

export default function ListLayout(props: ListLayoutProps) {
  const { header, list, status, openAddItem, toggleOpenAddItem } = props
  const [item, setItem] = useState<string>()

  const saveItem = () => {
    if (!item) return

    const storage = new LocalStorage()

    const toDoItem = new ToDoItem({
      done: false,
      name: item,
    })

    const list = new GetToDoList({ storage }).get()

    console.log('list', list)
    console.log('toDoItem', toDoItem)
    new SaveItemInToDoList({
      storage,
      item: toDoItem,
      list,
    }).save()

    toggleOpenAddItem()
  }

  return (
    <div className="container-listLayout">
      <div className="header">{header}</div>
      {openAddItem ? (
        <div className="saveItemcontainer">
          <h3>Novo item</h3>
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
              }}
            />
            <Button
              typeButton={ButtomTypeEnum.OUTLINED}
              label="Cancelar"
              onClick={() => {
                toggleOpenAddItem()
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
  openAddItem: boolean
  toggleOpenAddItem: () => void
}

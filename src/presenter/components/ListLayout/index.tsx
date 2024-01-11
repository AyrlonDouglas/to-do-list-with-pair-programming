import { useState } from 'react'
import Button from '@/presenter/components/Button'
import { ButtomTypeEnum } from '@/shared/enums/ButtomTypeEnum'
import { ToDoItem } from '@/core/data/model/ToDoItem'
import './styles.css'
import { useToDoListContext } from '@/presenter/context/useToDoListContext'

export default function ListLayout(props: ListLayoutProps) {
  const { header, list, status, openAddItem, toggleOpenAddItem } = props
  const [item, setItem] = useState<string>()
  const { saveItemInList } = useToDoListContext()
  const saveItem = () => {
    if (!item) return
    const toDoItem = new ToDoItem({
      done: false,
      name: item,
    })
    saveItemInList(toDoItem)
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
                setItem(undefined)
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

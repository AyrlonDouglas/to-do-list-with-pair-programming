import { IToDoItem } from '@/core/domain/model/IToDoItem'
import './style.css'
import { useToDoListContext } from '@/presenter/context/useToDoListContext'

export default function ListTile(prop: ListTileProps) {
  const { label, checked, item } = prop
  const { editItemInList, deleteItemInList } = useToDoListContext()
  const onCheck = () => {
    editItemInList({
      ...item,
      done: !item.done,
    })
  }
  const onDelete = () => {
    deleteItemInList(item)
  }

  return (
    <div className="container-listTile" onClick={() => onCheck()}>
      <div>
        <div className={`icon-check ${checked ? 'checked' : ''}`}>
          <span className="material-symbols-outlined">check</span>
        </div>
        <p className={checked ? 'checked-label' : ''}>{label}</p>
      </div>

      <span
        className="material-symbols-outlined delete-icon"
        onClick={() => onDelete()}
      >
        delete
      </span>
    </div>
  )
}

interface ListTileProps {
  label: string
  checked: boolean
  item: IToDoItem
}

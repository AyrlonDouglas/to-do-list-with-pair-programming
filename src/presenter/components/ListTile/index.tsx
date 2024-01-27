import { IToDoItem } from '@/core/domain/model/IToDoItem'
import './style.css'
import { useToDoListContext } from '@/presenter/context/useToDoListContext'

export default function ListTile(prop: ListTileProps) {
  const { label, checked, item, toggleOpenSaveItem } = prop
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

  const onEdit = (e: any) => {
    e.stopPropagation()
    toggleOpenSaveItem(item.id.value)
  }

  return (
    <div className="container-listTile" onClick={() => onCheck()}>
      <div>
        <div className={`icon-check ${checked ? 'checked' : ''}`}>
          <span className="material-symbols-outlined">check</span>
        </div>
        <p className={checked ? 'checked-label' : ''}>{label}</p>
      </div>

      <div>
        <span
          className="material-symbols-outlined edit"
          onClick={(e) => onEdit(e)}
        >
          edit
        </span>

        <span className="material-symbols-outlined" onClick={() => onDelete()}>
          delete
        </span>
      </div>
      
    </div>
  )
}

interface ListTileProps {
  label: string
  checked: boolean
  item: IToDoItem
  toggleOpenSaveItem: (id?: string) => void
}

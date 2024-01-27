import ListLayout from '@/presenter/components/ListLayout'
import './style.css'
import Chip from '@/presenter/components/Chip'
import ListTile from '@/presenter/components/ListTile'
import Button from '@/presenter/components/Button'
import { ButtomTypeEnum } from '@/shared/enums/ButtomTypeEnum'
import { useState } from 'react'
import { useToDoListContext } from '@/presenter/context/useToDoListContext'

export default function Home() {
  const { todoItemList } = useToDoListContext()
  const [openSaveItem, setOpenSaveItem] = useState(false)
  const [editItemId, setEditItemId] = useState<string | undefined>()
  const toggleOpenSaveItem = (id?: string) => {
    setOpenSaveItem(!openSaveItem)
    setEditItemId(id)
  }

  return (
    <div className="container-home">
      <ListLayout
        header={<h2 style={{ textAlign: 'center' }}>Lista de tarefas</h2>}
        status={<Chip label="Em progresso" />}
        openSaveItem={openSaveItem}
        toggleOpenSaveItem={toggleOpenSaveItem}
        editItemId={editItemId}
        list={
          <>
            {todoItemList?.items.map((item) => (
              <ListTile
                key={item.id.value}
                label={item.name}
                checked={item.done}
                item={item}
                toggleOpenSaveItem={toggleOpenSaveItem}
                
              />
            ))}
          </>
        }
      />
      {!openSaveItem && (
        <Button
          className="addTileList"
          typeButton={ButtomTypeEnum.FAB}
          iconStart="add"
          onClick={() => toggleOpenSaveItem()}
        />
      )}
    </div>
  )
}

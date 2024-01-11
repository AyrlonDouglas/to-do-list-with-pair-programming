import ListLayout from '@/presenter/components/ListLayout'
import './style.css'
import Chip from '@/presenter/components/Chip'
import ListTile from '@/presenter/components/ListTile'
import Button from '@/presenter/components/Button'
import { ButtomTypeEnum } from '@/shared/enums/ButtomTypeEnum'
import { useState } from 'react'
import { useToDoListContext } from '@/presenter/context/useToDoListContext'

export default function Home() {
  const [openAddItem, setOpenAddItem] = useState(false)
  const toggleOpenAddItem = () => setOpenAddItem(!openAddItem)
  const { todoItemList } = useToDoListContext()

  return (
    <div className="container-home">
      <ListLayout
        header={<h2 style={{ textAlign: 'center' }}>Lista de tarefas</h2>}
        status={<Chip label="Em progresso" />}
        openAddItem={openAddItem}
        toggleOpenAddItem={toggleOpenAddItem}
        list={
          <>
            {todoItemList?.items.map((item) => (
              <ListTile
                key={item.id.value}
                label={item.name}
                checked={item.done}
                item={item}
              />
            ))}
          </>
        }
      />
      {!openAddItem && (
        <Button
          className="addTileList"
          typeButton={ButtomTypeEnum.FAB}
          iconStart="add"
          onClick={toggleOpenAddItem}
        />
      )}
    </div>
  )
}

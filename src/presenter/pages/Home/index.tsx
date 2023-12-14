import ListLayout from '@/presenter/components/ListLayout'
import './style.css'
import Chip from '@/presenter/components/Chip'
import ListTile from '@/presenter/components/ListTile'
import Button from '@/presenter/components/Button'
import { ButtomTypeEnum } from '@/shared/enums/ButtomTypeEnum'
import { useEffect, useState } from 'react'
import { GetToDoList } from '@/core/data/usecases/GetToDoList'
import { LocalStorage } from '@/core/data/model/LocalStorage'
import { IToDoList } from '@/core/domain/model/IToDoList'

export default function Home() {
  const [openAddItem, setOpenAddItem] = useState(false)
  const toggleOpenAddItem = () => setOpenAddItem(!openAddItem)
  const [list, setList] = useState<IToDoList>()

  useEffect(() => {
    setList(() => {
      const storage = new LocalStorage()
      return new GetToDoList({ storage }).get()
    })
  }, [openAddItem])

  return (
    <div className="container-home">
      <ListLayout
        header={<h2 style={{ textAlign: 'center' }}>Lista de tarefas</h2>}
        status={<Chip label="Em progresso" />}
        openAddItem={openAddItem}
        toggleOpenAddItem={toggleOpenAddItem}
        list={
          <>
            {list?.items.map((item) => (
              <ListTile
                key={item.id.value}
                label={item.name}
                checked={item.done}
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

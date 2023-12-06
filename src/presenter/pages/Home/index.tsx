import ListLayout from '@/presenter/components/ListLayout'
import './style.css'
import Chip from '@/presenter/components/Chip'
import ListTile from '@/presenter/components/ListTile'

export default function Home() {
  return (
    <div className="container-home">
      <ListLayout
        header={<h2>Lista de tarefas</h2>}
        status={<Chip label='Em progresso'/>}
        list={<ListTile label='teste da label' checked={false}/>}
                
      />
      
    </div>
  )
}

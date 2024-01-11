import { ToDoListProvider } from './context/useToDoListContext'
import Home from './pages/Home'

export default function App() {
  return (
    <ToDoListProvider>
      <Home />
    </ToDoListProvider>
  )
}

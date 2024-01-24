import { useState } from 'react'

import './App.css'
import AppHeader from './componets/AppHeader'
import TaskList from './componets/TaskList'
import { Contex } from './componets/Contex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppHeader/>
      <TaskList tasks={[]}/>
      <Contex/>
      
      
      
      
    </>
  )
}

export default App

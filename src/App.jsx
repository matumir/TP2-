import { useState } from 'react'
import './styles.css'
import FortalezaContrasena from './FortalezaContrasena'

function App() {
  const [count, setCount] = useState(0)

  return (
    <FortalezaContrasena />
  )
}

export default App

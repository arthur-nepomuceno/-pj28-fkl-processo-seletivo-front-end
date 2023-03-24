import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Rotas } from './rotas/Rotas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  )
}

export default App

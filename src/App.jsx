import { useState } from 'react'
import './App.css'
import UI from './components/ui/ui'
import Background from './components/background/backgound'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Background/>
    <UI/>
    </>
  )
}
export default App

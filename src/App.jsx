import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='' >
      <navbar />
    </div>
  )
}

export default App

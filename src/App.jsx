import { useState } from 'react'
import './App.css'
import Header from './containers/Header'
import Counter from './components/Counter/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Counter/>
    </>
  )
}

export default App

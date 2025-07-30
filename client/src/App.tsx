import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState<string>('')
  const [messageDos, setMessageDos] = useState<string>('')
  const [messageTres, setMessageTres] = useState<string>('')

  useEffect(()=>{
    const interval = setInterval(()=>{
      setMessage("Hola")
    }, 5000)

    const intervalDos = setInterval(()=>{
      setMessageDos("Bienvenido")
    }, 7000)

    const intervalTres = setInterval(()=>{
      setMessageTres('...')
    }, 9000)

    return ()=> {
      clearInterval(interval)
      clearInterval(intervalDos)
      clearInterval(intervalTres)
    }

    
  },[])

  return (
    <>
      <h1>{message}</h1>
      <h2>{messageDos}</h2>
      <h2>{messageTres}</h2>
    </>
  )
}

export default App

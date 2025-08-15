import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { GetAllRoles } from './services/allRoles'
import { GetAllUsers } from './services/allUsers'
import { GetAllOrders } from './services/allOrders'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState<string>('')
  const [messageDos, setMessageDos] = useState<string>('')
  const [messageTres, setMessageTres] = useState<string>('')

  const getRoles = useCallback(()=>{
    GetAllRoles()
  },[])

  const getUsers = useCallback(()=>{
    GetAllUsers()
  },[])

  const getOrders=useCallback(async()=>{
    const allOrdersResult = await GetAllOrders()
    console.log(allOrdersResult)
  },[])

  useEffect(()=>{
  
    
  },[])

  return (
    <>
    <button onClick={getOrders}>Ordenes</button>
    <button onClick={getRoles}>Roles</button>
    <button onClick={getUsers}>Users</button>
      <h1>{message}</h1>
      <h2>{messageDos}</h2>
      <h2>{messageTres}</h2>
    </>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { store } from '../store.tsx'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateOrder from './components/createOrder.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
      <StrictMode>
        <BrowserRouter>
        <Routes>
          <Route index path='/' element={<App/>}></Route>
          {/** <Route path='/orders' element={<CreateOrder/>}></Route>*/}
          <Route path='/createOrders' element={<CreateOrder/>}></Route>
        </Routes>
        </BrowserRouter>
      
    </StrictMode>
  </Provider>
  ,
)

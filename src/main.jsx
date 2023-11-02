import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
      <Route path='/home' element={"/home"} />
      <Route path='/home' element={"/home"} />
      <Route path='/home' element={"/home"} />
      <Route path='/home' element={"/home"} />
    </BrowserRouter>
  </React.StrictMode>,
)

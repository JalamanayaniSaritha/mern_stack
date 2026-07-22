import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import JSX from './App.jsx'
import  Biryani from './Components.jsx'
import  Birthday from './Birthday.jsx'
import Count from './Count.jsx'
import Form from './form.jsx'
import Events from './Events.jsx'
import API from './API.jsx'
import DB_connect from './DB_connect.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JSX/>
    <Biryani/>  
    <Birthday/>
    <Count/>  
    <Form/>
    <Events/>
    <API/>
    <DB_connect/>
  </StrictMode>

,
)
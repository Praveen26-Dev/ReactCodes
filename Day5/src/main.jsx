
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import ReactRouter from './ReactRouter.jsx'
createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
      <ReactRouter/>
  </BrowserRouter>
)

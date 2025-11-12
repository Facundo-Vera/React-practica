import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "font-awesome/css/font-awesome.css" 
import App from './App.jsx'
import GameApp from './game/GameApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <GameApp/>
  </StrictMode>,
)



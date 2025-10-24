import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Maps } from './components/Maps.tsx'
import { Shopping } from './components/shopping_cart/Shopping.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/shopping" element={<Shopping />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

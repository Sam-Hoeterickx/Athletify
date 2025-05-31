import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//Router
import { Root } from './modules/components/root'

//Styles
import './main.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)

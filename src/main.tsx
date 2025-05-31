import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//Router
import { Root } from './modules/components/root'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)

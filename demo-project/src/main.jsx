import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Content from './Hooks/Content.jsx'

// import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter> */}
      <Content>
        <App />
      </Content>
    {/* </BrowserRouter> */}
  </StrictMode>,
)

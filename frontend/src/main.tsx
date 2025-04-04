import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LessonProvider} from "./context/LessonContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <LessonProvider>
    <App />
      </LessonProvider>
  </StrictMode>,
)

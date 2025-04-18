import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { App } from './App.tsx'
import { ThemeProvider } from "@/context/ThemeContext";
import './assets/css/styles.css';
import "./i18n";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
)

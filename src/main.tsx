import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import routes from './routes/route.tsx'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './providers/theme.provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
    <Provider store={store}>
  <RouterProvider router={routes}>
 <App></App>
  </RouterProvider>
    </Provider>
    </ThemeProvider>

  </StrictMode>,
)

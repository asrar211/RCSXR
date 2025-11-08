import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout/Layout.tsx'
import { Login } from './pages/Login.tsx'
import { Signup } from './pages/Signup.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><App/></Layout>,
    errorElement: <div>Error Return Back</div>
  }, 
  {
    path: "/auth/signin",
    element: <Layout><Login/></Layout>
  },
  {
    path: "/auth/signup",
    element: <Layout><Signup/></Layout>
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

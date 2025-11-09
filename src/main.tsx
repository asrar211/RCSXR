import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout/Layout.tsx'
import { Login } from './pages/Login.tsx'
import { Signup } from './pages/Signup.tsx'
import { Products } from './pages/Products.tsx'
import { ProductsProvider } from './context/ProductsContext.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><App/></Layout>,
    errorElement: <div>Error Return Back</div>
  }, 
  {
    path: "/signin",
    element: <Layout><Login/></Layout>
  },
  {
    path: "/signup",
    element: <Layout><Signup/></Layout>
  },
  {
    path: "/products",
    element: <Layout><Products/></Layout>
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductsProvider>
      <RouterProvider router={router}/>
    </ProductsProvider>
  </StrictMode>,
)

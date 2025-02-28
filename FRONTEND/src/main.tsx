import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Login from './Pages/Login.tsx'
import DashBoard from './Pages/DashBoard.tsx'
import Attendance from './Pages/Attendance.tsx'


const routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
     {
      path: '/login',
      element: <Login />,
     },
     {
      path: '/dashboard',
      element: <DashBoard />,
     },
     {
      path:'/attendance',
      element:<Attendance/>
     }
    
      
    ]
  },
])
const queryclient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryclient}>
    <React.StrictMode>
      <RouterProvider router={routers} />
    </React.StrictMode></QueryClientProvider>

)

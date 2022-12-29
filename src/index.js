import React from 'react'
import ReactDOM from 'react-dom'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import 'semantic-ui-css/semantic.min.css'
import Root from './routes/root'
import ErrorPage from './ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'testing',
        element: <App />,
      },
    ],
  },
])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
)

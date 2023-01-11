import React from 'react'
import ReactDOM from 'react-dom'

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import App from './App'
import 'semantic-ui-css/semantic.min.css'
import Root from './routes/root'
import ErrorPage from './ErrorPage'
import Home from './pages/home'
import ReviewList from './pages/reviews'

import ReviewDetail from './pages/reviews/detail'
import MyApps from './pages/my-apps'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'testing',
        element: <App />,
      },
      {
        path: 'reviews',
        element: <Outlet />,
        children: [
          { index: true, element: <ReviewList /> },
          {
            path: ':reviewId',
            element: <ReviewDetail />,
          },
        ],
      },
      {
        path: 'my-apps',
        element: <MyApps />,
      },
    ],
  },
])

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <NotificationsProvider>
        <RouterProvider router={router} />
      </NotificationsProvider>
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

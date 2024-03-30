import { createBrowserRouter } from 'react-router-dom'
import { MainTemplate } from '../components/templates/Main'
import { Main } from '../pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainTemplate />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
    ],
  },
])

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router'

import App from './components/App'

const routes = createRoutesFromElements(<Route path="/" element={<App />} />)

const router = createBrowserRouter(routes)

export default router

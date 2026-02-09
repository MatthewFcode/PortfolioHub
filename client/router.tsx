import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router'
import Info from './components/Info.tsx'
import App from './components/App'
import RouteWrapper from './components/RouteWrapper.tsx'

const routes = createRoutesFromElements(
  <>
    <Route
      path="/"
      element={
        <RouteWrapper>
          <Info />
        </RouteWrapper>
      }
    />
    <Route
      path="/game"
      element={
        <RouteWrapper>
          <App />
        </RouteWrapper>
      }
    />
  </>,
)

const router = createBrowserRouter(routes)

export default router

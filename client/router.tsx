// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
// } from 'react-router'
// import Info from './components/Info.tsx'
// import App from './components/App'

// const routes = createRoutesFromElements(
//   <>
//     <Route path="/" element={<App />} />
//     <Route path="/info" element={<Info />} />
//   </>,
// )

// const router = createBrowserRouter(routes)

// export default router
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
          <App />
        </RouteWrapper>
      }
    />
    <Route
      path="/info"
      element={
        <RouteWrapper>
          <Info />
        </RouteWrapper>
      }
    />
  </>,
)

const router = createBrowserRouter(routes)

export default router

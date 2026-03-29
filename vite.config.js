import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/ | vite is the build environemnt for building react projets btw
export default defineConfig({
  // definfing the configuration object for vite to read
  plugins: [react()], // telling vite to use the react plugin
  proxy: {
    // proxy for modifying traffic between a server and a frontend/client otherwise CORS would block our request from our dev server to our backend server
    api: {
      // sets up the proxy for any request that starts with api
      target: 'https://localhost:8000',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''), // rewriting the request path before sending it to the server e.g. React makes POST to /api/users --> proxy intercepts and reroutes to http://localhost:8000/api/users
    },
  },
})

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Timeline from './pages/Timeline'
import './index.css'
// import App from './App.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Homepage />
	},
	{
		path: '/timeline',
		element: <Timeline />
	},
	// {
	// 	path: '/releases',
	// 	element: <Releases />
	// },
	// {
	// 	path: '/about',
	// 	element: <About />
	// },
	// {
	// 	path: '/events',
	// 	element: <Events />
	// },
	// {
	// 	path: '/misc-blog',
	// 	element: <MiscBlog />
	// },		
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

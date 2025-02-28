import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Timeline from './pages/Timeline'
import Discography from './pages/Discography'
import About from './pages/About'
import Experiences from './pages/Experiences'
import './index.css'
import SyncsAds from './pages/SyncsAds'
import { Theme } from "@radix-ui/themes";

const router = createBrowserRouter([
	{
		path: '/',
		element: <Homepage />
	},
	{
		path: '/timeline',
		element: <Timeline />
	},
	{
		path: '/discography',
		element: <Discography />
	},
	{
		path: '/about',
		element: <About />
	},
	{
		path: '/experiences',
		element: <Experiences />
	},
	{
		path: '/syncs-ads',
		element: <SyncsAds />
	},		
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
	<Theme>
	    <RouterProvider router={router}/>
	</Theme>
  </StrictMode>,
)

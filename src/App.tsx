import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import Particles from 'react-particles-js'
import { BrowserRouter as Router, Link, Route, Switch, useLocation } from 'react-router-dom'
import Footer from './components/layout/Footer'
import MainPage from './components/page/MainPage'
import NotFoundPage from './components/page/NotFoundPage'
import ProjectsPage from './components/page/ProjectsPage'

export default function App() {
	return (
		<HelmetProvider>
			<div className="flex items-center justify-center h-screen w-screen bg-gray-100 md:bg-black">
				<div
					id="page-container"
					className="h-max md:h-auto w-screen md:w-auto rounded-none md:rounded-xl absolute z-10 mx-auto p-10 bg-gray-100 text-center">
					<Router>
						<BackButton />
						<Switch>
							<Route path="/" exact component={MainPage} />
							<Route path="/projects" exact component={ProjectsPage} />
							<Route path="**" component={NotFoundPage} />
						</Switch>
					</Router>
					<Footer />
				</div>
				<Particles
					className="absolute z-0 w-screen h-screen hidden md:block"
					params={{
						particles: {
							number: {
								value: 160,
								density: {
									enable: false,
								},
							},
							size: {
								value: 3,
								random: true,
								anim: {
									speed: 5,
									size_min: 0.4,
									sync: true,
								},
							},
							line_linked: {
								enable: true,
								distance: 60,
								opacity: 0.5,
							},
							move: {
								random: true,
								speed: 2,
								direction: 'bottom',
								out_mode: 'out',
							},
						},
					}}
				/>
			</div>
		</HelmetProvider>
	)
}

function BackButton() {
	const location = useLocation();
	return (location.pathname !== '/' ?
		<Link to="/"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
		</svg></Link>
		: null)
}

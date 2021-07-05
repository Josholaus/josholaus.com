import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/layout/Footer'
import MainPage from './components/page/MainPage'
import NotFoundPage from './components/page/NotFoundPage'
import Particles from 'react-particles-js'
import { HelmetProvider } from 'react-helmet-async'

export default function App() {
	return (
		<HelmetProvider>
			<div className="flex items-center justify-center h-screen w-screen bg-gray-100 md:bg-black">
				<div
					id="page-container"
					className="h-max md:h-auto w-screen md:w-auto rounded-none md:rounded-xl absolute z-10 mx-auto p-10 bg-gray-100 text-center">
					<Router>
						<Switch>
							<Route path="/" exact component={MainPage} />
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
								},
							},
							line_linked: {
								enable: false,
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

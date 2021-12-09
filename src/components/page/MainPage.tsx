import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom';
import TitleHeading from '../headings/TitleHeading'
import TitleSubheading from '../headings/TitleSubheading'
import PortfolioButton from '../buttons/PortfolioButton'
import SpotifyButton from '../buttons/SpotifyButton'
import GitHubButton from '../buttons/GitHubButton'

export default function MainPage() {
	return (
		<div className="w-full md:px-12">
			<Helmet>
				<title>Josholaus | Home</title>
			</Helmet>
			<img
				className="w-44 h-44 rounded-xl mx-auto shadow-xl"
				src="/images/image.png"
				alt="Josholaus in action"
			/>
			<TitleHeading className="mt-5">Josholaus</TitleHeading>
			<TitleSubheading className="w-80 inline md:inline-block">
				just two computer science students who pretend they know how to write good code as a team
			</TitleSubheading>
			<Link to="/projects">
				<p className="text-md mt-3 hover:-translate-y-1 transform duration-150">&#8594; check out our projects</p>
			</Link>
			<LinkList className="mt-5 grid md:grid-rows-2 lg:grid-flow-col md:auto-cols-max gap-2 justify-center" />
		</div>
	)
}

function LinkList(props: any) {
	return (
		<div className={props.className}>
			<SpotifyButton link="https://open.spotify.com/playlist/6uHkfhApJRMJHDs9SXFhSu?si=b54f1a87ee774b07">
				Spotify playlist
			</SpotifyButton>
			<PortfolioButton link="https://nicolaus.lol/">
				Nico's Website
			</PortfolioButton>
			<GitHubButton link="https://github.com/josholaus">
				GitHub
			</GitHubButton>
			<PortfolioButton link="https://bemoty.dev/">
				Josh's Website
			</PortfolioButton>
		</div>
	)
}

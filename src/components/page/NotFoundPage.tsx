import React from 'react'
import { Helmet } from 'react-helmet-async'
import TitleHeading from '../headings/TitleHeading'
import TitleSubheading from '../headings/TitleSubheading'

export default function NotFoundPage() {
	return (
		<div className="w-full md:px-12">
			<Helmet>
				<title>Josholaus | 404</title>
			</Helmet>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="mx-auto w-24"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			<TitleHeading className="mt-5">404</TitleHeading>
			<TitleSubheading className="w-80 inline md:inline-block">
				sorry, this page could not be found
			</TitleSubheading>
		</div>
	)
}

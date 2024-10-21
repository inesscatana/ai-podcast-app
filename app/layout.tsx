import type { Metadata } from 'next'

import ConvexClerkProvider from '../providers/ConvexClerkProvider'

import './globals.css'

export const metadata: Metadata = {
	title: 'Podcastr',
	description: 'Generate your podcasts using AI',
	icons: {
		icon: '/icons/logo.svg',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`antialiased`}>
				<ConvexClerkProvider>{children}</ConvexClerkProvider>
			</body>
		</html>
	)
}

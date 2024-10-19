import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
	title: 'Podcastr',
	description: 'Software-as-a-Service app with AI-powered features',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`antialiased`}>{children}</body>
		</html>
	)
}

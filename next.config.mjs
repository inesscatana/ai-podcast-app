/** @type {import('next').NextConfig} */

const nextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'clean-stingray-588.convex.cloud',
			},
			{
				protocol: 'https',
				hostname: 'img.clerk.com',
			},
		],
	},
}

export default nextConfig

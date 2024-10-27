/** @type {import('next').NextConfig} */
const nextConfig = {
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

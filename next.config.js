/** @type {import('next').NextConfig} */

const nextConfig = {
	output: "export",
	images: {
		unoptimized: true
	},
	async redirects()
	{
		return [
			{
				source: '/',
				destination: '/en',
				permanent: true,
			},
		];
	},
}

module.exports = nextConfig;



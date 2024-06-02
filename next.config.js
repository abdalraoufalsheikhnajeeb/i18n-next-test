/** @type {import('next').NextConfig} */


const nextConfig = {
	output: "export",
	async redirects()
	{
		return [
			{
				source: '/',
				destination: '/en',
				permanent: true,
			},
		]
	},
}

module.exports = nextConfig




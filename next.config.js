/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['robohash.org']
    },

    redirects: async () => {
        return [

            {
                source: '/home',
                destination: '/product',
                permanent: false
            },
            {
                source: '/users',
                destination: '/home',
                permanent: false
            },
            {
                source: '/users/:userId',
                destination: '/home',
                permanent: false
            },
            {
                source: '/college',
                destination: '/home',
                permanent: false
            },
        ]
    }
}

module.exports = nextConfig

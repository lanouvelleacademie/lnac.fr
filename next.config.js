// @ts-check
 
/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    /* config options here */
    redirects() {
      return [
        {
          source: '/discord',
          destination: 'https://discord.gg/V6DsA69',
          permanent: true,
        },
      ]
    },
  }
   
module.exports = nextConfig
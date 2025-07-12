const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/deck',
        destination: '/TechKatalyst_Deck.pdf',
      },
    ]
  },
}

module.exports = nextConfig

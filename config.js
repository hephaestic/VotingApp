module.exports = {
  app: {
    port: process.env.PORT || 3000
  },
  mongo: {
    url: process.env.MONGODB_URL || 'mongodb://localhost:27017/vote',
  }
}

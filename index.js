const arrayToMongo = require('./lib/array_to_mongo')

module.exports = async (options) => {
  /***
   * options
   * host: mongodb host
   * port: mongodb port
   * user: mongodb username
   * password: mongodb password
   * db: mongodb db name
   * collection: mongodb db collection
   * dir: the excel dir
  */
  if (!options.host) throw new Error('Mongodb host not null！！')
  if (!options.port) throw new Error('Mongodb port not null！！')
  if (!options.user) throw new Error('Mongodb user not null！！')
  if (!options.db) throw new Error('Mongodb db not null！！')
  if (!options.collection) throw new Error('Mongodb collection not null！！')
  if (!options.dir) throw new Error('Dir not null！！')
  await arrayToMongo(options)
}

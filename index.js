const arrayToMongo = require('./lib/array_to_mongo')

const options = {
  user: 'root',
  password: 'yangzong',
  host: '47.106.84.59',
  port: '28017',
  db: 'test',
  collection: 'users',
  dir: '/opentest/excel2mongo/excel/'
}

arrayToMongo(options)

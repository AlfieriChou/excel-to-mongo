const xlsxToMongo = require('./index')

const options = {
  user: 'root',
  password: 'hahaha',
  host: '127.0.0.1',
  port: '27017',
  db: 'test',
  collection: 'users',
  dir: __dirname + '/excel'
}

xlsxToMongo(options)
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
const data = require('./array_to_mongo')

const url = 'mongodb://root:nicaicaimimashishenme@47.106.84.59:28017'
const db_name = 'test'

MongoClient.connect(url, async (err, client) => {
  assert.equal(null, err)
  console.log("Connected successfully to server")
  const db = client.db(db_name)
  const collection = db.collection('users')
  for (let i = 0; i < data.length; ++i) {
    let itemData = data[i]
    const mongoData = await collection.findOne(itemData[0])
    console.log('------->', mongoData)
    if (!mongoData) {
      const result = await collection.insertMany(itemData)
      console.log('------->', result)
    } else {
      continue
    }
  }
  client.close()
})

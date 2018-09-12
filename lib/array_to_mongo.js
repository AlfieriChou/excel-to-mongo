const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
const excelToJson = require('./excel_to_array')

module.exports = (options) => {
  const data = excelToJson(options.dir)
  const url = options.password ? 'mongodb://' + options.user + ':' + options.password + '@' + options.host + ':' + options.port : 'mongodb://' + options.host + ':' + options.port
  console.log('------>', url)
  const db_name = options.db
  MongoClient.connect(url, async (err, client) => {
    assert.equal(null, err)
    console.log("Connected successfully to server")
    const db = client.db(db_name)
    const collection = db.collection(options.collection)
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
}

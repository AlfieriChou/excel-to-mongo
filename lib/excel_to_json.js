const xlsx = require('node-xlsx')
const fs = require('fs')
const _ = require('lodash')

const items = fs.readdirSync('./excel/')
items.forEach(item => {
  fileSuffix = item.split('.')[1]
  if (fileSuffix !== 'xlsx') {
    _.remove(items, (n) => {
      return n  === item
    })
  }
})
let excelData = []
items.forEach(item => {
  const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}` + '/excel/' + `${item}`))
  const data = workSheetsFromBuffer[0].data
  let result = []
  const origin = data[0]
  let itemData, dataItem
  for (let i = 1; i < data.length; ++i) {
    itemData = data[i]
    dataItem = {}
    for (let j = 0; j < origin.length; ++j) {
      dataItem[origin[i]] = itemData[i] || ''
    }
    result.push(dataItem)
  }
  excelData.push(result)
})

module.exports = excelData
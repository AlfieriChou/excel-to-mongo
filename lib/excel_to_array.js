const xlsx = require('node-xlsx')
const fs = require('fs')
const _ = require('lodash')

module.exports = (dir) => {
  const items = fs.readdirSync(dir)
  if (items.length === 0) throw new Error('Dir mast be accurate！！！')
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
    const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(dir + `${item}`))
    const data = workSheetsFromBuffer[0].data
    let result = []
    const origin = data[0]
    let itemData, dataItem
    for (let i = 1; i < data.length; ++i) {
      itemData = data[i]
      dataItem = {}
      for (let j = 0; j < origin.length; ++j) {
        dataItem[origin[j]] = itemData[j] || ''
      }
      result.push(dataItem)
    }
    excelData.push(result)
  })
  return excelData
}

# excel-to-mongo

### install
```bash
npm install xlsx-to-mongo
```

### 说明

    * 目录可自定义
    * 查重（如果Excel表中的第一条存在数据库中，那么，这个Excel表将不会导入）

### example

```javascript
const xlsxToMongo = require('xlsx-to-mongo')

const options = {
    user: 'root',
    password: 'password',
    host: '127.0.0.1',
    port: '27017',
    db: 'test',
    collection: 'users',
    dir: __dirname + '/excel/'
}

xlsxToMongo(options)
```

* options

    * user: mongodb用户
    * password: mongodb密码
    * host: mongodb host
    * port: mongodb port
    * db: mongodb数据库名
    * collection: mongodb collection
    * dir: 目标目录（要导入的Excel目录路径）

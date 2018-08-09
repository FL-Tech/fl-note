import db from '../sync-store'

const NAMESPACE = 'library'
const currentDB = db.read()

// 初始化创建文档库表
if (!currentDB.has(NAMESPACE).value()) {
  currentDB.set(NAMESPACE, []).write()
}

const Library = currentDB.get(NAMESPACE)

export default Library

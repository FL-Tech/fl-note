import db from '../sync-store'

const NAMESPACE = 'library'

// 初始化创建文档库表
const currentDb = db.read()
const isExist = !currentDb.has(NAMESPACE).value()
if (isExist) {
  currentDb.set(NAMESPACE, []).write()
}

const getInstance = () => {
  return db.read().get(NAMESPACE)
}

export default {
  add (newLib) {
    console.log('新增文档库', newLib)
    getInstance()
      .insert(newLib)
      .write()
  },
  get () {
    const value = getInstance().value()
    return [...value]
  }
}

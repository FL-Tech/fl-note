import db from '../sync-store'

const NAMESPACE = 'doc'

// 初始化创建文档表
const currentDb = db.read()
const isExist = !currentDb.has(NAMESPACE).value()
if (isExist) {
  currentDb.set(NAMESPACE, []).write()
}

const getInstance = () => {
  return db.read().get(NAMESPACE)
}

export default {
  add (newDoc) {
    console.log('新增文档', newDoc)
    getInstance()
      .insert(newDoc)
      .write()
  },
  get () {
    const value = getInstance().value()
    return [...value]
  }
}

import path from 'path'
import Datastore from 'lowdb'
import LodashId from 'lodash-id'
import FileSync from 'lowdb/adapters/FileSync'
import { getUserDataStorePath } from '../utils/electron-utils'

// 保存用户本地设置
const STORE_PATH = getUserDataStorePath()
const PATH = path.join(STORE_PATH, '/local-store.json')
const adapter = new FileSync(PATH)

console.log('当前用户设置保存路径', PATH)

const db = Datastore(adapter)
db._.mixin(LodashId)

export default db

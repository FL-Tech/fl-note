import path from 'path'
import Datastore from 'lowdb'
import LodashId from 'lodash-id'
import FileSync from 'lowdb/adapters/FileSync'
import Setting from './model/Setting'
// 需要同步数据的数据储存

// 先从本地读取设置
const localSetting = Setting.value()

// 再根据设置的目录创建一个用于同步的数据库
const syncPath = path.join(localSetting.DEFAULT_SETTING_SAVE_PATH, '/sync-store.json')
console.log('当前用户设置文档库同步路径为', syncPath)

const adapter = new FileSync(syncPath)

const db = Datastore(adapter)
db._.mixin(LodashId)

export default db

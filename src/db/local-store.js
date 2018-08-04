import path from 'path'
import Datastore from 'lowdb'
import LodashId from 'lodash-id'
import FileSync from 'lowdb/adapters/FileSync'
import fs from 'fs-extra'
import { getApp } from '../utils/electron-utils'

// 保存用户本地设置

const APP = getApp()
const STORE_PATH = APP.getPath('userData')

if (process.type !== 'renderer') {
  if (!fs.pathExistsSync(STORE_PATH)) {
    fs.mkdirpSync(STORE_PATH)
  }
}
const adapter = new FileSync(path.join(STORE_PATH, '/local-store.json'))

const db = Datastore(adapter)
db._.mixin(LodashId)

export default db

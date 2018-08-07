import db from '../local-store'
import { getUserDataStorePath } from '../../utils/electron-utils'
const NAMESPACE = 'Setting'

const currentDB = db.read()

// 创建设置表
if (!currentDB.has(NAMESPACE).value()) {
  const STORE_PATH = getUserDataStorePath()
  // 笔记数据保存路径
  currentDB
    .set(NAMESPACE, {
      DEFAULT_SETTING_SAVE_PATH: STORE_PATH
    })
    .write()
}

const Setting = currentDB.get(NAMESPACE)

export default Setting

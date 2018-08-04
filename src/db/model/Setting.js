import db from '../local-store'

const NAMESPACE = 'Setting'
const currentDB = db.read()

// 创建设置表
if (!currentDB.has(NAMESPACE).value()) {
  // 笔记数据保存路径
  const DEFAULT_SETTING_SAVE_PATH =
    '/Users/zhangzhenfei/Library/Mobile Documents/com~apple~CloudDocs/backup'
  currentDB
    .set(NAMESPACE, {
      DEFAULT_SETTING_SAVE_PATH
    })
    .write()
}

const Setting = currentDB.get(NAMESPACE)

export default Setting

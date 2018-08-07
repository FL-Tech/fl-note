import { remote, app } from 'electron'
import path from 'path'
import fs from 'fs-extra'

/**
 * 获取Electron APP
 */
export const getApp = () => {
  const APP = process.type === 'renderer' ? remote.app : app
  return APP
}

/**
 * 获取用户本地存储路径
 */
export const getUserDataStorePath = () => {
  const USERDATA_PATH = getApp().getPath('userData')
  const STORE_PATH = path.join(USERDATA_PATH, '/DATA_STORAGE')
  console.log('本地存储路径为', STORE_PATH)
  const isExists = fs.pathExistsSync(STORE_PATH)
  console.log('判断本地存储路径是否已经创建', isExists)
  if (!isExists) {
    console.log('创建本地存储路径', isExists)
    fs.mkdirpSync(STORE_PATH)
  }
  return STORE_PATH
}

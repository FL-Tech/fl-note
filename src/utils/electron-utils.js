import { remote, app } from 'electron'

export const getApp = () => {
  const APP = process.type === 'renderer' ? remote.app : app
  return APP
}

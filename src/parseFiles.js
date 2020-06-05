import {entityType} from './constants'

let fileMap = new Map()

export const parseFiles = (data, parent) => {
  const addFile = element => {
    const cont = encodeURI(element.contents)
    fileMap.set(`${parent}${element.name}`, cont)
  }

  if (data.type === entityType.FILE) {
    addFile(data)

  } else if (data.type === entityType.DIRECTORY) {
    const path = () => {
      if (parent) return `${parent}${data.name}/`
      else return '/'
    }

    data.contents.forEach(element => parseFiles(element, path()))
  }

  return fileMap
}
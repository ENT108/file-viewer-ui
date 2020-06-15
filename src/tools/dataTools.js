import { EntityTypeEnum } from '../constants'

let fileMap = new Map()

export const parseFiles = (data, parent) => {
  const addFile = element => {
    fileMap.set(`${parent}${element.name}`, element.contents)
  }

  if (data.type === EntityTypeEnum.FILE) {
    addFile(data)

  } else if (data.type === EntityTypeEnum.DIRECTORY) {
    const path = () => {
      if (parent) return `${parent}${data.name}/`
      else return '/'
    }

    data.contents.forEach(element => parseFiles(element, path()))
  }

  return fileMap
}

export const getFiles = (data, filter) => Array.from(data.keys())
  .map((file) => {
    if (filter && file.toLowerCase().search(filter) > -1) return file
    else if (!filter) return file
    else return null
  })
  .filter((file) => file)

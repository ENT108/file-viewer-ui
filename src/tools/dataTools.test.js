import dataSourceMock from '../data/dataSourceMock.json'
import {parseFiles, getFiles} from './dataTools'

test('parsing of data source works', () => {
  const expected = new Map()
  expected.set('/one.txt', 'one')
  expected.set('/two.txt', 'two')
  expected.set('/test-dir/three.txt', 'three')

  expect(parseFiles(dataSourceMock)).toStrictEqual(expected)
})

test('getting array of file names works', () => {
  const expected = ['/one.txt', '/two.txt', '/test-dir/three.txt']

  expect(getFiles(parseFiles(dataSourceMock))).toEqual(expected)
})
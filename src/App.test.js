import React from 'react'
import {fireEvent, render} from '@testing-library/react'
import App from './App'
import dataSourceMock from './dataSourceMock.json'
import {parseFiles} from './dataTools'

const mock = parseFiles(dataSourceMock)

test('renders no preview pane', () => {
  const {getByText} = render(<App data={mock} />)
  const info = getByText(/No file is selected/i)

  expect(info).toBeInTheDocument()
})

test('renders first file in file list', () => {
  const {getByText} = render(<App data={mock} />)
  const one = getByText(/one.txt/i)

  expect(one).toBeInTheDocument()
})

test('opens first file in preview', () => {
  const {getByText} = render(<App data={mock} />)
  const one = getByText(/one/i)

  fireEvent(
    getByText('/one.txt'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  )

  expect(one).toBeInTheDocument()
})

test('closes preview of first file', () => {
  const {getByText} = render(<App data={mock} />)
  const one = getByText(/one/i)

  fireEvent(
    getByText('/one.txt'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  )

  expect(one).toBeInTheDocument()

  fireEvent(
    getByText('❌ Close Preview'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  )
  const info = getByText(/No file is selected/i)

  expect(info).toBeInTheDocument()
})
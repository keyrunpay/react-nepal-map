export const defaultColor = '#eee4ed'

export const defaultProvinceColor = [
  '#f0ece1',
  '#ffe4e9',
  '#f3eac1',
  '#d9edec',
  '#ecf5da',
  '#eee4ed',
  '#feefd8'
]

export const getRandomColor = () => {
  return '#' + Math.random().toString(16).slice(-6)
}

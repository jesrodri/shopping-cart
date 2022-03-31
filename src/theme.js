const colors = {
  black:       '#000000',
  white:       '#ffffff',
  lightGray:   '#b5b0a7',
  gray:        '#999999',
  darkGray:    '#37352f',
  darkRed:     '#cc0000',
  yellow:      '#e0ca00',
  lightYellow: '#f7e581',
  salmon:      '#fa8072',
  darkSalmon:  '#f16050',
  green:       '#66f57e',
  darkGreen:   '#49a659',
}

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

const fonts = {
  body:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol', 'Nunito', sans-serif;",
}

const fontSizes = [0, 5, 7, 9, 12, 16, 21, 28, 37, 50, 67, 89, 119, 159].map(
  (n) => `${n / 10}rem`
)

const fontWeights = [0, 300, 400, 700]

const radii = [0, 2]

const zIndices = []

const sizes = []

const theme = {
  colors,
  space,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  zIndices,
  sizes,
}

export default theme

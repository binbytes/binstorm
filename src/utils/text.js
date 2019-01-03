export function convertToPascalCase(text) {
  if (text === 'default') {
    return ''
  }
  return text
    .match(/[a-z0-9/]+/gi)
    .map(function(text) {
      return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()
    })
    .join('')
}

export function getSidePropertyName(property, side) {
  const props = property.split(/(?=[A-Z])/)
  props.splice(1, 0, convertToPascalCase(side))
  return props.join('')
}

import { getSidePropertyName } from './text'

export function formate(properties, data) {
  const { prefix, propertyName, sides } = properties
  let result = {}
  Object.keys(data).map(name => {
    let className = name === 'default' ? prefix : `${prefix}-${name}`
    result[className] = {}
    result[className][propertyName] = data[name]
    if (sides) {
      Object.keys(sides).map(side => {
        className =
          name === 'default' ? `${prefix}${side}` : `${prefix}${side}-${name}`
        result[className] = {}
        if (Array.isArray(sides[side])) {
          const subProperty = {}
          Object.keys(sides[side]).map(_side => {
            subProperty[getSidePropertyName(propertyName, sides[side][_side])] =
              data[name]
          })
          result[className] = subProperty
        } else {
          result[className][getSidePropertyName(propertyName, sides[side])] =
            data[name]
        }
      })
    }
  })
  return result
}

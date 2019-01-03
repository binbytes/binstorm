import merge from 'merge-deep'
import { formate } from '../utils/obj'
import { readContainer, create } from '../utils/file'
import { CON_STYLES, OUT_STYLE } from '../constants'

export function buildCode(config) {
  let result = {}
  Object.keys(config.modules).map(key => {
    result = merge(formate(config.modules[key], config[key]), result)
  })
  return result
}

export function buildFile(content) {
  const preText = readContainer(CON_STYLES)
  const finalStyle = preText.replace('__style__', JSON.stringify(content))
  create(OUT_STYLE, finalStyle)
}

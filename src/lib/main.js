import merge from 'merge-deep'
import { formate } from '../utils/obj'
import {
  readContainer,
  create,
  readPackageJSON,
  writePackageJSON
} from '../utils/file'
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
  const finalStyle = preText.replace(
    '__style__',
    JSON.stringify(content, null, 2)
  )
  create(OUT_STYLE, finalStyle)
}

export function configurePackageJSON(path) {
  const packageJSON = JSON.parse(readPackageJSON())
  packageJSON.scripts[
    'dev-android'
  ] = `node '${path}/index.js' re-style && react-native run-android`
  packageJSON.scripts[
    'dev-ios'
  ] = `node '${path}/index.js' re-style && react-native run-ios`
  writePackageJSON(JSON.stringify(packageJSON, null, 2))
}

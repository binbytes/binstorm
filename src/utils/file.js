import fs from 'fs'
import log from './log'
import {
  DIR_DEFAULT,
  DIR_DESTINATION,
  DIR_CONTAINER,
  PATH_PACKAGE_JSON
} from '../constants'

export function copyDefault() {
  const files = readDir(DIR_DEFAULT)
  if (!fs.existsSync(DIR_DESTINATION)) fs.mkdirSync(DIR_DESTINATION)
  files.forEach(file => {
    fs.copyFileSync(
      DIR_DEFAULT + file,
      DIR_DESTINATION + file.replace('.stub', '')
    )
    log('File generated')
  })
}

export function create(filename, content) {
  if (!fs.existsSync(DIR_DESTINATION)) fs.mkdirSync(DIR_DESTINATION)
  fs.writeFile(DIR_DESTINATION + filename, content, function(err) {
    if (err) {
      return console.log(err)
    }
  })
}

export function readContainer(name) {
  return fs.readFileSync(DIR_CONTAINER + name, 'utf8')
}

function readDir(source) {
  const files = []
  fs.readdirSync(source).forEach(file => files.push(file))
  return files
}

export function readPackageJSON() {
  return fs.readFileSync(PATH_PACKAGE_JSON, 'utf8')
}

export function writePackageJSON(json) {
  fs.writeFileSync(PATH_PACKAGE_JSON, json, 'utf8')
}

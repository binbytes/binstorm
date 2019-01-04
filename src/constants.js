const dir = process.cwd()

export const DEBUG = true

export const DIR_DEFAULT = __dirname + '/stub/default/'
export const DIR_CONTAINER = __dirname + '/stub/container/'
export const DIR_DESTINATION = dir + '/theme/'
export const PATH_LOCAL_CONFIG = __dirname + '/localConfig'
export const PATH_CONFIG = dir + '/theme/config'
export const PATH_PACKAGE_JSON = dir + '/package.json'

export const CON_STYLES = 'styles.stub.js'

export const OUT_STYLE = 'styles.js'

export const CMD = {
  INIT: 'init',
  RE_STYLE: 're-style',
  HELP: 'help'
}

export const HELP = {
  init: [
    'init',
    'for initilizing and generate theme folder with default config & style file'
  ],
  reStyle: ['re-style', 're-generate style from config']
}

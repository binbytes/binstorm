#!/usr/bin/env node

import { copyDefault } from './utils/file'
import { buildCode, buildFile } from './lib/main'
import { PATH_CONFIG, PATH_LOCAL_CONFIG } from './constants'
import exec from './utils/cmd'

const argv = process.argv.slice(2)
let config
switch (argv[0]) {
  case 'init':
    {
      copyDefault()
      config = require(PATH_LOCAL_CONFIG)
      const code1 = buildCode(config)
      config = require(PATH_CONFIG)
      const code2 = buildCode(config)
      buildFile(Object.assign(code1, code2))
      exec(
        `watchman -- trigger "${process.cwd()}" binstorm 'theme/config.js' -- node "${__dirname}/index.js" re-style`
      )
    }
    break

  case 're-style':
    {
      config = require(PATH_LOCAL_CONFIG)
      const code1 = buildCode(config)
      config = require(PATH_CONFIG)
      const code2 = buildCode(config)
      buildFile(Object.assign(code1, code2))
    }
    break
}

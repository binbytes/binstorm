#!/usr/bin/env node

import { copyDefault } from './utils/file'
import { buildCode, buildFile, configurePackageJSON } from './lib/main'
import { PATH_CONFIG, PATH_LOCAL_CONFIG, CMD, HELP } from './constants'
import Table from 'cli-table'

const argv = process.argv.slice(2)
let config
switch (argv[0]) {
  case CMD.INIT:
    {
      copyDefault()
      config = require(PATH_LOCAL_CONFIG)
      const code1 = buildCode(config)
      config = require(PATH_CONFIG)
      const code2 = buildCode(config)
      buildFile(Object.assign(code1, code2))
      configurePackageJSON()
    }
    break

  case CMD.RE_STYLE:
    {
      config = require(PATH_LOCAL_CONFIG)
      const code1 = buildCode(config)
      config = require(PATH_CONFIG)
      const code2 = buildCode(config)
      buildFile(Object.assign(code1, code2))
    }
    break

  case CMD.HELP:
    {
      console.log('Usage: binstorm <command>')
      console.log('\n')
      console.log('Where <command> is one of:')
      console.log('\n')
      const table = new Table({
        head: ['Command', 'Description']
      })
      table.push(HELP.init, HELP.reStyle)
      console.log(table.toString())
    }
    break
}

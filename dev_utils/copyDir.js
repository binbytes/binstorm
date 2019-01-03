var copydir = require('copy-dir')

const argv = process.argv.slice(2)
const currentPath = process.cwd()
copydir.sync(`${currentPath}/src/stub`, `${currentPath}/${argv[0]}/stub`)

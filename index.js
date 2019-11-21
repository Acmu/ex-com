/**
 * @file 使用 source 替换 target 中 node_modules 的库 的 src/ 目录下所有文件
 */
const path = require('path')
const ncp = require('ncp').ncp
const rimraf = require('rimraf')

const src = 'src'
const mods = 'node_modules'

ncp.limit = 16

let source = '/Users/yuan/repos/tag-config-panel'
let destination = '/Users/yuan/repos/user-tag'

const libName = source.split('/').slice(-1)[0]

source = path.join(source, src)
destination = path.join(destination, mods, libName, src)

rimraf.sync(destination)

ncp(source, destination, function(err) {
  if (err) {
    return console.error(err)
  }
  console.log('Exchange Successful 🌊')
})

'use strict'
//首先，一上来，检查版本，如果版本有问题，进程直接结束。
require('./check-versions')()
//进程所对应的环境变量是生产环境
process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')//
const path = require('path')//当前路径
const chalk = require('chalk')//命令行加样式
const webpack = require('webpack')//打包工具
const config = require('../config')//配置参数
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})

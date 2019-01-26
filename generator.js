const changebrowserslistrc = require('./changebrowserslist.js')
const path = require('path')
module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    devDependencies: {
      vconsole: '^3.2.0'
    }
  })
console.log(path.resolve('./browserlistsrc'));
  // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.render('./template')
  api.postProcessFiles(changebrowserslistrc)
  if (options.foo) {
    // 有条件地生成文件
  }
}

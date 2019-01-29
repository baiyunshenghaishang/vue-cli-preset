const changebrowserslistrc = require('./changebrowserslist.js')
module.exports = (api, options, rootOptions) => {
    // 修改 `package.json` 里的字段
    api.extendPackage({
        scripts: {
            start: 'npm run serve',
        },
        devDependencies: {
            vconsole: '^3.2.0',
        },
    })
    // 复制并用 ejs 渲染 `./template` 内所有的文件
    api.render('./root')
    // api.postProcessFiles(changebrowserslistrc)
    if (options.lib) {
        // 有条件地生成文件
        api.render('./forlib')
        api.extendPackage({
            scripts: {
                build: `vue-cli-service build --target lib --name ${
                    rootOptions.projectName
                } ./source/index.js`,
            },
            main: `./dist/${rootOptions.projectName}.umd.min.js`,
        })
    }
}

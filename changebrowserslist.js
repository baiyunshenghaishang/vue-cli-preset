const fs = require('fs')
const path = require('path')
const configUrl = path.resolve('./template/.browserslistrc')
console.log('changebrowser...-')
console.log(configUrl)
let browserslistconfig = fs.readFileSync(path.resolve('./template/.browserslistrc'), 'utf8')
module.exports = function(file, ejs) {
  file['.browserslistrc'] = browserslistconfig
}

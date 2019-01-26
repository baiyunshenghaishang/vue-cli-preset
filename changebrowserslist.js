const fs = require('fs')
const path = require('path')
const configUrl = path.resolve('./template/.browserslistrc')
let browserslistconfig = fs.readFileSync(path.resolve('./template/.browserslistrc'), 'utf8')
console.log('changebrowser...-')
console.log(configUrl)
module.exports = function(file, ejs) {
  file['.browserslistrc'] = browserslistconfig
}

const fs = require('fs')
const path = require('path')
let browserslistconfig = fs.readFileSync(path.resolve('./template/.browserslistrc'), 'utf8')

module.exports = function(file, ejs) {
  file['.browserslistrc'] = browserslistconfig
}

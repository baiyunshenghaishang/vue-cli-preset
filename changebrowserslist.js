const fs = require('fs')
let browserslistconfig = fs.readFileSync('./template/.browserslistrc', 'utf8')

module.exports = function(file, ejs) {
  file['.browserslistrc'] = browserslistconfig
}

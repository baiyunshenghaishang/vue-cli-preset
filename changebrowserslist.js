const fs = require('fs')

module.exports = function(file, ejs) {
  let browserslistconfig = fs.readFileSync('./template/.browserslistrc', 'utf8')
  file['.browserslistrc'] = browserslistconfig
}

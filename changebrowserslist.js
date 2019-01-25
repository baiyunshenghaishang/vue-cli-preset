const browserslistrc = require('./template/.browserslistrc')
module.exports = function(file, ejs) {
  file['.browserslistrc'] = browserslistrc
}

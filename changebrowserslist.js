const browserslistrc = require('./browserslistrc.config')
module.exports = function(file, ejs) {
  file['.browserslistrc'] = browserslistrc.join(' , ')
}

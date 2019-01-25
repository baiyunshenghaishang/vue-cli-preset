const browserslistrc = require('./template/.browserslistrc')
module.exports = function(file, ejs) {
  console.log(typeof browserslistrc)
  file['.browserslistrc'] = String(browserslistrc)
}

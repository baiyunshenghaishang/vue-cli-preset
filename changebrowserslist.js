import browserslistrc from './template/.browserslistrc'
module.exports = function(file, ejs) {
  file['.browserslistrc'] = browserslistrc
}

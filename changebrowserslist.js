module.exports = function(file, ejs) {
  file['.browserslistrc'] = `> 1%
  last 4 versions
  not ie <= 8
  iOS >= 8
  Android >= 4`
}

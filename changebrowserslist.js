module.exports = function(file, ejs) {
  let config = `> 1%
last 4 versions
not ie <= 8
iOS >= 8
Android >= 4`
  file['.browserslistrc'] = config
  console.log(file['.gitignore'])
}

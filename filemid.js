module.exports = function(file, ejs) {
  console.log(file)
  console.log(typeof file)
  console.log(file['.browserslistrc'])
  file['.browserslistrc'] = 'iOS >= 8'
}

module.exports = {
  css: {
    files: ['src/stylesheets/selectron.sass'],
    tasks: ['sass', 'copy'],
    options: {
      spawn: false,
      livereload: true
    }
  },
  js: {
    files: ['src/javascripts/*.js'],
    tasks: ['concat', 'uglify'],
    options: {
      spawn: false,
      livereload: true
    }
  }
}
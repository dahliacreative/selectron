module.exports = {
  build: {
    files: [
      {expand: false, src: ['src/stylesheets/selectron.sass'], dest: 'dist/selectron.sass'},
      {expand: false, src: ['dist/selectron.js'], dest: 'tests/selectron.js'}
    ]
  }
}

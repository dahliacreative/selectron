module.exports = {
  build: {
    options: {
      style: 'compressed',
      sourcemap: 'none'
    },
    files: {
      'tests/selectron.css':'src/stylesheets/selectron.sass'
    }
  }
}
import dotenv from 'dotenv'
import pjson from './package.json'

// If no env variables are present, grab them from the .env file

const paths = {
  base: 'src',
  js: 'src/js/app.js',
  sass: 'src/sass/style.scss',
  html: 'src/index.html'
}

const targets = {
  assets: 'build/assets',
  html: 'build'
}

const env = JSON.stringify({
  build: pjson.version
})

export function* watch() {
  yield this.watch(paths.base, 'build')
}

export function* build() {
  // Clear out the build folder
  yield this.clear('build')

  // Build the javascript
  yield this
    .source(paths.js)
    .babel({ presets: [ 'es2015' ], sourceMaps: true })
    .uglify()
    .target(targets.assets)

  // Build the LESS CSS
  yield this
    .source(paths.sass)
    .sass({ outputStyle: 'compressed' })
    .target(targets.assets)

  // Move over the index.html
  yield this
    .source(paths.html)
    .filter((f) => `${f}`.replace('@ENV', env))
    .target(targets.html)
}

export default function* () {
  yield this.start([ 'build' ])
}

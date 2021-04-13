const pluginSass = require("eleventy-plugin-sass")

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass, {
    watch: 'styles/*.scss',
    outputDir: 'dist',
    sourcemaps: true
  })

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
}

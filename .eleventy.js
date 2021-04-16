const pluginSass = require('eleventy-plugin-sass')
const htmlmin = require("html-minifier")

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/img');
  eleventyConfig.addPassthroughCopy('src/fonts');

  eleventyConfig.addPlugin(pluginSass, {
    watch: 'styles/*.scss',
    outputDir: 'dist',
    sourcemaps: true
  })

  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        minifyCSS: true,
        removeComments: true,
        useShortDoctype: true
      })
      return minified
    }
    return content
  })

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}

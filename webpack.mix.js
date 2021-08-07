let mix = require('laravel-mix');

mix.js('./resources/js/app.js', 'js')
   .postCss('resources/css/styles.css', 'css', [
      require('tailwindcss'),
   ])
   .setPublicPath('public');

if (mix.inProduction()) {
   mix.version();
} else {
   mix.browserSync({
      proxy: 'localhost:3000',
      files: ['views/**/*.ejs', 'public/**/*.css', 'public/**/*.html']
   });
}

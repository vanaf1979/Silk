
const mix = require('laravel-mix');

mix.autoload({})
.react('silk/src/sidebar/js/silk-sidebar.js', 'silk/dist/js/silk-sidebar.js')
.sass('silk/src/sidebar/css/silk-sidebar.scss', 'silk/dist/css/silk-sidebar.css')
.options({
    processCssUrls: false,
    autoprefixer: {
        options: {
            browsers: '>0.1%'
        }
    },
    postCss: [
        require('cssnext')
    ]
}).webpackConfig({
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        '@wordpress/components': '@wordpress/components'
    }
});
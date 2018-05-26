module.exports = function (karma) {
    karma.set({
        plugins: ['karma-rollup-preprocessor', 'karma-chai', 'karma-sinon', 'karma-mocha', 'karma-chrome-launcher'],

        frameworks: ['chai', 'sinon', 'mocha'],

        files: [
            'src/**/*.js',
            'test/**/*.js',
        ],

        preprocessors: {
            'src/**/*.js': ['rollup'],
            'test/**/*.js': ['rollup']
        },

        rollupPreprocessor: {
          plugins: [
            require('rollup-plugin-node-resolve')(),
            require('rollup-plugin-commonjs')(),
            require('rollup-plugin-babel')()
          ],
          output: {
            format: 'iife',
            name: 'ClipboardJS',
            sourcemap: 'inline'
          }
        },

        browsers: ['ChromeHeadless']
    });
};

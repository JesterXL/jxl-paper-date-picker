

module.exports = function(grunt)
{
    require('load-grunt-tasks')(grunt);
    var NPM_CLASSES = [];
    var SOURCE_FILES = ['jxl-paper-calendar.html'];
    var DEMO_DIR = 'demo/';
    var bowerClasses = [];
    bowerClasses = require('wiredep')().js;
    NPM_CLASSES = bowerClasses.concat(NPM_CLASSES);

    var tasks = {

        // Checks your JavaScript doesn't have common errors defined by the rules in .jshintrc
        jshint: {
            options: {
                force: true,
                jshintrc: '.jshintrc'
            },

            src: SOURCE_FILES
        },

        // Cleans up the build folders to have a nice, fresh, new build
        clean: {
            dev: {
                src: []
            }
        },

        // Copies files from development to the build directory
        copy: {

            html: {
                files: [{
                        expand: false,
                        cwd: '.',
                        src: SOURCE_FILES,
                        dest: DEMO_DIR
                    }]
            }
        },

        injector: {
            
             dev: {
             	options: {
	                addRootSlash: false,
	                ignorePath: ["../"],
	                relative: true
	            },
             	dest: 'demo/index.html',
                 src: NPM_CLASSES
             }
        }

    };

    grunt.initConfig(tasks);

    grunt.registerTask('hello', function()
    {
        console.log('print');
    });
    // ************************************************************
    // ** development tasks **/
    grunt.registerTask('demo', ['clean', 'copy', 'injector']);
    grunt.registerTask('default', ['jshint', 'clean', 'copy', 'injector']);
    grunt.registerTask('demoServer', 'Runs a local server to show you t3h demo.', function()
    {
    	var server = require('server');
    });

};

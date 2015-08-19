/**
 * Created by Diogo on 18/08/2015.
 */
module.exports = function(grunt){
    /** carrega as tarefas do grunt*/
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configura o grunt
    grunt.initConfig({

        wiredep: {
            target: {
                src: 'index.html'
            }
        },
        watch: {
            options: {
                liverload: true
            },
            arquivosweb: {
                files: ['app/**/*.js', '**/*.html', 'app/**/*css']
            },
            fazer_wired: {
                files: ['package.json'],
                tasks: ['wiredep']
            }
        },
        copy: {
            arquivos: {
                files: [
                    {
                        expand: true,
                        src: ['*.html', 'app/**'],
                        dest: 'build/'
                    }
                ]
            }
        },
        concat: {
            principal:{
                src: ['app/js/app-config.js', 'app/js/bootstrap-controller.js'],
                dest: 'build/js/principal.js'
            }
        },
        clean: {
            app: {
                src:['build']
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            build: {
                files: [
                    {
                        expand:true,
                        src: ['build/**/*.js']
                    }
                ]
            }
        },
        uglify: {
            build: {
                expand: true,
                src: ['build/**/*.js']
            }
        },
        cssmin: {
            build: {
                expand: true,
                src: ['build/**/*.css']
            }
        },
        // minificacao de html
        htmlmin: {
            app: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [
                    {
                        expand: true,
                        src: ['build/**/*.html']
                    }
                ]
            }
        }

    });

    grunt.registerTask('build', ['clean', 'copy', 'concat', 'ngAnnotate', 'uglify', 'cssmin', 'htmlmin'])
    grunt.registerTask('desenvolvimento', ['watch'])

};


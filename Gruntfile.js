'use strict';
module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodemon: {
      dev: {
        script: 'server.js'
      }
    },
    jshint: {
      files: ['**/*.js', ],
      options: {
        force: 'true',
        jshintrc: '.jshintrc',
        ignores: ['client/assets/**/*.js', 'node_modules/**/*.js', '**/node_modules/**/*.js']
      }
    },
    watch: {
      scripts: {
        files: ['**/*.js', './*.js', ],
        tasks: ['jshint', ]
      },
    },
    concurrent: {
      dev: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    copy: {
      main: {
        files: [
          // includes files within path
          {
            expand: true,
            src: ['node_modules/backbone/node_modules'],
            dest: 'dest/',
            filter: 'isFile'
          },
          // includes files within path and its sub-directories
          {
            expand: true,
            src: ['path/**'],
            dest: 'dest/'
          },
          // makes all src relative to cwd
          {
            expand: true,
            cwd: 'path/',
            src: ['**'],
            dest: 'dest/'
          },
          // flattens results to a single level
          {
            expand: true,
            flatten: true,
            src: ['path/**'],
            dest: 'dest/',
            filter: 'isFile'
          },
        ],
      },
    }
  });
  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////
  grunt.registerTask('mon', ['jshint', 'concurrent']);
  grunt.registerTask('default', ['jshint', 'concurrent']);
};

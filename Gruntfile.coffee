module.exports = (grunt) ->
  require('load-grunt-tasks')(grunt)

  require('time-grunt')(grunt)

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    bower:
      install:
        options:
          targetDir: 'src/lib'
          install  : true
          copy     : false
          cleanup  : false

    browserify:
      options :
        transform        : [require('grunt-react').browserify]
        browserifyOptions:
          extensions: ['.jsx', '.js']
      server  :
        files  : [
          expand: true
          cwd: 'src'
          src : ['js/*.{js,jsx}']
          dest: '.server/'
          extDot: 'last'
          ext: '.js'
        ]
        options:
          watch: true
      building:
        files: [
          expand: true
          cwd: 'src'
          src : ['js/*.{js,jsx}']
          dest: '.building/'
          extDot: 'last'
          ext: '.js'
        ]

    clean:
      dist    : ['dist']
      server  : ['.server']
      building: ['.building', '.tmp']
      cache   : ['.sass-cache']

    compass:
      options :
        sassDir    : 'src/css'
        outputStyle: 'expanded'
        bundleExec : true
      building:
        options:
          cssDir     : '.building/css'
          environment: 'production'
      server  :
        options:
          cssDir: '.server/css'

    connect:
      options:
        port: 8000
        base: ['.server', 'src']
      server :
        options:
          livereload: true

    copy:
      bootstrap:
        files: [
          expand: true
          cwd   : 'src/lib/bootstrap-sass-official/assets/fonts'
          src   : ['bootstrap/**/*']
          dest  : 'src/fonts/'
        ]
      dist     :
        files: [
          expand: true
          cwd   : 'src'
          src   : ['**/*', '!lib/**/*', '!**/*.{coffee,litcoffee,jsx,cjsx,sass,scss,js}']
          filter: 'isFile'
          dest  : 'dist/'
        ]
      building :
        files: [
          expand: true
          cwd   : 'src'
          src   : ['**/*.js', '**/*.html']
          filter: 'isFile'
          dest  : '.building'
        ]
      usemin   :
        files: [
          expand: true
          cwd   : '.building'
          src   : ['**/*.html']
          filter: 'isFile'
          dest  : 'dist'
        ]

    htmlmin:
      options:
        removeComments              : true
        removeCommentsFromCDATA     : true
        removeCDATASectionsFromCDATA: true
        collapseWhitespace          : true
        conservativeCollapse        : true
        collapseBooleanAttributes   : true
        removeOptionalTags          : true
      dist   :
        files: [
          expand: true
          cwd   : 'dist'
          src   : ['**/*.html']
          dest  : 'dist'
        ]

    watch:
      options :
        forever   : true
        livereload: true
      compass :
        files: 'src/**/*.+(sass|scss)'
        tasks: 'compass:server'
      js      :
        files: '.server/**/*.js'
      html    :
        files: 'src/**/*.html'
      css     :
        files: 'src/**/*.css'

    filerev:
      dist:
        src: [
          'dist/css/**/*.css'
          'dist/fonts/**/*.*'
          'dist/js/**/*.js'
        ]

    useminPrepare:
      html: ['.building/**/*.html']

    usemin:
      html   : ['dist/**/*.html']
      css    : ['dist/css/**/*.css']
      options:
        assetsDirs: ['dist', 'dist/fonts', 'dist/img']


  grunt.registerTask 'preServer',
                     ['copy:bootstrap', 'compass:server', 'browserify:server']

  # preCompile: compile the files to optimize
  grunt.registerTask 'preCompile',
                     ['copy:building', 'copy:dist', 'browserify:building', 'compass:building']

  grunt.registerTask 'compile', 'Compile & optimize the codes',
                     ['preCompile', 'optimize']

  grunt.registerTask 'optimize', 'Optimize JS files',
                     ['useminPrepare', 'copy:usemin',
                      'concat:generated', 'cssmin:generated', 'uglify:generated', 'filerev',
                      'usemin', 'htmlmin']

  grunt.registerTask 'build', 'Build the code for production',
                     ['bower:install', 'clean:dist', 'clean:server', 'copy:bootstrap'
                      'compile', 'clean:building', 'clean:cache']

  grunt.registerTask 'serve', 'Start a preview server',
                     ['clean:dist', 'clean:server', 'preServer'
                      'connect:server', 'watch']

  grunt.registerTask 'default', 'UT (when has) & build',
                     ['build']

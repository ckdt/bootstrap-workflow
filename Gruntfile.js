module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      development:{
        files:{
          "public/style.css":"src/less/bootstrap.less"
        }
      }
    },
    watch: {
      files: ['src/less/*.less'],
      tasks: ['lessit']
    }
  });

  /*grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');*/
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('lessit', ['less']);
  grunt.registerTask('watchit', ['watch']);

  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

};

module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      files: ['_site']
    },
    less: {
      dist: {
        options: {
          compress: true
        },
        files: {
          "styles/main.css": "styles/main.less"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['clean', 'less']);

  grunt.option('force', true);
};
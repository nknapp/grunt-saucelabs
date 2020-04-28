'use strict';

module.exports = function (grunt, options) {
  return {
    options: {
      jshintrc: '.jshintrc'
    },
    all: options.srcFiles
  };
};

var ready;

ready = function () {
  'use strict';

  if (!window.FloatingLabelSample) {
    window.FloatingLabelSample = {};
  }

  var FloatingLabelSample = window.FloatingLabelSample;
  FloatingLabelSample.Init = (function () {
    FloatingLabelSample.App.HandleLabel.init();
  })();
};

window.$(document).on('turbolinks:load', ready);

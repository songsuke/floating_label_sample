(function (window, $) {
  'use strict';

  if (!window.FloatingLabelSample) {
    window.FloatingLabelSample = {};
  }
  var FloatingLabelSample = window.FloatingLabelSample;
  FloatingLabelSample.App = window.FloatingLabelSample.App || {};

  FloatingLabelSample.App.HandleLabel = {
    init: function () {
      $('.float-label-control').floatLabels({
        color: '#98000D',
        backgroundColor: '#FFFFFF',
        borderColor: '#FF006A'
      });
    }
  };

})(window, window.jQuery);

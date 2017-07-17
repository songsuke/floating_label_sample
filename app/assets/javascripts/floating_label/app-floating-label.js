(function ($) {
    $.fn.floatLabels = function () {

        // Settings
        var self = this;


        // Event Handlers
        function registerEventHandlers() {
            self.on('input keyup change', 'input, textarea', function () {
                actions.swapLabels(this);
            });

            self.on('focus', 'input, textarea', function () {
                actions.removeError(this);
            });

            self.on('reset', 'input, textarea', function () {
                var $field = $(this);
                var $parent = $field.parent();
                $parent.find('.help-block').remove();
                $parent.removeClass('has-error');
            });
        }

        // Actions
        var actions = {
            initialize: function () {
                self.each(function () {
                    var $this = $(this);
                    var $label = $this.children('label');
                    var $field = $this.find('input,textarea').first();

                    if ($this.children().first().is('label')) {
                        $this.children().first().remove();
                        $this.append($label);
                    }

                    var placeholderText = ($field.attr('placeholder') && $field.attr('placeholder') != $label.text()) ? $field.attr('placeholder') : $label.text();

                    $label.data('placeholder-text', placeholderText);
                    $label.data('original-text', $label.text());

                    if ($field.val() == '') {
                        $field.addClass('empty');
                    }
                });
            },
            removeError: function (field) {
                var $field = $(field);
                var $parent = $field.parent();
                $parent.removeClass('has-error');
                $parent.find('.help-block').hide();
            },
            swapLabels: function (field) {
                var $field = $(field);
                var $label = $(field).siblings('label').first();
                var isEmpty = Boolean($field.val());

                if (isEmpty) {
                    $field.removeClass('empty');
                    $label.text($label.data('original-text'));
                    $field.find('.help-block').remove();
                }
                else {
                    $field.addClass('empty');
                    $label.text($label.data('placeholder-text'));
                    // TODO Game Find a better way to fix this;
                    // We must apply and remove a Class to force Safari to re-render with a new style;
                    // http://stackoverflow.com/questions/10930010/jquery-style-not-being-applied-in-safari
                    $field.addClass('dummyClass').removeClass('dummyClass');
                }
            }
        };


        // Initialization
        function init() {
            registerEventHandlers();

            actions.initialize();
            self.each(function () {
                actions.swapLabels($(this).find('input,textarea').first());
            });
        }

        init();
        return this;
    };
})(window.jQuery);

(function (window, $) {
    'use strict';

    if (!window.Rocky) {
        window.Rocky = {};
    }
    var Rocky = window.Rocky;
    Rocky.App = window.Rocky.App || {};

    Rocky.App.FloatingNumber = {
        init: function () {
            $('.float-label-control').floatLabels();
        }
    };

})(window, window.jQuery);

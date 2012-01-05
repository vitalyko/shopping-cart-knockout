define(
  [],
  function() {
    return {
  
      init: function(callback) {
        require.config(
          {
            paths : {
              // require.js extensions
              text : '../lib-ext/text',
              order : '../lib-ext/order',
              tmpl: '../lib-ext/tmpl',
              css: '../lib-ext/css',
              
              // jquery and family
              jquery: '../lib/jquery-1.7.1',
              jquery_ui: '../lib/jquery-ui.1.8.13',
              jquery_tmpl: '../lib/jquery.tmpl.1.0.0pre',
              
              // Knockout.js
              knockout: '../lib/knockout-2.0.0',
              after_update: '../lib-ext/after-update',
              after_create: '../lib-ext/after-create',
              component: '../lib-ext/component'
            }
          }
        );
        require(
          // libraries
          ['order!jquery', 'order!jquery_ui', 'order!jquery_tmpl', 'order!knockout',
           // extensions
           'order!after_update', 'order!after_create', 'order!component',
           // CSS theme
           'css!http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/redmond/jquery-ui.css'],
          function() {
            // after all libraries are loaded and extensions are registered
            // run the main application function
            callback();
          }
        );
      }
    }
  }
);

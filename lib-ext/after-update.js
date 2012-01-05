// Add a separate Knockout.js handler to notify us after updater
ko.bindingHandlers.afterUpdate = {
  update: function(element, valueAccessor, allBindingsAccessor, viewModel) {
    //we don't want to do this the first time the binding runs
    if ($(element).data("ko_init")) {
      // execute the callback given in the HTML template
      var updateHandler = valueAccessor();
      updateHandler(element, viewModel);
    }
    else {
      $(element).data("ko_init", true);
    }
  }
};
// Add a separate Knockout.js handler to modify element after creation
ko.bindingHandlers.afterCreate = {
  update: function(element, valueAccessor, allBindingsAccessor, viewModel) {
    var updateHandler = valueAccessor();
    updateHandler(element, viewModel);
  }
};

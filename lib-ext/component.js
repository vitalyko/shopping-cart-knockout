// Add a separate Knockout.js handler for component binding
// Component combines HTML template with the view model,
// but allows user to provide their data
ko.bindingHandlers.component = {
  init: function(element, valueAccessor, allBindingsAccessor, viewModel) {
    // This will be called when the binding is first applied to an element
    // Set up any initial state, event handlers, etc. here
    var allBindings = allBindingsAccessor();
    var props = valueAccessor();
    var className = props.name;
    var data = props.data;
    // load the component class
    require([className],
      function (classFn) {
        // Get the HTML template
        var classObj = new classFn();
        var tmplName = classObj.getTemplate();
        // Instantiate and initialize the view model
        var ViewModelFn = classObj.getViewModel();
        viewModel = new ViewModelFn(data);
        // delegate the work to knockout's template handler
        var valueAccessor1 = function(){
          return {
            name: tmplName,
            data: viewModel
          };
        };
        var allBindingsAccessor1 = function() {
          return {
            template: {
              name: tmplName,
              data: viewModel
            }
          };
        };
        $(element).data("ko_comp", true);
        return ko.bindingHandlers.template.init(element, valueAccessor1, allBindingsAccessor1, viewModel);
      })
  },
  update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
    // This will be called once when the binding is first applied to an element,
    // and again whenever the associated observable changes value.
    // Update the DOM element based on the supplied values here.
    var props = valueAccessor();
    var className = props.name;
    var data = props.data;
    // load the component class
    require([className],
      function (classFn) {
        // Get the HTML template
        var classObj = new classFn();
        var tmplName = classObj.getTemplate();
        // Instantiate and initialize the view model
        var ViewModelFn = classObj.getViewModel();
        viewModel = new ViewModelFn(data);
        // delegate the work to knockout's template handler
        var valueAccessor1 = function(){
         return {
           name: tmplName,
           data: viewModel
         };
        };
        var allBindingsAccessor1 = function() {
          return {
            template: {
              name: tmplName,
              data: viewModel
            }
          };
        };
        bindingContext['$data'] = viewModel;
        return ko.bindingHandlers.template.update(element, valueAccessor1, allBindingsAccessor1, viewModel, bindingContext);
      }
    );
  }
};

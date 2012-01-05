// Visual component that knows which HTML template to use for rendering
// and which ViewModel class to use with it
define(
  ['ProductListViewModel',
   'tmpl!../tmpl/ProductTemplate.html',
   'tmpl!../tmpl/ProductListTemplate.html',
   'css!../styles/product.css'
  ],
  function(ProductListViewModel) {
    var ProductListComponent;
    ProductListComponent = (
      function() {
      
        function ProductListComponent() {
        }
      
        ProductListComponent.prototype.getViewModel = function() {
            return ProductListViewModel;
        };

        ProductListComponent.prototype.getTemplate = function() {
            return "ProductListTemplate";
        };

        return ProductListComponent;
      }
    )();
    
    return ProductListComponent;
  }
);
    

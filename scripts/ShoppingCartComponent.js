// Visual component that knows which HTML template to use for rendering
// and which ViewModel class to use with it
define(
  ['ShoppingCartViewModel',
   'tmpl!../tmpl/CartItemTemplate.html',
   'tmpl!../tmpl/ShoppingCartTemplate.html',
   'css!../styles/product.css',
   'css!../styles/cart.css'
  ],
  function(ShoppingCartViewModel) {
    var ShoppingCartComponent;
    ShoppingCartComponent = (
      function() {
      
        function ShoppingCartComponent() {
        }
      
        ShoppingCartComponent.prototype.getViewModel = function() {
            return ShoppingCartViewModel;
        };

        ShoppingCartComponent.prototype.getTemplate = function() {
            return "ShoppingCartTemplate";
        };

        return ShoppingCartComponent;
      }
    )();
    
    return ShoppingCartComponent;
  }
);
    

// View model class has event handlers and deals with
// visual effects of displaying a product list 
define(
  ['ShoppingCartData'],
  function() {
    // contains an array of products
    var ShoppingCartVM;
    ShoppingCartVM = (
      function() {
      
        function ShoppingCartVM(shoppingCart) {
          this.shoppingCart = shoppingCart;
        }
      
        ShoppingCartVM.prototype.makeDroppable = function(elem, vm) {
          $(elem).droppable(
            {
              accept: '.product',
              drop: function(ev, ui) {
                var product = jQuery.data(ui.draggable.context, 'vm');
                vm.shoppingCart.addItem(product);
              }
            }
          );
        };

        // jquery-fy the 'clear shopping cart' button
        ShoppingCartVM.prototype.dumpCart = function() {
          this.shoppingCart.removeAll()
        };

        // Visual effect of items being removed from a shopping cart
        ShoppingCartVM.prototype.removeCartItemVisualEffect = function(elem) {
          // expanded template contains a Comment object before any DIV DOM objects with LineItems
          // must skip the Comment object and apply effect to the DOM objects
          if ($(elem).attr('product_id') !== undefined) {
            $(elem).stop(true, true).effect("puff", {}, "slow", function(){ $(elem).remove(); });
          }
        };        
        
        // Visual effect when a value (total price, or quantity) is updated
        ShoppingCartVM.prototype.highlightUpdate = function(elem) {
          $(elem).stop(true, true).effect('highlight', {}, 1500);
        };
        
        ShoppingCartVM.prototype.isEmpty = function() {
          return this.shoppingCart.isEmpty();
        };

        return ShoppingCartVM;
      }
    )();
    
    return ShoppingCartVM;
  }
);

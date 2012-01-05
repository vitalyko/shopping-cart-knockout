define(
  [],
  function() {
    // Line Item in a shopping cart
    var CartItemData;
    CartItemData = (
      function() {
        function CartItemData(product) {
          this.product = product;
          // Quantity will change as user adds items to the cart.
          // In order to get notifications about the value changes
          // this attribute needs to be special - e.g. observable
          this.quantity = ko.observable(1);
        }
      
        CartItemData.prototype.changeQuantity = function(delta) {
          return this.quantity(this.quantity() + delta);
        };
      
        CartItemData.prototype.subtotal = function() {
          return this.quantity() * this.product.price;
        };
        
        return CartItemData;
      }
    )();
    return CartItemData;
  }
);
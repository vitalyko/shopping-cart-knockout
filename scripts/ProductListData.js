define(
  ['ProductData'],
  function() {
    // contains an array of products
    var ProductListData;
    ProductListData = (
      function() {
      
        function ProductListData() {
          this.items = [];
        }
      
        ProductListData.prototype.add = function(product) {
          this.items.push(product);
          return this;
        };

        return ProductListData;
      }
    )();
    
    return ProductListData;
  }
);
    

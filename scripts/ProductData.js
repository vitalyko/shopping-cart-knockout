define(
  [],
  function() {
    // Product class is a simple Data bean
    var ProductData;
    ProductData = (
      function() {
      
        function ProductData(id, description, price) {
          this.id = id;
          this.description = description;
          this.price = price;
        }
        
        ProductData.prototype.self = function() {
          return this;
        }
      
        return ProductData;
      }
    )();
    return ProductData;
  }
);
    

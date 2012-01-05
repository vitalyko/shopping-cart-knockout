define(
  ['ProductData', 'ProductListData'],
  function(ProductData, ProductListData) {
    // Creates detailed data for a list of products
    var ProductService2;
    ProductService2 = (
      function() {
      
        function ProductService2() {
        }
        
        ProductService2.prototype.getProductList =function() {
          // Pretend that data is retrieved from a remote source
          var productList = new ProductListData();
          productList.add(new ProductData("item_3", "Product 3", 130.0));
          productList.add(new ProductData("item_4", "Product 4", 140.0));
          productList.add(new ProductData("item_5", "Product 5", 150.0));
          return productList;      
        }
      
        return ProductService2;
      }
    )();
    
    return ProductService2;
  }
)
define(
  ['ProductData', 'ProductListData'],
  function(ProductData, ProductListData) {
    // Creates detailed data for a list of products
    var ProductService1;
    ProductService1 = (
      function() {
      
        function ProductService1() {
        }
        
        ProductService1.prototype.getProductList =function() {
          // Pretend that data is retrieved from a remote source 
          var productList = new ProductListData();
          productList.add(new ProductData("item_0", "Product 0", 100.0));
          productList.add(new ProductData("item_1", "Product 1", 110.0));
          productList.add(new ProductData("item_2", "Product 2", 120.0));
          return productList;      
        }
      
        return ProductService1;
      }
    )();
    
    return ProductService1;
  }
)
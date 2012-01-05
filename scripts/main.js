require(
  // load libraries and library extensions
  ['Dependencies'], 
  function(deps) {
    deps.init(
      function() {
        // load application classes
        require(['ProductService1', 'ProductService2', 'ShoppingCartData', 'css!../styles/main.css'],
          function(ProductService1, ProductService2, ShoppingCartData){
            $(document).ready(
              function() {
                //initialize data objects and bind them
                var svc1 = new ProductService1();
                var svc2 = new ProductService2();
                var data = {
                  list1: svc1.getProductList(),
                  list2: svc2.getProductList(),
                  cart1: new ShoppingCartData(),
                  cart2: new ShoppingCartData()
                }
                ko.applyBindings(data);
              }
            );
          }
        );
      }
    );
  }
);

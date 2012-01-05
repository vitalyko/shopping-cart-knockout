// View model class has event handlers and deals with
// visual effects of displaying a product list 
define(
  ['ProductListData'],
  function() {
    var ProductListVM;
    ProductListVM = (
      function() {
      
        function ProductListVM(productList) {
          this.productList = productList;
        }

        // make individual product draggable and droppable
        ProductListVM.prototype.makeDraggable = function(elem, vm) {
          $(elem).draggable(
            {
              helper: 'clone',
              opacity: "0.5"
            }
          );
          // attach the data object to the DOM node
          var div_elem = $(elem).filter("[product_id]")[0];
          jQuery.data(div_elem, 'vm', vm);
        };
        
        return ProductListVM;
      }
    )();
    
    return ProductListVM;
  }
);

$(document).ready(function() {

  // Add a separate Knockout.js handling to notify us after updater
  ko.bindingHandlers.afterUpdate = {
    update: function(element, valueAccessor, allBindingsAccessor, viewModel) {
      //we don't want to do this the first time the binding runs
      if ($(element).data("ko_init")) {
        // execute the callback given in the HTML template
	var updateHandler = valueAccessor();
	updateHandler(element);
      } 
      else {
        $(element).data("ko_init", true);     
      }     
    }
  };

  // bind our data model, to the html template (i.e. current page)
  ko.applyBindings(dataModel);

  // make products draggable
  $(".product").draggable({ helper: 'clone', opacity: "0.5" });
	
  // allow products to be dropped in the cart
  $("#cart").droppable({ accept: '.product', 
    drop: function(ev, ui) {
      var item_dropped = ui.draggable;
      var product_id = item_dropped.attr('product_id');
      dataModel.shoppingCart.addItem(product_id);
    }
  });
	
  // jquery-fy the 'clear shopping cart' button
  $('#dump').button().click(function() { dataModel.shoppingCart.removeAll() });

});

// Visual effect of items being removed from a shopping cart
var removeCartItemVisualEffect = function(elem) {
  // expanded template contains a Comment object before any DIV DOM objects with LineItems
  // must skip the Comment object and apply effect to the DOM objects
  if ($(elem).attr('product_id') !== undefined) {
    $(elem).effect("puff", {}, "slow", function(){ $(elem).remove(); });
  }
}

// Visual effect when a value (total price, or quantity) is updated
var highlightUpdate = function(elem) {
  $(elem).effect('highlight', {}, 1500);
}

angular.module('shopping', [])
    .controller("shoppingController", ['shoppingService', function(shopping){
        this.items = shopping.items;
        this.cart = [];
        this.subTotal = 0;
       
        
        this.addItems = function(item){
            this.cart.push(item);
            item.quantity = 1;
            this.subTotal = this.subTotal + item.price;  
        };

        this.removeItems = function(cartItem){
            this.cart.splice(cartItem, 1);
            this.subTotal = this.subTotal - cartItem.price;
        };

        this.increase = function(cartItem){
            cartItem.quantity = cartItem.quantity + 1;
            this.subTotal = this.subTotal + cartItem.price;
        };

        this.decrease = function(cartItem){
            if(cartItem.quantity > 0){
                cartItem.quantity = cartItem.quantity - 1;
                this.subTotal = this.subTotal - cartItem.price;
            }
        };

}]);


/*let index = this.cart.findIndex((element) => element.name == item.name)
var index = this.cart.findIndex((function(element){
    element.name == item.name
}))*/
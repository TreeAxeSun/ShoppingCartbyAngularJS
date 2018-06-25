angular.module("shopping")
    .service("shoppingService", function(){
        this.items = [
            {
                name: "Edifier R1280T",
                imageUrl:"https://images-na.ssl-images-amazon.com/images/I/71o5w0ZfptL._AC_UL70_SR70,70_.jpg",
                price: 10,
                description: "Speaker1",
                quantity: 0

        },
        {
            name: "Edifier R1280B",
                imageUrl:"https://images-na.ssl-images-amazon.com/images/I/71o5w0ZfptL._AC_UL70_SR70,70_.jpg",
                price: 5,
                description: "Speaker2",
                quantity: 0
        },
        {
            name: "Edifier R1280R",
                imageUrl:"https://images-na.ssl-images-amazon.com/images/I/71o5w0ZfptL._AC_UL70_SR70,70_.jpg",
                price: 15,
                description: "Speaker3",
                quantity: 0

        },
        {
            name: "Edifier R1280Q",
                imageUrl:"https://images-na.ssl-images-amazon.com/images/I/71o5w0ZfptL._AC_UL70_SR70,70_.jpg",
                price: 20,
                description: "Speaker4",
                quantity: 0
        }
    ]
    })
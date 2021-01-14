window.onload = function () {
    cartcount();
    add_up()
};

function add_up() {
    var cart_div = document.getElementById('cart_div');
    var end_data = "";
    var i;
    for (i = 0; i < localStorage.length; i++) {
        var get_data = JSON.parse(localStorage.getItem(localStorage.key(i)));
        var this_here = localStorage.key(i);
        var type = get_data.type;
        var smell = get_data.smell;
        var price = get_data.price;
        var qty = get_data.qty;
        end_data = end_data + "Type: " + type + "<br>" + "Smell: " + smell + "<br>" + "Price: " + price + "<br>" + "Qty: " + "<button onClick='qty_less(" + this_here + ")'>-</button> " + qty + " <button onClick='qty_more(" + this_here + ")'>+</button>" + "<br> <br>"

    }
    cart_div.innerHTML = end_data;
}


function qty_less(i) {
    var get_data = JSON.parse(localStorage.getItem(i));
    var type = get_data.type;
    var smell = get_data.smell;
    var price = get_data.price;
    var qty = get_data.qty - 1;
    var new_obj = {
        "type": type,
        "smell": smell,
        "price": price,
        "qty": qty
    };
    var new_qty = JSON.stringify(new_obj);
    localStorage.setItem(i, new_qty);
    cartcount()
    add_up()
}

function qty_more(i) {
    var get_data = JSON.parse(localStorage.getItem(i));
    var type = get_data.type;
    var smell = get_data.smell;
    var price = get_data.price;
    var qty = get_data.qty + 1;
    var new_obj = {
        "type": type,
        "smell": smell,
        "price": price,
        "qty": qty
    };
    var new_qty = JSON.stringify(new_obj);
    localStorage.setItem(i, new_qty);
    cartcount()
    add_up()

}

function checkout() {



};

var stripe = Stripe('pk_test_51I752QLyeTV1PMhzx1CoZQOBfUoEElhd39qfnPcyQPCXu1CG00x8GcqdDysVrX6w7H3bGGSIpsqZRKfRjrTGllk500JVJmkwYL');

stripe.redirectToCheckout({
    shippingAddressCollection: {
        allowedCountries: ['US', 'GB']
    },
    lineItems: [
        {
            price: 'price_1I757KLyeTV1PMhzM24Habqm', // Replace with the ID of your price
            quantity: 1
        }
    ],
    mode: 'payment',
    successUrl: 'http://127.0.0.1:5500/index.html',
    cancelUrl: 'http://127.0.0.1:5500/index.html'
}).then(function (result) {
    console.log(result)
});
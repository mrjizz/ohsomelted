window.onload = function () {
    if (!localStorage.length == 0) {
        cartcount();
    };
};

function addupitems(sku, type, smell, price) {

    if (!localStorage.getItem(sku)) {
        const old_obj = JSON.parse(localStorage.getItem("cart_items"));
        var new_obj = {
            "type": type,
            "smell": smell,
            "price": price,
            "qty": 1
        };
        var new_obj_serialized = JSON.stringify(new_obj);
        localStorage.setItem(sku, new_obj_serialized);
    } else {
        var get_obj = JSON.parse(localStorage.getItem(sku));
        var obj_qty = get_obj.qty + 1;
        var new_obj = {
            "type": type,
            "smell": smell,
            "price": price,
            "qty": obj_qty
        };
        var new_qty = JSON.stringify(new_obj);
        localStorage.setItem(sku, new_qty);
    } cartcount()
}

function cartcount() {
    const cart_id = document.getElementById('the_num');
    var add_items = 0;
    var i;
    for (i = 0; i < localStorage.length; i++) {
        var get_qty = JSON.parse(localStorage.getItem(localStorage.key(i)));
        var qty = get_qty.qty;
        add_items = add_items + qty;
    }
    cart_id.innerHTML = add_items;
}

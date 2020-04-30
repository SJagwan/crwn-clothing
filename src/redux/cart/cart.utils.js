export const addItemsToCart = (cartItems,cartItemtoAdd) => {
    const existingitem = cartItems.find(
        cardItem => cardItem.id === cartItemtoAdd.id
    );


    if(existingitem)
    {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemtoAdd.id
            ? {...cartItem,quantity:cartItem.quantity+1}
            :cartItem
            )

    }
    return [...cartItems,{...cartItemtoAdd,quantity:1}]
};

export const removeItemsFromCart= (cartItems,cartItemtoremove) => {
    const existingitem = cartItems.find(
        cardItem => cardItem.id === cartItemtoremove.id
    );


    if(existingitem.quantity === 1)
    {
        return cartItems.filter(cartItem => 
            cartItem.id !== cartItemtoremove.id)

    }
    return cartItems.map(cartItem =>
         cartItem.id === cartItemtoremove.id ?
         {...cartItem,quantity:cartItem.quantity-1}
        : cartItem
        );
};
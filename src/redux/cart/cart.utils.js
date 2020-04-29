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
export const cartReducer =(state,action) =>{
    //console.log("payload",action.payload);
    switch(action.type){
        case "ADD_PRODUCTS":
            return {...state,products:action.payload}
        case "ADD_TO_CART":
            return {...state,cart:[{...action.payload},...state.cart]} 
        case "REMOVE_FROM_CART":
            return{...state,cart:state.cart.filter((c)=>c.id !== action.payload.id)}   
        case "CHANGE_CART_QTY":
            return{...state,cart:state.cart.filter((c)=>c.id=== action.payload.id ? (c.quantity=action.payload.quantity) : c.quantity)}        
    default:
            break
    }
}
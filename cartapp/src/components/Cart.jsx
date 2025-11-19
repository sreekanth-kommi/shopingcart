import React, {  useState,useEffect, use } from 'react'

const Cart = ({state,dispatch}) => {

  function changeQunatity(id,quantity){{
    dispatch({
      type:"CHANGE_CART_QTY",
      payload:{
        id,
        quantity,
      }
    })
  }}
  const {cart}=state;
  const [total,setTotal]=useState(0); 

  useEffect(() => {
    setTotal(cart?.reduce((acc, curr)=> acc + Number(curr.price)* curr.quantity,0))
  },[cart])
  
 
    
  return (
    <div
     style={{
      display:"flex",
      flexDirection:"column",
      margin:10,
      background:"#ececec",
      padding:10,
      width:"20%",

     }}
    >
      <b style={{fontSize:30,alignSelf:"center"}}>Cart </b>
      <b style={{fontSize:10,alignSelf:"center"}}>Subtotal: $ {total}</b>
      {
        cart.length > 0 ? (
          cart.map((item)=>(
            <div style={{display:"flex",
                  border:"1px solid black",
                  padding:10,
                  marginTop:10,
                  borderRadius:5,
                  backgroundColor:"orange",
                  justifyContent:"space-evenly",
                  }} key={item.id}>
              <div style={{ marginRight:10}}>
                <img style={{ height: 40, objectFit:'contain',}} alt={item.name} src={item.image}/>
              </div>
              <div style={{marginLeft:10, display:"flex", flexDirection:"column",justifyContent:"space-evenly"}}>
                <span style={{color:"white",}}>{item.title}</span>
                <b style={{color:"white", marginRight:99 }}>${item.price}</b>  
              </div>
              <div style={{display:"flex", alignItems:"center", }}>
                <button onClick={()=>changeQunatity(item.id,item.quantity-1)} style={{height:"5px",width:"5px" }} >-</button>
                <span style={{margin:5}}>{item.quantity}</span>
                <button onClick={() =>changeQunatity(item.id,item.quantity+1)} style={{height:"5px",width:"5px" }} >+</button>
              </div>
            </div>
          ))
        ) 
        : (<span>Cart is empty</span>)
      }
    </div>
  )
}

export default Cart
import React from 'react'

const Products = ({state,dispatch}) => {

  const {products,cart} = state;
  return (
    <div 
    style={{
      display:"flex",
      flexWrap:"wrap",
      justifyContent:"space-around",
      width:"80%",
    }}
    >{products.map((product)=>(
      <div key={product.id}style={{
        display:"flex",
        flexDirection:"column",
        padding:10,
        border:"1px solid black",
        width:"30%",
        marginTop:10,
        gap:10,
      }}>
        <img style={{ height: 200, objectFit:'contain',}} src={product.image} alt={product.title}/>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <span>{product.title}</span>
          <b>${product.price}</b>
        </div>
        {cart.some((p)=>p.id===product.id) ?(
          <button
        style={{
          padding:5,
          border:0,
          borderRadius:5,
          background:"red",
          color:"white",
          cursor:"pointer",
         }}
         onClick={()=>dispatch({
          type:"REMOVE_FROM_CART",
          payload:{
            id:product.id,
            price:product.price,
            title:product.title,
            quantity:product.quantity,
            image:product.image,
          }
          })}
        >Remove to Cart</button>
        ):<button
        style={{
          padding:5,
          border:0,
          borderRadius:5,
          background:"blue",
          color:"white",
          cursor:"pointer",
         }}
         onClick={()=>dispatch({
          type:"ADD_TO_CART",
          payload:{
            id:product.id,
            price:product.price,
            title:product.title,
            quantity:1,
            image:product.image,
          }
         })}
        >Add to Cart</button>}
      </div>
    ))}</div>
  )
}

export default Products
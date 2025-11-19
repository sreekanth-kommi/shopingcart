//import './App.css'
import { useReducer,useEffect } from 'react'
import axios from 'axios'
import { cartReducer } from './reducers/cartReducer'
import Products from './components/Products';
import Cart from './components/Cart';





function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
    Notifications:[],
  });

  //console.log("state",state);

  const fetchData = async() => {
   const {data}= await axios.get('https://fakestoreapi.com/products')
   dispatch({
    type:"ADD_PRODUCTS",
    payload:data,
  });
  //console.log("data",data)
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
      <div style={{display:"flex"}}>
        <Products state={state} dispatch={dispatch} /> 
        <Cart state={state} dispatch={dispatch} />
      </div>

  )

}
export default App

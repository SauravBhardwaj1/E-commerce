
const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id, color, amount, product } = action.payload;
      // console.log(
      //   "🚀 ~ file: cartReducer.js ~ line 4 ~ cartReducer ~ product",
      //   product
      // );

      //find the existing product in cart

      let existingProduct = state.cart.find((el)=>{
        return el.id === id + color
      })
      // console.log(existingProduct)
  
      if(existingProduct){

        let updatedProduct= state.cart.map((el)=>{
          
          if(el.id === id + color){
            let newAmount = el.amount + amount;

            if(newAmount >= el.max){
              newAmount= el.max
            }
            return {
              ...el,
              amount: newAmount
            };
          }else{
            return el;
          };
        })
        return{
          ...state,
          cart: updatedProduct,
        }
      }else{
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }
      
  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if(action.type === "SET_DECREMENT"){
    let updatedProduct = state.cart.map((el)=>{
      if(el.id === action.payload){
        // console.log("hi")
        let decAmount = el.amount - 1;
        if(decAmount <= 1){
          decAmount = 1
        }
        return{
          ...el,
          amount: decAmount
        }
      }else{
        return el;
      }   
    })
    return{
      ...state,
      cart: updatedProduct
    }
  }

  if(action.type === "SET_INCREMENT"){

    let updatedProduct = state.cart.map((el)=>{
      if(el.id === action.payload){
        // console.log("check")
        let incAmount = el.amount + 1;
        if(incAmount >= el.max){
          incAmount = el.max
        }
        return{
          ...el,
          amount: incAmount
        }
      }else{
        return el;
      }
    })
    return{
      ...state,
      cart: updatedProduct
    }
  }

    //to empty or to clear the cart
    
    if(action.type === "CLEAR_CART"){
      return{
        ...state,
        cart: []
      }
    }

    if(action.type === "CART_TOTAL_ITEM"){

      let totalProduct = state.cart.reduce((acc,el)=>{
        //  let {amount} = el;

         acc = acc + el.amount;

         return acc;
      },0)
      return{
        ...state,
        total_item: totalProduct
      }
    }

    if(action.type === "CART_TOTAL_PRICE"){

      let totalPrice = state.cart.reduce((acc, el)=>{

        acc = acc + (el.price * el.amount)

        return acc;
      },0)
      return{
        ...state,
        total_price: totalPrice
      }
    }
  
    return state;
  };
  
  export default cartReducer;
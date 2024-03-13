import { Cart, CartItem } from "../db/models";

export const verifyCart = async(id:number) => {

    const cartActive = await Cart.findOne({where:{clientId:id}})
    if (cartActive) {
      const error: any = new Error("There is already an active cart");
    error.data = cartActive.toJSON(); // Convertimos a JSON el objeto cartActive
    throw error;
    }
//    return cartActive
 
  };


  export const findMyCart = async(clientId:number) => {

    const cartActive = await Cart.findOne({where:{clientId:clientId}})
    if (!cartActive){
      const result = await Cart.create({clientId:clientId})
      return result.id
    }
    return cartActive.id
  };


  export const existProduct = async(cartId:number,productId:number ) => {


    const cartitem = await CartItem.findOne({where:{cartId:cartId, productId:productId}})
    if (cartitem) throw new Error("The product has already been created for this cart just update")
  };

  export const findCartItem = async(id:number) => {

    const carItem = await CartItem.findByPk(id)
 
    return carItem
  };

  export const getSubtotal = async(id:number) => {
    let subtotal = 0
    const cartItems = await CartItem.findAll({where:{cartId:id}})
    if (cartItems){
      cartItems.forEach((item)=>{
        subtotal += Number(item.price)
      })
    }
  
    return subtotal
  };
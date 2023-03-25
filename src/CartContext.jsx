import { createContext, useState } from 'react'
import { productsArray, getProductData } from './productsForStore'

const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
})

function CartProvider({children}) {
  const [cartProducts, setCartProducts] = useState([])

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  }

  function getProductQuantity(id) {
    const quantity = cartProducts.find(product => product.id === id)?.quantity
    if(quantity === undefined) {
      return 0
    }
    return quantity
  }


  function addOneToCart(id) {
    const quantity = getProductQuantity(id)
    if (quantity === 0 ) {
      console.log('first')
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1
        }
      ])
    } else {
      console.log('second')
      setCartProducts(
        cartProducts.map(product =>
          product.id === id 
          ? {...product, quantity: product.quantity + 1} : product
        )
      )
    }
  
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id)
    if (quantity === 1) {
      deleteFromCart(id)
    } else {
      setCartProducts(
        cartProducts.map(product => product.id === id ?
          {...product, quantity: product.quantity - 1} :
          product
        )
    )}
  }


  function deleteFromCart(id) {
    setCartProducts(cartProducts => {
      cartProducts.filter(product => product.id != id)
    })
  }

  function getTotalCost() {
    let totalCost = 0
    cartProducts.map(cartItem => {
      const productData = getProductData(cartItem.id)
      totalCost += (productData.price * productData.quantity)
    })
  }

  return(
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}


export { CartContext, CartProvider }
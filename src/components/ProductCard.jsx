import { CartContext } from "../cartContext";
import { useContext } from "react"


function ProductCard(props) {
    const product = props.product;
    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(product.id)

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p>{product.artist}</p>
                <p>${product.price.toFixed(2)}</p>
                <div className="card-actions justify-end">
                    {productQuantity > 0 ?
                    <>
                    <div className="flex w-full items-center justify-between">
                        <span className="card-title text-base">In Cart</span>
                        <div className="flex items-center">
                            <button 
                                className="btn btn-circle btn-outline"
                                onClick={() => cart.removeOneFromCart(product.id)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                            <span className="flex m-4">{productQuantity}</span>
                            <button 
                                className="btn btn-circle btn-outline"
                                onClick={() => cart.addOneToCart(product.id)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div> 
                    <button 
                        className="btn btn-secondary"
                        onClick={() => cart.deleteFromCart(product.id)}
                    >Remove from cart
                    </button>
                    </>
                    :
                    <button 
                        className="btn bg-black border-none hover:black"
                        onClick={() => cart.addOneToCart(product.id)}
                    >Add to Cart
                    </button>}
                </div>
            </div>
        </div>
    )
}

export default ProductCard
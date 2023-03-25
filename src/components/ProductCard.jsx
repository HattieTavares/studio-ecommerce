import { CartContext } from "../cartContext";
import { useContext } from "react"


function ProductCard(props) {
    const product = props.product;
    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(product.id)
    console.log(cart)

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p>{product.artist}</p>
                <p>${product.price.toFixed(2)}</p>
                <div className="card-actions justify-end">
                    <button 
                        className="btn bg-black border-none hover:black"
                        onClick={() => cart.addOneToCart(product.id)}
                    >Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
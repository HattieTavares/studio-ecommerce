import { productsArray } from "../productsForStore"
import ProductCard from "../components/ProductCard"

function Store() {
    return (
      <>
        <h1>Welcome to the Art Store</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-3">
            {productsArray.map((product, index) => (
                <ProductCard product={product} />
            ))}
        </div>
      </>
    )
  }
  
export default Store
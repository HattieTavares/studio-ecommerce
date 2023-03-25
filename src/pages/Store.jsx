import { productsArray } from "../productsForStore"
import ProductCard from "../components/ProductCard"

function Store() {
    const products = productsArray.map((product) => {
      return(
        <ProductCard key={product.id} product={product} />
    )})

    return (
      <>
        <div className="flex justify-center">
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
                {products}
            </div>   
        </div>
      </>
    )
  }
  
export default Store
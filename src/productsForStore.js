
const productsArray = [
    {
        id: "1",
        title: "Product 1",
        artist: "Artist Name",
        price: 4.99
    },
    {
        id: "2",
        title: "Product 2",
        artist: "Artist Name",
        price: 4.99
    },
    {
        id: "3",
        title: "Product 3",
        artist: "Artist Name",
        price: 4.99
    },
    {
        id: "4",
        title: "Product 4",
        artist: "Artist Name",
        price: 4.99
    },
    
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)
    if(productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
    }
    return productData
}

export { productsArray, getProductData }
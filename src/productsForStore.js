
const productsArray = [
    {
        id: "1",
        title: "Mona Lisa",
        artist: "Leonardo da Vinci",
        price: 5.00
    },
    // {
    //     id: "2",
    //     title: "The Starry Night",
    //     artist: "Vincent van Gogh",
    //     price: 10.00
    // },
    // {
    //     id: "3",
    //     title: "The Scream",
    //     artist: "Edvard Munch",
    //     price: 20.00
    // },
    // {
    //     id: "4",
    //     title: "Guernica",
    //     artist: "Pablo Picasso",
    //     price: 50.00
    // },
    // {
    //     id: "5",
    //     title: "The Kiss",
    //     artist: "Gustav Klimt",
    //     price: 150.00
    // },
    // {
    //     id: "6",
    //     title: "Girl with the Pearl Earring",
    //     artist: "Johannes Vermeer",
    //     price: 300.00
    // },
    
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)
    if(productData == undefined) {
        console.log(`Product data does not exist for ID: ${id}`);
    }
    return productData
}

export { productsArray, getProductData }
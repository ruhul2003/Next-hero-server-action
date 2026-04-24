import Product from "../Components/Product";
const getProducts = async()=>{
    const res = await fetch ('http://localhost:5000/products');

    const products =await res.json();
    return products;
}
const productPage = async() => {
    const products=await getProducts();
    return (
        <div>
            <h1 className='text-3xl text-center font-sans font-mono font-extrabold my-10 font-bold'>Products Page</h1>
            <h1 className="text-center font-bold text-3xl">Number of products: {products.length}</h1>

            <div className="grid grid-cols-3 gap-10">
                    {
                    products.map(product => <Product key = {product.id} product={product}></Product>)
                }
                
            </div>

        </div>
    );
};

export default productPage
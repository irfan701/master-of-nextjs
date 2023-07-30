import ProductBtn from "@/app/clientwithserver/product_btn";

async function productList(){
    let data = await fetch('https://dummyjson.com/products')
    data = await data.json()
    return data.products
}

const ProductListServer = async () => {
    let products=await productList();
    console.log(products)
    let pro = products.map((item,i) => {
        return <div key={i}>
                    <h3>Name : {item.title}</h3>
                    <ProductBtn price={item.price}/>
              </div>
    })
    return (
        <div>
            <h2>Product List Client Side</h2>
                {pro}
        </div>
    );
};

export default ProductListServer;
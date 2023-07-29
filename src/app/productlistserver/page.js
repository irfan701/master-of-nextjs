
async function productList(){
    let data = await fetch('https://dummyjson.com/products')
    data = await data.json()
    return data.products
}


const ProductListServer = async () => {

    let products=await productList();
    console.log(products)

    let pro = products.map((item) => {
        return `<div>
<tr>
                    <td>${item.title}</td>
                    <td>${item.price}</td>
</tr>
</div>`
    })

    return (
        <div>
            <h2>Product List Client Side</h2>
            <table className='table'>
                <tbody>
                {pro}
                </tbody>
            </table>
        </div>
    );
};

export default ProductListServer;
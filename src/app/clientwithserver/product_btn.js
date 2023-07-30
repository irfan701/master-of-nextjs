"use client"
export default function ProductBtn({price}){

    //console.log(props)
    return <div>
        <button onClick={()=>alert(price)}>Check Price</button>
    </div>
}
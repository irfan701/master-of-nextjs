import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";

async function userList(){
   let data=await fetch('https://dummyjson.com/users')
        data=await data.json()
    return data.users;
}

const Page =async () => {
    let users=await userList();
    console.log(users)
    return (
        <div>
            <h2>User Name List</h2>
            {users.map((item,i)=>{
                return <div key={i}><h4>User Name: {item.firstName}</h4></div>
            })}
        </div>
    );
};

export default Page;
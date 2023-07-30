import getUsers from "../../../services/getUsers";
import Link from "next/link";

const Page = async () => {
    let getUserList=await getUsers();
    console.log(getUserList)
    return (
        <div>
            <h4>User List</h4>
            {
                getUserList.map((item,i)=>{
               return <div key={i}>

                    <Link href={`/users/${item.id}`}>{item.firstName}</Link>
               </div>
           })
            }
        </div>
    );
};

export default Page;
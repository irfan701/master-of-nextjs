import getUsers from "../../../../services/getUsers";
import Image from "next/image";

export default async function Page(props){
    let getUserList = await getUsers();

    //console.log(props.params.userId)
    let currentId = props.params.userId
    //console.log(getUserList[currentId-1])
    let userData = getUserList[currentId - 1]
    return (
        <div>
            <h4>User Details Page</h4>
            <h4>Id:{userData.id}</h4>
            <h4>Name:{userData.firstName}</h4>
            <h4>Email:{userData.email}</h4>
            <h4>Image :<Image alt="xyz" src={userData.image} width={300} height={300}/></h4>
        </div>
    );
};


export async function generateStaticParams() {
    let getUserList = await getUsers();
     return getUserList.map((item) => {
        userId:item.id.toString();
    })
}
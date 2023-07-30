import getUsers from "../../../../services/getUsers";
import Image from "next/image";

const Page = async (props) => {
    let getUserList=await getUsers();

    //console.log(props.params.userId)
    let currentId=props.params.userId
        //console.log(getUserList[currentId-1])
    let userData=getUserList[currentId-1]
    return (
        <div>
            <h4>User Details Page</h4>
          <h4>Id:{userData.id}</h4>
          <h4>Name:{userData.firstName}</h4>
          <h4>Email:{userData.email}</h4>
          <h4>Image :<Image src={userData.image} width={300} height={300}/></h4>
        </div>
    );
};

export default Page;
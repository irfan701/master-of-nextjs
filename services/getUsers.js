export default async function getUsers () {

    let data = await fetch('https://dummyjson.com/users')
    data = await data.json()
    return data.users;
};


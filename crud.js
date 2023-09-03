import { dbApi } from "./config";


// get - Read
export const getUser = async () => {
    const response = await fetch(dbApi);
    const users = await response.json();
    console.log(users);
    return users
}

// getUser();




// getSingle user
export const getSingleUser = async (id) => {
    const response = await fetch(`${dbApi}/${id}`);
    const users = await response.json();
    console.log(users);
    return users;
}

// getSingleUser(5);




// Create user
export const createApi = async(data)=>{
    const response = await fetch(dbApi,{
        "method":'POST',
        "body":JSON.stringify(data),
        "headers":{
            "content-type":"application/json"
        }
    });
    const api = await response.json();
    console.log(api);
    return api
}
// createApi({
//     // "id":"19",
//     "name":"",
//     "email":"",
//     "age":"",
//     "designation":"",
//     "package":""
// });





// delete user
export const deleteUser = async(id)=>{
    const response = await fetch(`${dbApi}/${id}`,{
        method:'DELETE'
    });
    const users = await response.json();
    return users
}

// deleteUser(10)



// update - put
export const updateUser = async(data, id)=>{
    const response = await fetch(`${dbApi}/${id}`,{
        method:'PUT',
        body:JSON.stringify(data),
        headers:{
            'content-type':"application/json"
        }
    })
    const users = await response.json();
    console.log(users);
    return users
}

// updateUser({
//     "id": "1",
//     "name": "saranya",
//     "email": "email@gmail.com",
//     "age": "21",
//     "designation": "developer",
//     "package": "5LPA"
// }, 1)



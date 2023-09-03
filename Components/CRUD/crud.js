// import { dbApi } from "../../config";


// // get
// export const getApi = async()=>{
//     const response = await fetch(dbApi);
//     const api = await response.json();
//     console.log(api)
//     return api;
// }

// // getApi();


// // get single
// export const getSingleApi = async()=>{
//     const response = await fetch(`${dbApi}/2`);
//     const api = await response.json();
//     console.log(api);
//     return api
// }

// // getSingleApi()




// // create user
// export const createApi = async(data)=>{
//     const response = await fetch(dbApi,{
//         "method":'POST',
//         "body":JSON.stringify(data),
//         "headers":{
//             "content-type":"application/json"
//         }
//     });
//     const api = await response.json();
//     console.log(api);
//     return api
// }
// createApi({
//     "id":"15",
//     "name":"name6",
//     "email":"email@gmail.com",
//     "age":"21",
//     "designation":"developer",
//     "package":"8LPA"
// });




// // update user
// export const updateApi = async(id, data)=>{
//     const response = await fetch(`${dbApi}/${id}`,{
//         method:"PUT",
//         body:JSON.stringify(data),
//         headers:{
//             "content-type":"application/json"
//         }
//     });
//     const api = await response.json();
//     console.log(api);
//     return api
// }
// // updateApi(8,{
// //     "name":"name8",
// //     "email":"email@gmail.com",
// //     "age":"21",
// //     "designation":"developer",
// //     "package":"8LPA"
// // })




// // deleteUser
// export const deleteAPI = async(id)=>{
//     const response = await fetch(`${dbApi}/${id}`,{
//         method : 'DELETE'
//     })
//     const api = await response.json();
//     console.log(api);
//     return api
// }
// // deleteAPI(7)
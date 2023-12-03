export async function paginar(limit,skip){
    
    const {data} = await useFetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)
    
    return await data.value.users

    
    
       



}
export async function useSearchBuscar(slug){

    const {data} = await useFetch(`https://dummyjson.com/users/search?q=${slug.value}&limit=0`,{})
    
    return await data.value.users

    

}
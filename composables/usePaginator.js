export async function paginar(limit,skip){
    
    const {data} = await useFetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)
    
    return await data.value.users
}


/* export const selectedItems = async()=>{
    skip.value = 0
    paginaActual.value = 1
    limit.value = contador.value
    await store.paginarLista(limit.value,skip.value)
    
    total.value = store.total
    totalPaginas.value = Math.ceil(total.value/contador.value);
    
    
  } */
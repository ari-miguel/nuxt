export async function useGetAllUsers() {

    const { data} = await useAsyncData("users", () => $fetch("https://dummyjson.com/users/?limit=0"))
    let datos = ref([])
    datos.value = await data.value
    return datos.value
    
    

    

}

export async function useGetAllUsersLimit() {


    
    let { data, error} = await useAsyncData
    ("usersLimit", () => $fetch("https://dummyjson.com/users/"))
    let datos = await data.value.users
    let total = await data.value.total
    let limit = await data.value.limit
    return {datos,total,limit}

}


export async function useGetAllUsersLimitSkip(limit,skip) {


    
    let { data} = await useAsyncData("usersLimitSkip", () => $fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`))
    

    return await data.value.users.total

}


export async function useUsersbyKeywords(slug){

    const { data } = await useFetch(`https://dummyjson.com/users/search?q=${slug}`, {})
    return await data.value.users



}

export async function usenewUser(firstName,lastName,age) {
    try {
        let response = await fetch(`https://dummyjson.com/users/add"`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                firstName:firstName,
                lastName: lastName,
                age: age
            }),
        });
        if (response.ok) {
            const res = await response.json();
            return await res
        }
        else {
            return { mensaje: `Error al crear el usuario: ${response.status}` }
        }
    } catch (err) {
        return {mensaje:"Ocurrio un error al crear el usuario"}
    }
}

export async function useEliminar (id){
    let res = ""
    try{
    let eliminado = await fetch(`https://dummyjson.com/users/${id}` , {
    method: 'DELETE',
})
    res = await eliminado.json()
    return res
}
catch(err){
    return err 
}
    
}

export async function useActualizar(item,snackbar,mensaje,dialog){
    let res = ref("")
    try{
        let update = await fetch(`https://dummyjson.com/users/${item.id}`, {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        lastName: item.lastName
  })
})
    res.value = await update.json()
    dialog.value = false
    snackbar.value = true
    mensaje.value = `Actualizado con exito: ${item.lastName} ${item.email}`
    return res.value
   
    }catch(error){
        mensaje.value = error

}
    
    
    
}
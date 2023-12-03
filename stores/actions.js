import { defineStore } from "pinia";

export const useActionStore = defineStore('actions', () => {
  
  
  let updateList = ref([])
  let deleteList = ref([])
  let newsList = ref([])
  
  const createUser = async(firstName,lastName,age)=>{
    try {
      let response = await fetch(`https://dummyjson.com/users/add`, {
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

const deleteUser = async(id)=>{
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

const updateUser = async (item,snackbar,mensaje,dialog)=>{
    await useActualizar(item,snackbar,mensaje,dialog)
    
    
}
  
    return { createUser,deleteUser,updateUser,updateList,deleteList,newsList}
  })
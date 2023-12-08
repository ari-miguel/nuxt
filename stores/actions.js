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

const deleteUser = async(id,snackbar,mensaje,dialog)=>{
  
  try{
  let eliminado = await fetch(`https://dummyjson.com/users/${id}` , {
  method: 'DELETE',
})
  let res = await eliminado.json()
  snackbar.value = true
  mensaje.value = `Usuario eliminado: ${res.id} ${res.firstName} ${res.lastName}`
  dialog.value = false
  return res
  
}
catch(err){
  
  console.log(err)
  return err 
}

}

const updateUser = async (item,snackbar,mensaje,dialog)=>{
    await useActualizar(item,snackbar,mensaje,dialog)
    
    
}

const getDatos = ()=>{
  return updateList.value.length + deleteList.value.length + newsList.value.length
}
  
    return { createUser,deleteUser,updateUser,getDatos,updateList,deleteList,newsList}
  })
import { defineStore } from "pinia";

export const useListUsersStore = defineStore('listusers', () => {
  
  let lista = ref([])
  let total = ref()
  let listado = ref([])
  let searchList = ref([])
  
  
  const allUsers = async()=>{
    listado.value  = await useGetAllUsers()
    lista.value = await listado.value.users
    total.value = await listado.value.total
    
  }

  const paginarLista = async(limit,skip)=>{

    lista.value = await paginar(limit,skip)
    
  }

  const search = async(slug)=>{
    searchList.value = await useSearchBuscar(slug)
    

  }

  const resetSearchList = async(limit,skip)=>{
    searchList.value = await paginar(limit,skip)
  }
  
    return { lista,total,searchList, allUsers,paginarLista,search,resetSearchList }
  })
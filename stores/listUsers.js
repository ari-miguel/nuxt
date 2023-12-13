import { defineStore } from "pinia";

export const useListUsersStore = defineStore('listusers', () => {
  
  let lista = ref([])
  let total = ref()
  let listado = ref([])
  let searchList = ref([])
  let paginaActual = ref(1)
  let limit = ref(3)
  let skip = ref(0)
  let totalPaginas = ref(0)
  let siguienteActivo = true
  let prevActivo = false
  
  
  const allUsers = async()=>{
    listado.value  = await useGetAllUsers()
    total.value = await listado.value.total
    
    
  }

  const paginarLista = async(limit,skip)=>{

    const {data} = await useFetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)
    lista.value = await data.value.users
    return lista.value
    
      
  }

  const search = async(slug)=>{
    searchList.value = await useSearchBuscar(slug)
    

  }

  const selectedItems = async(contador)=>{
    skip.value = 0
    limit.value = contador
    totalPaginas.value = Math.ceil(total.value/contador);
    await paginarLista(limit.value,skip.value)
  }

  const siguiente = async()=>{
    
    skip.value += limit.value
    await paginarLista(limit.value,skip.value)
    paginaActual.value++
    
  
    }

    const atras = async()=>{

      //limit.value = contador.value
      skip.value -= limit.value
      await paginarLista(limit.value,skip.value)
      paginaActual.value--
      
    }

    const desactivarBtnSiguiente = computed(()=>{
      if(paginaActual.value >= totalPaginas.value){
        siguienteActivo = true
        return siguienteActivo
      }
    })


    const desactivarBtnPrev = computed(()=>{
      if(paginaActual.value == 1){
        prevActivo = true
        return prevActivo
      }
    })




  const resetSearchList = async(limit,skip)=>{
    searchList.value = await paginarLista(limit,skip)
  }


  
  return { lista,total,totalPaginas,paginaActual,searchList,siguienteActivo,prevActivo, allUsers,paginarLista,search,resetSearchList,selectedItems,siguiente,atras,desactivarBtnSiguiente,desactivarBtnPrev }
  })
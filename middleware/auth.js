import { useAuth } from "../stores/auth";

export default defineNuxtRouteMiddleware(async()=>{
    const store = useAuth()
    if(store.token === null){
        return await navigateTo("/error-login")
    }
})
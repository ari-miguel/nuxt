import { defineStore } from "pinia";



import {useActionStore} from "../stores/actions"
import {useAuth} from "../stores/auth"
const storeAuth = useAuth()
const storeActions = useActionStore()

export const useAdminStore = defineStore("admin", {
    state: () => {
        return {
            
            admin:{
                id:storeAuth.id,
                firstName:storeAuth.firstName,
                lastName:storeAuth.lastName,
                updates: storeActions.updateList,
                deletes: storeActions.deleteList,
                news: storeActions.newsList


            },

            adminList : []

            };
        },
    

        
    
    actions: {
        async addAdmins() {

            this.adminList.push(this.admin)
            
        },
        
    },

    

    
})
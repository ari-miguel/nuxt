
export default defineEventHandler(async(event)=>{

    
    
    
    let response = await fetch('https://dummyjson.com/users/?limit=0')
    let res = await response.json()
    return res.users

    

})
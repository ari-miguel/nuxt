import { defineStore } from "pinia";

export const useAuth = defineStore("auth", {
    state: () => {
        return {
            id: null,
            email: null,
            firstName: null,
            lastName: null,
            gender: null,
            image: null,
            token: null

        };
    },
    actions: {
        async auth(usuarioNombre, password) {
            try {
                let response = await fetch("https://dummyjson.com/auth/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        username: usuarioNombre,
                        password: password,
                        expiresInMins: 60, // optional
                    }),
                });
                if (response.ok) {
                    const res = await response.json();
                    this.token = res.token
                    this.firstName = res.firstName
                    this.lastName = res.lastName
                    this.email = res.email
                    this.image = res.image
                    return res
                }
                else {
                    return { mensaje: `Usuario o contraseña incorrectos status-conde: ${response.status}` }
                }
            } catch (err) {
                console.log(err)
            }
        },

        logout(){
            this.token = null
            
        }
        
    },

    
    
});
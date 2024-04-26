import { defineStore } from 'pinia'
export const useAuthStore = defineStore({
  id:"auth",
  state: ()=> ({
    token: localStorage.getItem('task-token') || "",
  }),
  getters:{
    username(){
      const token = this.token
      if(token){
        const tokenPayload = token.split(".")[1]
        const decodedToken = JSON.parse(atob(tokenPayload))
        return decodedToken.username
      }else{
        return ""
      }
    },
    userId(){
      const token = this.token
      if(token){
        const tokenPayload = token.split(".")[1]
        const decodedToken = JSON.parse(atob(tokenPayload))
        return decodedToken.id
      }else{
        return ""
      }
    },
  },
  actions: {
    setToken(token:string){
      this.token = token
      localStorage.setItem('task-token',token)
    },
    logout(){
      this.token = ""
      localStorage.removeItem('task-token')
    }
  }
})
import { 
    GETTING_USERS,
    GETTING_USERS_ERROR,
    GETTING_USERS_LOADING
 } from './constant'

 import { User } from "../models";

 import { userService } from "../service";

export interface IGettingUsers {
    type: typeof GETTING_USERS |  typeof GETTING_USERS_ERROR  |  typeof GETTING_USERS_LOADING,
    payload: {
       error:string,
       loading: boolean,
       users:User[],
    }
}


export const gettingUsers = () =>
    (dispatch:(a:IGettingUsers)=>void) => {
        
        dispatch({
            type: GETTING_USERS_LOADING,
            payload: {
                error: "",
                loading: true,
                users:[],
            }
        })

        userService.getUsers()
            .then(res=>{
                const users = res.data
                dispatch({
                    type: GETTING_USERS,
                    payload: {
                        error: "",
                        loading: false,
                        users:users.map(user=>new User(user)),
                    }
                })
            })
            .catch(err=>{

                dispatch({
                    type: GETTING_USERS_ERROR,
                    payload: {
                        error:err.message,
                        loading: true,
                        users:[],
                    }
                })
            })
}
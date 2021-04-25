import { ActionTypes } from "../action/type";
import { User } from "../models";
import { 
    GETTING_USERS,
    GETTING_USERS_ERROR,
    GETTING_USERS_LOADING
} from "../action/constant";

export interface IUsers {
    users: User[],
    error: string,
    loading: boolean
}

export const initialUsers:IUsers = {
    users:[],
    error:"",
    loading: false
}

const reducer = (state = initialUsers , action:ActionTypes):IUsers=> {
    switch (action.type) {
        case GETTING_USERS:
            return ({
                ...initialUsers,
                users: action.payload.users
            })
        case GETTING_USERS_ERROR:
            return ({
                ...initialUsers,
                error: action.payload.error
            })
        case GETTING_USERS_LOADING:
            return ({
                ...initialUsers,
                loading: action.payload.loading
            })
        default:
            return state
    }
}

export default reducer
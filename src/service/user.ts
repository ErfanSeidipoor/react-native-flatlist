import { api } from "./api";
import { IUser } from "../models";

export const getUsers = ()=>
    api.get<IUser[]>
    ("users")



export const userService = {
    getUsers
}

    
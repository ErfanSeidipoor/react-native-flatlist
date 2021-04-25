import { combineReducers } from 'redux';
import user from "./user";

const store = {
	user,
}

export type StoreType =  typeof store
export default combineReducers(store)
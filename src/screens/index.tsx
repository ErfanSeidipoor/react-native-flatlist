
 import React from 'react';
 import ListUser from "../components/ListUser";
 import Loading from "../components/Loading";
 import Error from "../components/Error";
import { useSelector, useDispatch } from "react-redux";
import { StoreType } from "../reducer";
import { IUsers } from 'reducer/user';
import { gettingUsers} from "../action/users";

 const App = () => {
	 
	const dispatch = useDispatch()
	const {users, loading, error} = useSelector<StoreType>(state => state.user) as IUsers

	React.useEffect(()=>{
		dispatch(gettingUsers())
	},[dispatch])

	if (error) {
		return (
			<Error />
		)
	}

	if (loading) {
		return (
			<Loading />
		)
	}

	return (
		<ListUser
			users={users}
		/>
	);
 };

 export default App;

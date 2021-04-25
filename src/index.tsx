import React from 'react';
import { ReduxProvider } from "./core/Redux";
import MainScreens from "./screens";

export default ()=>{
	return (
		<ReduxProvider>
			<MainScreens />
		</ReduxProvider>
	)
}


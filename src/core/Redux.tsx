import React, { ReactNode }  from "react";
import { Provider } from 'react-redux';
import store from '../reducer/store';

export interface ReduxProviderProps {
    children: ReactNode
}

export const ReduxProvider: React.FC<ReduxProviderProps> = ({children}) => (
    <Provider store={store}>{children}</Provider>
)
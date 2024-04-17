'use client'
//Core
import React from 'react'

//redux
import store, { persistore } from '~/redux/store'
import { Provider } from 'react-redux'

//redux-persist
import { PersistGate } from "redux-persist/integration/react";

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistore}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export default StoreProvider
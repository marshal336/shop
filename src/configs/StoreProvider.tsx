'use client'
import React from 'react'
import store, { persistore } from '~/redux/store'
import { Provider } from 'react-redux'
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
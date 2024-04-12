'use client'
import React from 'react'
import store, { AppStore } from '~/redux/store'
import { Provider } from 'react-redux'

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
    const storeRef = React.useRef<AppStore>()
    if (!storeRef.current) {
        storeRef.current = store()
    }
    return (
        <Provider store={storeRef.current}>{children}</Provider>
    )
}

export default StoreProvider
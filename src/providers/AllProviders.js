import React from 'react'
import AuthProvider from './AuthProvider'

const AllProviders = ({ children }) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}

export default AllProviders
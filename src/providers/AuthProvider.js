import React, { useState } from 'react'

const AuthContext = React.createContext({})

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [loading, setLoading] = useState({})

    return (
        <AuthContext.Provider value={{currentUser, loading, setCurrentUser, setLoading}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
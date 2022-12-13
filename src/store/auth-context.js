import React, { useState } from "react";

const AuthContext = React.createContext({
    isLoggedIn: Boolean,
    token: String,
    onLogin: Function,
    onLogout: Function,
});

export const AuthProvider = (props) => {
    const initialToken = localStorage.getItem("token");
    const [token, setToken] = useState(initialToken);

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem("token");
    };

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem("token", token);
    };

    const isLoggedIn = !!token;

    const contextValue = {
        isLoggedIn: isLoggedIn,
        token: token,
        onLogin: loginHandler,
        onLogout: logoutHandler,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

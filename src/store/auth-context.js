import React, { useState } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
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
        localStorage.removeItem("email");
    };

    const loginHandler = (data) => {
        setToken(data.idToken);
        localStorage.setItem("email", data.email);
        localStorage.setItem("token", data.idToken);
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

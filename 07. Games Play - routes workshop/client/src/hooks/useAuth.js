import { login, register, logout } from "../api/auth-api"
import { useAuthContext } from "../contexts/AuthContext";


export const userLogin = () => {
    const { changeAuthState } = useAuthContext();

    const loginHandler = async (email, password) => {
        const {password: _, ...authData} = await login(email, password);
        
        changeAuthState(authData);

        return authData;
    };
    return loginHandler;
}

export const userRegister = () => {
    const { changeAuthState } = useAuthContext();

    const registerHandler = async(email, password) => {

        const { password: _, ...authData } = await register(email, password);
        
        changeAuthState(authData);

        return authData;
    };

    return registerHandler;
}

export const useLogout = () => {
    const { logout: localLogout } = useAuthContext();

    const logoutHandler = async() => {
        localLogout();
        await logout();
    };

    return logoutHandler;
}
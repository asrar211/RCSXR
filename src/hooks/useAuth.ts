import { useAuthContext } from "../context/AuthContext"

export const useAuth = () => {
    const {
        user,
        token,
        loading,
        error,
        isAuthenticated,
        register,
        login,
        logout,
        refreshToken
    } = useAuthContext();

    return {
        user,
        token,
        loading,
        error,
        isAuthenticated,
        register,
        login,
        logout,
        refreshToken
    }
}
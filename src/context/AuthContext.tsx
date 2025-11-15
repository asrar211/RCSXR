import { createContext, useContext, useEffect, useState } from "react";
import type { AuthContextType, User } from "../types/Auth";
import { api } from "../utils/api";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: {children: React.ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const isAuthenticated = !!token;

    const register = async (name: string, email: string, password: string) => {
        try {
            setLoading(true);
            const res = await api.post("/auth/register", {name, email, password}, { withCredentials: true});
            const { accessToken, user } = res.data;

            localStorage.setItem("token", accessToken);
            setToken(accessToken);
            setUser(user);
        } catch (err: any) {
            setError(err.response?.data?.message || "Registration failed");
        } finally {
            setLoading(false);
        }
    }

    const login =async (email: string, password: string) => {
        try {
            const res = await api.post("/auth/login", { email, password}, { withCredentials: true});
            const { accessToken, user} = res.data;

            localStorage.setItem("token", accessToken);
            setToken(accessToken);
            setUser(user);
        } catch (err: any) {
            setError(err.response?.data?.message || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            await api.post("/auth/logout", {}, {withCredentials: true});
        } catch {
        } finally {
            localStorage.removeItem("token");
            setToken(null);
            setUser(null);
        }
    };

    const refreshToken = async () => {
        try {
            const res = await api.post("/auth/refresh", {}, { withCredentials: true});
            const { accessToken, user} = res.data;
            localStorage.setItem("token", accessToken);
            setToken(accessToken);
            if (user) setUser(user);
        } catch (err: any) {
            console.error("Token refresh failed:", err);
            await logout();
        }
    };

    useEffect(() => {
        const initAuth = async () => {
            if (!token) return;
            try {
                const res = await api.get("/auth/me", {
                     headers: { Authorization: `Bearer ${token}` },
                });
                setUser(res.data.user);
            } catch (error) {
                await refreshToken();
            }
        };
        initAuth();
    }, [token]);

    return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        error,
        isAuthenticated,
        register,
        login,
        logout,
        refreshToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
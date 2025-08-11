import axios from "axios";
import { useAuth, useClerk } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import useTokenStore from "../stores/useTokenStore";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  timeout: 10000,
});

export function useApi() {
  async function tokenHelper(token) {
    await setToken(token);
  }
  const { getToken, isSignedIn, isLoaded } = useAuth();
  const { signOut } = useClerk();
  const { token, setToken, clearToken } = useTokenStore();

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  });

  api.interceptors.request.use(async (config) => {
    console.log(token);
    console.log(isSignedIn);
    if (!isSignedIn && isLoaded) {
      toast.error("Please sign in");
      signOut({ redirectUrl: "/" });
      return Promise.reject(new Error("Not signed in"));
    }

    let currentToken = token;
    if (!currentToken) {
      currentToken = await getToken({ template: "userToken" });
      await tokenHelper(currentToken);
    }

    config.headers.Authorization = `Bearer ${currentToken}`;
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        toast.error("Session expired. Please log in again.");
        clearToken();
        signOut({ redirectUrl: "/" });
      }
      return Promise.reject(error);
    }
  );

  return api;
}

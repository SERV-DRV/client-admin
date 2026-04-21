import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import {
    login as loginRequest
} from "../../../shared/api"

export const useAuthStore = create(
    persist((set, get) => ({
        user: null,
        token: null,
        refreshToken: null,
        expiresAt: null,
        loading: false,
        error: null,
        isLoading: true,
        isAuthenticated: false,

        checkAuth: () => {
            const token = get().token;
            const role = get().user?.role;
            const isAdmin = role == "ADMIN_ROLE"

            if (token && !isAdmin) {
                set({
                    user: null,
                    token: null,
                    refreshToken: null,
                    expiresAt: null,
                    isAuthenticated: false,
                    isLoadingAuth: false,
                    error: "No tienes permiso para acceder como administrador"
                })
            }
        },

        logout: () => {
            set({
                user: null,
                token: null,
                refreshToken: null,
                expiresAt: null,
                isAuthenticated: false
            })
        },

        login: async ({ emailOrUsername, password }) => {

            const { data } = await loginRequest

        },

    }),
        { name: "auth-store" })
);
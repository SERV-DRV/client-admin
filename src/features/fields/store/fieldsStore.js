import { create } from "zustand";
import {
    getFields as getFieldsRequest,
    createField as createFieldRequest,
    updateField as updateFieldRequest,
    deleteField as deleteFieldRequest,
    getAllReservations as getAllReservationsRequest,
    confirmReservation as confirmReservationRequest,
} from "../../../shared/api"; // Revisa que esta ruta apunte bien a tu archivo api.js

/*
* Este store maneja tanto las canchas como las reservaciones.
*/

export const useFieldsStore = create((set, get) => ({
    fields: [],
    reservations: [],
    loading: false,
    error: null,

    getFields: async () => {
        try {
            set({ loading: true, error: null });
            const response = await getFieldsRequest();
            set({
                fields: response.data.data,
                loading: false,
            });
        } catch (error) {
            set({
                error: error.response?.data?.message || "Error al obtener canchas",
                loading: false,
            });
        }
    },

    createField: async (formData) => {
        try {
            set({ loading: true, error: null });
            const response = await createFieldRequest(formData);
            set({
                // Agrega la nueva cancha al inicio del arreglo
                fields: [response.data.data, ...get().fields],
                loading: false,
            });
        } catch (error) {
            set({
                loading: false,
                error: error.response?.data?.message || "Error al crear campo",
            });
        }
    },

    updateField: async (id, formData) => {
        try {
            set({ loading: true, error: null });
            const response = await updateFieldRequest(id, formData);
            set({
                // Actualiza solo la cancha que coincida con el ID
                fields: get().fields.map((field) => 
                    field._id === id ? response.data.data : field
                ),
                loading: false,
            });
        } catch (error) {
            set({
                loading: false,
                error: error.response?.data?.message || "Error al actualizar campo",
            });
        }
    },

    deleteField: async (id) => {
        try {
            set({ loading: true, error: null });
            await deleteFieldRequest(id);
            set({
                // Filtra la cancha eliminada para sacarla del estado
                fields: get().fields.filter((field) => field._id !== id),
                loading: false,
            });
        } catch (error) {
            set({
                loading: false,
                error: error.response?.data?.message || "Error al eliminar campo",
            });
        }
    },

    getAllReservations: async () => {
        try {
            set({ loading: true, error: null });
            const response = await getAllReservationsRequest();
            set({
                reservations: response.data.data,
                loading: false,
            });
        } catch (error) {
            set({
                error: error.response?.data?.message || "Error al obtener reservaciones",
                loading: false,
            });
        }
    },

    confirmReservation: async (id) => {
        try {
            set({ loading: true, error: null });
            await confirmReservationRequest(id);
            // Refrescar lista después de confirmar
            await get().getAllReservations();
            set({ loading: false });
        } catch (error) {
            set({
                error: error.response?.data?.message || "Error al confirmar reservación",
                loading: false,
            });
        }
    },
}));
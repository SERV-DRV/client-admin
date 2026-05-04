import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useSaveField } from "../hooks/useSaveField";
import { useFieldsStore } from "../store/fieldsStore";
import { showSuccessToast, showErrorToast } from "../../../shared/utils/toast.js";
import { Modal } from "../../../shared/ui/Modal";

// SOLUCIÓN AL ERROR: Agregamos "field" aquí adentro de las llaves
export const FieldModal = ({ isOpen, onClose, field }) => {

    // Formulario
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();
    
    const { saveField } = useSaveField();
    const loading = useFieldsStore((state) => state.loading);

    const [preview, setPreview] = useState(null);

    useEffect(() => {
        if(isOpen){ 
            if(field){
                reset({
                    fieldName: field.name,
                    fieldType: field.type,
                    capacity: field.capacity,
                    price: field.price,
                    description: field.description,
                });
                setPreview(field.imageUrl || null);
            } else {
                // Si no hay field, limpiamos el formulario para crear uno nuevo
                reset({});
                setPreview(null);
            }
        }
    }, [isOpen, field, reset]);

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "photo" && value.photo && value.photo[0]) {
                setPreview(URL.createObjectURL(value.photo[0]));
            }
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    const onSubmit = async (data) => {
        try {
            await saveField(data, field?._id);
            showSuccessToast(
                field ? "Campo actualizado exitosamente" : "Campo creado exitosamente"
            );
            reset(); // <-- CORRECCIÓN: Faltaban los paréntesis aquí
            setPreview(null);
            onClose();
        } catch (error) {
            showErrorToast(error.message || "Error al guardar el campo");
        }
    };

    if (!isOpen) return null;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={field ? "Editar Campo" : "Nuevo Campo"}
            subtitle="Completa la información del campo"
        >
            {/* CORRECCIÓN: Agregamos la etiqueta <form> para que funcione React Hook Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                
                {/* PREVIEW */}
                <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl bg-gray-100 border flex items-center justify-center overflow-hidden shadow-inner">
                        {preview ? (
                            <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-gray-400 text-xs sm:text-sm">
                                Sin imagen
                            </span>
                        )}
                    </div>
                </div>

                {/* INPUTS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* Nombre */}
                    <div className="flex flex-col md:col-span-2">
                        <label className="text-sm font-semibold text-gray-700 mb-1">
                            Nombre del campo
                        </label>
                        <input
                            {...register("fieldName", { required: true })}
                            className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 bg-gray-50 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                            placeholder="Ej. Cancha Central"
                        />
                    </div>

                    {/* Tipo */}
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold text-gray-700 mb-1">
                            Tipo de cancha
                        </label>
                        <select
                            {...register("fieldType", { required: true })}
                            className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 bg-gray-50 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                        >
                            <option value="">Seleccione un tipo</option>
                            <option value="Sintética">Sintética</option>
                            <option value="Concreto">Concreto</option>
                            <option value="Natural">Natural</option>
                        </select>
                    </div>

                    {/* Capacidad */}
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold text-gray-700 mb-1">
                            Capacidad
                        </label>
                        <select
                            {...register("capacity", { required: true })}
                            className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 bg-gray-50 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                        >
                            <option value="">Seleccione capacidad</option>
                            <option value="Fútbol 5">Fútbol 5</option>
                            <option value="Fútbol 7">Fútbol 7</option>
                            <option value="Fútbol 11">Fútbol 11</option>
                        </select>
                    </div>

                    {/* Precio */}
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold text-gray-700 mb-1">
                            Precio por hora
                        </label>
                        <input
                            type="number"
                            {...register("price", { required: true })}
                            className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 bg-gray-50 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                            placeholder="100"
                        />
                    </div>

                    {/* Descripción */}
                    <div className="flex flex-col md:col-span-2">
                        <label className="text-sm font-semibold text-gray-700 mb-1">
                            Descripción
                        </label>
                        <textarea
                            {...register("description")}
                            className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 bg-gray-50 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                            placeholder="Detalles del campo..."
                        />
                    </div>

                    {/* Imagen */}
                    <div className="flex flex-col md:col-span-2">
                        <label className="text-sm font-semibold text-gray-700 mb-1">
                            Imagen del campo
                        </label>
                        <input
                            type="file"
                            className="w-full px-3 py-2 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition cursor-pointer"
                            accept="image/*"
                            {...register("photo")}
                        />
                    </div>
                </div>

                {/* BOTONES */}
                <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-4 mt-4 border-t">
                    <button
                        type="button"
                        onClick={onClose}
                        className="w-full sm:w-auto px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
                    >
                        Cancelar
                    </button>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full sm:w-auto px-5 py-2 rounded-lg text-white font-medium transition shadow disabled:opacity-50"
                        style={{
                            background: "linear-gradient(90deg, var(--main-blue) 0%, #1956a3 100%)",
                            border: "none",
                        }}
                    >
                        {loading ? "Guardando..." : field ? "Actualizar campo" : "Crear campo"}
                    </button>
                </div>
            </form>
        </Modal>
    );
};
export const Reservations = () => {
  return (
    <section className="space-y-4">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
          Reservaciones
        </p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Gestión de reservaciones
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          Aquí podrás consultar, aprobar o cancelar reservaciones.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-gray-500">Vista inicial de reservaciones</p>
        <p className="mt-2 text-gray-800">
          Conecta aquí tu calendario, tabla o panel de reservaciones.
        </p>
      </div>
    </section>
  );
};

export const Tournaments = () => {
  return (
    <section className="space-y-4">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
          Torneos
        </p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Gestión de torneos
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          Aquí podrás crear y administrar torneos dentro de la plataforma.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-gray-500">Vista inicial de torneos</p>
        <p className="mt-2 text-gray-800">
          Conecta aquí tu calendario, tarjetas o listado de torneos.
        </p>
      </div>
    </section>
  );
};

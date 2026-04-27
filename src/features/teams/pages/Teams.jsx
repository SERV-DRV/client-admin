export const Teams = () => {
  return (
    <section className="space-y-4">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
          Equipos
        </p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Gestión de equipos
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          Aquí podrás administrar equipos, jugadores y su información general.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-gray-500">Vista inicial de equipos</p>
        <p className="mt-2 text-gray-800">
          Conecta aquí tu listado o formulario de equipos.
        </p>
      </div>
    </section>
  );
};

export const Teams = () => {
  return (
    <section className="space-y-6">
      <header className="rounded-3xl border border-fuchsia-200 bg-gradient-to-br from-fuchsia-50 via-white to-rose-50 p-8 shadow-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-fuchsia-700">
          Equipos
        </p>
        <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Organiza plantillas y rendimiento.
            </h1>
            <p className="mt-4 max-w-xl text-slate-600">
              Panel visual para administrar equipos, capturar jugadores y presentar información clara.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="rounded-full bg-fuchsia-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-500">
              + Nuevo equipo
            </button>
            <button className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
              Ver plantilla
            </button>
          </div>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Equipos activos", "31"],
          ["Jugadores registrados", "412"],
          ["Capitanes asignados", "31"],
        ].map(([label, value]) => (
          <article key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-2 text-3xl font-black text-slate-900">{value}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.45fr_1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-4">
            <h2 className="text-lg font-bold text-slate-900">Equipos destacados</h2>
            <p className="text-sm text-slate-500">Bloque visual para tu tabla CRUD</p>
          </div>

          <div className="grid gap-4 p-6 sm:grid-cols-2">
            {[
              ["Leones FC", "18 jugadores", "Activo"],
              ["Tigres United", "16 jugadores", "Activo"],
              ["Halcones", "14 jugadores", "Pendiente"],
              ["Rayos", "19 jugadores", "Activo"],
            ].map(([name, players, status]) => (
              <article key={name} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-bold text-slate-900">{name}</p>
                    <p className="mt-1 text-sm text-slate-500">{players}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                    {status}
                  </span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-fuchsia-500 to-rose-500" />
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-300">Plantilla</p>
          <h3 className="mt-2 text-2xl font-black">Acciones rápidas</h3>
          <div className="mt-6 space-y-3">
            {[
              "Agregar jugadores a un equipo",
              "Asignar capitán y uniforme",
              "Revisar rendimiento general",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100">
                {item}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};

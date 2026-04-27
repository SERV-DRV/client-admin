export const Tournaments = () => {
  return (
    <section className="space-y-6">
      <header className="rounded-3xl border border-violet-200 bg-linear-to-br from-violet-50 via-white to-indigo-50 p-8 shadow-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-700">
          Torneos
        </p>
        <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Diseña torneos con presencia y orden.
            </h1>
            <p className="mt-4 max-w-xl text-slate-600">
              Vista de administración para organizar torneos, fases y seguimiento del calendario.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500">
              + Nuevo torneo
            </button>
            <button className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
              Ver brackets
            </button>
          </div>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Torneos activos", "8"],
          ["Equipos inscritos", "64"],
          ["Partidos programados", "36"],
          ["Fases en curso", "4"],
        ].map(([label, value]) => (
          <article key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-2 text-3xl font-black text-slate-900">{value}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.5fr_0.95fr]">
        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-4">
            <h2 className="text-lg font-bold text-slate-900">Torneos en curso</h2>
            <p className="text-sm text-slate-500">Bloque visual para tu CRUD</p>
          </div>

          <div className="space-y-4 p-6">
            {[
              ["Liga de Verano", "Octagonal", "En progreso"],
              ["Copa Kinal", "Grupos", "Inscripción abierta"],
              ["Torneo Relámpago", "Eliminación", "Próximo"],
            ].map(([name, phase, status]) => (
              <article key={name} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-lg font-bold text-slate-900">{name}</p>
                    <p className="mt-1 text-sm text-slate-500">Fase actual: {phase}</p>
                  </div>
                  <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                    {status}
                  </span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-2/3 rounded-full bg-linear-to-r from-violet-500 to-indigo-500" />
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-300">Torneo</p>
          <h3 className="mt-2 text-2xl font-black">Panel de control</h3>
          <div className="mt-6 space-y-3">
            {[
              "Registrar equipos participantes",
              "Definir fases y llaves",
              "Publicar resultados",
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

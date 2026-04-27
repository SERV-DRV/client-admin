export const Fields = () => {
  return (
    <section className="space-y-6">
      <header className="relative overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-lime-50 p-8 shadow-xl">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">
              Canchas
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Administra disponibilidad y estado.
            </h1>
            <p className="mt-4 max-w-xl text-slate-600">
              Panel visual para organizar canchas, horarios y condiciones de uso dentro del sistema.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              + Nueva cancha
            </button>
            <button className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
              Ver agenda
            </button>
          </div>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Canchas activas", "14"],
          ["Reservadas hoy", "9"],
          ["En mantenimiento", "2"],
        ].map(([label, value]) => (
          <article key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-2 text-3xl font-black text-slate-900">{value}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.45fr_1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Listado de canchas</h2>
              <p className="text-sm text-slate-500">Estructura visual para tu tabla CRUD</p>
            </div>
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
              Disponible
            </span>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            {[
              ["Cancha 1", "Sintética", "Disponible"],
              ["Cancha 2", "Fútbol 7", "Mantenimiento"],
              ["Cancha 3", "Indoor", "Reservada"],
            ].map(([name, type, status], index) => (
              <div key={name} className={`grid gap-3 px-5 py-4 sm:grid-cols-[1.2fr_1fr_0.9fr] sm:items-center ${index !== 2 ? "border-b border-slate-100" : ""}`}>
                <div>
                  <p className="font-semibold text-slate-900">{name}</p>
                  <p className="text-sm text-slate-500">Bloque principal</p>
                </div>
                <p className="text-sm text-slate-600">{type}</p>
                <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  {status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-4 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
          <h3 className="text-2xl font-black">Resumen operativo</h3>
          <p className="text-sm text-slate-300">
            Área pensada para filtros, edición rápida y acciones de mantenimiento.
          </p>
          <div className="space-y-3 pt-2">
            {[
              "Actualizar disponibilidad",
              "Bloquear franja horaria",
              "Cambiar tipo de cancha",
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

export const Reservations = () => {
  return (
    <section className="space-y-6">
      <header className="rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-8 shadow-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700">
          Reservaciones
        </p>
        <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Agenda, confirma y controla reservas.
            </h1>
            <p className="mt-4 max-w-xl text-slate-600">
              Vista pensada para un flujo visual de aprobaciones, estados y seguimiento de horarios.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="rounded-full bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500">
              + Nueva reserva
            </button>
            <button className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
              Ver calendario
            </button>
          </div>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Hoy", "26"],
          ["Confirmadas", "18"],
          ["Pendientes", "5"],
          ["Canceladas", "3"],
        ].map(([label, value]) => (
          <article key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-2 text-3xl font-black text-slate-900">{value}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.6fr_0.9fr]">
        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-4">
            <h2 className="text-lg font-bold text-slate-900">Reservas programadas</h2>
            <p className="text-sm text-slate-500">Listado visual para tu CRUD principal</p>
          </div>

          <div className="divide-y divide-slate-100">
            {[
              ["Cancha 1", "08:00 - 09:00", "Confirmada"],
              ["Cancha 3", "10:00 - 11:30", "Pendiente"],
              ["Cancha 2", "12:00 - 13:00", "Cancelada"],
            ].map(([field, time, status]) => (
              <div key={`${field}-${time}`} className="grid gap-3 px-6 py-4 sm:grid-cols-[1.2fr_1fr_0.8fr] sm:items-center">
                <div>
                  <p className="font-semibold text-slate-900">{field}</p>
                  <p className="text-sm text-slate-500">Reserva para partido amistoso</p>
                </div>
                <p className="text-sm text-slate-600">{time}</p>
                <span className="w-fit rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                  {status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">Flujo</p>
          <h3 className="mt-2 text-2xl font-black">Estados de reservación</h3>
          <div className="mt-6 space-y-3">
            {[
              "Solicitada por el cliente",
              "Validada por recepción",
              "Confirmada en calendario",
            ].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-200 font-bold">
                  {index + 1}
                </span>
                {item}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};

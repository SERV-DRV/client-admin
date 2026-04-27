export const Users = () => {
  return (
    <section className="space-y-6">
      <header className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 text-white shadow-2xl">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(34,197,94,0.2),_transparent_30%)]" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
              Gestión de usuarios
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Controla accesos, roles y actividad.
            </h1>
            <p className="mt-4 max-w-xl text-slate-300">
              Vista pensada para administrar usuarios del sistema con una experiencia limpia, visual y preparada para CRUD.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/15">
              + Nuevo usuario
            </button>
            <button className="rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
              Exportar
            </button>
          </div>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Usuarios activos", "248"],
          ["Administradores", "18"],
          ["Pendientes de verificación", "7"],
        ].map(([label, value]) => (
          <article key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-2 text-3xl font-black text-slate-900">{value}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.6fr_0.9fr]">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Usuarios recientes</h2>
              <p className="text-sm text-slate-500">Tabla visual para conectar tu listado real</p>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              CRUD listo
            </span>
          </div>

          <div className="divide-y divide-slate-100">
            {[
              ["Carlos Méndez", "Admin", "Activo"],
              ["Ana López", "Recepción", "Pendiente"],
              ["Luis García", "Cliente", "Activo"],
            ].map(([name, role, status]) => (
              <div key={name} className="grid gap-3 px-6 py-4 sm:grid-cols-[1.5fr_1fr_0.8fr] sm:items-center">
                <div>
                  <p className="font-semibold text-slate-900">{name}</p>
                  <p className="text-sm text-slate-500">correo@ejemplo.com</p>
                </div>
                <p className="text-sm text-slate-600">{role}</p>
                <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  {status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Atajos</p>
          <h3 className="mt-2 text-2xl font-black text-slate-900">Acciones de usuario</h3>
          <div className="mt-6 space-y-3">
            {[
              "Crear usuario manualmente",
              "Asignar roles y permisos",
              "Bloquear o activar cuentas",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};

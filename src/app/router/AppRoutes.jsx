import {Route, Routes} from "react-router-dom";
import { AuthPage } from "../../features/auth/pages/AuthPage";
import { DashboardPage } from "../layouts/DashboardPage";
import { Users } from "../../features/users/pages/Users"; 
import { Fields } from "../../features/fields/pages/Fields";
import { Reservations } from "../../features/reservations/pages/Reservations";
import { Teams } from "../../features/teams/pages/Teams";
import { Tournaments } from "../../features/tournaments/pages/Tournaments";

export const AppRoutes = ()=> {
 
    return (
        <Routes>
            {/* PÚBLICAS*/}
            <Route path="/" element={<AuthPage />}/>

            {/* PROTEGIDO POR ROLE */}
            <Route path="/dashboard/*" element={<DashboardPage />}>
                <Route path="fields" element={<Fields />} />
                <Route path="reservations" element={<Reservations />} />
                <Route path="teams" element={<Teams />} />
                <Route path="tournaments" element={<Tournaments />} />
                <Route path="users" element={<Users />} />
            </Route>

            {/* Ruta temporal para pruebas */}
            <Route path="*" element={<h1>404 - Página no encontrada</h1>}/>
        </Routes>
    );
}
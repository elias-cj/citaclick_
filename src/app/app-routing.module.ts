import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { ReservasComponent } from './public/reservas/reservas.component';
//import { HistorialComponent } from './public/historial/historial.component';
//import { NotificacionesComponent } from './public/notificaciones/notificaciones.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BuscarMedicoComponent } from './public/buscar-medico/buscar-medico.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'reservas/:id', component: ReservasComponent }, // Aquí agregamos el parámetro 'id'
  //{ path: 'historial', component: HistorialComponent },
  //{// path: 'notificaciones', component: NotificacionesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'buscar', component: BuscarMedicoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

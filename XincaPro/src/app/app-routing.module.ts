import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjustesComponent } from './components/ajustes/ajustes.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LeccionComponent } from './components/leccion/leccion.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PoliticasComponent } from './components/politicas/politicas.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RepasoComponent } from './components/repaso/repaso.component';
import { VerificacionComponent } from './components/verificacion/verificacion.component';

const routes: Routes = [

{path:"login", component: LoginComponent},
{path:"registro", component: RegistroComponent}, 
{path:"inicio", component: InicioComponent}, 
{path:"header", component: HeaderComponent}, 
{path:"footer", component: FooterComponent}, 
{path:"favoritos", component: FavoritosComponent}, 
{path:"repaso", component: RepasoComponent}, 
{path:"ajustes", component: AjustesComponent},
{path:"leccion", component: LeccionComponent},
{path:"comentario", component: ComentarioComponent},
{path:"politicas", component: PoliticasComponent},
{path:"perfil", component: PerfilComponent},
{path:"evaluacion", component: EvaluacionComponent},
{path:"verificacion", component: VerificacionComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

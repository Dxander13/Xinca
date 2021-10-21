import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { RepasoComponent } from './components/repaso/repaso.component';
import { AjustesComponent } from './components/ajustes/ajustes.component';
import { LeccionComponent } from './components/leccion/leccion.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { PoliticasComponent } from './components/politicas/politicas.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { VerificacionComponent } from './components/verificacion/verificacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,    
    FooterComponent,
    HeaderComponent,
    FavoritosComponent,
    RepasoComponent,
    AjustesComponent,
    LeccionComponent,
    ComentarioComponent,
    PoliticasComponent,
    PerfilComponent,
    EvaluacionComponent,
    VerificacionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

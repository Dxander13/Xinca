import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RegistroMod } from '../models/registroMod';
import { PerfilInsert, PerfilMod } from '../models/perfilMod';
import { Observable } from 'rxjs';
import { Respuesta, RespuestaCategoria, RespuestaPalabra, RespuestaPerfil } from '../models/Respuestas';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private URL ='http://localhost:3000'

  constructor(private http:HttpClient

              ) { }

  register(registro:PerfilInsert):Observable<Respuesta>{
    return this.http.post<Respuesta>(`${this.URL}/insertar/usuario`, registro)
  }


  getUsuarios(usuario:string,contrasena:string):Observable<RespuestaPerfil>{
    return this.http.get<RespuestaPerfil>(`${this.URL}/informacion/logeo/${usuario}/${contrasena}`);
  }

  getPalabrasUsuarios(idUsuario:number):Observable<RespuestaPalabra>{
    return this.http.get<RespuestaPalabra>(`${this.URL}/informacion/usuario/${idUsuario}/palabras-aprender`)
  }

  getPalabrasAprendidasUsuarios(idUsuario:number):Observable<RespuestaPalabra>{
    return this.http.get<RespuestaPalabra>(`${this.URL}/informacion/usuario/${idUsuario}/palabras-aprendidas`)
  }

  registerPalabra(registro:RegistroMod):Observable<Respuesta>{
        return this.http.post<Respuesta>(`${this.URL}/insertar/registro/palabra-usuario`, registro)
  }

  getusuariostotal():Observable<RespuestaPerfil>{
    return this.http.get<RespuestaPerfil>(`${this.URL}/informacion/usuarios`)
  }

  actualizarExperiencia(idUsuario:number,newExperiencia:number):Observable<Respuesta>{
    return this.http.put<Respuesta>(`${this.URL}/informacion//usuario/${idUsuario}/experiencia/${newExperiencia}`,null);
  }

  actualizarCategoria(idUsuario:number,newCategoria:number):Observable<Respuesta>{
    return this.http.put<Respuesta>(`${this.URL}/informacion//usuario/${idUsuario}/categoria/${newCategoria}`,null);
  }

  getCategorias(idCategoria:number):Observable<RespuestaCategoria>{
    return this.http.get<RespuestaCategoria>(`${this.URL}/informacion/usuario/verificar-categoria/${idCategoria}`)
  }

}

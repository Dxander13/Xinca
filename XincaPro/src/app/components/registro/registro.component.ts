import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { PerfilInsert, PerfilMod } from 'src/app/Shared/models/perfilMod';
import { RegistroMod } from 'src/app/Shared/models/registroMod';
import { RestService } from 'src/app/Shared/services/rest.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private registroU:RestService,
              private  http:RestService,
              private router:Router) { }



  ngOnInit(): void {
  }

  Registrar(nombre:string, correo:string, password:string,password2:string,celular:number) {
    if(password.toUpperCase()==password2.toUpperCase()){
      let usuarios:PerfilMod[] =[]
      this.http.getusuariostotal().subscribe(result=>{
        if(result.state==200){
          usuarios=result.data.filter(element=>element.Correo==correo)
        }
        if(usuarios.length==0){
          let perfil:PerfilInsert = {
            nickname: nombre,
            experiencia: 1,
            celular: celular,
            correo: correo,
            IdCategoria: 1,
            nombreUsuario: nombre,
            contrasena: password,
          }
          this.http.register(perfil).subscribe(result=>{
            if(result.state==200){
              this.http.getUsuarios(nombre,password).subscribe(result=>{
                localStorage.setItem('perfil',JSON.stringify(result.data))
              })
              Swal.fire({
                title: 'Registro exitoso',
                text: `Bienevido ${nombre}`,
                icon: 'success',
               confirmButtonText: 'Aceptar'
                
              })
  
              this.router.navigate(['inicio'])
            }
          })
        }else{
          Swal.fire({
            title: 'Error!',
            text: 'El correo con el que desea loguearse ya existe intente con otro.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          })
        }
      })
      
    
    }else{
      Swal.fire({
        title: 'Error!',
        text: 'Las contraseñas no coninsiden',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })

    }
  }

  /*usuario(nombre:string, correo:string, contraseña:string){
    let registraUsu:PerfilMod={
      nombre:nombre,
      correo:correo,
      contraseña:contraseña
    };
  }*/

  
}


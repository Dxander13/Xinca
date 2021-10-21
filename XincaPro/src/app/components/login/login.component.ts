import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilMod } from 'src/app/Shared/models/perfilMod';
import { RestService } from 'src/app/Shared/services/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   perfil:PerfilMod
  constructor(private http:RestService,private router:Router) { }

  ngOnInit(): void {
    
  }


  valildatePerfil(usuario:string,contrasena:string){
    this.http.getUsuarios(usuario,contrasena).subscribe(data=>{
      console.log(usuario,contrasena)
      console.log(data)
      if(data.state==200){
        this.perfil = data.data[0]
        localStorage.setItem('perfil',JSON.stringify(this.perfil))
         Swal.fire({
          title: 'Bienvenido de nuevo',
          text: `Hola ${this.perfil.Nickname}`,
          icon: 'success',
         confirmButtonText: 'Aceptar'
          
        })
        this.router.navigate(['inicio'])
      }else{
        this.perfil=new PerfilMod()
        localStorage.setItem('perfil',JSON.stringify(this.perfil))
        Swal.fire({
          title: 'Error al autenticar',
          text: `Contraseña o Usuario incorrecto intente de nuevo`,
          icon: 'error',
         confirmButtonText: 'Aceptar'
        })

      }
    })
  }
}

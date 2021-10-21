import { Component, OnInit } from '@angular/core';
import { PalabraMod } from 'src/app/Shared/models/palabraMod';
import { PerfilMod } from 'src/app/Shared/models/perfilMod';
import { RegistroMod } from 'src/app/Shared/models/registroMod';
import { RestService } from 'src/app/Shared/services/rest.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit {
  aparecer:boolean=false;
  usuario:PerfilMod
 palabras:PalabraMod[] =[]
 palabrasAprendidas:PalabraMod[]
 arregloValidador:number[]

 registro:RegistroMod;

  constructor(private http:RestService, private route:Router) { }

  ngOnInit(): void {
    this.arregloValidador=[]
    this.usuario= JSON.parse(localStorage.getItem('perfil'))
 
     this.http.getPalabrasUsuarios(this.usuario.IdPerfil).subscribe(data=>{
       if(data.state==200){
         this.http.getPalabrasAprendidasUsuarios(this.usuario.IdPerfil).subscribe(result=>{
           if(result.state==200){
             this.palabrasAprendidas= result.data;
             console.log('Tamaño del areglo sin filtrar. ',data.data.length)
             data.data.forEach(element => {
                let palabra = this.palabrasAprendidas.filter(pal => pal.IdPalabra==element.IdPalabra)
                if(palabra.length==0){  
                  if(this.palabras.length<5){
                    console.log(element)
                    this.palabras.push(element)
                  }
                }else{
                  console.log('entro al else esta remetida',element)
                }
             });
           }else{
             this.palabras=data.data
           }
           console.log('Tamaño del areglo filtrado. ',this.palabras.length,this.palabras)
         })
       }
     })
  }

  img(img:string){
    return `assets/img/${img}`
  }

 
  evaluarPalabra(palabra1:string,palabra2:string,idPalabra:number,idGrupo){

    console.log('ENTRO AL METODO ',palabra1,palabra2,idPalabra,idGrupo,this.usuario.IdPerfil)
          if(palabra1.toUpperCase()==palabra2.toUpperCase()){
            this.registro = {
              Estado: true,
              IdPerfil: this.usuario.IdPerfil,
              IdGrupo: idGrupo,
              IdPalabra: idPalabra,
            }
            this.http.registerPalabra(this.registro).subscribe(data=>{
              if(data.state=200){
                Swal.fire({
                  title: 'Correcto',
                  text: `A acertado la palabra ${palabra2}`,
                  icon: 'success',
                 confirmButtonText: 'Aceptar'
                })
              }
            })
          }else{
            this.registro = {
              Estado: false,
              IdPerfil: this.usuario.IdPerfil,
              IdGrupo: idGrupo,
              IdPalabra: idPalabra,
            }
            this.http.registerPalabra(this.registro).subscribe(data=>{
              if(data.state=200){
                Swal.fire({
                  title: 'Incorrecto',
                  text: `La traduccion correcta de la palabra es ${palabra2}`,
                  icon: 'error',
                 confirmButtonText: 'Aceptar'
                  
                })
              }
            })
          }
  }
  mostrarTraduccion(){
    this.aparecer=true
  }

  siguiente(){
    this.aparecer=false
    this.arregloValidador.push(1)
    if(this.arregloValidador.length==5){
      this.route.navigate(['/leccion'])
    }
  }
  
  apareceBtn(){
    this.aparecer=true
  }

 

}

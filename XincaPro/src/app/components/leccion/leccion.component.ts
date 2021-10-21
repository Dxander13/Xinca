import { APP_BOOTSTRAP_LISTENER, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PalabraMod } from 'src/app/Shared/models/palabraMod';
import { PerfilMod } from 'src/app/Shared/models/perfilMod';
import { RestService } from 'src/app/Shared/services/rest.service';


@Component({
  selector: 'app-leccion',
  templateUrl: './leccion.component.html',
  styleUrls: ['./leccion.component.css']
})
export class LeccionComponent implements OnInit {
 aparecer:boolean=false;
 usuario:PerfilMod
palabras:PalabraMod[] =[]
palabrasAprendidas:PalabraMod[]
arregloValidador:number[]
  constructor(private http:RestService,private route:Router) { }

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
              console.log('Data ',data.data)
              let palabra=  this.palabrasAprendidas.filter(pal => pal.IdPalabra ==element.IdPalabra)
              if(palabra.length==0){
                    
                if(this.palabras.length<5){
                  console.log(element)    
                  this.palabras.push(element)
                }
              }
            });
          }else{
            this.palabras=data.data
          }
          console.log('Tamaño del areglo filtrado. ',this.palabras.length)
        })
      }
    })
    
  }

  img(img:string){
    return `assets/img/${img}`
  }
  mostrarTraduccion(){
    this.aparecer=true
  }

  siguiente(){
    this.aparecer=false
    this.arregloValidador.push(1)
    if(this.arregloValidador.length==5){
      this.route.navigate(['/evaluacion'])
    }
  }
  
  apareceBtn(){
    this.aparecer=true
  }

 
  
}

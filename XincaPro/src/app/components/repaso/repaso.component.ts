import { Component, OnInit } from '@angular/core';
import { PalabraMod } from 'src/app/Shared/models/palabraMod';
import { PerfilMod } from 'src/app/Shared/models/perfilMod';
import { RestService } from 'src/app/Shared/services/rest.service';

@Component({
  selector: 'app-repaso',
  templateUrl: './repaso.component.html',
  styleUrls: ['./repaso.component.css']
})
export class RepasoComponent implements OnInit {
  aparecer:boolean=false;
  palabrasAprendidas:PalabraMod[]=[]
  usuario:PerfilMod
  constructor(private http:RestService) { }

  ngOnInit(): void {
    this.usuario= JSON.parse(localStorage.getItem('perfil'))
    this.http.getPalabrasAprendidasUsuarios(this.usuario.IdPerfil).subscribe(data=>{
      if(data.state=200){
        console.log(data)
        this.palabrasAprendidas =data.data
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
  }
  
  apareceBtn(){
    this.aparecer=true
  }

}

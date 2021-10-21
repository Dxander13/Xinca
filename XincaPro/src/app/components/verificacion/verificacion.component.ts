import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.component.html',
  styleUrls: ['./verificacion.component.css']
})
export class VerificacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var intro = document.getElementById('progress1')
    intro.style.width= this.calcularProgreso(100,200)

    var prog2 = document.getElementById('progress2')
    prog2.style.width= this.calcularProgreso(75,200)

    var prog3 = document.getElementById('progress3')
    prog3.style.width= this.calcularProgreso(75,200)

    var prog4 = document.getElementById('progress4')
    prog4.style.width= this.calcularProgreso(150,200)

    var prog5 = document.getElementById('progress5')
    prog5.style.width= this.calcularProgreso(50,200)

    var prog6 = document.getElementById('progress6')
    prog6.style.width= this.calcularProgreso(125,200)

    var prog7 = document.getElementById('progress7')
    prog7.style.width= this.calcularProgreso(190,200)





  }

  calcularProgreso(aprendidas:number, total:number){
  let porcentaje= (aprendidas*100)/total     
     return porcentaje+"%";
   }

}

import { Component, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cabezera',
  styleUrl: './cabezera.components.css',
  templateUrl: './cabezera.components.html',
})
export class CabezeraComponents implements OnInit{




  horas: number;
  minutos: number;
  color: string;
  constructor(){
    this.horas = 23;
    this.minutos = 59;
    this.color = "azul";
  }
  

  ngOnInit(): void{


  }
}

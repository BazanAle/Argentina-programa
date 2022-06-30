
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/data/persona';

import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent implements OnInit {
 miPortfolio:any;
 primeraExperiencia:any;
 primeraEducacion:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerPersona().subscribe(data=>{
     
      this.miPortfolio=data[0];
      console.log(this.miPortfolio);
    });
    this.datosPortfolio.obtenerEducacion().subscribe(data=>{
      this.primeraEducacion=data.reverse()[0];
      console.log(this.primeraEducacion)
    });
    this.datosPortfolio.obtenerExperiencia().subscribe(data=>{
      this.primeraExperiencia=data.reverse()[0];
      console.log(this.primeraExperiencia)
    })
  }
  
}

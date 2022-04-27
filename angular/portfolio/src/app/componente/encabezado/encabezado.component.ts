import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
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
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.miPortfolio=data;
      this.primeraExperiencia=data.experience[0];
      this.primeraEducacion=data.education[0];
    });
  }
  
}

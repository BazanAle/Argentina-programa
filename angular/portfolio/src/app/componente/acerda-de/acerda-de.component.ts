import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerda-de.component.html',
  styleUrls: ['./acerda-de.component.css']
})
export class AcerdaDeComponent implements OnInit {
  infoPortfolio:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerPersona().subscribe(data=>{
      this.infoPortfolio=data[0];
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Educacion } from 'src/app/data/educacion';
import { Experiencia } from 'src/app/data/experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
educacionList: Educacion[] = [];
experienciaList:Experiencia[]=[];
primerExperiencia:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerEducacion().subscribe(data=>{
      this.educacionList=data;
      console.log(this.educacionList)
     
    });
    this.datosPortfolio.obtenerExperiencia().subscribe(data=>{
      console.log(data);
      this.experienciaList=data;
      this.primerExperiencia=data[0];
    });
    
  }


}

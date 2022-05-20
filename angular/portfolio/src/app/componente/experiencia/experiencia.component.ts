import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Educacion } from 'src/app/data/educacion';
import { Experiencia } from 'src/app/data/experiencia';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
educacionList: Educacion[] = [];
experienciaList:Experiencia[]=[];
primerExperiencia:any;
educationForm : FormGroup;
  constructor(private datosPortfolio:PortfolioService, private formBuilder:FormBuilder) {
    this.educationForm=this.formBuilder.group({
      id:[''],
      school:['', Validators.required],
      title:['', Validators.required],
      score:['',Validators.required],
      img:['', Validators.required],
      carrer:['', Validators.required],
      start:['', Validators.required],
      end:['',Validators.required]

    })
   }

  ngOnInit(): void {
    this.datosPortfolio.obtenerEducacion().subscribe(data=>{
      this.educacionList=data.reverse();
      console.log(this.educacionList);
     
    });
    this.datosPortfolio.obtenerExperiencia().subscribe(data=>{
      console.log(data);
      this.experienciaList=data;
      this.primerExperiencia=data.reverse()[0];
    });
    
  }
  onSubmit(){
    console.log(this.educationForm.value);
  }

}

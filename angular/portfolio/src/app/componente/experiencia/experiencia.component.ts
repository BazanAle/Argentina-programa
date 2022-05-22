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
      career:['', Validators.required],
      start:['', Validators.required],
      end:['',Validators.required]

    })
   }

  ngOnInit(): void {
    this.reloadData();
    this.datosPortfolio.obtenerExperiencia().subscribe((data)=>{
      console.log(data);
      this.experienciaList=data;
      this.primerExperiencia=data.reverse()[0];
    });
      

  }
  private reloadData(){
    this.datosPortfolio.obtenerEducacion().subscribe((data)=>{
      this.educacionList=data.reverse();
      console.log(this.educacionList);
     
    });
  }
  private cleanForm(){
    this.educationForm.setValue({
      id:'',
      school:[''],
      title:[''],
      score:0 ,
      img:[''],
      career:[''],
      start:[''],
      end:['']
    })
  }
  private loadForm(educacion:Educacion){
    this.educationForm.setValue({
      id:educacion.id,
      school:educacion.school,
      title:educacion.title,
      score:educacion.score,
      img:educacion.img,
      career:educacion.career,
      start:educacion.start,
      end:educacion.end
    })
  }
  refresh(): void { window.location.reload(); }

  onSubmit(){
    let educacion: Educacion = this.educationForm.value;

    if(this.educationForm.get('id')?.value ==''){
    this.datosPortfolio.guardarNuevaEducacion(educacion).subscribe(
      (newEducation: Educacion)=>{
        console.log(newEducation);
        this.educacionList.unshift(newEducation);
      }
    );
  } else {
    this.datosPortfolio.modificarEducacion(educacion).subscribe(
      ()=>{
        this.reloadData();
      }
    )
  };
  }
  limpiarForm(){
    this.cleanForm();
  }
  onEditEducation(index:number){
    console.log(index);
    let educacion:Educacion = this.educacionList[index];
    console.log(educacion);
    this.loadForm(educacion);
  }
  onDeleteEducation(index:number){
    let educacion:Educacion = this.educacionList[index];
    if(confirm("Esta seguro de borrar esta educacion???")){
      this.datosPortfolio.borrarEducacion(educacion.id).subscribe(
        ()=>{
          this.reloadData(); 
        }
      )
    }
  }

}

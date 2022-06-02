import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Educacion } from 'src/app/data/educacion';
import { Experiencia } from 'src/app/data/experiencia';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacionList: Educacion[] = [];
  isUserLogged: Boolean = false;
  educationForm : FormGroup;

    constructor(private datosPortfolio:PortfolioService, private formBuilder:FormBuilder, private authService:AuthService) {
      this.educationForm=this.formBuilder.group({
        id:[''],
        school:['', Validators.required],
        title:['', Validators.required],
        score:['',Validators.required],
        img:['', Validators.required],
        career:['', Validators.required],
        start:['', Validators.required],
        end:['',Validators.required]
  
      });
     }
  
    ngOnInit(): void {
      this.reloadData();
      this.isUserLogged = this.authService.isUserLogged();
    }
  
  
    // Funciones de Seccion Educacion
    private reloadData(){
      console.log(this.datosPortfolio)
      this.datosPortfolio.obtenerEducacion().subscribe((data)=>{
        this.educacionList=data.reverse();
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
  
    onSubmitEducacion(){
      let educacion: Educacion = this.educationForm.value;
  
      if(this.educationForm.get('id')?.value ==''){
      this.datosPortfolio.guardarNuevaEducacion(educacion).subscribe(
        (newEducation: Educacion)=>{
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
  
import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Educacion } from 'src/app/data/educacion';
import { Experiencia } from 'src/app/data/experiencia';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
educacionList: Educacion[] = [];
experienciaList:Experiencia[]=[];
isUserLogged: Boolean = false;
educationForm : FormGroup;
experienciaForm:FormGroup;
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
    this.experienciaForm=this.formBuilder.group({
      id:[''],
      nombre_empresa:['',Validators.required],
      fecha_inicio:['', Validators.required],
      fecha_fin:['', Validators.required],
      descripcion:['',Validators.required],
      puesto:['', Validators.required],
      lugar:['', Validators.required],
      modalidad:['',Validators.required],
      url_logo:['', Validators.required]

    })
   }

  ngOnInit(): void {
    this.reloadData();
    this.isUserLogged = this.authService.isUserLogged();
    this.datosPortfolio.obtenerExperiencia().subscribe((data)=>{
      this.experienciaList=data.reverse();
    }); 
  }


  // Funciones de Seccion Educacion
  private reloadData(){
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

  //Funciones Seccion Experiencia
onSubmitExperiencia(){
  let experiencia:Experiencia = this.experienciaForm.value;
  if(this.educationForm.get('id')?.value ==''){
  this.datosPortfolio.guardarNuevaExperiencia(experiencia).subscribe(
    (nuevaExperiencia:Experiencia)=>{
      this.experienciaList.unshift(nuevaExperiencia);
    }
  )
}else{
  this.datosPortfolio.modificarExperiencia(experiencia).subscribe(
    ()=>{
      this.reloadDataExperiencia();
    }
  )
}
}

private cleanExperienciaForm(){
  this.experienciaForm.setValue({
    id:'',
    nombre_empresa:[''],
    fecha_inicio:[''],
    fecha_fin:[''],
    descripcion:[''],
    puesto:[''],
    lugar:[''],
    modalidad:[''],
    url_logo:['']
  });
}
private loadExperienciaForm(experiencia:Experiencia){
  this.experienciaForm.setValue({
    id:experiencia.id,
    nombre_empresa:experiencia.nombre_empresa,
    fecha_inicio:experiencia.fecha_inicio,
    fecha_fin:experiencia.fecha_fin,
    descripcion:experiencia.descripcion,
    puesto:experiencia.puesto,
    lugar:experiencia.lugar,
    modalidad:experiencia.modalidad,
    url_logo:experiencia.url_logo
  })
}
private reloadDataExperiencia(){
  this.datosPortfolio.obtenerExperiencia().subscribe((data)=>{
      this.experienciaList=data.reverse();
    });
}
 limpiarFormExperiencia(){
   this.cleanExperienciaForm();
 }
 onEditExperiencia(index:number){
  let experiencia = this.experienciaList[index];
  this.loadExperienciaForm(experiencia);
 }
 onDeleteExperiencia(index:number){
   let experiencia = this.experienciaList[index];
   if(confirm("Esta seguro de eliminar esta experiencia??")){
     this.datosPortfolio.borrarExperiencia(experiencia.id).subscribe(
       ()=>{
         this.reloadDataExperiencia();
       }
     )
   }
 }
}

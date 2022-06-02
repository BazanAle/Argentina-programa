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

experienciaList:Experiencia[]=[];
isUserLogged: Boolean = false;

experienciaForm:FormGroup;
  constructor(private datosPortfolio:PortfolioService, private formBuilder:FormBuilder, private authService:AuthService) {
  
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
   
    this.isUserLogged = this.authService.isUserLogged();
    this.datosPortfolio.obtenerExperiencia().subscribe((data)=>{
      this.experienciaList=data.reverse();
    }); 
  }
  
  refresh(): void { window.location.reload(); }

  

  //Funciones Seccion Experiencia
  private reloadDataExperiencia(){
    this.datosPortfolio.obtenerExperiencia().subscribe((data)=>{
        this.experienciaList=data.reverse();
      });
  }
onSubmitExperiencia(){
  let experiencia:Experiencia = this.experienciaForm.value;
  if(this.experienciaForm.get('id')?.value ==''){
  this.datosPortfolio.guardarNuevaExperiencia(experiencia).subscribe(
    (nuevaExperiencia:Experiencia)=>{
     
      this.experienciaList.unshift(nuevaExperiencia);
      this.reloadDataExperiencia();
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

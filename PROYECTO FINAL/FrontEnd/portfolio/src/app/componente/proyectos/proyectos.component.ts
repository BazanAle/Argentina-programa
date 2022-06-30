import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { Proyecto } from 'src/app/data/proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectoList: Proyecto []=[];
  proyectoForm : FormGroup;
  isUserLogged: Boolean = false;
  constructor(private datosPortfolio:PortfolioService, private formBuilder:FormBuilder, private authService:AuthService) {
    this.proyectoForm =this.formBuilder.group({
      id:[''],
      title:['',Validators.required],
      descripcion:['', Validators.required],
      score:[5, Validators.required],
      fecha:['',Validators.required]

    })
   }

  ngOnInit(): void {
    this.reloadData();
    this.isUserLogged = this.authService.isUserLogged();
    this.datosPortfolio.obtenerProyecto().subscribe((data)=>{
      this.proyectoList=data.reverse();
      
    }); 
  }
  
  private reloadData(){
    this.datosPortfolio.obtenerProyecto().subscribe((data)=>{
      this.proyectoList=data.reverse();
    });
  }
  private cleanForm(){
    this.proyectoForm.setValue({
      id:'',
      title:[''],
      descripcion:[''],
      score:5,
      fecha:['']
    })
  }
  private loadFormProyecto(proyecto:Proyecto){
    this.proyectoForm.setValue({
      id:proyecto.id,
      title:proyecto.title,
      descripcion:proyecto.descripcion,
      score:proyecto.score,
      fecha:proyecto.fecha
    })
  }
 

  onSubmitProyecto(){
    console.log(this.proyectoForm.value);
    let proyecto: Proyecto = this.proyectoForm.value;
    console.log(proyecto);
    if(this.proyectoForm.get('id')?.value ==''){
    this.datosPortfolio.guardarNuevoProyecto(proyecto).subscribe(
      (newProyecto: Proyecto)=>{
        console.log(newProyecto);
        this.proyectoList.unshift(newProyecto);
      }
    );
  } else {
    this.datosPortfolio.modificarProyecto(proyecto).subscribe(
      ()=>{
        this.reloadData();
      }
    )
  };
  }
  refresh(): void { window.location.reload(); }
  limpiarFormProyecto(){
    this.cleanForm();
  }

  onEditProyecto(index:number){
    console.log(index);
    let proyecto:Proyecto = this.proyectoList[index];
    
    this.loadFormProyecto(proyecto);
  }
  onDeleteProyecto(index:number){
    let proyecto:Proyecto = this.proyectoList[index];
    if(confirm("Esta seguro de borrar este proyecto???")){
      this.datosPortfolio.borrarProyecto(proyecto.id).subscribe(
        ()=>{
          this.reloadData(); 
        }
      )
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { Persona } from 'src/app/data/persona';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerda-de.component.html',
  styleUrls: ['./acerda-de.component.css']
})
export class AcerdaDeComponent implements OnInit {
  
  personaList: Persona []=[];
  personaForm : FormGroup;
  isUserLogged: Boolean = false;
  constructor(private datosPortfolio:PortfolioService, private formBuilder:FormBuilder, private authService:AuthService) {
    this.personaForm =this.formBuilder.group({
      id:[''],
      nombre:[''],
      apellido:[''],
      domicilio:[''],
      fecha_nac:[''],
      telefono:[''],
      email: [''],
      sobre_mi:[''],
      url_foto: [''] 
     

    })
   }

  ngOnInit(): void {
    this.reloadData();
    this.isUserLogged = this.authService.isUserLogged();
    this.datosPortfolio.obtenerPersona().subscribe((data)=>{
      this.personaList=data.reverse();
      
    }); 
  }
  
  private reloadData(){
    this.datosPortfolio.obtenerPersona().subscribe((data)=>{
      this.personaList=data.reverse();
    });
  }

  private loadFormPersona(persona:Persona){
    this.personaForm.setValue({
      id:persona.id,
      nombre:persona.nombre,
      apellido:persona.apellido,
      domicilio: persona.domicilio,
      fecha_nac:persona.fecha_nac,
      telefono:persona.telefono,
      email: persona.email,
      sobre_mi:persona.sobre_mi,
      url_foto: persona.url_foto
    })
  }
 

  onSubmitPersona(){
    let persona:Persona = this.personaForm.value;
    if(this.personaForm.get('id')?.value !==''){
    console.log('quiere modificar');
    this.datosPortfolio.modificarPersona(persona).subscribe(
      ()=>{
        this.reloadData();
      }
    )
  }
}
 
  refresh(): void { window.location.reload(); }

  onEditPersona(){    
    let persona:Persona = this.personaList[0];
    
    this.loadFormPersona(persona);
  }


}


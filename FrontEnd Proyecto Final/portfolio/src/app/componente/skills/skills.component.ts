import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { Skill } from 'src/app/data/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillList: Skill []=[];
  skillForm : FormGroup;
  isUserLogged: Boolean = false;
  constructor(private datosPortfolio:PortfolioService, private formBuilder:FormBuilder, private authService:AuthService) {
    this.skillForm =this.formBuilder.group({
      id:[''],
      aptitud:['',Validators.required],
      progress:['', Validators.required]
    })
   }

  ngOnInit(): void {
    this.reloadData();
    this.isUserLogged = this.authService.isUserLogged();
    this.datosPortfolio.obtenerSkill().subscribe((data)=>{
      this.skillList=data.reverse();
      
    }); 
  }
  
  private reloadData(){
    this.datosPortfolio.obtenerSkill().subscribe((data)=>{
      this.skillList=data.reverse();
    });
  }
  private cleanForm(){
    this.skillForm.setValue({
      id:'',
      aptitud:[''],
      progress:['']
    })
  }
  private loadFormSkill(skill:Skill){
    this.skillForm.setValue({
      id:skill.id,
      aptitud:skill.aptitud,
      progress:skill.progress
    })
  }
 

  onSubmitSkill(){
    
    let skill: Skill = this.skillForm.value;
   console.log(skill);
    if(this.skillForm.get('id')?.value ==''){
    this.datosPortfolio.guardarNuevoSkill(skill).subscribe(
      (newSkill: Skill)=>{
       console.log(newSkill);
        this.skillList.unshift(newSkill);
      }
    );
  } else {
   this.datosPortfolio.modificarSkill(skill).subscribe(
      ()=>{
        this.reloadData();
      }
    )
  };
  }
  refresh(): void { window.location.reload(); }
  limpiarFormSkill(){
    this.cleanForm();
  }

  onEditSkill(index:number){
    
    let skill:Skill = this.skillList[index];
    
    this.loadFormSkill(skill);
  }
  onDeleteSkill(index:number){
    let skill:Skill = this.skillList[index];
    if(confirm("Esta seguro de borrar este Skill???")){
      this.datosPortfolio.borrarSkill(skill.id).subscribe(
        ()=>{
          this.reloadData(); 
        }
      )
    }
  }

}


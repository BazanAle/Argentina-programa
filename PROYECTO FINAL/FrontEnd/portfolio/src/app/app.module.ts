import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componente/encabezado/encabezado.component';
import { AcerdaDeComponent } from './componente/acerda-de/acerda-de.component';
import { ExperienciaComponent } from './componente/experiencia/experiencia.component';
import { SkillsComponent } from './componente/skills/skills.component';
import { ProyectosComponent } from './componente/proyectos/proyectos.component';
import { PortfolioService } from './servicios/portfolio.service';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './componente/auth/login/login.component';
import { PortfolioComponent } from './componente/portfolio/portfolio.component';
import { NavbarComponent } from './componente/navbar/navbar.component';
import { EducacionComponent } from './componente/educacion/educacion.component';




@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcerdaDeComponent,
    SkillsComponent,
    ProyectosComponent,
    ExperienciaComponent,
    LoginComponent,
    PortfolioComponent,
    NavbarComponent,
    EducacionComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

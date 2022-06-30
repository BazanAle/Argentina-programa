import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componente/auth/login/login.component';

import { PortfolioComponent } from './componente/portfolio/portfolio.component';

const routes: Routes = [
  {path: 'home', component: PortfolioComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  constructor( private formBuilder:FormBuilder, private authService:AuthService, private ruta:Router ) {
    this.form=this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]]
      }
    )
   }

  ngOnInit(): void {
  }

  get Email()
  {
    return this.form.get('email');
  }
  get Password()
  {
    return this.form.get('password');
  }
  onEnviar(event:Event){
    event.preventDefault;
    console.log(this.form.value);
    //this.authService.IniciarSesion(this.form.value).subscribe(data=>{
      //console.log("DATA: "+ JSON.stringify(data));
      //this.ruta.navigate(['/home']);
   
   // })
  }
}

/*import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //usuario: string = "";
  //password: string = "";

  form: FormGroup;
  loginError: Boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
    ) {
      this.form = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
     }

  ngOnInit(): void {
  }

  onSubmit(event: Event) {
    event.preventDefault;
    
    this.authService.login(this.form.value).subscribe(
      (response: Boolean) => {
        if (response)
          this.router.navigate(['/home']);
        else
        this.loginError = true;
      }
    );
      
  }

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }
}
*/
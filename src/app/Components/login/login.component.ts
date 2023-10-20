import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Login } from 'src/app/Models/login';
import { LoginService } from 'src/app/Services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userFormGroup!: FormGroup;
  constructor(private formBulider: FormBuilder,
    private loginservice: LoginService,
    private cookieService: CookieService,
    private router: Router
  ) {

    this.userFormGroup = this.formBulider.group({
      // login in
      Emaillogin: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{4,15}@(gmail|yahoo)(.com)')]],
      Passwordlogin: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9](?=.*?[#?!@$%^&*-])(?=.*?[0-9]).{7,}")]],
    });

  }
  get EmailLogin() {
    return this.userFormGroup.get('Emaillogin');
  }
  get PassLogin() {
    return this.userFormGroup.get('Passwordlogin');
  }
  UserEmail!: string;
  invalidUser: boolean = false;
  LogIn(email: string, pass: string) {
    this.loginservice.logIn(email, pass).subscribe(
      {
        next: (data) => {
          this.cookieService.set("token", data.token);
          this.router.navigate(['Product']);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.message);
}
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  loginForm = new FormGroup(
    {
      email: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    }
    // {validator: MustMatch('password', 'repeatPassword')}
  );
  get f() {
    return this.loginForm.controls;
  }
  handleForgot(){
    this.router.navigate(['forget-password'])
  }
  onSubmit(){
    alert('hello')
  }
}

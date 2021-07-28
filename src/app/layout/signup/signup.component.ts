import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }
  handleLogin(){
   this.router.navigate(['login'])
  }
  onSubmit(event:any){
    debugger
    alert('hello')
console.log(this.signupForm.value)
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailSentComponent } from './email-sent/email-sent.component';
import { ForgetPasswordComponent } from './layout/forget-password/forget-password.component';
import { LoginComponent } from './layout/login/login.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { ResetPasswordComponent } from './layout/reset-password/reset-password.component';
import { SignupComponent } from './layout/signup/signup.component';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'signup',component: SignupComponent},
  {path:'forget-password',component: ForgetPasswordComponent},
  {path:'reset-password',component: ResetPasswordComponent},
  {path:'email-sent',component: EmailSentComponent},
  { path: '',   redirectTo: '/signup', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

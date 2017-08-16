import {Routes} from "@angular/router";
import {RecoverComponent} from "./recover/recover.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";

export const authRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'recover',
    component: RecoverComponent
  }
];

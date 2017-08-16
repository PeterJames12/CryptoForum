import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {LoginComponent, SignupComponent, RecoverComponent} from "./barrel";
import {authRoutes} from "./authentication.routes";
import {HttpModule} from "@angular/http";
import {FormTemplateModule} from "../../shared/form-template/form-template.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    FormTemplateModule,
    RouterModule.forChild(authRoutes)
  ],
  declarations: [
    LoginComponent,
    RecoverComponent,
    SignupComponent
  ]
})
export class AuthenticationModule {
}
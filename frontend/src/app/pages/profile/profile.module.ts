import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {ProfileComponent} from "./profile.component";
import {GravatarModule} from "../../shared/gravatar/gravatar.module";

const routes: Routes = [
  {path: '', component: ProfileComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    GravatarModule,
  ],
  declarations: [
    ProfileComponent
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule {
}

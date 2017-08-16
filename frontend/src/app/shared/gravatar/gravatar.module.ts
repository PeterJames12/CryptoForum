import {NgModule} from "@angular/core";
import {GravatarComponent} from "./gravatar.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GravatarComponent
  ],
  exports: [
    GravatarComponent
  ]
})
export class GravatarModule {
}

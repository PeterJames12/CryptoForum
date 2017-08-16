import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormTemplateComponent} from "./form-template.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormTemplateComponent
  ],
  exports: [
    FormTemplateComponent
  ]
})
export class FormTemplateModule {
}

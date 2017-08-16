import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DateParseComponent} from "./date-parse.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DateParseComponent
  ],
  exports: [
    DateParseComponent
  ]
})
export class DateParseModule {
}

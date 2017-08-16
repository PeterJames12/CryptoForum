import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {AdminComponent} from "./admin/admin.component";
import {homeRoutes} from "./home.routes";
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";
import {Ng2GoogleChartsModule} from "ng2-google-charts";
import {FormTemplateModule} from "../../shared/form-template/form-template.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    ReactiveFormsModule,
    Ng2Bs3ModalModule,
    Ng2GoogleChartsModule,
    FormTemplateModule,
    FormsModule,
  ],
  declarations: [
    AdminComponent,
  ],
  exports: [
    AdminComponent,
  ]
})
export class HomeModule {
}

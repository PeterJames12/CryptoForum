import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AddUserComponent} from "./all/user-add/add-user.component";
import {UserTableComponent} from "./all/user-table.component";
import {DeleteUserComponent} from "./all/user-delete/delete-user.component";
import {FormTemplateModule} from "../../shared/form-template/form-template.module";
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";
import {UserFilterPipe} from "../../pipes/user-filter.pipe";
import {UserSortPipe} from "../../pipes/user-sort.pipe";
import {DateParseModule} from "../../util/date-parser/date-parse.module";
import {usersTableRoutes} from "./user-table.routes";
import {PaginationModule} from "ng2-bootstrap";


const routes: Routes = [
  {path: '', component: UserTableComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(usersTableRoutes),
    FormTemplateModule,
    Ng2Bs3ModalModule,
    ReactiveFormsModule,
    FormsModule,
    DateParseModule,
    PaginationModule.forRoot()
  ],
  declarations: [
    UserTableComponent,
    AddUserComponent,
    DeleteUserComponent,
  ],
  exports: [
    UserTableComponent,
    AddUserComponent,
    DeleteUserComponent,
  ],
  providers: []
})
export class UserTableModule {}

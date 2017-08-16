import {Routes} from "@angular/router";
import {UserPageGuard} from "../../service/guard/user-page.guard";
import {UserTableComponent} from "./all/user-table.component";
import {PublicPageGuard} from "../../service/quard/public-page.guard";
import {PrivatePageGuard} from "../../service/quard/private-page.guard";

export const usersTableRoutes: Routes = [
  {
    path: '',
    component: UserTableComponent,
    canActivate: [PrivatePageGuard]
  },
  {
    path: 'all',
    component: UserTableComponent,
  },
];

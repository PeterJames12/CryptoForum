import {Routes} from "@angular/router";
import {AdminPageGuard} from "../../service/quard/admin-page.guard";
import {AdminComponent} from "./admin/admin.component";

export const homeRoutes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  // {
  //   path: 'user',
  //   loadChildren: './user/user.module#UserModule',
  //   canActivate: [UserPageGuard]
  // },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminPageGuard]
  }
];

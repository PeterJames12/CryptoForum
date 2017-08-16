import { AdminPageGuard } from "../../service/quard/admin-page.guard";
import { AdminComponent } from "./admin/admin.component";
export var homeRoutes = [
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
//# sourceMappingURL=/Users/peterjames/workspace/Forum/frontend/src/src/app/pages/home/home.routes.js.map
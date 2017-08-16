import { AdminComponent } from "./admin/admin.component";
import { AdminPageGuard } from "../../service/guard/admin-page.guard";
import { UserPageGuard } from "../../service/guard/user-page.guard";
import { ManagerPageGuard } from "../../service/guard/manager-page.guard";
import { ManagerComponent } from "./manager/manager.component";
export var homeRoutes = [
    {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
    },
    {
        path: 'user',
        loadChildren: './user/user.module#UserModule',
        canActivate: [UserPageGuard]
    },
    {
        path: 'manager/free',
        component: ManagerComponent,
        canActivate: [ManagerPageGuard]
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AdminPageGuard]
    }
];
//# sourceMappingURL=/Users/peterjames/workspace/Forum/frontend/src/src/app/home/home.routes.js.map
import { NoContentComponent } from "./components/barrel";
import { PublicPageGuard } from "./service/quard/public-page.guard";
import { PrivatePageGuard } from "./service/quard/private-page.guard";
export var appRoutes = [
    {
        path: '',
        redirectTo: 'authentication',
        pathMatch: 'full'
    },
    // Available for unregistered user
    {
        path: 'authentication',
        loadChildren: './pages/authentication/authentication.module#AuthenticationModule',
        canActivate: [PublicPageGuard]
    },
    // Available for registered user
    {
        path: 'home',
        loadChildren: './pages/home/home.module#HomeModule',
        canActivate: [PrivatePageGuard]
    },
    {
        path: 'profile',
        loadChildren: './pages/profile/profile.module#ProfileModule',
        canActivate: [PrivatePageGuard]
    },
    {
        path: '**',
        component: NoContentComponent
    }
];
//# sourceMappingURL=/Users/peterjames/workspace/Forum/frontend/src/src/app/app.routes.js.map
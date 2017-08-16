import { RecoverComponent } from "./recover/recover.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
export var authRoutes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'recover',
        component: RecoverComponent
    }
];
//# sourceMappingURL=/Users/peterjames/workspace/Forum/frontend/src/src/app/pages/authentication/authentication.routes.js.map
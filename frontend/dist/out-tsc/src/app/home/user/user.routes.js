import { ActiveRequest } from "./userRequests/active-request.component";
import { UserPageGuard } from "../../../service/guard/user-page.guard";
import { ClosedRequest } from "./userClosedRequests/closed-request.component";
export var userRouts = [
    {
        path: '',
        component: ActiveRequest,
        canActivate: [UserPageGuard]
    },
    {
        path: 'active',
        component: ActiveRequest,
    },
    {
        path: 'closed',
        component: ClosedRequest,
    },
];
//# sourceMappingURL=/Users/peterjames/workspace/Forum/frontend/src/src/app/home/user/user.routes.js.map
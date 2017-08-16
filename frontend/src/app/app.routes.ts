import {Routes} from "@angular/router";
import {NoContentComponent} from "./components/barrel";
import {PublicPageGuard} from "./service/quard/public-page.guard";
import {PrivatePageGuard} from "./service/quard/private-page.guard";

export const appRoutes: Routes = [
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
    loadChildren: './pages/forum/forum.module#ForumModule',
    canActivate: [PrivatePageGuard]
  },
  {
    path: 'profile',
    loadChildren: './pages/profile/profile.module#ProfileModule',
    canActivate: [PrivatePageGuard]
  },
  {
    path: 'comments',
    loadChildren: './pages/comment/comment.module#CommentModule',
    canActivate: [PublicPageGuard]
  },
  {
    path: 'users',
    loadChildren: './pages/user-table/user-table.module#UserTableModule',
    canActivate: [PrivatePageGuard]
  },
  {
    path: 'forum',
    loadChildren: './pages/forum/forum.module#ForumModule',
    canActivate: [PrivatePageGuard]
  },
  {
    path: '**',
    component: NoContentComponent
  }
];

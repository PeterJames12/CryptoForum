import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Injectable()
export class UserPageGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) {
  }

  canActivate(): boolean {
    if (this.authService.role !== 'employee') {
      if (this.authService.role === 'office manager') {
        this.router.navigate(['/home/manager/free']);
      } else if (this.authService.role === 'admin') {
        this.router.navigate(['/home/admin']);
      }
    }
    return this.authService.role === 'employee';
  }

}

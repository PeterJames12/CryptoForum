import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Injectable()
export class AdminPageGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) {
  }

  canActivate(): boolean {
    if (this.authService.role !== 'admin') {
      this.router.navigate(['/home']);
    }
    return this.authService.role === 'admin';
  }

}
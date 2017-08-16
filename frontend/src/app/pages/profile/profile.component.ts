import {Component, OnInit} from "@angular/core";
import {ToastsManager} from "ng2-toastr";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "ng2-validation";
import {UserService} from "../../service/user.service";
import {AuthService} from "../../service/auth.service";
import {User} from "../../model/user.model";
import {CacheService} from "ionic-cache";
import {RequestService} from "../../service/request.service";

@Component({
  selector: 'overseer-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  user: User;
  showPass: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private authService: AuthService,
              private router: Router,
              private cach: CacheService,
              private toastr: ToastsManager) {
  }

  ngOnInit(): void {
    this.authService.currentUser.subscribe((user: User) => {
      this.user = user;
    });
    this.initForm();
  }

  hasUpdate() {
    if (this.user.password == null) {
      this.toastr.error('Firstly enter ur password to update profile', 'Wrong');
      return;
    }

    this.authService.login(this.user.email, this.user.password).subscribe(() => {
      this.update();
    }, e => this.toastr.error('Wrong', 'Password is not correct'));
  }

  update(): void {
    this.userService.update(this.user).subscribe(() => {
        this.toastr.success('Your profile has been updated');
        this.cach.clearAll();
      }, e => this.toastr.error(" Can't update", 'Wrong')
    );
  }

  updatePass(oldPass, newPass, confirmPass): void {

    if (newPass != confirmPass) {
      this.toastr.error('New and confirm passwords do not match');
      return;
    }

    this.authService.login(this.user.email, oldPass).subscribe(() => {
      this.user.password = newPass;
      this.update();
    }, e => this.toastr.warning('Old password is incorrect', 'Wrong'));
  }

  validateField(field: string): boolean {
    return this.profileForm.get(field).valid || !this.profileForm.get(field).dirty;
  }

  private initForm(): void {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      secondName: '',
      email: ['', [Validators.required, CustomValidators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dateOfBirth: ['', CustomValidators.dateISO],
      phoneNumber: ['',],
      oldPassword: ['', [Validators.required, Validators.minLength(6)]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  showPassword(){
    this.showPass = !this.showPass;
  }
}

import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastsManager} from "ng2-toastr";
import {CustomValidators} from "ng2-validation";
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'forum-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private toastr: ToastsManager) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, CustomValidators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(formValues) {
    this.authService.login(formValues.email, formValues.password)
      .subscribe(() => {
        this.toastr.success("Logged In successfully", "Success!");
        this.router.navigate(['/home']);
      }, e => this.handleError(e));
  }

  validateField(field: string): boolean {
    return this.loginForm.get(field).valid || !this.loginForm.get(field).dirty;
  }

  handleError(error) {
    switch (error.status) {
      case 409:
        this.toastr.error('Email or password is wrong.', "Error!");
      case 401:
        this.toastr.error('Email or password is wrong.', "Error!");
    }
  }
}

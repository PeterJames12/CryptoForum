import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ToastsManager} from "ng2-toastr";
import {CustomValidators} from "ng2-validation";
import {Router} from "@angular/router";
import {RecoverService} from "../../../service/recover.service";

@Component({
  selector: 'forum-recover',
  templateUrl: 'recover.component.html'
})
export class RecoverComponent implements OnInit {
  recoverForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private recoverService: RecoverService,
              private toastr: ToastsManager,
              private router: Router,) {
  }

  ngOnInit() {
    this.recoverForm = this.formBuilder.group({
      email: ['', [Validators.required, CustomValidators.email]]
    })
  }

  recover(email) {
    this.recoverService.sendRecoverInfo(email)
      .subscribe(() => {
        this.toastr.success("Please check your email inbox", "Success!");
        this.router.navigate(['/authentication/login']);
      }, e => {
        this.handleError(e);
      });
  }

  validateField(field: string): boolean {
    return this.recoverForm.get(field).valid || !this.recoverForm.get(field).dirty;
  }

  handleError(error) {
    switch (error.status) {
      case 500:
        this.toastr.error("Email address is not found", "Error!");
    }
  }
}

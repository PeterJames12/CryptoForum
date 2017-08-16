import {Component, ViewChild, OnInit, EventEmitter, Output, Input} from "@angular/core";
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {CustomValidators} from "ng2-validation";
import {ToastsManager} from "ng2-toastr";
import {Response} from "@angular/http";
import {Role} from "../../../../model/role.model";
import {User} from "../../../../model/user.model";
import {UserService} from "../../../../service/user.service";

@Component({
  selector: 'add-user',
  templateUrl: 'add-user.component.html'
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;
  roles: Role[];

  @Input()
  users: User[];
  @Output()
  updated: EventEmitter<any> = new EventEmitter();

  @ViewChild('addUserFormModal')
  modal: ModalComponent;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private toastr: ToastsManager) {
  }

  ngOnInit() {
    // this.roleService.getAll().subscribe((roles: Role[]) => {
    //   this.roles = roles;
    // });
    this.initForm();
  }

  addUser(newUser) {
    this.userService.create(newUser).subscribe((resp: Response) => {
      this.updateArray(<User> resp.json());
      this.modal.close();
      this.toastr.success("User was created successfully", "Success!");
    }, e => this.handleErrorCreateUser(e));
  }

  private updateArray(user: User): void {
    this.users.unshift(user);
    this.updated.emit(this.users);
  }

  closeModal() {
    this.addUserForm.reset();
  }

  validateField(field: string): boolean {
    return this.addUserForm.get(field).valid || !this.addUserForm.get(field).dirty;
  }

  private initForm(): void {
    this.addUserForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      secondName: '',
      email: ['', [Validators.required, CustomValidators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // Add validator for confirm passwords
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      dateOfBirth: ['', CustomValidators.dateISO],
      phoneNumber: ['', CustomValidators.phone()],
      role: ['', Validators.required]
    });
  }

  private handleErrorCreateUser(error) {
    switch (error.status) {
      case 500:
        this.toastr.error("Can't create user", 'Error');
    }
  }
}

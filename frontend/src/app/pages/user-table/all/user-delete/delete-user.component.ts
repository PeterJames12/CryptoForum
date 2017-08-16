import {Component, ViewChild, Input, Output, EventEmitter} from "@angular/core";
import {ToastsManager} from "ng2-toastr";
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {User} from "../../../../model/user.model";
import {UserService} from "../../../../service/user.service";

@Component({
  selector: 'delete-user',
  templateUrl: 'delete-user.component.html'
})
export class DeleteUserComponent {
  @Input()
  users: User[];
  @Output()
  updated: EventEmitter<any> = new EventEmitter();

  public user: User;

  @ViewChild('deleteUserFormModal')
  modal: ModalComponent;

  constructor(private userService: UserService,
              private toastr: ToastsManager) {
  }

  deleteUser() {
    this.userService.delete(this.user.id).subscribe(() => {
      this.updateArray();
      this.modal.close();
      this.toastr.success("User was deleted successfully", "Success!");
    }, e => this.handleErrorDeleteUser(e));
  }

  private updateArray(): void {
    this.updated.emit(this.users.filter(u => u !== this.user));
  }

  private handleErrorDeleteUser(error) {
    switch (error.status) {
      case 500:
        this.toastr.error("Can't delete user", 'Error');
    }
  }
}

import {Component, OnInit, ViewChild, Input, EventEmitter, Output} from "@angular/core";
import {UserService} from "../../../service/user.service";
import {AddUserComponent} from "./user-add/add-user.component";
import {User} from "../../../model/user.model";
import {DeleteUserComponent} from "./user-delete/delete-user.component";
import {UserSearchDTO} from "../../../model/dto/user-search-dto.model";
declare var $: any;


@Component({
  selector: 'user-table',
  templateUrl: 'user-table.component.html',
  styleUrls: ['user-table.component.css']
})
export class UserTableComponent implements OnInit {

  private usersCount: number;
  private perPage: number = 20;

  users: User[];
  pageNumber: number;
  orderType: boolean;
  orderField: string;
  searchTypes: any;
  searchDTO : UserSearchDTO;
  settings = {
    ajax: true
  };

  @ViewChild(AddUserComponent)
  addUserComponent: AddUserComponent;

  @ViewChild(DeleteUserComponent)
  deleteUserComponent: DeleteUserComponent;

  constructor(private userService: UserService) {
    this.orderType = true;
    this.orderField = 'role';
    this.searchTypes = {
      firstName: "",
      lastName: "",
      email: "",
      role: ""
    };
    this.searchDTO = {
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      dateOfDeactivation: "",
      limit: 20,
      isDeactivated: "false"
    };
  }

  ngOnInit() {
    this.userService.getAll().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  changeOrderParams(type, field) {
    this.orderType = type;
    this.orderField = field;
  }

  openAddUserModal(): void {
    this.addUserComponent.modal.open();
  }

  openDeleteUserModal(user: User): void {
    this.deleteUserComponent.user = user;
    this.deleteUserComponent.modal.open();
  }

  updateUsers(users: User[]) {
    this.users = users;
  }

  createRange(number) {
    let items: number[] = [];
    for (let i = 2; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

  perPageChange(data) {
    this.perPage = data;
    this.setTitleSearch('limit', data);
  }

  get sorted(): User[] {
    return this.users
      .map(user => user)
      .sort((a, b) => {
        if (a.id < b.id) return 1;
        else if (a.id > b.id) return -1;
        else return 0;
      });
  }

  load(data) {
    let page = data.target.text;
    $('.paginate_button').removeClass('active');
    $(data.target.parentElement).addClass('active');
    this.userService.getAll().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  curPage: number = 1;

  changeSize(size) {
    this.perPage = size;
    this.searchDTO.limit = size;
    if (this.searchDTO.firstName != "" || this.searchDTO.lastName != "" || this.searchDTO.email != "" || this.searchDTO.role != "") {
      this.setTitleSearch('limit', size)
    } else {
      this.userService.getAll().subscribe(users => {
        this.users = users;
      })
    }
  }

  changed(data) {
    this.curPage = data.page;
    this.userService.getAll().subscribe(users => {
      this.users = users;
    })
  }

  setTitleSearch(field, value) {
    switch (field) {
      case 'firstName':
        this.searchDTO.firstName = value;
        break;
      case 'lastName':
        this.searchDTO.lastName = value;
        break;
      case 'email':
        this.searchDTO.email = value;
        break;
      case 'role':
        this.searchDTO.role = value;
        break;
      case 'limit':
        this.searchDTO.limit = value;
        break;
    }
  }
}

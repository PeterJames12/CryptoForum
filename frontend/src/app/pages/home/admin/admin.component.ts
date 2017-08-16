import {Component, OnInit} from '@angular/core';
import {Request} from "../../../model/request.model";
import {RequestService} from "../../../service/request.service";
import 'rxjs/Rx';
import {ToastsManager} from "ng2-toastr";

@Component({

  selector: 'admin-home',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private toast: ToastsManager) {}

  ngOnInit(): void {

  }

}

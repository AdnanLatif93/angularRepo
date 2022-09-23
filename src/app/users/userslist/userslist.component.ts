import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {
  userList : any = [];
  constructor(
    private user_service : UserService
  ) { }

  ngOnInit(): void {
    this.userList = this.user_service.getUsers();
  }

}

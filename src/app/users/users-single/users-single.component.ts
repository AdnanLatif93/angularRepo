import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-single',
  templateUrl: './users-single.component.html',
  styleUrls: ['./users-single.component.scss']
}) 
export class UsersSingleComponent implements OnInit {
  user : any;
  constructor(
    private user_service : UserService,
    private route : ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const username = params['username']
      this.user_service.getUser(username).subscribe(user => {
        this.user = user;
      })
    })
  
  }

}

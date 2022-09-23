import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserslistComponent } from './userslist/userslist.component';
import { UsersSingleComponent } from './users-single/users-single.component';


@NgModule({
  declarations: [
    UserslistComponent,
    UsersSingleComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }

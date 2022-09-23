import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersSingleComponent } from './users-single/users-single.component';
import { UserslistComponent } from './userslist/userslist.component';

const routes: Routes = [
  {path:'',
  component: UserslistComponent},
  {path:':username',
  component: UsersSingleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

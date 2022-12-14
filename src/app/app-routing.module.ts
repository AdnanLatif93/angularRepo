import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { UsersModule } from './users/users.module';

const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch : 'full'},
  {path:'contact', component:ContactComponent},
  {path:'users', loadChildren: () => UsersModule}
  // {path:'users', loadChildren:'app/users/users.module#UsersModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersCreateComponent } from './users-create/users-create.component';
import { UsersSearchComponent } from './users-search/users-search.component';
import { ReviewUsersCreateComponent } from './review-users-create/review-users-create.component';
import { UsersReadComponent } from './users-read/users-read.component';
import { UsersUpdateComponent } from './users-update/users-update.component';
import { ReviewUsersUpdateComponent } from './review-users-update/review-users-update.component';



@NgModule({
  declarations: [
    UsersCreateComponent,
    UsersSearchComponent,
    ReviewUsersCreateComponent,
    UsersReadComponent,
    UsersUpdateComponent,
    ReviewUsersUpdateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersManagementModule { }

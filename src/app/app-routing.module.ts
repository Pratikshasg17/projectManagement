import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: 'dashboard',
    component: DashBoardComponent
  },
  {
    path: 'list',
    component: ProjectlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

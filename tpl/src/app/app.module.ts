import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ChartsModule } from 'ng2-charts'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProjectComponent } from './project/project.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { APIService } from "./services/apiService";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent,
    ProjectComponent,
    ProjectlistComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }

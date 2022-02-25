import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/apiService';
import { Router } from '@angular/router';
import { ProjectData } from "../types";
import { PROJECT_CREATE_ERROR } from "../static";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public isSubmitted: boolean = false;

  public error: string = "";

  constructor(private _APIService: APIService, private router: Router) { }

  ngOnInit(): void {
  }

  public onCreate(data: ProjectData): void {
    this.isSubmitted = true;
    if (data.name && data.reason && data.type && data.division && data.category && data.priority && data.department && data.location && data.startdate && data.enddate && data.status) {
      this._APIService.createProject(data).subscribe(() => {
        this.error = "";
        this.router.navigate(['/list']);
      }, () => {
        this.error = PROJECT_CREATE_ERROR;
      })
    }
  }
}

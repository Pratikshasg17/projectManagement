import { Component, OnInit } from '@angular/core';
import { APIService  } from '../services/apiService';
import { ProjectData } from "../types";
import { RUNNING, CLOSE, CANCEL } from "../static";

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})

export class ProjectlistComponent implements OnInit {

  public list: ProjectData[] = [];

  constructor(private _APIService: APIService) { }

  ngOnInit(): void {
    this.fetchProjects();
  }

  private fetchProjects(): void {
    this._APIService.listProjects().subscribe((data) => {
      this.list = data.projects;
    });
  }

  public startProject(id: string): void {
    this._APIService.updateStatus(id, RUNNING).subscribe((data) => {
      this.fetchProjects();
    });
  }

  public closeProject(id: string): void {
    this._APIService.updateStatus(id, CLOSE).subscribe((data) => {
      this.fetchProjects();
    });
  }

  public cancelProject(id: string): void {
    this._APIService.updateStatus(id, CANCEL).subscribe((data) => {
      this.fetchProjects();
    });
  }
}

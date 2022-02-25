import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { APIService  } from '../services/apiService';
import { CountData, ProjectChartData, BarChartData, BarChartColors, BarChartOptions } from "../types";
import { BAR, CLOSED_PROJECTS, TOTAL_PROJECTS } from "../static";

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})

export class DashBoardComponent implements OnInit {

  public count: CountData = {
    close_count: 0,
    running_count: 0,
    cancel_count: 0
  };

  public department: string[] = [];

  public totalProjects: number[] = [];

  public closedProjects: number[] = [];

  public barChartOptions: BarChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

    public mbarChartLabels: string[] = this.department;

    public barChartType: ChartType = BAR as ChartType;

    public barChartLegend: boolean = true;

    public barChartColors: Array<BarChartColors> = [
    {
      backgroundColor: 'lightblue',
      borderColor: 'rgba(105,159,177,1)',
      pointBackgroundColor: 'rgba(105,159,177,1)',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fafafa',
      pointHoverBorderColor: 'rgba(105,159,177)'
    },
    {
      backgroundColor: 'darkblue',
      borderColor: 'rgba(77,20,96,1)',
      pointBackgroundColor: 'rgba(77,20,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,20,96,1)'
    }
  ];

  public barChartData: BarChartData[] = [
    {data: this.closedProjects, label: CLOSED_PROJECTS },
    {data: this.totalProjects, label: TOTAL_PROJECTS }
  ];

  constructor(private _APIService: APIService) { }

  ngOnInit(): void {
    this._APIService.departmentWiseProject().subscribe((data) => {
      data.projects.forEach((projectItem: ProjectChartData) => {
        this.department.push(projectItem.department);
        this.totalProjects.push(projectItem.totalProject);
        this.closedProjects.push(projectItem.closedProject);
      })
    });
    this._APIService.countProjects().subscribe((data) => {
      this.count = data;
    });
  }
}

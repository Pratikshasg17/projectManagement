export interface CountData {
    close_count: number;
    running_count: number;
    cancel_count: number;
};

export interface ProjectChartData {
  department: string;
  totalProject: number;
  closedProject: number;
};

export interface BarChartData {
  data: number[];
  label: string;
};

export interface BarChartColors {
  backgroundColor: string;
  borderColor: string;
  pointBackgroundColor: string;
  pointBorderColor: string;
  pointHoverBackgroundColor: string;
  pointHoverBorderColor: string;
};

export interface BarChartOptions {
  scaleShowVerticalLines: boolean;
  responsive: boolean;
};

export interface LoginData {
    email: string;
    password: string;
};

export interface ProjectData {
  _id: string,
  name: string;
  reason: string;
  type: string;
  division: string;
  category: string;
  priority: string;
  department: string;
  location: string;
  startdate: string;
  enddate: string;
  status: string;
};

export interface ProjectListData {
    projects: ProjectData[];
    count: number;
};

export interface LoginResponse {
  status: string;
  message: string;
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProjectData } from "../types";
import { BASE_URL } from "../static";

@Injectable()
export class APIService {

    constructor(private httpClient: HttpClient) {}

    public listProjects(): Observable<any> {
        return this.httpClient.get(`${BASE_URL}/project`)
    }

    public createProject(data: ProjectData): Observable<any> {
        return this.httpClient.post(`${BASE_URL}/project`, data);
    }

    public departmentWiseProject(): Observable<any> {
        return this.httpClient.get(`${BASE_URL}/project/department_wise_project`)
    }

    public countProjects(): Observable<any> {
        return this.httpClient.get(`${BASE_URL}/project/count`)
    }

    public login(email: string, password: string): Observable<any> {
        return this.httpClient.post(`${BASE_URL}/user/login`, {
            email: email,
            password: password
        });
    }

    public updateStatus(id: string, status: string): Observable<any> {
        return this.httpClient.patch(`${BASE_URL}/project/${id}`, {
            status: status,
        });
    }
}

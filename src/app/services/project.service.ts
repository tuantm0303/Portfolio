import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models';

const apiUrl = 'http://localhost:3000/projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http.get<Project[]>(apiUrl);
  }

  getProject(id: Project) {
    return this.http.get<Project>(`${apiUrl}/${id}`);
  }

  removeProject(id: number | string) {
    return this.http.delete<Project>(`${apiUrl}/${id}`);
  }

  createProject(project: Project) {
    return this.http.post<Project>(`${apiUrl}`, project);
  }

  updateProject(project: Project) {
    return this.http.put<Project>(`${apiUrl}/${project.id}`, project);
  }
}

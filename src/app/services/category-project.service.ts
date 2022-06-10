import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryProject } from '../models';

const apiUrl = 'http://localhost:3000/categoriesProjects';

@Injectable({
  providedIn: 'root',
})
export class CategoryProjectService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<CategoryProject[]>(apiUrl);
  }

  getOne(id: CategoryProject) {
    return this.http.get<CategoryProject>(`${apiUrl}/${id}`);
  }

  remove(id: number | string) {
    return this.http.delete<CategoryProject>(`${apiUrl}/${id}`);
  }

  create(cate: CategoryProject) {
    return this.http.post<CategoryProject>(`${apiUrl}`, cate);
  }

  update(cate: CategoryProject) {
    return this.http.put<CategoryProject>(`${apiUrl}/${cate.id}`, cate);
  }
}

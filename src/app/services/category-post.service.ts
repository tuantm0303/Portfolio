import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryPost } from '../models';

const apiUrl = 'http://localhost:3000/categoryPosts';

@Injectable({
  providedIn: 'root',
})
export class CategoryPostService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<CategoryPost[]>(apiUrl);
  }

  getOne(id: CategoryPost) {
    return this.http.get<CategoryPost>(`${apiUrl}/${id}`);
  }

  remove(id: number | string) {
    return this.http.delete<CategoryPost>(`${apiUrl}/${id}`);
  }

  create(cate: CategoryPost) {
    return this.http.post<CategoryPost>(`${apiUrl}`, cate);
  }

  update(cate: CategoryPost) {
    return this.http.put<CategoryPost>(`${apiUrl}/${cate.id}`, cate);
  }
}

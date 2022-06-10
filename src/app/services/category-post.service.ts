import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { categoryPost } from '../models';

const apiUrl = 'http://localhost:3000/categoriesPosts';

@Injectable({
  providedIn: 'root',
})
export class CategoryPostService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<categoryPost[]>(apiUrl);
  }

  getOne(id: categoryPost) {
    return this.http.get<categoryPost[]>(`${apiUrl}/${id}`);
  }

  remove(id: number | string) {
    return this.http.delete<categoryPost[]>(`${apiUrl}/${id}`);
  }

  create(cate: categoryPost) {
    return this.http.post<categoryPost[]>(`${apiUrl}`, cate);
  }

  update(cate: categoryPost) {
    return this.http.put<categoryPost[]>(`${apiUrl}/${cate.id}`, cate);
  }
}

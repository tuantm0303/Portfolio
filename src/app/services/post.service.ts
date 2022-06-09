import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models';

const apiUrl = 'http://localhost:3000/posts';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>(apiUrl);
  }

  getPost(id: Post) {
    return this.http.get<Post>(`${apiUrl}/${id}`);
  }

  removePost(id: number | string) {
    return this.http.delete<Post>(`${apiUrl}/${id}`);
  }

  createPost(post: Post) {
    return this.http.post<Post>(`${apiUrl}`, post);
  }

  updatePost(post: Post) {
    return this.http.put<Post>(`${apiUrl}/${post.id}`, post);
  }
}
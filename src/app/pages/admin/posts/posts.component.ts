import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts!: Post[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.onGetList();
  }

  onGetList() {
    this.postService.getPosts().subscribe((data) => console.log(data));
  }
}

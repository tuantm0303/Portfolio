import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.css'],
})
export class PostsFormComponent implements OnInit {
  post: Post = {
    id: 0,
    title: '',
    img: '',
    createdAt: new Date(),
    updatedAt: new Date(),
    categoryPostId: '',
    short_desc: '',
    desc: '',
  };
  id!: Post;

  constructor(
    private postService: PostService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];
    if (id) {
      this.postService.getPost(id).subscribe((data) => {
        this.post = data;
      });
    }
  }

  submitForm() {
    const id = this.activeRoute.snapshot.params['id'];
    if (id) {
      this.postService.updatePost(this.post).subscribe((data) => {
        this.router.navigateByUrl('admin/posts');
      });
    }

    this.postService.createPost(this.post).subscribe((data) => {
      this.router.navigateByUrl('admin/posts');
    });
  }
}

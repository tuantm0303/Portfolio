import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryPost, Post } from "src/app/models";
import { CategoryPostService } from "src/app/services/category-post.service";
import { PostService } from "src/app/services/post.service";

@Component({
  selector: "app-posts-form",
  templateUrl: "./posts-form.component.html",
  styleUrls: ["./posts-form.component.css"],
})
export class PostsFormComponent implements OnInit {
  post: Post = {
    id: 0,
    title: "",
    img: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    categoryPostId: 0,
    short_desc: "",
    desc: "",
  };
  id!: Post;
  catePost!: CategoryPost[];

  constructor(
    private postService: PostService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private postCatePost: CategoryPostService
  ) {}

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params["id"];
    if (id) {
      this.postService.getPost(id).subscribe((data) => {
        this.post = data;
      });
    }

    this.getCate();
  }

  getCate() {
    this.postCatePost.getAll().subscribe((dataCatePosts) => {
      this.catePost = dataCatePosts;
    });
  }

  submitForm() {
    const id = this.activeRoute.snapshot.params["id"];
    if (id) {
      this.postService
        .updatePost({ ...this.post, categoryPostId: +this.post.categoryPostId })
        .subscribe((data) => {
          this.router.navigateByUrl("admin/posts");
        });
    }

    this.postService
      .createPost({ ...this.post, categoryPostId: +this.post.categoryPostId })
      .subscribe((data) => {
        this.router.navigateByUrl("admin/posts");
      });
  }
}

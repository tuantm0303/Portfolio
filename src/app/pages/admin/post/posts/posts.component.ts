import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/models";
import { PostService } from "src/app/services/post.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
})
export class PostsComponent implements OnInit {
  posts!: Post[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.onGetList();
  }

  onGetList() {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  onRemove(id: number | string) {
    if (window.confirm("Are you sure delete project??")) {
      this.postService.removePost(id).subscribe(() => {
        this.onGetList();
      });
    }
  }
}

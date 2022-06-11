import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/models";
import { PostService } from "src/app/services/post.service";

@Component({
  selector: "app-blog-page",
  templateUrl: "./blog-page.component.html",
  styleUrls: ["./blog-page.component.css"],
})
export class BlogPageComponent implements OnInit {
  posts!: Post[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.onGetList();
  }

  onGetList() {
    this.postService.getPostLimit(1, 2).subscribe((data) => {
      console.log(data);
      this.posts = data;
    });
  }
}

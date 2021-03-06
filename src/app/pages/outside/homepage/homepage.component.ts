import { Component, OnInit } from "@angular/core";
import { Post, Profile, Project } from "src/app/models";
import { PostService } from "src/app/services/post.service";
import { ProfileService } from "src/app/services/profile.service";
import { ProjectService } from "src/app/services/project.service";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"],
})
export class HomepageComponent implements OnInit {
  profile: Profile = {
    id: 0,
    fullname: "",
    age: 0,
    avatar: "",
    position: "",
    about: "",
    cv: "",
  };

  posts!: any;
  projects!: any;

  constructor(
    private profileService: ProfileService,
    private postService: PostService,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.onGetAll();
  }

  onGetAll() {
    // profile
    this.profileService.getProfile().subscribe((data_profile) => {
      this.profile = data_profile;
    });

    //posts
    this.postService.getCateofPostandLimit(1, 2).subscribe((data_posts) => {
      this.posts = data_posts;
    });

    //projects
    this.projectService
      .getCateofPostandLimit(1, 3)
      .subscribe((data_projects) => {
        this.projects = data_projects;
      });
  }
}
